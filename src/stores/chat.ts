import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ChatUser {
  id: string
  tag: string
  avatarColor: string // Tailwind class for mock
  isOnline: boolean
  lastMessage?: string
  lastMessageAt?: Date
}

export interface ChatMessage {
  id: string
  senderId: string
  text: string
  createdAt: Date
  isMine: boolean
}

export const useChatStore = defineStore('chat', () => {
  // --- STATE ---
  const isOpen = ref(false)
  const activeConversationId = ref<string | null>(null)
  const searchQuery = ref('')

  // Mock Current User ID
  const myId = 'me'

  // Mock Friends Data
  const friends = ref<ChatUser[]>([
    {
      id: '1',
      tag: 'SolarGardener',
      avatarColor: 'bg-amber-500',
      isOnline: true,
      lastMessage: 'Do you have any spare water?',
      lastMessageAt: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: '2',
      tag: 'VoidSeeker',
      avatarColor: 'bg-purple-500',
      isOnline: false,
      lastMessage: 'I found a legendary seed!',
      lastMessageAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: '3',
      tag: 'BloomMaster',
      avatarColor: 'bg-emerald-500',
      isOnline: true,
      lastMessage: 'Thanks for the trade.',
      lastMessageAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
  ])

  // Mock Global Search Results (People not in friends list)
  const globalSearchResults = ref<ChatUser[]>([
    { id: '4', tag: 'NewbiePlanter', avatarColor: 'bg-blue-500', isOnline: false },
    { id: '5', tag: 'MarketWhale', avatarColor: 'bg-red-500', isOnline: true },
  ])

  // Mock Messages Database (Conversation ID = Friend ID for simplicity)
  const messages = ref<Record<string, ChatMessage[]>>({
    '1': [
      {
        id: 'm1',
        senderId: '1',
        text: 'Hey! Are you online?',
        createdAt: new Date(Date.now() - 1000 * 60 * 10),
        isMine: false,
      },
      {
        id: 'm2',
        senderId: 'me',
        text: 'Yes, just farming some carrots.',
        createdAt: new Date(Date.now() - 1000 * 60 * 9),
        isMine: true,
      },
      {
        id: 'm3',
        senderId: '1',
        text: 'Do you have any spare water? My soil is dry.',
        createdAt: new Date(Date.now() - 1000 * 60 * 5),
        isMine: false,
      },
    ],
  })

  // --- GETTERS ---
  const activeFriend = computed(() => {
    if (!activeConversationId.value) return null
    return (
      friends.value.find((f) => f.id === activeConversationId.value) ||
      globalSearchResults.value.find((f) => f.id === activeConversationId.value)
    )
  })

  const currentMessages = computed(() => {
    if (!activeConversationId.value) return []
    return messages.value[activeConversationId.value] || []
  })

  const filteredFriends = computed(() => {
    if (!searchQuery.value) return friends.value
    return friends.value.filter((f) =>
      f.tag.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  })

  const filteredGlobal = computed(() => {
    if (!searchQuery.value) return []
    // Only show global results if searching
    return globalSearchResults.value.filter((f) =>
      f.tag.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  })

  // --- ACTIONS ---
  function toggle() {
    isOpen.value = !isOpen.value
  }

  function openChat(friendId: string) {
    activeConversationId.value = friendId
    // If no history exists, init it
    if (!messages.value[friendId]) {
      messages.value[friendId] = []
    }
  }

  function closeConversation() {
    activeConversationId.value = null
  }

  function sendMessage(text: string) {
    if (!activeConversationId.value || !text.trim()) return

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      senderId: myId,
      text: text,
      createdAt: new Date(),
      isMine: true,
    }

    messages.value[activeConversationId.value].push(newMsg)

    // Update "Last Message" in friend list preview
    const friend = friends.value.find((f) => f.id === activeConversationId.value)
    if (friend) {
      friend.lastMessage = text
      friend.lastMessageAt = new Date()
      // Move to top of list (simple sort simulation)
      friends.value = [friend, ...friends.value.filter((f) => f.id !== friend.id)]
    }
  }

  return {
    isOpen,
    searchQuery,
    activeConversationId,
    activeFriend,
    filteredFriends,
    filteredGlobal,
    currentMessages,
    toggle,
    openChat,
    closeConversation,
    sendMessage,
  }
})
