[![Build Status](https://travis-ci.org/cderche/payture-node.svg?branch=wallet-test)](https://travis-ci.org/cderche/payture-node)

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
var Payture = require('payture')
var api     = new Payture(PAYTURE_HOST)
```

## Payture eWallet
[Init](http://payture.com/integration/api/#payture-ewallet_init_)
```node
api.wallet.init(MERCHANT, data, callback)           // Init
```
[Pay](http://payture.com/integration/api/#payture-ewallet_pay_)
```node
api.wallet.pay(MERCHANT, data, callback)            // Pay
```
### User Management
[Check](http://payture.com/integration/api/#payture-ewallet_user-management_check_)
```node
api.wallet.users.check(MERCHANT, data, callback) // Check
```
[Register](http://payture.com/integration/api/#payture-ewallet_user-management_register_)
```node
api.wallet.users.register(MERCHANT, data, callback) // Register
```
[Delete](http://payture.com/integration/api/#payture-ewallet_user-management_delete_)
```node
api.wallet.users.delete(MERCHANT, data, callback) // Delete
```
:exclamation: For delete you need to provide the Payture password, **NOT** the user password (or token).

### Card Management
[GetList](http://payture.com/integration/api/#payture-ewallet_card-management_getlist_)
```node
api.wallet.cards.getList(MERCHANT, data, callback)  // GetList
```

### 3DSecure
[PaySubmit3DS](http://payture.com/integration/api/#3d-secure_payture-ewallet_)
```node
api.wallet.paySubmit3ds(MERCHANT, data, callback)   // PaySubmit3DS
```

## Testing
To test the Payture API run the command ```npm test```. Make sure you set the following Environment variables:
- PAYTURE_HOST
- PAYTURE_ADD
- PAYTURE_PAY
- PAYTURE_PASSWORD
