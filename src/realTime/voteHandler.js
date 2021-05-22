let socketIo = {}

const register = (io, socket) => {
  socketIo.io = io
  socketIo.socket = socket
}

const emit = (pollId, result) => {
  socketIo.socket.broadcast.emit(`new-vote:${pollId}`, result)
}

export default { register, emit }
