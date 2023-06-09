# Solidity API

## BinClosingPositionLib

A library that provides functions to manage the closing position within an LiquidityBin.

### settleAccruedInterest

```solidity
function settleAccruedInterest(struct BinClosingPosition self, struct LpContext ctx) internal
```

Settles the accumulated interest of the closing position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinClosingPosition | The BinClosingPosition storage. |
| ctx | struct LpContext | The LpContext. |

### onClosePosition

```solidity
function onClosePosition(struct BinClosingPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Handles the closing of a position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinClosingPosition | The BinClosingPosition storage. |
| ctx | struct LpContext | The LpContext. |
| param | struct PositionParam | The position parameters. |

### onClaimPosition

```solidity
function onClaimPosition(struct BinClosingPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Handles the claiming of a position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct BinClosingPosition | The BinPendingPosition storage. |
| ctx | struct LpContext | The LpContext. |
| param | struct PositionParam | The position parameters. |

