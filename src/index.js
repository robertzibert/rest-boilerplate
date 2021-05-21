import app from './app'

let server = null

server = app.listen(3000, () => {
  console.info('Listening to port 3000')
})

const exitHandler = () => {
  if (!server) process.exit(1)

  server.close(() => {
    console.info('Server closed')
    process.exit(1)
  })
}

const unexpectedErrorHandler = (error) => {
  console.error(error)
  exitHandler()
}
process.on('uncaughtException', unexpectedErrorHandler)

process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  console.info('SIGTERM received')
  if (server) server.close()
})
