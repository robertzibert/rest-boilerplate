import app from './app'
import mongoose from 'mongoose'
import http from 'http'
import sockets from './sockets'

const server = http.createServer(app)

const mongoUrl =
  'mongodb+srv://condingdojo:JwCsUq9c6fVNRh7c@cluster0.4jogp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose
  .connect(mongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.info('Connected to MongoDB')
    server.listen(process.env.port || 3000, () => {
      console.info('Listening to port 80')
    })

    sockets(server)
  })

// const exitHandler = () => {
//   if (!server) process.exit(1)

//   server.close(() => {
//     console.info('Server closed')
//     process.exit(1)
//   })
// }

// const unexpectedErrorHandler = (error) => {
//   console.error(error)
//   exitHandler()
// }
// process.on('uncaughtException', unexpectedErrorHandler)

// process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  console.info('SIGTERM received')
  if (server) server.close()
})
