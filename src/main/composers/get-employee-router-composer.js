const GetEmployeeUseCase = require('../../domain/usecases/get-employee-usecase')
const GetEmployeeRouter = require('../../presentation/routers/get-employee-router')
const GetEmployeeRepository = require('../../infra/repositories/get-employee-repository')

module.exports = class GetEmployeeRouterComposer {
  static compose () {
    const getEmployeeRepository = new GetEmployeeRepository()
    const getEmployeeUseCase = new GetEmployeeUseCase(
      getEmployeeRepository
    )
    return new GetEmployeeRouter(getEmployeeUseCase)
  }
}
