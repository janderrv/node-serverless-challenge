const DynamoHelper = require('../helpers/dynamo-helper')
const EmployeeModel = require('../../domain/models/employee-model')
module.exports = class GetEmployeeRepository {
  async findById (id) {
    const employeesSchema = DynamoHelper.defineModelSchema(EmployeeModel)
    const employeeModel = DynamoHelper.getModel('employees', employeesSchema)

    return employeeModel.get({ id })
  }
}
