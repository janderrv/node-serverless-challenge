module.exports = class CreateEmployeeUseCase {
  constructor (createEmployeeRepository) {
    this.createEmployeeRepository = createEmployeeRepository
  }

  async create (name, age, role) {
    return this.createEmployeeRepository.create(name, age, role)
  }
}
