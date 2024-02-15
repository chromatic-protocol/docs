---
id: IMarketRemoveLiquidity
title: IMarketRemoveLiquidity.sol
---
# [IMarketRemoveLiquidity.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketRemoveLiquidity.sol)

## IMarketRemoveLiquidity

_The interface for removing and withdrawing liquidity in a market._

### removeLiquidity

```solidity
function removeLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt)
```

_Removes liquidity from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address to receive the removed liquidity. |
  | tradingFeeRate | int16 | The trading fee rate for the liquidity. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt | The liquidity receipt. |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] clbTokenAmounts, bytes data) external returns (struct LpReceipt[])
```

_Removes liquidity from the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address to receive the removed liquidity. |
  | tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
  | clbTokenAmounts | uint256[] | An array of clb token amounts to remove as liquidity for each bin. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt[] | The liquidity receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(uint256 receiptId, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity receipt. |
  | data | bytes | Additional data for the liquidity callback. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The array of the liquidity receipt IDs. |
  | data | bytes | Additional data for the liquidity callback. |

