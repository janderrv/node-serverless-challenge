module.exports = class HttpResponse {
  static ok (data) {
    return {
      statusCode: 201,
      body: data
    }
  }

  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: { message: 'Internal server error' }
    }
  }
}
