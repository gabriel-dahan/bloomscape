import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'
import { ref } from 'vue'
import { remult } from 'remult'

export interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  timestamp: Date
}

export const useSocketStore = defineStore('socket', () => {
  const socket = ref<Socket | null>(null)

  const notifications = ref<Notification[]>([])

  const history = ref<Notification[]>([])

  const unreadCount = ref(0)

  function connect() {
    if (socket.value) return

    const userId = remult.user?.id
    if (!userId) return

    socket.value = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002', {
      query: { userId },
      transports: ['websocket'],
    })

    socket.value.on('notification', (data: Omit<Notification, 'id' | 'timestamp'>) => {
      addNotification(data)
    })
  }

  function disconnect() {
    if (socket.value) {
      socket.value.disconnect()
      socket.value = null
    }
  }

  function addNotification(data: Omit<Notification, 'id' | 'timestamp'>) {
    const id = Date.now().toString() + Math.random().toString()
    const notification: Notification = {
      ...data,
      id,
      timestamp: new Date(),
    }

    // Add to toasts (temp)
    notifications.value.push(notification)

    // Add to history (permanent) - Newest first
    history.value.unshift(notification)
    unreadCount.value++

    // Remove toast after 5 seconds
    setTimeout(() => {
      removeNotification(id)
    }, 5000)
  }

  function removeNotification(id: string) {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }

  function markAllRead() {
    unreadCount.value = 0
  }

  function clearHistory() {
    history.value = []
    unreadCount.value = 0
  }

  return {
    socket,
    notifications,
    history,
    unreadCount,
    connect,
    disconnect,
    addNotification,
    removeNotification,
    markAllRead,
    clearHistory,
  }
})
