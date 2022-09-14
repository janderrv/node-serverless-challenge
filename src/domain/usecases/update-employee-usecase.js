module.exports = class UpdateEmployeeUseCase {
  constructor (updateEmployeeRepository) {
    this.updateEmployeeRepository = updateEmployeeRepository
  }

  async update (id, name, age, role) {
    return this.updateEmployeeRepository.update(id, name, age, role)
  }

  async findById (id) {
    return this.updateEmployeeRepository.findById(id)
  }
}
