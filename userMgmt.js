var API = null

var PATH_REGISTER	=	'/vwapi/Register'
var PATH_CHECK    =	'/vwapi/Check'
var PATH_DELETE   = '/vwapi/Delete'

module.exports = function(api, merchant) {
  API = api

  this.register = function(vwid, data, cb) {
    API.request(PATH_REGISTER, vwid, data, function(err, data) {
      cb(err, data)
    })
  }

  this.check = function(vwid, data, cb) {
    API.request(PATH_CHECK, vwid, data, function(err, data) {
      cb(err, data)
    })
  }

  this.delete = function(vwid, data, cb) {
    API.request(PATH_DELETE, vwid, data, function(err, data) {
      cb(err, data)
    })
  }
}
