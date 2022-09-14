const HttpResponse = require('../helpers/http-response')

module.exports = class CreateEmployeeRouter {
  constructor (createEmployeeUseCase) {
    this.createEmployeeUseCase = createEmployeeUseCase
  }

  async route (httpRequest) {
    try {
      const { id, name, age, role } = httpRequest.body
      const employee = await this.createEmployeeUseCase.create(id, name, age, role)
      return HttpResponse.ok(employee)
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}
