---
id: IMarketLiquidityLens
title: IMarketLiquidityLens.sol
---
# [IMarketLiquidityLens.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketLiquidityLens.sol)

## IMarketLiquidityLens

_The interface for liquidity information retrieval in a market._

### getBinLiquidity

```solidity
function getBinLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

_Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the liquidity amount. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | amount | uint256 | The total liquidity amount for the specified trading fee rate. |

### getBinFreeLiquidity

```solidity
function getBinFreeLiquidity(int16 tradingFeeRate) external view returns (uint256 amount)
```

_Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the available liquidity amount. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | amount | uint256 | The available (free) liquidity amount for the specified trading fee rate. |

### getBinValues

```solidity
function getBinValues(int16[] tradingFeeRates) external view returns (uint256[] values)
```

_Retrieves the values of a specific trading fee rate's bins in the liquidity pool.
     The value of a bin represents the total valuation of the liquidity in the bin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRates | int16[] | The list of trading fee rate for which to retrieve the bin value. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | values | uint256[] | The value list of the bins for the specified trading fee rates. |

### getBinValuesAt

```solidity
function getBinValuesAt(uint256 oracleVersion, int16[] tradingFeeRates) external view returns (struct IMarketLiquidity.LiquidityBinValue[] values)
```

_Retrieves the values of specific trading fee rates' bins in the liquidity pool at a specific oracle version.
     The value of a bin represents the total valuation of the liquidity in the bin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleVersion | uint256 | The oracle version for which to retrieve the bin values. |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the bin values. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | values | struct IMarketLiquidity.LiquidityBinValue[] | The array of LiquidityBinValue representing the values of the bins for the specified trading fee rates and oracle version. |

### getLpReceipt

```solidity
function getLpReceipt(uint256 receiptId) external view returns (struct LpReceipt)
```

_Retrieves the liquidity receipt with the given receipt ID.
     It throws NotExistLpReceipt if the specified receipt ID does not exist._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity receipt to retrieve. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt | receipt The liquidity receipt with the specified ID. |

### getLpReceipts

```solidity
function getLpReceipts(uint256[] receiptIds) external view returns (struct LpReceipt[])
```

_Retrieves the liquidity receipts with the given receipt IDs.
     It throws NotExistLpReceipt if the specified receipt ID does not exist._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The ID list of the liquidity receipt to retrieve. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpReceipt[] | receipts The liquidity receipt list with the specified IDs. |

### pendingLiquidity

```solidity
function pendingLiquidity(int16 tradingFeeRate) external view returns (struct IMarketLiquidity.PendingLiquidity)
```

_Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the pending liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.PendingLiquidity | pendingLiquidity An instance of PendingLiquidity representing the pending liquidity information. |

### pendingLiquidityBatch

```solidity
function pendingLiquidityBatch(int16[] tradingFeeRates) external view returns (struct IMarketLiquidity.PendingLiquidity[])
```

_Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the pending liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.PendingLiquidity[] | pendingLiquidityBatch An array of PendingLiquidity instances representing the pending liquidity information for each trading fee rate. |

### claimableLiquidity

```solidity
function claimableLiquidity(int16 tradingFeeRate, uint256 oracleVersion) external view returns (struct IMarketLiquidity.ClaimableLiquidity)
```

_Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the claimable liquidity. |
  | oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.ClaimableLiquidity | claimableLiquidity An instance of ClaimableLiquidity representing the claimable liquidity information. |

### claimableLiquidityBatch

```solidity
function claimableLiquidityBatch(int16[] tradingFeeRates, uint256 oracleVersion) external view returns (struct IMarketLiquidity.ClaimableLiquidity[])
```

_Retrieves the claimable liquidity information for multiple trading fee rates and a specific oracle version from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the claimable liquidity. |
  | oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.ClaimableLiquidity[] | claimableLiquidityBatch An array of ClaimableLiquidity instances representing the claimable liquidity information for each trading fee rate. |

### liquidityBinStatuses

```solidity
function liquidityBinStatuses() external view returns (struct IMarketLiquidity.LiquidityBinStatus[])
```

_Retrieves the liquidity bin statuses for the caller's liquidity pool._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.LiquidityBinStatus[] | statuses An array of LiquidityBinStatus representing the liquidity bin statuses. |

