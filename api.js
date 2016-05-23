var QS				=	require('qs')
var request		=	require('request')
var xml2json	=	require('xml2json')

var HOST      = null

module.exports = function(host) {
  if (typeof host != 'string') {
    throw console.error("Host must be a String");
  }

  HOST  = host

  console.log("Payture API Loaded");

  this.request = function(path, merchant, params, cb) {
  	data = ""
  	Object.keys(params).forEach( function (key) {
  		var val = params[key]
  		data = data + key + "=" + val + ";"
  	})

  	var query	= { VWID: merchant, DATA: data }
  	query = QS.stringify(query)

  	var uri = HOST + path + "?" + query

  	request.post(uri, {timeout: 5000}, function (err, res, body) {
  		str   = xml2json.toJson(body)
  		data  = JSON.parse(str)
  		cb(err, data)
  	})
  }
}
