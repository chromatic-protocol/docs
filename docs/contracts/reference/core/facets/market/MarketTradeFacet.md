---
id: MarketTradeFacet
title: MarketTradeFacet.sol
---
# [MarketTradeFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketTradeFacet.sol)

## MarketTradeFacet

_A contract that manages trading positions._

### ZeroTargetAmount

```solidity
error ZeroTargetAmount()
```

### TooSmallTakerMargin

```solidity
error TooSmallTakerMargin()
```

### NotEnoughMarginTransfered

```solidity
error NotEnoughMarginTransfered()
```

### NotPermitted

```solidity
error NotPermitted()
```

### AlreadyClosedPosition

```solidity
error AlreadyClosedPosition()
```

### NotClaimablePosition

```solidity
error NotClaimablePosition()
```

### ExceedMaxAllowableTradingFee

```solidity
error ExceedMaxAllowableTradingFee()
```

### ExceedMaxAllowableLeverage

```solidity
error ExceedMaxAllowableLeverage()
```

### NotAllowableTakerMargin

```solidity
error NotAllowableTakerMargin()
```

### NotAllowableMakerMargin

```solidity
error NotAllowableMakerMargin()
```

### openPosition

```solidity
function openPosition(int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee, bytes data) external returns (struct Position position)
```

_Opens a new position in the market._

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

_Closes a position in the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(uint256 positionId, address recipient, bytes data) external
```

_Claims a closed position in the market._

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

