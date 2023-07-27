---
id: MarketLiquidityLensFacet
title: MarketLiquidityLensFacet.sol
---
# [MarketLiquidityLensFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketLiquidityLensFacet.sol)

## MarketLiquidityLensFacet

_Contract for liquidity information retrieval in a market._

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
function getBinValues(int16[] tradingFeeRates) external view returns (uint256[])
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
  | [0] | uint256[] |  |

### getLpReceipt

```solidity
function getLpReceipt(uint256 receiptId) external view returns (struct LpReceipt receipt)
```

_Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptId | uint256 | The ID of the liquidity receipt to retrieve. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipt | struct LpReceipt | receipt The liquidity receipt with the specified ID. |

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

