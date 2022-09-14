const dynamoose = require('dynamoose')

module.exports = {
  connect () {
    const ddb = new dynamoose.aws.ddb.DynamoDB({
      accessKeyId: process.env.ACESS_KEY_ID || 'AKIAV3DF4LT2JMY6CO6X',
      secretAccessKey: process.env.SECRET_ACCESS_KEY || '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',
      region: process.env.REGION || 'sa-east-1'
    })

    if (process.env.IS_OFFLINE) {
      this.instance = dynamoose.aws.ddb.local()
    } else {
      this.instance = dynamoose.aws.ddb.set(ddb)
    }
  },

  getModel (modelName, schema) {
    if (!this.instance) {
      this.connect()
    }

    return dynamoose.model(modelName, schema)
  },

  defineModelSchema (schema) {
    return new dynamoose.Schema(schema)
  }

}
