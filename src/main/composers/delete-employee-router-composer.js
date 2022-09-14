const DeleteEmployeeUseCase = require('../../domain/usecases/delete-employee-usecase')
const DeleteEmployeeRouter = require('../../presentation/routers/delete-employee-router')
const DeleteEmployeeRepository = require('../../infra/repositories/delete-employee-repository')

module.exports = class DeleteEmployeeRouterComposer {
  static compose () {
    const deleteEmployeeRepository = new DeleteEmployeeRepository()
    const deleteEmployeeUseCase = new DeleteEmployeeUseCase(
      deleteEmployeeRepository
    )
    return new DeleteEmployeeRouter(deleteEmployeeUseCase)
  }
}
