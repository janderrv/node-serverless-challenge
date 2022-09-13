const express = require('express')
const app = express()
const setupApp = require('./setup-app')

setupApp(app)

module.exports = app
