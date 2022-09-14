const HttpResponse = require('../helpers/http-response')
const ParamsValidator = require('../helpers/params-validator')
const { MissingParamError } = require('../../utils/errors')

module.exports = class CreateEmployeeRouter {
  constructor (createEmployeeUseCase) {
    this.createEmployeeUseCase = createEmployeeUseCase
  }

  async route (httpRequest) {
    try {
      const { id, name, age, role } = httpRequest.body
      const missingParam = ParamsValidator.validate({ id, name, age, role })

      if (missingParam) {
        return HttpResponse.badRequest(new MissingParamError(missingParam))
      }

      const employee = await this.createEmployeeUseCase.create(id, name, age, role)
      return HttpResponse.created(employee)
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}
