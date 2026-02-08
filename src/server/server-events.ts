import type { Server } from 'socket.io'

let io: Server | null = null

export const ServerEvents = {
  notifyUser: (
    userId: string,
    title: string,
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
  ) => {
    if (io) {
      io.to(`user:${userId}`).emit('notification', { title, message, type })
    }
  },

  setIO: (socketInfo: Server) => {
    io = socketInfo
  },
}
