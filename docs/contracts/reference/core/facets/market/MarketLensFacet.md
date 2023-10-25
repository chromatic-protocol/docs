---
id: MarketLensFacet
title: MarketLensFacet.sol
---
# [MarketLensFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketLensFacet.sol)

## MarketLensFacet

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

### getLpReceipts

```solidity
function getLpReceipts(uint256[] receiptIds) external view returns (struct LpReceipt[] receipts)
```

_Throws a `NotExistLpReceipt` error if the liquidity receipt does not exist._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receiptIds | uint256[] | The ID list of the liquidity receipt to retrieve. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | receipts | struct LpReceipt[] | receipts The liquidity receipt list with the specified IDs. |

### pendingLiquidity

```solidity
function pendingLiquidity(int16 tradingFeeRate) external view returns (struct PendingLiquidity liquidity)
```

_Retrieves the pending liquidity information for a specific trading fee rate from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the pending liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | liquidity | struct PendingLiquidity | pendingLiquidity An instance of PendingLiquidity representing the pending liquidity information. |

### pendingLiquidityBatch

```solidity
function pendingLiquidityBatch(int16[] tradingFeeRates) external view returns (struct PendingLiquidity[] liquidities)
```

_Retrieves the pending liquidity information for multiple trading fee rates from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the pending liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | liquidities | struct PendingLiquidity[] | pendingLiquidityBatch An array of PendingLiquidity instances representing the pending liquidity information for each trading fee rate. |

### claimableLiquidity

```solidity
function claimableLiquidity(int16 tradingFeeRate, uint256 oracleVersion) external view returns (struct ClaimableLiquidity liquidity)
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
  | liquidity | struct ClaimableLiquidity | claimableLiquidity An instance of ClaimableLiquidity representing the claimable liquidity information. |

### claimableLiquidityBatch

```solidity
function claimableLiquidityBatch(int16[] tradingFeeRates, uint256 oracleVersion) external view returns (struct ClaimableLiquidity[] liquidities)
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
  | liquidities | struct ClaimableLiquidity[] | claimableLiquidityBatch An array of ClaimableLiquidity instances representing the claimable liquidity information for each trading fee rate. |

### liquidityBinStatuses

```solidity
function liquidityBinStatuses() external view returns (struct LiquidityBinStatus[] statuses)
```

_Retrieves the liquidity bin statuses for the caller's liquidity pool._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | statuses | struct LiquidityBinStatus[] | statuses An array of LiquidityBinStatus representing the liquidity bin statuses. |

### getPosition

```solidity
function getPosition(uint256 positionId) external view returns (struct Position position)
```

_Throws a `NotExistPosition` error if the position does not exist._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to retrieve. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | position | struct Position | position The position with the specified ID. |

### getPositions

```solidity
function getPositions(uint256[] positionIds) external view returns (struct Position[] positions)
```

_Retrieves multiple positions by their IDs._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionIds | uint256[] | The IDs of the positions to retrieve. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positions | struct Position[] | An array of retrieved positions. |

### pendingPosition

```solidity
function pendingPosition(int16 tradingFeeRate) external view returns (struct PendingPosition position)
```

_Retrieves the pending position information for a specific trading fee rate from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the pending position. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | position | struct PendingPosition | pendingPosition An instance of PendingPosition representing the pending position information. |

### pendingPositionBatch

```solidity
function pendingPositionBatch(int16[] tradingFeeRates) external view returns (struct PendingPosition[] positions)
```

_Retrieves the pending position information for multiple trading fee rates from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the pending position. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positions | struct PendingPosition[] | pendingPositionBatch An array of PendingPosition instances representing the pending position information for each trading fee rate. |

### closingPosition

```solidity
function closingPosition(int16 tradingFeeRate) external view returns (struct ClosingPosition position)
```

_Retrieves the closing position information for a specific trading fee rate from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the closing position. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | position | struct ClosingPosition | closingPosition An instance of PendingPosition representing the closing position information. |

### closingPositionBatch

```solidity
function closingPositionBatch(int16[] tradingFeeRates) external view returns (struct ClosingPosition[] positions)
```

_Retrieves the closing position information for multiple trading fee rates from the associated LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRates | int16[] | The list of trading fee rates for which to retrieve the closing position. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positions | struct ClosingPosition[] | pendingPositionBatch An array of PendingPosition instances representing the closing position information for each trading fee rate. |

