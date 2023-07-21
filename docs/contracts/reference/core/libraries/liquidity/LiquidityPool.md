---
id: LiquidityPool
title: LiquidityPool.sol
---
# [LiquidityPool.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/liquidity/LiquidityPool.sol)

## LiquidityPool

```solidity
struct LiquidityPool {
  mapping(uint16 => struct LiquidityBin) _longBins;
  mapping(uint16 => struct LiquidityBin) _shortBins;
}
```

_Represents a collection of long and short liquidity bins_

## LiquidityPoolLib

Library for managing liquidity bins in an LiquidityPool

### LiquidityBinEarningAccumulated

```solidity
event LiquidityBinEarningAccumulated(uint16 feeRate, bytes1 binType, uint256 earning)
```

Emitted when earning is accumulated for a liquidity bin.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | feeRate | uint16 | The fee rate of the bin. |
  | binType | bytes1 | The type of the bin ("L" for long, "S" for short). |
  | earning | uint256 | The accumulated earning. |

### _proportionalPositionParamValue

```solidity
struct _proportionalPositionParamValue {
  int256 leveragedQty;
  uint256 takerMargin;
}
```

### _validTradingFeeRate

```solidity
modifier _validTradingFeeRate(int16 tradingFeeRate)
```

Modifier to validate the trading fee rate.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The trading fee rate to validate. |

### initialize

```solidity
function initialize(struct LiquidityPool self) internal
```

Initializes the LiquidityPool.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool. |

### settle

```solidity
function settle(struct LiquidityPool self, struct LpContext ctx) internal
```

Settles the liquidity bins in the LiquidityPool.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool. |
  | ctx | struct LpContext | The LpContext object. |

### prepareBinMargins

```solidity
function prepareBinMargins(struct LiquidityPool self, struct LpContext ctx, int224 qty, uint256 makerMargin, uint256 minimumBinMargin) internal returns (struct BinMargin[])
```

Prepares bin margins based on the given quantity and maker margin.

_This function prepares bin margins by performing the following steps:
     1. Calculates the appropriate bin margins
        for each trading fee rate based on the provided quantity and maker margin.
     2. Iterates through the target bins based on the quantity,
        finds the minimum available fee rate,
        and determines the upper bound for calculating bin margins.
     3. Iterates from the minimum fee rate until the upper bound,
        assigning the remaining maker margin to the bins until it is exhausted.
     4. Creates an array of BinMargin structs
        containing the trading fee rate and corresponding margin amount for each bin.
     Throws an error with the code `Errors.NOT_ENOUGH_FREE_LIQUIDITY` if there is not enough free liquidity._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool. |
  | ctx | struct LpContext | The LpContext data struct |
  | qty | int224 | The quantity of the position. |
  | makerMargin | uint256 | The maker margin of the position. |
  | minimumBinMargin | uint256 |  |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct BinMargin[] | binMargins An array of BinMargin representing the calculated bin margins. |

### acceptOpenPosition

```solidity
function acceptOpenPosition(struct LiquidityPool self, struct LpContext ctx, struct Position position) internal
```

Accepts an open position and opens corresponding liquidity bins.

_This function calculates the target liquidity bins based on the position quantity.
     It prepares the bin margins and divides the position parameters accordingly.
     Then, it opens the liquidity bins with the corresponding parameters and trading fees._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | ctx | struct LpContext | The LpContext object. |
  | position | struct Position | The Position object representing the open position. |

### acceptClosePosition

```solidity
function acceptClosePosition(struct LiquidityPool self, struct LpContext ctx, struct Position position) internal
```

Accepts a close position request and closes the corresponding liquidity bins.

_This function calculates the target liquidity bins based on the position quantity.
     It retrieves the maker margin and bin margins from the position.
     Then, it divides the position parameters to match the bin margins.
     Finally, it closes the liquidity bins with the provided parameters._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | ctx | struct LpContext | The LpContext object. |
  | position | struct Position | The Position object representing the close position request. |

### acceptClaimPosition

```solidity
function acceptClaimPosition(struct LiquidityPool self, struct LpContext ctx, struct Position position, int256 realizedPnl) internal
```

Accepts a claim position request and processes the corresponding liquidity bins
        based on the realized position pnl.

_This function verifies if the absolute value of the realized position pnl is within the acceptable margin range.
     It retrieves the target liquidity bins based on the position quantity and the bin margins from the position.
     Then, it divides the position parameters to match the bin margins.
     Depending on the value of the realized position pnl, it either claims the position fully or partially.
     The claimed pnl is distributed among the liquidity bins according to their respective margins.
     Throws an error with the code `Errors.EXCEED_MARGIN_RANGE` if the realized profit or loss does not falls within the acceptable margin range._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | ctx | struct LpContext | The LpContext object. |
  | position | struct Position | The Position object representing the position to claim. |
  | realizedPnl | int256 | The realized position pnl (taker side). |

### acceptAddLiquidity

```solidity
function acceptAddLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 amount) internal
```

