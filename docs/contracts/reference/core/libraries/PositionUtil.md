---
id: PositionUtil
title: PositionUtil.sol
---
# [PositionUtil.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/PositionUtil.sol)

## QTY_DECIMALS

```solidity
uint256 QTY_DECIMALS
```

## LEVERAGE_DECIMALS

```solidity
uint256 LEVERAGE_DECIMALS
```

## QTY_PRECISION

```solidity
uint256 QTY_PRECISION
```

## LEVERAGE_PRECISION

```solidity
uint256 LEVERAGE_PRECISION
```

## QTY_LEVERAGE_PRECISION

```solidity
uint256 QTY_LEVERAGE_PRECISION
```

## PositionUtil

Provides utility functions for managing positions

### settleVersion

```solidity
function settleVersion(uint256 oracleVersion) internal pure returns (uint256)
```

Returns next oracle version to settle

_It adds 1 to the `oracleVersion`
     and ensures that the `oracleVersion` is greater than 0 using a require statement.
     Throws an error with the code `Errors.INVALID_ORACLE_VERSION` if the `oracleVersion` is not valid._

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleVersion | uint256 | Input oracle version |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 Next oracle version to settle |

### settlePrice

```solidity
function settlePrice(contract IOracleProvider provider, uint256 oracleVersion) internal view returns (UFixed18)
```

Calculates the price of the position based on the `oracleVersion` to settle

_It calls another overloaded `settlePrice` function
     with an additional `OracleVersion` parameter,
     passing the `currentVersion` obtained from the `provider`_

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | contract IOracleProvider | The oracle provider |
| oracleVersion | uint256 | The oracle version of position |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | UFixed18 | UFixed18 The calculated price to settle |

### settlePrice

```solidity
function settlePrice(contract IOracleProvider provider, uint256 oracleVersion, struct IOracleProvider.OracleVersion currentVersion) internal view returns (UFixed18)
```

Calculates the price of the position based on the `oracleVersion` to settle

_It calculates the price by considering the `settleVersion`
     and the `currentVersion` obtained from the `IOracleProvider`.
     It ensures that the settle version is not greater than the current version;
     otherwise, it triggers an error with the message `Errors.UNSETTLED_POSITION`.
     It retrieves the corresponding `OracleVersion` using `atVersion` from the `IOracleProvider`,
     and then calls `oraclePrice` to obtain the price._

| Name | Type | Description |
| ---- | ---- | ----------- |
| provider | contract IOracleProvider | The oracle provider |
| oracleVersion | uint256 | The oracle version of position |
| currentVersion | struct IOracleProvider.OracleVersion | The current oracle version |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | UFixed18 | UFixed18 The calculated entry price to settle |

### oraclePrice

```solidity
function oraclePrice(struct IOracleProvider.OracleVersion oracleVersion) internal pure returns (UFixed18)
```

Extracts the price value from an `OracleVersion` struct

_If the price is less than 0, it returns 0_

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleVersion | struct IOracleProvider.OracleVersion | The memory instance of `OracleVersion` struct |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | UFixed18 | UFixed18 The price value of `oracleVersion` |

### pnl

```solidity
function pnl(int256 leveragedQty, UFixed18 _entryPrice, UFixed18 _exitPrice) internal pure returns (int256)
```

Calculates the profit or loss (PnL) for a position
        based on the leveraged quantity, entry price, and exit price

_It first calculates the price difference (`delta`) between the exit price and the entry price.
     If the leveraged quantity is negative, indicating short position,
     it adjusts the `delta` to reflect a negative change.
     The function then calculates the absolute PnL
     by multiplying the absolute value of the leveraged quantity
     with the absolute value of the `delta`, divided by the entry price.
     Finally, if `delta` is negative, indicating a loss,
     the absolute PnL is negated to represent a negative value._

| Name | Type | Description |
| ---- | ---- | ----------- |
| leveragedQty | int256 | The leveraged quantity of the position |
| _entryPrice | UFixed18 | The entry price of the position |
| _exitPrice | UFixed18 | The exit price of the position |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | int256 The profit or loss |

### checkAddPositionQty

```solidity
function checkAddPositionQty(int256 currentQty, int256 addedQty) internal pure
```

Verifies the validity of a position quantity added to the bin

_It ensures that the sign of the current quantity of the bin's position
     and the added quantity are same or zero.
     If the condition is not met, it triggers an error with the message `Errors.INVALID_POSITION_QTY`._

| Name | Type | Description |
| ---- | ---- | ----------- |
| currentQty | int256 | The current quantity of the bin's pending position |
| addedQty | int256 | The position quantity added |

### checkRemovePositionQty

```solidity
function checkRemovePositionQty(int256 currentQty, int256 removeQty) internal pure
```

Verifies the validity of a position quantity removed from the bin

_It ensures that the sign of the current quantity of the bin's position
     and the removed quantity are same or zero,
     and the absolute removed quantity is not greater than the absolute current quantity.
     If the condition is not met, it triggers an error with the message `Errors.INVALID_POSITION_QTY`._

| Name | Type | Description |
| ---- | ---- | ----------- |
| currentQty | int256 | The current quantity of the bin's position |
| removeQty | int256 | The position quantity removed |

### transactionAmount

```solidity
function transactionAmount(int256 leveragedQty, UFixed18 price) internal pure returns (uint256)
```

Calculates the transaction amount based on the leveraged quantity and price

| Name | Type | Description |
| ---- | ---- | ----------- |
| leveragedQty | int256 | The leveraged quantity of the position |
| price | UFixed18 | The price of the position |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The transaction amount |

