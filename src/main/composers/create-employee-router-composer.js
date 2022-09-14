const CreateEmployeeUseCase = require('../../domain/usecases/create-employee-usecase')
const CreateEmployeeRouter = require('../../presentation/routers/create-employee-router')
const CreateEmployeeRepository = require('../../infra/repositories/create-employee-repository')

module.exports = class CreateEmployeeRouterComposer {
  static compose () {
    const createEmployeeRepository = new CreateEmployeeRepository()
    const createEmployeeUseCase = new CreateEmployeeUseCase(
      createEmployeeRepository
    )
    return new CreateEmployeeRouter(createEmployeeUseCase)
  }
}
