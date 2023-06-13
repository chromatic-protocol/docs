---
id: LiquidityPool
title: LiquidityPool.sol
---
# [LiquidityPool.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/external/liquidity/LiquidityPool.sol)

## LiquidityPool

```solidity
struct LiquidityPool {
  mapping(uint16 => struct LiquidityBin) _longBins;
  mapping(uint16 => struct LiquidityBin) _shortBins;
}
```

## LiquidityPoolLib

Library for managing liquidity bins in an LiquidityPool

### LiquidityBinEarningAccumulated

```solidity
event LiquidityBinEarningAccumulated(uint16 feeRate, bytes1 binType, uint256 earning)
```

Emitted when earning is accumulated for a liquidity bin.

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

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradingFeeRate | int16 | The trading fee rate to validate. |

### initialize

```solidity
function initialize(struct LiquidityPool self) external
```

Initializes the LiquidityPool.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool. |

### settle

```solidity
function settle(struct LiquidityPool self, struct LpContext ctx) external
```

Settles the liquidity bins in the LiquidityPool.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool. |
| ctx | struct LpContext | The LpContext object. |

### prepareBinMargins

```solidity
function prepareBinMargins(struct LiquidityPool self, int224 qty, uint256 makerMargin, uint256 minimumBinMargin) external view returns (struct BinMargin[])
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
        containing the trading fee rate and corresponding margin amount for each bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool. |
| qty | int224 | The quantity of the position. |
| makerMargin | uint256 | The maker margin of the position. |
| minimumBinMargin | uint256 |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct BinMargin[] | binMargins An array of BinMargin representing the calculated bin margins. |

### acceptOpenPosition

```solidity
function acceptOpenPosition(struct LiquidityPool self, struct LpContext ctx, struct Position position) external
```

Accepts an open position and opens corresponding liquidity bins.

_This function calculates the target liquidity bins based on the position quantity.
     It prepares the bin margins and divides the position parameters accordingly.
     Then, it opens the liquidity bins with the corresponding parameters and trading fees._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| position | struct Position | The Position object representing the open position. |

### acceptClosePosition

```solidity
function acceptClosePosition(struct LiquidityPool self, struct LpContext ctx, struct Position position) external
```

Accepts a close position request and closes the corresponding liquidity bins.

_This function calculates the target liquidity bins based on the position quantity.
     It retrieves the maker margin and bin margins from the position.
     Then, it divides the position parameters to match the bin margins.
     Finally, it closes the liquidity bins with the provided parameters._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| position | struct Position | The Position object representing the close position request. |

### acceptClaimPosition

```solidity
function acceptClaimPosition(struct LiquidityPool self, struct LpContext ctx, struct Position position, int256 realizedPnl) external
```

Accepts a claim position request and processes the corresponding liquidity bins
        based on the realized position pnl.

_This function verifies if the absolute value of the realized position pnl is within the acceptable margin range.
     It retrieves the target liquidity bins based on the position quantity and the bin margins from the position.
     Then, it divides the position parameters to match the bin margins.
     Depending on the value of the realized position pnl, it either claims the position fully or partially.
     The claimed pnl is distributed among the liquidity bins according to their respective margins._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| position | struct Position | The Position object representing the position to claim. |
| realizedPnl | int256 | The realized position pnl (taker side). |

### acceptAddLiquidity

```solidity
function acceptAddLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 amount) external
```

Accepts an add liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptAddLiquidity function on the target liquidity bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
| amount | uint256 | The amount of liquidity to add. |

### acceptClaimLiquidity

```solidity
function acceptClaimLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 amount, uint256 oracleVersion) external returns (uint256)
```

Accepts a claim liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptClaimLiquidity function on the target liquidity bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
| amount | uint256 | The amount of liquidity to claim.        (should be the same as the one used in acceptAddLiquidity) |
| oracleVersion | uint256 | The oracle version used for the claim.        (should be the oracle version when call acceptAddLiquidity) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of liquidity (CLB tokens) received as a result of the liquidity claim. |

### acceptRemoveLiquidity

```solidity
function acceptRemoveLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 clbTokenAmount) external
```

Accepts a remove liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptRemoveLiquidity function on the target liquidity bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
| clbTokenAmount | uint256 | The amount of CLB tokens to remove. |

### acceptWithdrawLiquidity

```solidity
function acceptWithdrawLiquidity(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 clbTokenAmount, uint256 oracleVersion) external returns (uint256 amount, uint256 burnedCLBTokenAmount)
```

Accepts a withdraw liquidity request
        and processes the liquidity bin corresponding to the given trading fee rate.

_This function validates the trading fee rate
     and calls the acceptWithdrawLiquidity function on the target liquidity bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
| clbTokenAmount | uint256 | The amount of CLB tokens to withdraw.        (should be the same as the one used in acceptRemoveLiquidity) |
| oracleVersion | uint256 | The oracle version used for the withdrawal.        (should be the oracle version when call acceptRemoveLiquidity) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of base tokens withdrawn |
| burnedCLBTokenAmount | uint256 | the amount of CLB tokens burned. |

### calculateCLBTokenMinting

```solidity
function calculateCLBTokenMinting(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 amount) external view returns (uint256)
```

Calculates the amount of CLB tokens to be minted for the given amount of base tokens and trading fee rate.

_This function validates the trading fee rate
     and calls the calculateCLBTokenMinting function on the target liquidity bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
| amount | uint256 | The amount of base tokens. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The amount of CLB tokens to be minted. |

### calculateCLBTokenValue

```solidity
function calculateCLBTokenValue(struct LiquidityPool self, struct LpContext ctx, int16 tradingFeeRate, uint256 clbTokenAmount) external view returns (uint256 amount)
```

Calculates the value of the given amount of CLB tokens for the specified trading fee rate.

_This function validates the trading fee rate
     and calls the calculateCLBTokenValue function on the target liquidity bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| ctx | struct LpContext | The LpContext object. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |
| clbTokenAmount | uint256 | The amount of CLB tokens. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The value of the CLB tokens in base tokens. |

### getBinLiquidity

```solidity
function getBinLiquidity(struct LiquidityPool self, int16 tradingFeeRate) external view returns (uint256 amount)
```

Retrieves the total liquidity amount in base tokens for the specified trading fee rate.

_This function retrieves the liquidity bin based on the trading fee rate
     and calls the liquidity function on it._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The total liquidity amount in base tokens. |

### getBinFreeLiquidity

```solidity
function getBinFreeLiquidity(struct LiquidityPool self, int16 tradingFeeRate) external view returns (uint256 amount)
```

Retrieves the free liquidity amount in base tokens for the specified trading fee rate.

_This function retrieves the liquidity bin based on the trading fee rate
     and calls the freeLiquidity function on it._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| tradingFeeRate | int16 | The trading fee rate associated with the liquidity bin. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The free liquidity amount in base tokens. |

### distributeEarning

```solidity
function distributeEarning(struct LiquidityPool self, uint256 earning, uint256 marketBalance) external
```

Distributes earnings among the liquidity bins.

_This function distributes the earnings among the liquidity bins,
     proportional to their total balances.
     It iterates through the trading fee rates
     and distributes the proportional amount of earnings to each bin
     based on its total balance relative to the market balance._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The LiquidityPool storage. |
| earning | uint256 | The total earnings to be distributed. |
| marketBalance | uint256 | The market balance. |

### binValue

```solidity
function binValue(struct LiquidityPool self, int16 _tradingFeeRate, struct LpContext ctx) external view returns (uint256 value)
```

_Retrieves the value of a specific bin in the LiquidityPool storage for the provided trading fee rate._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| _tradingFeeRate | int16 | The trading fee rate for which to calculate the bin value. |
| ctx | struct LpContext | The LP context containing relevant information for the calculation. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | The value of the specified bin. |

### getClaimBurning

```solidity
function getClaimBurning(struct LiquidityPool self, int16 tradingFeeRate, uint256 oracleVersion) external view returns (uint256 clbTokenAmount, uint256 burningAmount, uint256 tokenAmount)
```

_Retrieves the claim burning details for a specific trading fee rate and oracle version from the LiquidityPool storage._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LiquidityPool | The reference to the LiquidityPool storage. |
| tradingFeeRate | int16 | The trading fee rate for which to retrieve the claim burning details. |
| oracleVersion | uint256 | The oracle version for which to retrieve the claim burning details. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| clbTokenAmount | uint256 | The total amount of CLB tokens waiting to be burned for the specified trading fee rate and oracle version. |
| burningAmount | uint256 | The amount of CLB tokens that can be claimed after being burnt for the specified trading fee rate and oracle version. |
| tokenAmount | uint256 | The corresponding amount of tokens obtained when claiming liquidity for the specified trading fee rate and oracle version. |

