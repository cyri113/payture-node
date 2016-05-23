# node-payture-ewallet
Payture eWallet API for NodeJS. To get started with Payture, you will need an account, please contact [Payture](http://payture.com/) directly. Please also note that this module was not developed by Payture.

## Getting Started

### What you need
- Host (you should use the values Payture provides you with)
```
i.e.
TESTING:    https://sandbox.payture.com
PRODUCTION: https://secure.payture.com
```
- Merchant Account (Payture usually provides you with two, one for Add and one for Pay)
```
i.e.
ADD:    DemoMerchantAdd
PAY:    DemoMerchantPay
```

### Install
**npm**
```node
npm install -save node-payture-ewallet
```

### Initialize
```node
var PaytureAPI  = require('node-payture-ewallet')
var api         = new Payture(PAYTURE_HOST)
```

### API Calls

- User Management
  - Register
  ```node
  api.users.register(MERCHANT, data, callback)
  ```

- Card Management
  - GetList
  ```node
  api.cards.getList(MERCHANT, data, callback)
  ```
- Init
```node
api.init(MERCHANT, data, callback)
```
- Pay
```node
api.pay(MERCHANT, data, callback)
```
- PaySubmit3DS
```node
api.paySubmit3ds(MERCHANT, data, callback)
```
