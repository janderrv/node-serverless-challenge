const AwsSdkHelper = require('../helpers/aws-sdk-helper')

module.exports = class UpdateteEmployeeRepository {
  async update (id, name, age, role) {
    const params = {
      TableName: process.env.EMPLOYEES_TABLE,
      Key: { id },
      UpdateExpression: 'set #name = :name, #age = :age, #role = :role',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#age': 'age',
        '#role': 'role'
      },
      ExpressionAttributeValues: {
        ':name': name,
        ':age': age,
        ':role': role
      },
      ReturnValues: 'UPDATED_NEW'

    }
    const document = AwsSdkHelper.getDocument()
    return document.update(params).promise().then((result) => {
      return { id, ...result.Attributes }
    }
    )
  }

  async findById (id) {
    const params = {
      TableName: process.env.EMPLOYEES_TABLE,
      Key: { id }
    }
    const document = AwsSdkHelper.getDocument()
    return document.get(params).promise().then((result) => {
      return result.Item
    }
    )
  }
}
