import { Server as HttpServer } from 'http'
import { Server, Socket } from 'socket.io'

let io: Server | null = null

export function initSocket(httpServer: HttpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  })

  io.on('connection', (socket: Socket) => {
    const userId = socket.handshake.query.userId as string

    if (userId) {
      socket.join(`user:${userId}`)
      console.log(`User connected: ${userId}`)
    }

    socket.on('disconnect', () => {
      // Cleanup if needed
    })
  })

  return io
}

export function notifyUser(userId: string, event: string, data: any) {
  if (!io) return
  io.to(`user:${userId}`).emit(event, data)
}
