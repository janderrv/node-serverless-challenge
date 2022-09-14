const HttpResponse = require('../helpers/http-response')
const ParamsValidator = require('../helpers/params-validator')
const { MissingParamError } = require('../../utils/errors')
module.exports = class UpdateEmployeeRouter {
  constructor (updateEmployeeUseCase) {
    this.updateEmployeeUseCase = updateEmployeeUseCase
  }

  async route (httpRequest) {
    try {
      const { id, name, age, role } = httpRequest.body
      const missingParam = ParamsValidator.validate({ id, name, age, role })

      if (missingParam) {
        return HttpResponse.badRequest(new MissingParamError(missingParam))
      }

      let employee = await this.updateEmployeeUseCase.findById(id)

      if (!employee) {
        return HttpResponse.notFound()
      }

      employee = await this.updateEmployeeUseCase.update(id, name, age, role)
      return HttpResponse.ok(employee)
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}