Accepts an add liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptAddLiquidity function on the target liquidity bin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | ctx | struct LpContext | The LpContext object. |
  | tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
  | amount | uint256 | The amount of liquidity to add. |

### acceptClaimLiquidity

```solidity
function acceptClaimLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 amount, uint256 oracleVersion) internal returns (uint256)
```

Accepts a claim liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptClaimLiquidity function on the target liquidity bin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | ctx | struct LpContext | The LpContext object. |
  | tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
  | amount | uint256 | The amount of liquidity to claim.        (should be the same as the one used in acceptAddLiquidity) |
  | oracleVersion | uint256 | The oracle version used for the claim.        (should be the oracle version when call acceptAddLiquidity) |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The amount of liquidity (CLB tokens) received as a result of the liquidity claim. |

### acceptRemoveLiquidity

```solidity
function acceptRemoveLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 clbTokenAmount) internal
```

Accepts a remove liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptRemoveLiquidity function on the target liquidity bin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | ctx | struct LpContext | The LpContext object. |
  | tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
  | clbTokenAmount | uint256 | The amount of CLB tokens to remove. |

### acceptWithdrawLiquidity

```solidity
function acceptWithdrawLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 clbTokenAmount, uint256 oracleVersion) internal returns (uint256 amount, uint256 burnedCLBTokenAmount)
```

Accepts a withdraw liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptWithdrawLiquidity function on the target liquidity bin._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | ctx | struct LpContext | The LpContext object. |
  | tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
  | clbTokenAmount | uint256 | The amount of CLB tokens to withdraw.        (should be the same as the one used in acceptRemoveLiquidity) |
  | oracleVersion | uint256 | The oracle version used for the withdrawal.        (should be the oracle version when call acceptRemoveLiquidity) |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | amount | uint256 | The amount of base tokens withdrawn |
  | burnedCLBTokenAmount | uint256 | the amount of CLB tokens burned. |

### getBinLiquidity

```solidity
function getBinLiquidity(struct LiquidityPool self, int16 tradingFeeRate) internal view returns (uint256 amount)
```

Retrieves the total liquidity amount in base tokens for the specified trading fee rate.

_This function retrieves the liquidity bin based on the trading fee rate
     and calls the liquidity function on it._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | amount | uint256 | The total liquidity amount in base tokens. |

### getBinFreeLiquidity

```solidity
function getBinFreeLiquidity(struct LiquidityPool self, int16 tradingFeeRate) internal view returns (uint256 amount)
```

Retrieves the free liquidity amount in base tokens for the specified trading fee rate.

_This function retrieves the liquidity bin based on the trading fee rate
     and calls the freeLiquidity function on it._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | amount | uint256 | The free liquidity amount in base tokens. |

### distributeEarning

```solidity
function distributeEarning(struct LiquidityPool self, uint256 earning, uint256 marketBalance) internal
```

Distributes earnings among the liquidity bins.

_This function distributes the earnings among the liquidity bins,
     proportional to their total balances.
     It iterates through the trading fee rates
     and distributes the proportional amount of earnings to each bin
     based on its total balance relative to the market balance._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The LiquidityPool storage. |
  | earning | uint256 | The total earnings to be distributed. |
  | marketBalance | uint256 | The market balance. |

### binValue

```solidity
function binValue(struct LiquidityPool self, int16 _tradingFeeRate, struct LpContext ctx) internal view returns (uint256 value)
```

_Retrieves the value of a specific bin in the LiquidityPool storage for the provided trading fee rate._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool storage. |
  | _tradingFeeRate | int16 | The trading fee rate for which to calculate the bin value. |
  | ctx | struct LpContext | The LP context containing relevant information for the calculation. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | value | uint256 | The value of the specified bin. |

### claimableLiquidity

```solidity
function claimableLiquidity(struct LiquidityPool self, int16 tradingFeeRate, uint256 oracleVersion) internal view returns (struct IMarketLiquidity.ClaimableLiquidity)
```

_Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from a LiquidityPool._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The reference to the LiquidityPool struct. |
  | tradingFeeRate | int16 | The trading fee rate for which to retrieve the claimable liquidity. |
  | oracleVersion | uint256 | The oracle version for which to retrieve the claimable liquidity. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.ClaimableLiquidity | claimableLiquidity An instance of IMarketLiquidity.ClaimableLiquidity representing the claimable liquidity information. |

### liquidityBinStatuses

```solidity
function liquidityBinStatuses(struct LiquidityPool self, struct LpContext ctx) internal view returns (struct IMarketLiquidity.LiquidityBinStatus[])
```

_Retrieves the liquidity bin statuses for the LiquidityPool using the provided context._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct LiquidityPool | The LiquidityPool storage instance. |
  | ctx | struct LpContext | The LpContext containing the necessary context for calculating the bin statuses. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IMarketLiquidity.LiquidityBinStatus[] | stats An array of IMarketLiquidity.LiquidityBinStatus representing the liquidity bin statuses. |

