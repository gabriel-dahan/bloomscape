import { defineStore } from 'pinia'
import { ref, computed, onUnmounted } from 'vue'
import { SubscriptionChannel } from 'remult'
import { Chat } from '@/shared/chat/Chat'
import { ChatMessage } from '@/shared/chat/ChatMessage'
import { User } from '@/shared/user/User'
import { ChatController } from '@/server/controllers/ChatController'
import { useAuthStore } from './auth'

export interface ChatUI extends Chat {
  otherUser?: User
  hasUnread: boolean
}

export const useChatStore = defineStore('chat', () => {
  const auth = useAuthStore()

  const isOpen = ref(false)
  const activeChatId = ref<string | null>(null)
  const searchQuery = ref('')

  const myChats = ref<ChatUI[]>([])
  const currentMessages = ref<ChatMessage[]>([])
  const globalSearchResults = ref<User[]>([])

  let unsubscribeInbox: (() => void) | null = null
  let unsubscribeChatChannel: (() => void) | null = null

  const activeChat = computed(() => {
    return myChats.value.find((c) => c.id === activeChatId.value)
  })

  const filteredChats = computed(() => {
    if (!Array.isArray(myChats.value)) return []
    if (!searchQuery.value) return myChats.value
    const q = searchQuery.value.toLowerCase()
    return myChats.value.filter((c) => {
      const tagName = c.otherUser?.tag
      return tagName && tagName.toLowerCase().includes(q)
    })
  })

  async function init() {
    if (!auth.user) return

    await fetchInbox()

    if (unsubscribeInbox) unsubscribeInbox()

    const userChannel = new SubscriptionChannel(`user:${auth.user.id}`)
    unsubscribeInbox = await userChannel.subscribe((msg: any) => {
      if (msg && msg.type === 'INBOX_UPDATE') {
        fetchInbox()
      }
    })
  }

  async function fetchInbox() {
    try {
      const chats = await ChatController.getMyInbox()
      myChats.value = chats.map((c) => ({
        ...c.chat!,
        otherUser: c.otherUser,
        hasUnread: c.hasUnread,
      })) as ChatUI[]
    } catch (e) {
      console.error('Inbox load error', e)
    }
  }

  async function openChat(chatId: string) {
    activeChatId.value = chatId
    currentMessages.value = []

    if (unsubscribeChatChannel) {
      unsubscribeChatChannel()
      unsubscribeChatChannel = null
    }

    await ChatController.markAsRead(chatId)

    try {
      currentMessages.value = await ChatController.getMessages(chatId)
    } catch (e) {
      console.error(e)
    }

    const chatChannel = new SubscriptionChannel(`chat:${chatId}`)
    unsubscribeChatChannel = await chatChannel.subscribe((newMessage: ChatMessage) => {
      if (!currentMessages.value.some((m) => m.id === newMessage.id)) {
        currentMessages.value.push(newMessage)
        if (activeChatId.value === chatId && isOpen.value) {
          ChatController.markAsRead(chatId)
        }
      }
    })
  }

  async function startChatWithUser(targetUserId: string) {
    try {
      const message = await ChatController.sendMessage({
        targetUserId,
        content: '👋',
      })
      await openChat(message.chatId)
      searchQuery.value = ''
      globalSearchResults.value = []
    } catch (e) {
      console.error(e)
    }
  }

  function closeConversation() {
    activeChatId.value = null
    if (unsubscribeChatChannel) {
      unsubscribeChatChannel()
      unsubscribeChatChannel = null
    }
    currentMessages.value = []
  }

  async function sendMessage(text: string) {
    if (!activeChatId.value || !text.trim()) return
    try {
      const msg = await ChatController.sendMessage({
        chatId: activeChatId.value,
        content: text,
      })
    } catch (e) {
      console.error('Failed to send', e)
    }
  }

  async function performSearch() {
    try {
      if (!searchQuery.value) {
        globalSearchResults.value = []
        return
      }
      globalSearchResults.value = await ChatController.searchUsers(searchQuery.value)
    } catch (e) {
      console.error(e)
    }
  }

  function toggle() {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      init()
    }
  }

  onUnmounted(() => {
    if (unsubscribeInbox) unsubscribeInbox()
    if (unsubscribeChatChannel) unsubscribeChatChannel()
  })

  return {
    isOpen,
    toggle,
    searchQuery,
    performSearch,
    myChats,
    filteredChats,
    globalSearchResults,
    activeChatId,
    activeChat,
    currentMessages,
    openChat,
    startChatWithUser,
    closeConversation,
    sendMessage,
    init,
  }
})
