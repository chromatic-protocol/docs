---
id: Errors
title: Errors.sol
---
# [Errors.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/Errors.sol)

## Errors

_This library provides a set of error codes as string constants for handling exceptions and revert messages in the library._

### NOT_ENOUGH_FREE_LIQUIDITY

```solidity
string NOT_ENOUGH_FREE_LIQUIDITY
```

_Error code indicating that there is not enough free liquidity available in liquidity pool when open a new poisition._

### TOO_SMALL_AMOUNT

```solidity
string TOO_SMALL_AMOUNT
```

_Error code indicating that the specified amount is too small when add liquidity to each bin._

### INVALID_ORACLE_VERSION

```solidity
string INVALID_ORACLE_VERSION
```

_Error code indicating that the provided oracle version is invalid or unsupported._

### EXCEED_MARGIN_RANGE

```solidity
string EXCEED_MARGIN_RANGE
```

_Error code indicating that the specified value exceeds the allowed margin range when claim a position._

### UNSUPPORTED_TRADING_FEE_RATE

```solidity
string UNSUPPORTED_TRADING_FEE_RATE
```

_Error code indicating that the provided trading fee rate is not supported._

### ALREADY_REGISTERED_ORACLE_PROVIDER

```solidity
string ALREADY_REGISTERED_ORACLE_PROVIDER
```

_Error code indicating that the oracle provider is already registered._

### ALREADY_REGISTERED_TOKEN

```solidity
string ALREADY_REGISTERED_TOKEN
```

_Error code indicating that the settlement token is already registered._

### UNREGISTERED_TOKEN

```solidity
string UNREGISTERED_TOKEN
```

_Error code indicating that the settlement token is not registered._

### INTEREST_RATE_NOT_INITIALIZED

```solidity
string INTEREST_RATE_NOT_INITIALIZED
```

_Error code indicating that the interest rate has not been initialized._

### INTEREST_RATE_OVERFLOW

```solidity
string INTEREST_RATE_OVERFLOW
```

_Error code indicating that the provided interest rate exceeds the maximum allowed rate._

### INTEREST_RATE_PAST_TIMESTAMP

```solidity
string INTEREST_RATE_PAST_TIMESTAMP
```

_Error code indicating that the provided timestamp for an interest rate is in the past._

### INTEREST_RATE_NOT_APPENDABLE

```solidity
string INTEREST_RATE_NOT_APPENDABLE
```

_Error code indicating that the provided interest rate record cannot be appended to the existing array._

### INTEREST_RATE_ALREADY_APPLIED

```solidity
string INTEREST_RATE_ALREADY_APPLIED
```

_Error code indicating that an interest rate has already been applied and cannot be modified further._

### UNSETTLED_POSITION

```solidity
string UNSETTLED_POSITION
```

_Error code indicating that the position is unsettled._

### INVALID_POSITION_QTY

```solidity
string INVALID_POSITION_QTY
```

_Error code indicating that the position quantity is invalid._

