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

_The LpReceipt struct represents a receipt of an LP action performed._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | An identifier for the receipt |
| oracleVersion | uint256 | The oracle version associated with the action |
| amount | uint256 | The amount involved in the action,<br /> when the action is `ADD_LIQUIDITY`, this value represents the amount of settlement tokens<br /> when the action is `REMOVE_LIQUIDITY`, this value represents the amount of CLB tokens |
| recipient | address | The address of the recipient of the action |
| action | enum LpAction | An enumeration representing the type of LP action performed (ADD_LIQUIDITY or REMOVE_LIQUIDITY) |
| tradingFeeRate | int16 | The trading fee rate associated with the LP action |

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

