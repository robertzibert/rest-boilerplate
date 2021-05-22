import express from 'express'
import cors from 'cors'

import createPoll from './services/createPoll'
import getPolls from './services/getPolls'
import getPoll from './services/getPoll'
import votePoll from './services/votePoll'

const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

// enable cors
app.use(cors())
app.options('*', cors())

// routes
app.get('/polls', async function (req, res, next) {
  res.send(await getPolls())
})

app.post('/poll/new', function (req, res, next) {
  createPoll(req.body)
  res.send('hello')
})

app.get('/poll/:_id', async function (req, res, next) {
  res.send(await getPoll(req.params))
})

app.post('/poll/:_id', async function (req, res, next) {
  res.send(await votePoll(req.params, req.body))
})

export default app
