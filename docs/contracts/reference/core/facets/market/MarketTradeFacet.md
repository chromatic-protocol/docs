---
id: MarketTradeFacet
title: MarketTradeFacet.sol
---
# [MarketTradeFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketTradeFacet.sol)

## MarketTradeFacet

_A contract that manages trading positions._

### TooSmallTakerMargin

```solidity
error TooSmallTakerMargin()
```

_Throws an error indicating that the taker margin provided is smaller than the minimum required margin for the specific settlement token.
     The minimum required margin is determined by the DAO and represents the minimum amount required for operations such as liquidation and payment of keeper fees._

### NotEnoughMarginTransferred

```solidity
error NotEnoughMarginTransferred()
```

_Throws an error indicating that the margin settlement token balance does not increase by the required margin amount after the callback._

### NotPermitted

```solidity
error NotPermitted()
```

_Throws an error indicating that the caller is not permitted to perform the action as they are not the owner of the position._

### AlreadyClosedPosition

```solidity
error AlreadyClosedPosition()
```

_Throws an error indicating that the position has already been closed and cannot be closed again._

### NotClaimablePosition

```solidity
error NotClaimablePosition()
```

_Throws an error indicating that the position cannot be claimed as it is not eligible for claim in the current oracle version._

### ExceedMaxAllowableTradingFee

```solidity
error ExceedMaxAllowableTradingFee()
```

_Throws an error indicating that the total trading fee (including protocol fee) exceeds the maximum allowable trading fee._

### ExceedMaxAllowableLeverage

```solidity
error ExceedMaxAllowableLeverage()
```

_Throws an error indicating thatwhen the specified leverage exceeds the maximum allowable leverage level set by the Oracle Provider.
     Each Oracle Provider has a specific maximum allowable leverage level, which is determined by the DAO.
     The default maximum allowable leverage level is 0, which corresponds to a leverage of up to 10x._

### NotAllowableTakerMargin

```solidity
error NotAllowableTakerMargin()
```

_Throws an error indicating that the taker margin value is not within the allowable range based on the quantity and the maximum allowable leverage.
     The taker margin should be equal to or greater than the product of the absolute quantity and the reciprocal of the maximum allowable leverage, and it should not exceed 100% of the absolute quantity._

### NotAllowableMakerMargin

```solidity
error NotAllowableMakerMargin()
```

_Throws an error indicating that the maker margin value is not within the allowable range based on the absolute quantity and the specified minimum/maximum take-profit basis points (BPS).
     The maker margin must fall within the range calculated based on the absolute quantity of the position and the specified minimum/maximum take-profit basis points (BPS) set by the Oracle Provider.
     The default range for the minimum/maximum take-profit basis points is 10% to 1000%._

### openPosition

```solidity
function openPosition(int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee, bytes data) external returns (struct Position position)
```

_Throws a `TooSmallTakerMargin` error if the `takerMargin` is smaller than the minimum required margin for the settlement token.
     Throws an `ExceedMaxAllowableLeverage` if the leverage exceeds the maximum allowable leverage.
     Throws a `NotAllowableTakerMargin` if the taker margin is not within the allowable range based on the absolute quantity and maximum allowable leverage.
     Throws a `NotAllowableMakerMargin` if the maker margin is not within the allowable range based on the absolute quantity and min/max take-profit basis points (BPS).
     Throws an `ExceedMaxAllowableTradingFee` if the total trading fee (including protocol fee) exceeds the maximum allowable trading fee (`maxAllowableTradingFee`).
     Throws a `NotEnoughMarginTransferred` if the margin settlement token balance did not increase by the required margin amount after the callback.

Requirements:
 - The `takerMargin` must be greater than or equal to the minimum required margin for the settlement token.
 - The position parameters must pass the validity check, including leverage limits and allowable margin ranges.
 - The position is assigned a new ID and stored in the position storage.
 - A keeper task for potential liquidation is created by the liquidator.
 - An `OpenPosition` event is emitted with the owner's address and the newly opened position details._

| Name | Type | Description |
| ---- | ---- | ----------- |
| qty | int224 | The quantity of the position. |
| leverage | uint32 | The leverage of the position in basis points. |
| takerMargin | uint256 | The margin amount provided by the taker. |
| makerMargin | uint256 | The margin amount provided by the maker. |
| maxAllowableTradingFee | uint256 | The maximum allowable trading fee for the position. |
| data | bytes | Additional data for the position callback. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| position | struct Position | The opened position. |

### closePosition

```solidity
function closePosition(uint256 positionId) external
```

_This function allows the owner of the position to close it. The position must exist, be owned by the caller,
     and not have already been closed. Upon successful closure, the position is settled, and a `ClosePosition` event is emitted.
     If the position is closed in a different oracle version than the open version, a claim position task is created by the liquidator.
     Otherwise, the position is immediately claimed, and a `ClaimPosition` event is emitted.
     Throws a `NotExistPosition` error if the specified position does not exist.
     Throws a `NotPermitted` error if the caller is not the owner of the position.
     Throws an `AlreadyClosedPosition` error if the position has already been closed.
     Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(uint256 positionId, address recipient, bytes data) external
```

_Claims the position by transferring the available funds to the recipient.
     The caller must be the owner of the position.
     The position must be eligible for claim in the current oracle version.
     The claimed amount is determined based on the position's profit and loss (pnl).
     Throws a `NotExistPosition` error if the requested position does not exist.
     Throws a `NotPermitted` error if the caller is not permitted to perform the action as they are not the owner of the position.
     Throws a `NotClaimablePosition` error if the position cannot be claimed as it is not eligible for claim in the current oracle version.
     Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to claim. |
| recipient | address | The address of the recipient of the claimed position. |
| data | bytes | Additional data for the claim callback. |

### getPositions

```solidity
function getPositions(uint256[] positionIds) external view returns (struct Position[] _positions)
```

_Retrieves multiple positions by their IDs._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionIds | uint256[] | The IDs of the positions to retrieve. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| _positions | struct Position[] |  |

