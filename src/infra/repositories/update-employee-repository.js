const DynamoHelper = require('../helpers/dynamo-helper')
const EmployeeModel = require('../../domain/models/employee-model')

module.exports = class UpdateEmployeeRepository {
  async update (id, name, age, role) {
    const employeesSchema = DynamoHelper.defineModelSchema(EmployeeModel)
    const employeeModel = DynamoHelper.getModel('employees', employeesSchema)

    return employeeModel.update({
      id,
      name,
      age,
      role
    })
  }

  async findById (id) {
    const employeesSchema = DynamoHelper.defineModelSchema(EmployeeModel)
    const employeeModel = DynamoHelper.getModel('employees', employeesSchema)

    return employeeModel.get({ id })
  }
}
