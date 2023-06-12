---
id: BinMargin
title: BinMargin.sol
---
# [BinMargin.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/BinMargin.sol)

## BinMargin

```solidity
struct BinMargin {
  uint16 tradingFeeRate;
  uint256 amount;
}
```

## BinMarginLib

_The BinMarginLib library provides functions to operate on BinMargin structs._

### TRADING_FEE_RATE_PRECISION

```solidity
uint256 TRADING_FEE_RATE_PRECISION
```

### tradingFee

```solidity
function tradingFee(struct BinMargin self) internal pure returns (uint256)
```

Calculates the trading fee based on the margin amount and the trading fee rate.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinMargin | The BinMargin struct |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The trading fee amount |

