var Api           = require('./api')
var Wallet        = require('./wallet')

var API = null

module.exports = function(host) {
  API = new Api(host)

  this.wallet = new Wallet(API)
}
