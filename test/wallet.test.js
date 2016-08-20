var should    = require('should')
var Payture   = require('../index')
var api       = new Payture(process.env.PAYTURE_HOST)
var MERCHANT  = process.env.PAYTURE_ADD
var PASSWORD  = process.env.PAYTURE_PASSWORD

describe('Wallet', function() {

  var user = { 'VWUserLgn': 'test@payture.com', 'VWUserPsw': 'password' }

  before(function(done) {
    api.wallet.users.register(MERCHANT, user, function(err, res) {
      if (err) { throw(err) }
      done()
    })
  })

  after(function(done) {
    data = {
      'VWUserLgn':  user.VWUserLgn,
      'Password':   PASSWORD
    }

    api.wallet.users.delete(MERCHANT, data, function(err, res) {
      if (err) { throw(err) }
      done()
    })
  })

  it('Init', function(done) {

    data = {
      'SessionType': 'Add',
      'VWUserLgn': user.VWUserLgn,
      'VWUserPsw': user.VWUserPsw
    }

    api.wallet.init(MERCHANT, data, function(err, res) {
      if (err) { throw(err) }
      res.Init.Success.should.equal('True')
      res.Init.should.have.property('SessionId')
      done()
    })
  })

})
