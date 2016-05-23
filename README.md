# Payture.com API for NodeJS
Payture API for NodeJS. To get started with Payture, you will need an account, please contact [Payture](http://payture.com/) directly. Please also note that this module was not developed by Payture.

## Getting Started

### What you need
1. Payture Host
2. Merchant Account(s)

### Install
**npm**
```console
npm install -save payture
```

### Initialize
```node
var PaytureAPI  = require('payture')
var api         = new Payture(PAYTURE_HOST)
```

## Payture eWallet
- [Init](http://payture.com/integration/api/#payture-ewallet_init_)
```node
api.wallet.init(MERCHANT, data, callback)           // Init
```
- [Pay](http://payture.com/integration/api/#payture-ewallet_pay_)
```node
api.wallet.pay(MERCHANT, data, callback)            // Pay
```
### User Management
- [Register](http://payture.com/integration/api/#payture-ewallet_user-management_register_)
```node
api.wallet.users.register(MERCHANT, data, callback) // Register
```
### Card Management
- [GetList](http://payture.com/integration/api/#payture-ewallet_card-management_getlist_)
```node
api.wallet.cards.getList(MERCHANT, data, callback)  // GetList
```

## 3DSecure
- [PaySubmit3DS](http://payture.com/integration/api/#3d-secure_payture-ewallet_)
```node
api.wallet.paySubmit3ds(MERCHANT, data, callback)   // PaySubmit3DS
```
