import express from 'express'
import cors from 'cors'

import { errorConverter, errorHandler } from './middlewares/error'
import httpStatus from 'http-status'
import ApiError from './utils/ApiError'
import catchAsync from './utils/catchAsync'

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

app.post(
  '/poll/new',
  catchAsync(async function (req, res, next) {
    const newPoll = await createPoll(req.body)
    res.send(newPoll)
  })
)

app.get('/poll/:_id', async function (req, res, next) {
  res.send(await getPoll(req.params))
})

app.post('/poll/:_id', async function (req, res, next) {
  res.send(await votePoll(req.params, req.body))
})

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

// convert error to ApiError, if needed
app.use(errorConverter)

// handle error
app.use(errorHandler)
export default app
