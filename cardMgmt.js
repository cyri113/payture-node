var API       = null

var PATH_LIST	=	'/vwapi/GetList'

module.exports = function(api) {
  if (!api) {
    throw new Error("PaytureAPI must be provided.")
  }

  API = api

  this.getList = function(vwid, data, cb) {
    API.request(PATH_LIST, vwid, data, function(err, data) {
      cb(err, data)
    })
  }
}
