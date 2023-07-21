---
id: BinClosingPosition
title: BinClosingPosition.sol
---
# [BinClosingPosition.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/liquidity/BinClosingPosition.sol)

## BinClosingPosition

```solidity
struct BinClosingPosition {
  uint256 closeVersion;
  int256 totalLeveragedQty;
  uint256 totalEntryAmount;
  uint256 totalMakerMargin;
  uint256 totalTakerMargin;
  AccruedInterest accruedInterest;
}
```

_Represents the closing position within an LiquidityBin._

| Name | Type | Description |
| ---- | ---- | ----------- |
| closeVersion | uint256 | The oracle version when the position was closed. |
| totalLeveragedQty | int256 | The total leveraged quantity of the closing position. |
| totalEntryAmount | uint256 | The total entry amount of the closing position. |
| totalMakerMargin | uint256 | The total maker margin of the closing position. |
| totalTakerMargin | uint256 | The total taker margin of the closing position. |
| accruedInterest | AccruedInterest | The accumulated interest of the closing position. |

## BinClosingPositionLib

A library that provides functions to manage the closing position within an LiquidityBin.

### settleAccruedInterest

```solidity
function settleAccruedInterest(struct BinClosingPosition self, struct LpContext ctx) internal
```

Settles the accumulated interest of the closing position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct BinClosingPosition | The BinClosingPosition storage. |
  | ctx | struct LpContext | The LpContext. |

### onClosePosition

```solidity
function onClosePosition(struct BinClosingPosition self, struct LpContext ctx, struct PositionParam param) internal
```

Handles the closing of a position.

_Throws an error with the code `Errors.INVALID_ORACLE_VERSION` if the `closeVersion` is not valid._

- Parameters:

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

_Throws an error with the code `Errors.INVALID_ORACLE_VERSION` if the `closeVersion` is not valid._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct BinClosingPosition | The BinPendingPosition storage. |
  | ctx | struct LpContext | The LpContext. |
  | param | struct PositionParam | The position parameters. |

### currentInterest

```solidity
function currentInterest(struct BinClosingPosition self, struct LpContext ctx) internal view returns (uint256)
```

Calculates the current accrued interest of the closing position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct BinClosingPosition | The BinClosingPosition storage. |
  | ctx | struct LpContext | The LpContext. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The current accrued interest. |

