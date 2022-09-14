const { adapt } = require('../adapters/express-router-adapter')
const GetEmployeeRouterComposer = require('../composers/get-employee-router-composer')

module.exports = router => {
  router.get('/employees/:id', adapt(GetEmployeeRouterComposer.compose()))
}
