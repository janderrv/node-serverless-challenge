const AwsSdkHelper = require('../helpers/aws-sdk-helper')

module.exports = class GetEmployeeRepository {
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
