const { adapt } = require('../adapters/express-router-adapter')
const CreateEmployeeRouterComposer = require('../composers/create-employee-router-composer')

module.exports = router => {
  router.post('/employees', adapt(CreateEmployeeRouterComposer.compose()))
}
