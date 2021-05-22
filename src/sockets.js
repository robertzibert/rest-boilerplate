import voteHandler from './realTime/voteHandler'

const { Server } = require('socket.io')

export default function (server) {
  const onConnection = (socket) => {
    voteHandler.register(io, socket)
  }

  const io = new Server(server)
  io.on('connection', onConnection)

  return io
}
