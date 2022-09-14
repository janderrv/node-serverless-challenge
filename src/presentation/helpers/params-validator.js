module.exports = class ParamsValidator {
  static validate (params) {
    let missingParam = null

    for (const key of Object.keys(params)) {
      if (!params[key]) {
        missingParam = key
        break
      }
    }

    return missingParam
  }
}
