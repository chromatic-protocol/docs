---
id: BinClosedPosition
title: BinClosedPosition.sol
---
# [BinClosedPosition.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/liquidity/BinClosedPosition.sol)

## BinClosedPosition

```solidity
struct BinClosedPosition {
  uint256 _totalMakerMargin;
  uint256 _totalTakerMargin;
  struct BinClosingPosition _closing;
  struct EnumerableSet.UintSet _waitingVersions;
  mapping(uint256 => struct _ClaimWaitingPosition) _waitingPositions;
  struct AccruedInterest _accruedInterest;
}
```

_Represents a closed position within an LiquidityBin._

## _ClaimWaitingPosition

```solidity
struct _ClaimWaitingPosition {
  int256 totalQty;
  uint256 totalEntryAmount;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
}
```

_Represents the accumulated values of the waiting positions to be claimed
     for a specific version within BinClosedPosition._

## BinClosedPositionLib

A library that provides functions to manage the closed position within an LiquidityBin.

### settleClosingPosition

```solidity
function settleClosingPosition(struct BinClosedPosition self, struct LpContext ctx) internal
```

Settles the closing position within the BinClosedPosition.

_If the closeVersion is not set or is equal to the current oracle version, no action is taken.
     Otherwise, the waiting position is stored and the accrued interest is accumulated._

- Parameters:

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

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct BinClosedPosition | The BinClosedPosition storage. |
  | ctx | struct LpContext | The LpContext memory. |
  | param | struct PositionParam | The PositionParam memory. |

### totalMakerMargin

```solidity
function totalMakerMargin(struct BinClosedPosition self) internal view returns (uint256)
```

Returns the total maker margin for a liquidity bin closed position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct BinClosedPosition | The BinClosedPosition storage struct. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The total maker margin. |

### totalTakerMargin

```solidity
function totalTakerMargin(struct BinClosedPosition self) internal view returns (uint256)
```

Returns the total taker margin for a liquidity bin closed position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct BinClosedPosition | The BinClosedPosition storage struct. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The total taker margin. |

### currentInterest

```solidity
function currentInterest(struct BinClosedPosition self, struct LpContext ctx) internal view returns (uint256)
```

_Calculates the current interest for a liquidity bin closed position._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct BinClosedPosition | The BinClosedPosition storage struct. |
  | ctx | struct LpContext | The LpContext data struct. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The current interest. |

