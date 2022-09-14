const HttpResponse = require('../helpers/http-response')
const ParamsValidator = require('../helpers/params-validator')
const { MissingParamError } = require('../../utils/errors')

module.exports = class GetEmployeeRouter {
  constructor (getEmployeeUseCase) {
    this.getEmployeeUseCase = getEmployeeUseCase
  }

  async route (httpRequest) {
    try {
      const { id } = httpRequest.params
      const missingParam = ParamsValidator.validate({ id })

      if (missingParam) {
        return HttpResponse.badRequest(new MissingParamError(missingParam))
      }

      const employee = await this.getEmployeeUseCase.findById(id)

      if (!employee) {
        return HttpResponse.notFound()
      }

      return HttpResponse.ok(employee)
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}
