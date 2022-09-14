const HttpResponse = require('../helpers/http-response')
const ParamsValidator = require('../helpers/params-validator')
const { MissingParamError } = require('../../utils/errors')

module.exports = class DeleteEmployeeRouter {
  constructor (deleteEmployeeUseCase) {
    this.deleteEmployeeUseCase = deleteEmployeeUseCase
  }

  async route (httpRequest) {
    try {
      const { id } = httpRequest.params
      const missingParam = ParamsValidator.validate({ id })

      if (missingParam) {
        return HttpResponse.badRequest(new MissingParamError(missingParam))
      }

      const employee = await this.deleteEmployeeUseCase.findById(id)

      if (!employee) {
        return HttpResponse.notFound()
      }

      await this.deleteEmployeeUseCase.delete(id)
      return HttpResponse.ok({ message: 'Employee deleted successfully' })
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}
