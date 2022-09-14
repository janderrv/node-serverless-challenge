module.exports = class DeleteEmployeeUseCase {
  constructor (deleteEmployeeRepository) {
    this.deleteEmployeeRepository = deleteEmployeeRepository
  }

  async delete (id) {
    return this.deleteEmployeeRepository.delete(id)
  }

  async findById (id) {
    return this.deleteEmployeeRepository.findById(id)
  }
}
