var Api           = require('./api')
var UserMgmt      = require('./userMgmt')
var CardMgmt      = require('./cardMgmt')

var PATH_INIT           =	'/vwapi/Init'
var PATH_PAY            =	'/vwapi/Pay'
var PATH_PAY_SUBMIT_3DS =	'/vwapi/PaySubmit3DS'

var API = null

module.exports = function(host) {
  var API = new Api(host)

  this.users = new UserMgmt(API)
  this.cards = new CardMgmt(API)

  this.init = function(vwid, data, cb) {
    API.request(PATH_INIT, vwid, data, function(err, data) {
      cb(err, data)
    })
  }

  this.pay = function(vwid, data, cb) {
    API.request(PATH_PAY, vwid, data, function(err, data) {
      cb(err, data)
    })
  }

  this.paySubmit3ds = function(vwid, data, cb) {
    API.request(PATH_PAY_SUBMIT_3DS, vwid, data, function(err, data) {
      cb(err, data)
    })
  }
}
