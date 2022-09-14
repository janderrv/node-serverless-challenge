const DynamoHelper = require('../helpers/dynamo-helper')
const EmployeeModel = require('../../domain/models/employee-model')

module.exports = class DeleteEmployeeRepository {
  async delete (id) {
    const employeesSchema = DynamoHelper.defineModelSchema(EmployeeModel)
    const employeeModel = DynamoHelper.getModel('employees', employeesSchema)

    return employeeModel.delete({ id }).then((employee) => employee)
  }

  async findById (id) {
    const employeesSchema = DynamoHelper.defineModelSchema(EmployeeModel)
    const employeeModel = DynamoHelper.getModel('employees', employeesSchema)

    return employeeModel.get({ id }).then((employee) => employee)
  }
}
