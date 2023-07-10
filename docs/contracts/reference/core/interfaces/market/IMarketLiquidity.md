---
id: IMarketLiquidity
title: IMarketLiquidity.sol
---
# [IMarketLiquidity.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketLiquidity.sol)

## IMarketLiquidity

_The interface for liquidity operations in a market._

### ClaimableLiquidity

```solidity
struct ClaimableLiquidity {
  uint256 mintingTokenAmountRequested;
  uint256 mintingCLBTokenAmount;
  uint256 burningCLBTokenAmountRequested;
  uint256 burningCLBTokenAmount;
  uint256 burningTokenAmount;
}
```

### LiquidityBinStatus

```solidity
struct LiquidityBinStatus {
  uint256 liquidity;
  uint256 freeLiquidity;
  uint256 binValue;
  int16 tradingFeeRate;
}
```

### AddLiquidity

```solidity
event AddLiquidity(struct LpReceipt receipt)
```

_Emitted when liquidity is added to the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | The liquidity receipt. |

### AddLiquidityBatch

```solidity
event AddLiquidityBatch(struct LpReceipt[] receipts)
```

_Emitted when liquidity is added to the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipts | struct LpReceipt[] | An array of LP receipts. |

### ClaimLiquidity

```solidity
event ClaimLiquidity(struct LpReceipt receipt, uint256 clbTokenAmount)
```

_Emitted when liquidity is claimed from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | The liquidity receipt. |
| clbTokenAmount | uint256 | The amount of CLB tokens claimed. |

### ClaimLiquidityBatch

```solidity
event ClaimLiquidityBatch(struct LpReceipt[] receipts, uint256[] clbTokenAmounts)
```

_Emitted when liquidity is claimed from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipts | struct LpReceipt[] | An array of LP receipts. |
| clbTokenAmounts | uint256[] | The amount list of CLB tokens claimed. |

### RemoveLiquidity

```solidity
event RemoveLiquidity(struct LpReceipt receipt)
```

_Emitted when liquidity is removed from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | The liquidity receipt. |

### RemoveLiquidityBatch

```solidity
event RemoveLiquidityBatch(struct LpReceipt[] receipts)
```

_Emitted when liquidity is removed from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipts | struct LpReceipt[] | An array of LP receipts. |

### WithdrawLiquidity

```solidity
event WithdrawLiquidity(struct LpReceipt receipt, uint256 amount, uint256 burnedCLBTokenAmount)
```

_Emitted when liquidity is withdrawn from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | struct LpReceipt | The liquidity receipt. |
| amount | uint256 | The amount of liquidity withdrawn. |
| burnedCLBTokenAmount | uint256 | The amount of burned CLB tokens. |

### WithdrawLiquidityBatch

```solidity
event WithdrawLiquidityBatch(struct LpReceipt[] receipts, uint256[] amounts, uint256[] burnedCLBTokenAmounts)
```

_Emitted when liquidity is withdrawn from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipts | struct LpReceipt[] | An array of LP receipts. |
| amounts | uint256[] | The amount list of liquidity withdrawn. |
| burnedCLBTokenAmounts | uint256[] | The amount list of burned CLB tokens. |

### addLiquidity

```solidity
function addLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt)
```

_Adds liquidity to the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the liquidity tokens. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | The liquidity receipt. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] amounts, bytes data) external returns (struct LpReceipt[])
```

Adds liquidity to multiple liquidity bins of the market in a batch.

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address of the recipient for each liquidity bin. |
| tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
| amounts | uint256[] | An array of amounts to add as liquidity for each bin. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidity

```solidity
function claimLiquidity(uint256 receiptId, bytes data) external
```

_Claims liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Claims liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptIds | uint256[] | The array of the liquidity receipt IDs. |
| data | bytes | Additional data for the liquidity callback. |

### removeLiquidity

```solidity
function removeLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt)
```

_Removes liquidity from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the removed liquidity. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | The liquidity receipt. |

### removeLiquidityBatch

```solidity
function removeLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] clbTokenAmounts, bytes data) external returns (struct LpReceipt[])
```

_Removes liquidity from the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The address to receive the removed liquidity. |
| tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
| clbTokenAmounts | uint256[] | An array of clb token amounts to remove as liquidity for each bin. |
| data | bytes | Additional data for the liquidity callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt[] | The liquidity receipt. |

### withdrawLiquidity

```solidity
function withdrawLiquidity(uint256 receiptId, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt. |
| data | bytes | Additional data for the liquidity callback. |

### withdrawLiquidityBatch

```solidity
function withdrawLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Withdraws liquidity from a liquidity receipt._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptIds | uint256[] | The array of the liquidity receipt IDs. |
| data | bytes | Additional data for the liquidity callback. |

### getBinLiquidity

```solidity
function getBinLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

_Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the liquidity amount. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The total liquidity amount for the specified trading fee rate. |

### getBinFreeLiquidity

```solidity
function getBinFreeLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

_Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the available liquidity amount. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The available (free) liquidity amount for the specified trading fee rate. |

### getBinValues

```solidity
function getBinValues(int16[] tradingFeeRates) external view returns (uint256[] values)
```

_Retrieves the values of a specific trading fee rate's bins in the liquidity pool.
     The value of a bin represents the total valuation of the liquidity in the bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRates | int16[] | The list of trading fee rate for which to retrieve the bin value. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| values | uint256[] | The value list of the bins for the specified trading fee rates. |

### distributeEarningToBins

```solidity
function distributeEarningToBins(uint256 earning, uint256 marketBalance) external
```

_Distributes earning to the liquidity bins._

| Name | Type | Description |
| ---- | ---- | ----------- |
| earning | uint256 | The amount of earning to distribute. |
| marketBalance | uint256 | The balance of the market. |

### getLpReceipt

```solidity
function getLpReceipt(uint256 receiptId) external view returns (struct LpReceipt)
```

_Retrieves the liquidity receipt with the given receipt ID.
     It throws NotExistLpReceipt if the specified receipt ID does not exist._

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiptId | uint256 | The ID of the liquidity receipt to retrieve. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpReceipt | receipt The liquidity receipt with the specified ID. |

### claimableLiquidity

```solidity
function claimableLiquidity(int16 tradingFeeRate, uint256 oracleVersion) external view returns (struct IMarketLiquidity.ClaimableLiquidity)
```

_Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the claimable liquidity. |
| oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IMarketLiquidity.ClaimableLiquidity | claimableLiquidity An instance of ClaimableLiquidity representing the claimable liquidity information. |

### liquidityBinStatuses

```solidity
function liquidityBinStatuses() external view returns (struct IMarketLiquidity.LiquidityBinStatus[])
```

_Retrieves the liquidity bin statuses for the caller's liquidity pool._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IMarketLiquidity.LiquidityBinStatus[] | statuses An array of LiquidityBinStatus representing the liquidity bin statuses. |

