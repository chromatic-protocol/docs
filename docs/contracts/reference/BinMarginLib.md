# Solidity API

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinMargin | The BinMargin struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The trading fee amount |

