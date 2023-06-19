---
id: LpReceipt
title: LpReceipt.sol
---
# [LpReceipt.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/LpReceipt.sol)

## LpAction

_The LpAction enum represents the types of LP actions that can be performed._

```solidity
enum LpAction {
  ADD_LIQUIDITY,
  REMOVE_LIQUIDITY
}
```

## LpReceipt

The LpReceipt struct represents a receipt of an LP action performed.

```solidity
struct LpReceipt {
  uint256 id;
  uint256 oracleVersion;
  uint256 amount;
  address recipient;
  enum LpAction action;
  int16 tradingFeeRate;
}
```

## LpReceiptLib

Provides functions that operate on the `LpReceipt` struct

### clbTokenId

```solidity
function clbTokenId(struct LpReceipt self) internal pure returns (uint256)
```

Computes the ID of the CLBToken contract based on the trading fee rate.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpReceipt | The LpReceipt struct. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The ID of the CLBToken contract. |

