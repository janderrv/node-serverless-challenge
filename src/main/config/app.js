const express = require('express')
const app = express()
const setupApp = require('./setup-app')
const setRoutes = require('./setup-routes')

setupApp(app)
setRoutes(app)
module.exports = app
