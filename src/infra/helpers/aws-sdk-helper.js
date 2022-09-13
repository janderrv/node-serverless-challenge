const AWS = require('aws-sdk')

module.exports = {
  createDocument (isOffline = false) {
    if (isOffline) {
      return new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000'
      })
    }

    return new AWS.DynamoDB.DocumentClient()
  }
}
