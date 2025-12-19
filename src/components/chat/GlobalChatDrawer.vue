<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';
import { useChatStore } from '@/stores/chat';

const store = useChatStore();
const messageInput = ref('');
const scrollContainer = ref<HTMLElement | null>(null);

// Auto-scroll to bottom when new messages arrive
watch(() => store.currentMessages.length, async () => {
    await nextTick();
    if (scrollContainer.value) {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
    }
});

const handleSend = () => {
    if (!messageInput.value.trim()) return;
    store.sendMessage(messageInput.value);
    messageInput.value = '';
};

// Formatting helper for time
const formatTime = (date?: Date) => {
    if (!date) return '';
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="store.isOpen"
                class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[200] md:bg-transparent md:backdrop-blur-none md:pointer-events-none"
                @click="store.toggle">
            </div>
        </Transition>

        <div class="fixed top-0 right-0 h-full w-full md:w-96 bg-slate-900 border-l border-slate-700 shadow-2xl z-[201] transition-transform duration-300 ease-in-out flex flex-col pointer-events-auto"
            :class="store.isOpen ? 'translate-x-0' : 'translate-x-full'">

            <div class="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">

                <h2 v-if="!store.activeConversationId" class="font-bold text-white flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Communications
                </h2>

                <div v-else class="flex items-center gap-3">
                    <button @click="store.closeConversation"
                        class="btn btn-circle btn-ghost btn-xs text-slate-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-inner"
                            :class="store.activeFriend?.avatarColor">
                            {{ store.activeFriend?.tag.substring(0, 2).toUpperCase() }}
                        </div>
                        <div>
                            <div class="text-sm font-bold text-white leading-none">{{ store.activeFriend?.tag }}</div>
                            <div class="text-[10px] text-emerald-400" v-if="store.activeFriend?.isOnline">Online</div>
                            <div class="text-[10px] text-slate-500" v-else>Offline</div>
                        </div>
                    </div>
                </div>

                <button @click="store.toggle" class="btn btn-square btn-ghost btn-sm text-slate-400 hover:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div v-if="!store.activeConversationId" class="flex-1 flex flex-col min-h-0">

                <div class="p-4">
                    <div class="relative">
                        <input type="text" v-model="store.searchQuery" placeholder="Search friends or users..."
                            class="input input-sm w-full bg-slate-800 border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-200 pl-9">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 absolute left-3 top-2.5 text-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">

                    <div v-if="store.filteredFriends.length > 0">
                        <div class="text-[10px] uppercase font-bold text-slate-500 px-2 mb-2">Recent Conversations</div>
                        <div v-for="friend in store.filteredFriends" :key="friend.id" @click="store.openChat(friend.id)"
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors group">

                            <div class="relative">
                                <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                                    :class="friend.avatarColor">
                                    {{ friend.tag.substring(0, 2).toUpperCase() }}
                                </div>
                                <span v-if="friend.isOnline"
                                    class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
                            </div>

                            <div class="flex-1 min-w-0">
                                <div class="flex justify-between items-baseline">
                                    <span
                                        class="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{{
                                            friend.tag }}</span>
                                    <span class="text-[10px] text-slate-500">{{ formatTime(friend.lastMessageAt)
                                        }}</span>
                                </div>
                                <p class="text-xs text-slate-400 truncate">
                                    {{ friend.lastMessage || "Start a conversation" }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div v-if="store.searchQuery && store.filteredGlobal.length > 0"
                        class="mt-4 pt-4 border-t border-slate-800">
                        <div class="text-[10px] uppercase font-bold text-slate-500 px-2 mb-2">Global Search</div>
                        <div v-for="user in store.filteredGlobal" :key="user.id" @click="store.openChat(user.id)"
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors opacity-75 hover:opacity-100">

                            <div
                                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-slate-700">
                                {{ user.tag.substring(0, 2).toUpperCase() }}
                            </div>
                            <div>
                                <div class="text-sm font-bold text-slate-300">{{ user.tag }}</div>
                                <div class="text-xs text-slate-500">Click to connect</div>
                            </div>
                        </div>
                    </div>

                    <div v-if="store.filteredFriends.length === 0 && store.filteredGlobal.length === 0"
                        class="text-center py-10">
                        <div class="text-4xl mb-2">🦗</div>
                        <p class="text-sm text-slate-500">No users found.</p>
                    </div>

                </div>
            </div>

            <div v-else class="flex-1 flex flex-col min-h-0 bg-slate-950/30">

                <div ref="scrollContainer" class="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">

                    <div v-if="store.currentMessages.length === 0" class="text-center py-10 text-slate-500 text-sm">
                        This is the start of your history with <span class="text-emerald-400 font-bold">{{
                            store.activeFriend?.tag }}</span>.
                        <br>Say hello! 👋
                    </div>

                    <div v-for="msg in store.currentMessages" :key="msg.id" class="flex flex-col"
                        :class="msg.isMine ? 'items-end' : 'items-start'">

                        <div class="max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm" :class="msg.isMine
                            ? 'bg-emerald-600 text-white rounded-br-none'
                            : 'bg-slate-800 text-slate-200 rounded-bl-none'">
                            {{ msg.text }}
                        </div>
                        <span class="text-[10px] text-slate-600 mt-1 px-1">
                            {{ formatTime(msg.createdAt) }}
                        </span>
                    </div>

                </div>

                <div class="p-3 border-t border-slate-800 bg-slate-900">
                    <form @submit.prevent="handleSend" class="flex gap-2">
                        <input v-model="messageInput" type="text" placeholder="Type a message..."
                            class="input input-sm flex-1 bg-slate-950 border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-200">
                        <button type="submit" class="btn btn-sm btn-primary btn-square"
                            :disabled="!messageInput.trim()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-4 h-4">
                                <path
                                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
</style>