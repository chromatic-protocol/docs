# Solidity API

## BinClosedPosition

```solidity
struct BinClosedPosition {
  uint256 _totalMakerMargin;
  struct BinClosingPosition _closing;
  struct EnumerableSet.UintSet _waitingVersions;
  mapping(uint256 => struct _ClaimWaitingPosition) _waitingPositions;
  struct AccruedInterest _accruedInterest;
}
```

## _ClaimWaitingPosition

```solidity
struct _ClaimWaitingPosition {
  int256 totalLeveragedQty;
  uint256 totalEntryAmount;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
}
```

## BinClosedPositionLib

A library that provides functions to manage the closed position within an LiquidityBin.

### settleClosingPosition

```solidity
function settleClosingPosition(struct BinClosedPosition self, struct LpContext ctx) internal
```

Settles the closing position within the BinClosedPosition.

_If the closeVersion is not set or is equal to the current oracle version, no action is taken.
     Otherwise, the waiting position is stored and the accrued interest is accumulated._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinClosedPosition | The BinClosedPosition storage. |
| ctx | struct LpContext | The LpContext memory. |

### onClosePosition

```solidity
function onClosePosition(struct BinClosedPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Closes the position within the BinClosedPosition.

_Delegates the onClosePosition function call to the underlying BinClosingPosition._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinClosedPosition | The BinClosedPosition storage. |
| ctx | struct LpContext | The LpContext memory. |
| param | struct PositionParam | The PositionParam memory. |

### onClaimPosition

```solidity
function onClaimPosition(struct BinClosedPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Claims the position within the BinClosedPosition.

_If the closeVersion is equal to the BinClosingPosition's closeVersion, the claim is made directly.
     Otherwise, the claim is made from the waiting position, and if exhausted, the waiting position is removed.
     The accrued interest is accumulated and deducted accordingly._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinClosedPosition | The BinClosedPosition storage. |
| ctx | struct LpContext | The LpContext memory. |
| param | struct PositionParam | The PositionParam memory. |

