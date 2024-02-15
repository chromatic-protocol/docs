---
id: IMarketAddLiquidity
title: IMarketAddLiquidity.sol
---
# [IMarketAddLiquidity.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketAddLiquidity.sol)

## IMarketAddLiquidity

_The interface for adding and claiming liquidity in a market._

### addLiquidity

```solidity
function addLiquidity(address recipient, int16 tradingFeeRate, bytes data) external returns (struct LpReceipt)
```

_Adds liquidity to the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address to receive the liquidity tokens. |
  | tradingFeeRate | int16 | The trading fee rate for the liquidity. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt | The liquidity receipt. |

### addLiquidityBatch

```solidity
function addLiquidityBatch(address recipient, int16[] tradingFeeRates, uint256[] amounts, bytes data) external returns (struct LpReceipt[])
```

Adds liquidity to multiple liquidity bins of the market in a batch.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | recipient | address | The address of the recipient for each liquidity bin. |
  | tradingFeeRates | int16[] | An array of fee rates for each liquidity bin. |
  | amounts | uint256[] | An array of amounts to add as liquidity for each bin. |
  | data | bytes | Additional data for the liquidity callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt[] | An array of LP receipts. |

### claimLiquidity

```solidity
function claimLiquidity(uint256 receiptId, bytes data) external
```

_Claims liquidity from a liquidity receipt._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity receipt. |
  | data | bytes | Additional data for the liquidity callback. |

### claimLiquidityBatch

```solidity
function claimLiquidityBatch(uint256[] receiptIds, bytes data) external
```

_Claims liquidity from a liquidity receipt._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The array of the liquidity receipt IDs. |
  | data | bytes | Additional data for the liquidity callback. |

### distributeEarningToBins

```solidity
function distributeEarningToBins(uint256 earning, uint256 marketBalance) external
```

_Distributes earning to the liquidity bins._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | earning | uint256 | The amount of earning to distribute. |
  | marketBalance | uint256 | The balance of the market. |

