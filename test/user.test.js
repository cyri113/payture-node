var should    = require('should')
var Payture   = require('../index')
var api       = new Payture(process.env.PAYTURE_HOST)
var MERCHANT  = process.env.PAYTURE_ADD
var PASSWORD  = process.env.PAYTURE_PASSWORD

describe('User', function() {

  var user = { 'VWUserLgn': 'test@payture.com', 'VWUserPsw': 'password' }

  it('Register', function(done) {
    api.wallet.users.register(MERCHANT, user, function(err, res) {
      if (err) { throw(err) }
      res.Register.Success.should.equal('True')
      done()
    })
  })

  it('Check', function(done) {
    api.wallet.users.check(MERCHANT, user, function(err, res) {
      if (err) { throw(err) }
      res.Check.Success.should.equal('True')
      done()
    })
  })

  it('Delete', function(done) {
    data = {
      'VWUserLgn':  user.VWUserLgn,
      'Password':   process.env.PAYTURE_PASSWORD
    }
    api.wallet.users.delete(MERCHANT, data, function(err, res) {
      if (err) { throw(err) }
      res.Delete.Success.should.equal('True')
      done()
    })
  })

})
