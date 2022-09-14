module.exports = class CreateEmployeeUseCase {
  constructor (createEmployeeRepository) {
    this.createEmployeeRepository = createEmployeeRepository
  }

  async create (id, name, age, role) {
    return this.createEmployeeRepository.create(id, name, age, role)
  }
}
