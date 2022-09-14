const { adapt } = require('../adapters/express-router-adapter')
const DeleteEmployeeRouterComposer = require('../composers/delete-employee-router-composer')

module.exports = router => {
  router.delete('/employees/:id', adapt(DeleteEmployeeRouterComposer.compose()))
}
