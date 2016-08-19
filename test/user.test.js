// Register
// Check
// Delete

var should    = require('should')
var Payture   = require('../index')
var api       = new Payture(process.env.PAYTURE_HOST)
var MERCHANT  = process.env.PAYTURE_ADD

describe('User Processes', function() {

  var user = { email: 'test@payture.com', password: 'password' }

  it('Should register the user', function(done) {
    data = {
      'VWUserLgn':  user.email,
      'VWUserPsw':   user.password
    }
    api.wallet.users.register(MERCHANT, data, function(err, res) {
      if (err) { throw err }
      res.Register.Success.should.equal('True')
      done()
    })
  })

  it('Should check if the user exists', function(done) {
    data = {
      'VWUserLgn':  user.email,
      'VWUserPsw':   user.password
    }
    api.wallet.users.check(MERCHANT, data, function(err, res) {
      if (err) { throw err }
      res.Check.Success.should.equal('True')
      done()
    })
  })

  it('Should delete the user', function(done) {
    data = {
      'VWUserLgn':  user.email,
      'Password':   user.password
    }
    api.wallet.users.delete(MERCHANT, data, function(err, res) {
      if (err) { throw err }
      res.Delete.Success.should.equal('True')
      done()
    })
  })

})
