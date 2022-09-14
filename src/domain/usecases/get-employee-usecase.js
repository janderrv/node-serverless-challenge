module.exports = class GetEmployeeUseCase {
  constructor (getEmployeeRepository) {
    this.getEmployeeRepository = getEmployeeRepository
  }

  async findById (id) {
    return this.getEmployeeRepository.findById(id)
  }
}
