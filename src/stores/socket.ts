import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'
import { ref } from 'vue'
import { remult } from 'remult'
import { UserNotification } from '@/shared/user/UserNotification'

export const useSocketStore = defineStore('socket', () => {
  const socket = ref<Socket | null>(null)
  const notifications = ref<UserNotification[]>([])
  const history = ref<UserNotification[]>([])
  const unreadCount = ref(0)

  const repo = remult.repo(UserNotification)

  async function connect(explicitUserId?: string) {
    if (socket.value?.connected) return

    const userId = explicitUserId || remult.user?.id
    if (!userId) return

    history.value = await repo.find({
      orderBy: { createdAt: 'desc' },
      limit: 50,
    })

    unreadCount.value = history.value.filter((n) => !n.isRead).length

    if (!socket.value) {
      socket.value = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002', {
        query: { userId },
        transports: ['websocket'],
      })
    } else {
      socket.value.connect()
    }

    socket.value.off('notification')
    socket.value.on('notification', (data: any) => {
      handleIncomingNotification(data)
    })
  }

  function disconnect() {
    if (socket.value) {
      socket.value.removeAllListeners()
      socket.value.disconnect()
      socket.value = null
    }
  }

  function handleIncomingNotification(data: any) {
    const newNote = data

    history.value.unshift(newNote)
    unreadCount.value++
    notifications.value.push(newNote)

    setTimeout(() => {
      notifications.value = notifications.value.filter((n) => n.id !== newNote.id)
    }, 5000)
  }

  async function deleteNotification(id: string) {
    notifications.value = notifications.value.filter((n) => n.id !== id)
    history.value = history.value.filter((n) => n.id !== id)

    try {
      await repo.delete(id)
    } catch (error) {
      console.error(error)
    }
  }

  async function markAllRead() {
    unreadCount.value = 0

    const unreadItems = history.value.filter((n) => !n.isRead)

    unreadItems.forEach((n) => (n.isRead = true))

    if (unreadItems.length > 0) {
      try {
        await Promise.all(unreadItems.map((n) => repo.save(n)))
      } catch (error) {
        console.error(error)
      }
    }
  }

  async function clearHistory() {
    notifications.value = []
    history.value = []
    unreadCount.value = 0
    await UserNotification.clearAll()
  }

  return {
    socket,
    notifications,
    history,
    unreadCount,
    connect,
    disconnect,
    deleteNotification,
    markAllRead,
    clearHistory,
  }
})
