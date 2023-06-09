# Solidity API

## BinPendingPosition

```solidity
struct BinPendingPosition {
  uint256 openVersion;
  int256 totalLeveragedQty;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
  struct AccruedInterest accruedInterest;
}
```

## BinPendingPositionLib

Library for managing pending positions in the `LiquidityBin`

### settleAccruedInterest

```solidity
function settleAccruedInterest(struct BinPendingPosition self, struct LpContext ctx) internal
```

Settles the accumulated interest of the pending position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPendingPosition | The BinPendingPosition storage. |
| ctx | struct LpContext | The LpContext. |

### onOpenPosition

```solidity
function onOpenPosition(struct BinPendingPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Handles the opening of a position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPendingPosition | The BinPendingPosition storage. |
| ctx | struct LpContext |  |
| param | struct PositionParam | The position parameters. |

### onClosePosition

```solidity
function onClosePosition(struct BinPendingPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Handles the closing of a position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPendingPosition | The BinPendingPosition storage. |
| ctx | struct LpContext | The LpContext. |
| param | struct PositionParam | The position parameters. |

### unrealizedPnl

```solidity
function unrealizedPnl(struct BinPendingPosition self, struct LpContext ctx) internal view returns (int256)
```

Calculates the unrealized profit or loss (PnL) of the pending position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPendingPosition | The BinPendingPosition storage. |
| ctx | struct LpContext | The LpContext. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | uint256 The unrealized PnL. |

### currentInterest

```solidity
function currentInterest(struct BinPendingPosition self, struct LpContext ctx) internal view returns (uint256)
```

Calculates the current accrued interest of the pending position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPendingPosition | The BinPendingPosition storage. |
| ctx | struct LpContext | The LpContext. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The current accrued interest. |

### entryPrice

```solidity
function entryPrice(struct BinPendingPosition self, struct LpContext ctx) internal view returns (UFixed18)
```

Calculates the entry price of the pending position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinPendingPosition | The BinPendingPosition storage. |
| ctx | struct LpContext | The LpContext. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | UFixed18 | UFixed18 The entry price. |

