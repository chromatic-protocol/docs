---
id: VerifyCallback
title: VerifyCallback.sol
---
# [VerifyCallback.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/base/VerifyCallback.sol)

## VerifyCallback

_Abstract contract for verifying callback functions from registered markets._

### marketFactory

```solidity
address marketFactory
```

### NotMarket

```solidity
error NotMarket()
```

_Throws an error indicating that the caller is not a registered market._

### verifyCallback

```solidity
modifier verifyCallback()
```

_Modifier to verify the callback function is called by a registered market.
     Throws an error if the caller is not a registered market._

