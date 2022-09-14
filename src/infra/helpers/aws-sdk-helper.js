const AWS = require('aws-sdk')

module.exports = {

  createDocument () {
    let options = {}

    if (process.env.IS_OFFLINE === 'true') {
      options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      }
    }

    this.dynamoDb = new AWS.DynamoDB.DocumentClient(options)
    return this.dynamoDb
  },

  getDocument () {
    if (!this.dynamoDb) {
      this.createDocument()
    }

    return this.dynamoDb
  }
}
