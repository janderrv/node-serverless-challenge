const UpdateEmployeeUseCase = require('../../domain/usecases/update-employee-usecase')
const UpdateEmployeeRouter = require('../../presentation/routers/update-employee-router')
const UpdateEmployeeRepository = require('../../infra/repositories/update-employee-repository')

module.exports = class UpdateEmployeeRouterComposer {
  static compose () {
    const updateEmployeeRepository = new UpdateEmployeeRepository()
    const updateEmployeeUseCase = new UpdateEmployeeUseCase(
      updateEmployeeRepository
    )
    return new UpdateEmployeeRouter(updateEmployeeUseCase)
  }
}
