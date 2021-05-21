// import testRoutes from './testRoutes'
import express from 'express'

const router = express.Router()
const routes = [
  {
    path: '/test',
    route: router.get('/', function (req, res) {
      res.send('hello world')
    })
  }
]

export default routes
