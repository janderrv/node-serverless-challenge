
const serverless = require('serverless-http')
const app = require('./config/app')
const env = require('./config/env')
const dynamoDb = require('../infra/helpers/aws-sdk-helper').createDocument(env.IS_OFFLINE)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/employees/:id', function (req, res) {
  const params = {
    TableName: env.EMPLOYEES_TABLE,
    Key: {
      id: req.params.id
    }
  }

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error: 'Could not get employee' })
    }
    if (result.Item) {
      const { id, name } = result.Item
      res.json({ id, name })
    } else {
      res.status(404).json({ error: 'Employee not found' })
    }
  })
})

app.post('/employees', function (req, res) {
  const { id, name } = req.body
  if (typeof id !== 'string') {
    res.status(400).json({ error: '"id" must be a string' })
  } else if (typeof name !== 'string') {
    res.status(400).json({ error: '"name" must be a string' })
  }

  const params = {
    TableName: env.EMPLOYEES_TABLE,
    Item: {
      id,
      name
    }
  }

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error)
      res.status(400).json({ error: 'Could not create employee' })
    }
    res.json({ id, name })
  })
})

module.exports.handler = serverless(app)
