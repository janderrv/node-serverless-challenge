const DynamoHelper = require('../helpers/dynamo-helper')
const EmployeeModel = require('../../domain/models/employee-model')
const { v4: uuidv4 } = require('uuid')

module.exports = class CreateEmployeeRepository {
  async create (name, age, role) {
    const employeesSchema = DynamoHelper.defineModelSchema(EmployeeModel)
    const employeeModel = DynamoHelper.getModel('employees', employeesSchema)
    return employeeModel.create({
      id: uuidv4(),
      name,
      age,
      role
    })
  }
}
