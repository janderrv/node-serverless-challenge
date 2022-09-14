const AwsSdkHelper = require('../helpers/aws-sdk-helper')

module.exports = class CreateEmployeeRepository {
  async create (id, name, age, role) {
    const params = {
      TableName: process.env.EMPLOYEES_TABLE,
      Item: { id, name, age, role }

    }
    const document = AwsSdkHelper.getDocument()
    return document.put(params).promise().then(() =>
      params.Item
    )
  }
}
