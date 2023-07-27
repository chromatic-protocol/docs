---
id: MarketLiquidityFacetBase
title: MarketLiquidityFacetBase.sol
---
# [MarketLiquidityFacetBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketLiquidityFacetBase.sol)

## MarketLiquidityFacetBase

### NotExistLpReceipt

```solidity
error NotExistLpReceipt()
```

_Throws an error indicating that the specified liquidity receipt does not exist._

### _getLpReceipt

```solidity
function _getLpReceipt(struct LpReceiptStorage ls, uint256 receiptId) internal view returns (struct LpReceipt receipt)
```

### _newLpReceipt

```solidity
function _newLpReceipt(struct LpContext ctx, enum LpAction action, uint256 amount, address recipient, int16 tradingFeeRate) internal returns (struct LpReceipt)
```

_Creates a new liquidity receipt._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | ctx | struct LpContext | The liquidity context. |
  | action | enum LpAction | The liquidity action. |
  | amount | uint256 | The amount of liquidity. |
  | recipient | address | The address to receive the liquidity. |
  | tradingFeeRate | int16 | The trading fee rate for the liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt | The new liquidity receipt. |

