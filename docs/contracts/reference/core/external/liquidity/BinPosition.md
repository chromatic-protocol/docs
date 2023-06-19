---
id: BinPosition
title: BinPosition.sol
---
# [BinPosition.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/external/liquidity/BinPosition.sol)

## BinPosition

Represents a position in the LiquidityBin

```solidity
struct BinPosition {
  int256 totalLeveragedQty;
  uint256 totalEntryAmount;
  uint256 _totalMakerMargin;
  uint256 _totalTakerMargin;
  struct BinPendingPosition _pending;
  struct AccruedInterest _accruedInterest;
}
```

## BinPositionLib

Library for managing positions in the `LiquidityBin`

### settlePendingPosition

```solidity
function settlePendingPosition(struct BinPosition self, struct LpContext ctx) internal
```

Settles pending positions for a liquidity bin position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPosition | The BinPosition storage struct. |
| ctx | struct LpContext | The LpContext data struct. |

### onOpenPosition

```solidity
function onOpenPosition(struct BinPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Handles the opening of a position for a liquidity bin.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPosition | The BinPosition storage. |
| ctx | struct LpContext | The LpContext data struct. |
| param | struct PositionParam | The PositionParam containing the position parameters. |

### onClosePosition

```solidity
function onClosePosition(struct BinPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Handles the closing of a position for a liquidity bin.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPosition | The BinPosition storage struct. |
| ctx | struct LpContext | The LpContext data struct. |
| param | struct PositionParam | The PositionParam data struct containing the position parameters. |

### totalMakerMargin

```solidity
function totalMakerMargin(struct BinPosition self) internal view returns (uint256)
```

Returns the total maker margin for a liquidity bin position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPosition | The BinPosition storage struct. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The total maker margin. |

### totalTakerMargin

```solidity
function totalTakerMargin(struct BinPosition self) internal view returns (uint256)
```

Returns the total taker margin for a liquidity bin position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPosition | The BinPosition storage struct. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The total taker margin. |

### unrealizedPnl

```solidity
function unrealizedPnl(struct BinPosition self, struct LpContext ctx) internal view returns (int256)
```

Calculates the unrealized profit or loss for a liquidity bin position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPosition | The BinPosition storage struct. |
| ctx | struct LpContext | The LpContext data struct. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | int256 The unrealized profit or loss. |

### currentInterest

```solidity
function currentInterest(struct BinPosition self, struct LpContext ctx) internal view returns (uint256)
```

_Calculates the current interest for a liquidity bin position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPosition | The BinPosition storage struct. |
| ctx | struct LpContext | The LpContext data struct. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The current interest. |

