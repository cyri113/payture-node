var API       = null

var PATH_REGISTER	=	'/vwapi/Register'

module.exports = function(api, merchant) {
  if (!api) {
    throw new Error("PaytureAPI must be provided.")
  }

  API = api

  this.register = function(vwid, data, cb) {
    API.request(PATH_REGISTER, vwid, data, function(err, data) {
      cb(err, data)
    })
  }
}
