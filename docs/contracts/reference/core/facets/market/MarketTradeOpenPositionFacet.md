---
id: MarketTradeOpenPositionFacet
title: MarketTradeOpenPositionFacet.sol
---
# [MarketTradeOpenPositionFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketTradeOpenPositionFacet.sol)

## MarketTradeOpenPositionFacet

_A contract that manages trading positions._

### LEVERAGE_DECIMALS

```solidity
uint256 LEVERAGE_DECIMALS
```

### LEVERAGE_PRECISION

```solidity
uint256 LEVERAGE_PRECISION
```

### openPosition

```solidity
function openPosition(int256 qty, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee, bytes data) external returns (struct OpenPositionInfo positionInfo)
```

_Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.
     Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.
     Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).
     Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).
     Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback.

Requirements:
 - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.
 - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.
 - The position is assigned a new ID and stored in the position storage.
 - A keeper task for potential liquidation is created by the liquidator.
 - An `OpenPosition` event is emitted with the owner's address and the newly opened position details._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | qty | int256 | The quantity of the position. |
  | takerMargin | uint256 | The margin amount provided by the taker. |
  | makerMargin | uint256 | The margin amount provided by the maker. |
  | maxAllowableTradingFee | uint256 | The maximum allowable trading fee for the position. |
  | data | bytes | Additional data for the position callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionInfo | struct OpenPositionInfo | The opened position. |

### _newPosition

```solidity
function _newPosition(struct LpContext ctx, int256 qty, uint256 takerMargin, uint16 protocolFeeRate, address liquidator) internal returns (struct Position)
```

### _requireOpenPositionEnabled

```solidity
function _requireOpenPositionEnabled(struct MarketStorage ms) internal view virtual
```

_Throws if open position is disabled._

