---
id: Types
title: Types.sol
---
# [Types.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/Types.sol)

## CLAIM_USER

```solidity
bytes4 CLAIM_USER
```

## CLAIM_KEEPER

```solidity
bytes4 CLAIM_KEEPER
```

## CLAIM_TP

```solidity
bytes4 CLAIM_TP
```

## CLAIM_SL

```solidity
bytes4 CLAIM_SL
```

## OpenPositionInfo

```solidity
struct OpenPositionInfo {
  uint256 id;
  uint256 openVersion;
  int256 qty;
  uint256 openTimestamp;
  uint256 takerMargin;
  uint256 makerMargin;
  uint256 tradingFee;
}
```

_The OpenPositionInfo struct represents a opened trading position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The position identifier |
| openVersion | uint256 | The version of the oracle when the position was opened |
| qty | int256 | The quantity of the position |
| openTimestamp | uint256 | The timestamp when the position was opened |
| takerMargin | uint256 | The amount of collateral that a trader must provide |
| makerMargin | uint256 | The margin amount provided by the maker. |
| tradingFee | uint256 | The trading fee associated with the position. |

## ClosePositionInfo

```solidity
struct ClosePositionInfo {
  uint256 id;
  uint256 closeVersion;
  uint256 closeTimestamp;
}
```

_The ClosePositionInfo struct represents a closed trading position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The position identifier |
| closeVersion | uint256 | The version of the oracle when the position was closed |
| closeTimestamp | uint256 | The timestamp when the position was closed |

## ClaimPositionInfo

```solidity
struct ClaimPositionInfo {
  uint256 id;
  uint256 entryPrice;
  uint256 exitPrice;
  int256 realizedPnl;
  uint256 interest;
  bytes4 cause;
}
```

_The ClaimPositionInfo struct represents a claimed position information._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The position identifier |
| entryPrice | uint256 | The entry price of the position |
| exitPrice | uint256 | The exit price of the position |
| realizedPnl | int256 | The profit or loss of the claimed position. |
| interest | uint256 | The interest paid for the claimed position. |
| cause | bytes4 | The description of being claimed. |

## PendingPosition

```solidity
struct PendingPosition {
  uint256 openVersion;
  int256 totalQty;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
}
```

_Represents a pending position within the LiquidityBin_

| Name | Type | Description |
| ---- | ---- | ----------- |
| openVersion | uint256 | The oracle version when the position was opened. |
| totalQty | int256 | The total quantity of the pending position. |
| totalMakerMargin | uint256 | The total maker margin of the pending position. |
| totalTakerMargin | uint256 | The total taker margin of the pending position. |

## ClosingPosition

```solidity
struct ClosingPosition {
  uint256 closeVersion;
  int256 totalQty;
  uint256 totalEntryAmount;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
}
```

_Represents the closing position within an LiquidityBin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| closeVersion | uint256 | The oracle version when the position was closed. |
| totalQty | int256 | The total quantity of the closing position. |
| totalEntryAmount | uint256 | The total entry amount of the closing position. |
| totalMakerMargin | uint256 | The total maker margin of the closing position. |
| totalTakerMargin | uint256 | The total taker margin of the closing position. |

## PendingLiquidity

```solidity
struct PendingLiquidity {
  uint256 oracleVersion;
  uint256 mintingTokenAmountRequested;
  uint256 burningCLBTokenAmountRequested;
}
```

_A struct representing pending liquidity information._

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleVersion | uint256 | The oracle version of pending liqudity. |
| mintingTokenAmountRequested | uint256 | The amount of settlement tokens requested for minting. |
| burningCLBTokenAmountRequested | uint256 | The amount of CLB tokens requested for burning. |

## ClaimableLiquidity

```solidity
struct ClaimableLiquidity {
  uint256 mintingTokenAmountRequested;
  uint256 mintingCLBTokenAmount;
  uint256 burningCLBTokenAmountRequested;
  uint256 burningCLBTokenAmount;
  uint256 burningTokenAmount;
}
```

_A struct representing claimable liquidity information._

| Name | Type | Description |
| ---- | ---- | ----------- |
| mintingTokenAmountRequested | uint256 | The amount of settlement tokens requested for minting. |
| mintingCLBTokenAmount | uint256 | The actual amount of CLB tokens minted. |
| burningCLBTokenAmountRequested | uint256 | The amount of CLB tokens requested for burning. |
| burningCLBTokenAmount | uint256 | The actual amount of CLB tokens burned. |
| burningTokenAmount | uint256 | The amount of settlement tokens equal in value to the burned CLB tokens. |

## LiquidityBinStatus

```solidity
struct LiquidityBinStatus {
  uint256 liquidity;
  uint256 freeLiquidity;
  uint256 binValue;
  int16 tradingFeeRate;
}
```

_A struct representing status of the liquidity bin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| liquidity | uint256 | The total liquidity amount in the bin |
| freeLiquidity | uint256 | The amount of free liquidity available in the bin. |
| binValue | uint256 | The current value of the bin. |
| tradingFeeRate | int16 | The trading fee rate for the liquidity. |

