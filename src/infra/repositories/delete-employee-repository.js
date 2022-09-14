const AwsSdkHelper = require('../helpers/aws-sdk-helper')

module.exports = class DeleteEmployeeRepository {
  async delete (id) {
    const params = {
      TableName: process.env.EMPLOYEES_TABLE,
      Key: { id: Number(id) }
    }
    const document = AwsSdkHelper.getDocument()
    return document.delete(params).promise()
  }

  async findById (id) {
    const params = {
      TableName: process.env.EMPLOYEES_TABLE,
      Key: { id: Number(id) }
    }
    const document = AwsSdkHelper.getDocument()
    return document.get(params).promise().then((result) => {
      return result.Item
    }
    )
  }
}
