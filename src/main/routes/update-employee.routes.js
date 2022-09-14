const { adapt } = require('../adapters/express-router-adapter')
const UpdateEmployeeRouterComposer = require('../composers/update-employee-router-composer')

module.exports = router => {
  router.patch('/employees', adapt(UpdateEmployeeRouterComposer.compose()))
}
