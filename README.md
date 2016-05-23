# node-payture-ewallet
Payture eWallet API for NodeJS.

## Getting Started

### Install
**npm**
'''
npm install -save node-payture-ewallet
'''

### Initialize
'''
var PaytureAPI  = require('node-payture-ewallet')
var api         = new Payture(PAYTURE_HOST)
'''

### API Calls

- User Management
  - Register
  '''
  api.users.register(MERCHANT, data, callback)
  '''

- Card Management
  - GetList
- Init
- Pay
