# node-payture-ewallet
Payture eWallet API for NodeJS.

## Getting Started

### Install
**npm**
```
npm install -save node-payture-ewallet
```

### Initialize
```
var PaytureAPI  = require('node-payture-ewallet')
var api         = new Payture(PAYTURE_HOST)
```

### API Calls

- User Management
  - Register
  ```
  api.users.register(MERCHANT, data, callback)
  ```

- Card Management
  - GetList
  ```
  api.cards.getList(MERCHANT, data, callback)
  ```
- Init
```
api.init(MERCHANT, data, callback)
```
- Pay
```
api.pay(MERCHANT, data, callback)
```
- PaySubmit3DS
```
api.paySubmit3ds(MERCHANT, data, callback)
```
