var QS					=	require("qs")
var request			=	require('request')
var xml2json		=	require('xml2json')

var host  = null
var aKey  = null
var pKey  = null

module.exports = function(paytureHost, addKey, payKey) {

  host  = paytureHost
  aKey  = addKey
  pKey  = payKey

  checkArgs()

  function checkArgs() {
    if (typeof host != 'string') {
      throw console.error("Host must be a String");
    }
    if (typeof aKey != 'string') {
      throw console.error("aKey must be a String");
    }
    if (typeof pKey != 'string') {
      throw console.error("pKey must be a String");
    }
  }

  console.log("Welcome to the Payture API for NodeJS");

}
