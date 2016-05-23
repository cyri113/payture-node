# payture-node
Payture API for NodeJS. To get started with Payture, you will need an account, please contact [Payture](http://payture.com/) directly. Please also note that this module was not developed by Payture.

## Getting Started

### What you need
[x] Payture Host
[x] Merchant Account(s)

### Install
**npm**
```console
npm install -save payture
```

### Initialize
```node
var PaytureAPI  = require('node-payture-ewallet')
var api         = new Payture(PAYTURE_HOST)
```

## API Calls

### eWallet
#### Init
```node
api.init(MERCHANT, data, callback)
```
#### Pay
```node
api.pay(MERCHANT, data, callback)
```
#### PaySubmit3DS
```node
api.paySubmit3ds(MERCHANT, data, callback)
```

### User Management
#### Register
```node
api.users.register(MERCHANT, data, callback)
```

### Card Management
#### GetList
  ```node
  api.cards.getList(MERCHANT, data, callback)
  ```
