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

_The BinMargin struct represents the margin information for an LP bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | uint16 | The trading fee rate associated with the LP bin |
| amount | uint256 | The maker margin amount specified for the LP bin |

## BinMarginLib

_The BinMarginLib library provides functions to operate on BinMargin structs._

### TRADING_FEE_RATE_PRECISION

```solidity
uint256 TRADING_FEE_RATE_PRECISION
```

### tradingFee

```solidity
function tradingFee(struct BinMargin self, uint8 _feeProtocol) internal pure returns (uint256)
```

Calculates the trading fee based on the margin amount and the trading fee rate.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinMargin | The BinMargin struct |
| _feeProtocol | uint8 | The protocol fee for the market |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The trading fee amount |

### protocolFee

```solidity
function protocolFee(struct BinMargin self, uint8 _feeProtocol) internal pure returns (uint256)
```

Calculates the protocol fee based on the margin amount and the trading fee rate.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinMargin | The BinMargin struct |
| _feeProtocol | uint8 | The protocol fee for the market |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The protocol fee amount |

