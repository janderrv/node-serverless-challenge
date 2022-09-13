const jsonParser = require('../middlewares/json-parser')

module.exports = app => {
  app.use(jsonParser)
}
