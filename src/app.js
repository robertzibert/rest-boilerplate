const express = require('express')
// const morgan = require('morgan')
const bodyParser = require('body-parser')
// const compress = require('compression')
// const methodOverride = require('method-override')
// const cors = require('cors')
// const helmet = require('helmet')
// const passport = require('passport')
// const routes = require('../api/routes/v1')
// const error = require('../api/middlewares/error')

/**
 * Express instance
 * @public
 */
const app = express()

// request logging. dev: console | production: file
// app.use(morgan(logs))

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// gzip compression
// app.use(compress())

// mount api v1 routes
app.get('/api/users', function (req, res, next) {
  console.log('as')
  res.send('hello')
})
module.exports = app
