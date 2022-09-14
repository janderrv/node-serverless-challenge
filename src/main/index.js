
const serverless = require('serverless-http')
const app = require('./config/app')

module.exports.handler = serverless(app)
