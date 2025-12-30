import { BackendMethod, remult, SubscriptionChannel } from 'remult'
import { Chat } from '@/shared/chat/Chat'
import { ChatParticipant } from '@/shared/chat/ChatParticipant'
import { ChatMessage } from '@/shared/chat/ChatMessage'
import { User } from '@/shared/user/User'

export class ChatController {
  @BackendMethod({ allowed: true })
  static async sendMessage(payload: { chatId?: string; targetUserId?: string; content: string }) {
    if (!remult.user) throw new Error('Not authenticated')
    if (!payload.content.trim()) throw new Error('Message cannot be empty')

    const chatRepo = remult.repo(Chat)
    const partRepo = remult.repo(ChatParticipant)
    const msgRepo = remult.repo(ChatMessage)

    let chatId = payload.chatId

    if (!chatId && payload.targetUserId) {
      const myParts = await partRepo.find({ where: { userId: remult.user.id } })
      const theirParts = await partRepo.find({ where: { userId: payload.targetUserId } })
      const existingPart = myParts.find((mp) => theirParts.some((tp) => tp.chatId === mp.chatId))

      if (existingPart) {
        chatId = existingPart.chatId
      } else {
        const newChat = await chatRepo.insert({
          createdAt: new Date(),
          lastMessageAt: new Date(),
          lastMessagePreview: 'Start of conversation',
        })
        await partRepo.insert({
          chatId: newChat.id,
          userId: remult.user.id,
          joinedAt: new Date(),
          lastReadAt: new Date(),
        })
        await partRepo.insert({
          chatId: newChat.id,
          userId: payload.targetUserId,
          joinedAt: new Date(),
        })
        chatId = newChat.id
      }
    }

    if (!chatId) throw new Error('Chat not found')

    const myPart = await partRepo.findFirst({ chatId, userId: remult.user.id })
    if (!myPart) throw new Error('Access denied')

    const rawMessage = await msgRepo.insert({
      chatId,
      senderId: remult.user.id,
      content: payload.content.trim(),
      createdAt: new Date(),
    })

    const chat = await chatRepo.findId(chatId)
    if (chat) {
      chat.lastMessageAt = new Date()
      chat.lastMessagePreview = payload.content.substring(0, 50)
      await chatRepo.save(chat)
    }

    myPart.lastReadAt = new Date()
    await partRepo.save(myPart)

    const fullMessage = await msgRepo.findFirst(
      { id: rawMessage.id },
      { include: { sender: true } },
    )

    const chatChannel = new SubscriptionChannel(`chat:${chatId}`)
    await chatChannel.publish(fullMessage!)

    const participants = await partRepo.find({ where: { chatId } })

    // DYNAMIC IMPORT to avoid loading socket.io on the client
    const { notifyUser } = await import('../socket')

    for (const p of participants) {
      const userChannel = new SubscriptionChannel(`user:${p.userId}`)
      await userChannel.publish({ type: 'INBOX_UPDATE' })

      if (p.userId !== remult.user.id) {
        notifyUser(p.userId, 'notification', {
          title: `Message from ${remult.user.tag}`,
          message: payload.content.substring(0, 60) + (payload.content.length > 60 ? '...' : ''),
          type: 'info',
        })
      }
    }

    return fullMessage!
  }

  @BackendMethod({ allowed: true })
  static async getMessages(chatId: string) {
    if (!remult.user) throw new Error('Not authenticated')

    const isParticipant = await remult
      .repo(ChatParticipant)
      .count({ chatId, userId: remult.user.id })
    if (!isParticipant) throw new Error('Access denied')

    return await remult.repo(ChatMessage).find({
      where: { chatId },
      include: { sender: true },
      orderBy: { createdAt: 'asc' },
      limit: 50,
    })
  }

  @BackendMethod({ allowed: true })
  static async getMyInbox() {
    if (!remult.user) throw new Error('Not authenticated')
    const partRepo = remult.repo(ChatParticipant)

    const myParts = await partRepo.find({
      where: { userId: remult.user.id },
      include: { chat: true },
    })
    if (myParts.length === 0) return []

    const chatIds = myParts.map((p) => p.chatId)
    const allParts = await partRepo.find({
      where: { chatId: { $in: chatIds } },
      include: { user: true },
    })

    const result = myParts.map((myPart) => {
      const otherPart = allParts.find(
        (p) => p.chatId === myPart.chatId && p.userId !== remult.user!.id,
      )
      const lastRead = myPart.lastReadAt ? new Date(myPart.lastReadAt) : new Date(0)
      const lastMsg = myPart.chat?.lastMessageAt ? new Date(myPart.chat.lastMessageAt) : new Date(0)

      return {
        chatId: myPart.chatId,
        chat: myPart.chat,
        otherUser: otherPart?.user,
        hasUnread: lastMsg > lastRead,
      }
    })

    return result.sort((a, b) => {
      const dateA = a.chat?.lastMessageAt?.getTime() || 0
      const dateB = b.chat?.lastMessageAt?.getTime() || 0
      return dateB - dateA
    })
  }

  @BackendMethod({ allowed: true })
  static async markAsRead(chatId: string) {
    if (!remult.user) throw new Error('Not authenticated')
    const partRepo = remult.repo(ChatParticipant)
    const part = await partRepo.findFirst({ chatId, userId: remult.user.id })
    if (part) {
      part.lastReadAt = new Date()
      await partRepo.save(part)

      const userChannel = new SubscriptionChannel(`user:${remult.user.id}`)
      await userChannel.publish({ type: 'INBOX_UPDATE' })
    }
  }

  @BackendMethod({ allowed: true })
  static async searchUsers(query: string) {
    if (!remult.user) throw new Error('Not authenticated')
    if (!query || query.length < 2) return []
    return await remult.repo(User).find({
      where: { tag: { $contains: query }, id: { $ne: remult.user.id } },
      limit: 5,
    })
  }
}
