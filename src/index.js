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
    const port = process.env.PORT || 3000
    server.listen(port, () => {
      console.info(`Listening to port ${port}`)
    })
    sockets(server)
  })

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message)
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...')

  process.exit(1)
})
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message)
  console.log('UNHANDLED REJECTION! 💥 Shutting down...')
  process.exit(1)
})
process.on('SIGTERM', () => {
  console.info('SIGTERM received')
  if (server) server.close()
})
