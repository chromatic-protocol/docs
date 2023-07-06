---
id: Trade
title: Trade.sol
---
# [Trade.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/base/market/Trade.sol)

## Trade

_A contract that manages trading positions and liquidations._

### _positionId

```solidity
uint256 _positionId
```

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

### NotExistPosition

```solidity
error NotExistPosition()
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

### ClaimPositionCallbackError

```solidity
error ClaimPositionCallbackError()
```

### openPosition

```solidity
function openPosition(int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee, bytes data) external returns (struct Position)
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
| [0] | struct Position | The opened position. |

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

### claimPosition

```solidity
function claimPosition(uint256 positionId, address keeper, uint256 keeperFee) external
```

_Claims a closed position on behalf of a keeper._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to claim. |
| keeper | address | The address of the keeper claiming the position. |
| keeperFee | uint256 | The native token amount of the keeper's fee. |

### liquidate

```solidity
function liquidate(uint256 positionId, address keeper, uint256 keeperFee) external
```

_Liquidates a position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to liquidate. |
| keeper | address | The address of the keeper performing the liquidation. |
| keeperFee | uint256 | The native token amount of the keeper's fee. |

### _claimPosition

```solidity
function _claimPosition(struct LpContext ctx, struct Position position, int256 pnl, uint256 usedKeeperFee, address recipient, bytes data) internal
```

_Internal function for claiming a position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| ctx | struct LpContext | The LpContext containing the current oracle version and synchronization information. |
| position | struct Position | The Position object representing the position to be claimed. |
| pnl | int256 | The profit or loss amount of the position. |
| usedKeeperFee | uint256 | The amount of the keeper fee used. |
| recipient | address | The address of the recipient (EOA or account contract) receiving the settlement. |
| data | bytes | Additional data for the claim position callback. |

### checkLiquidation

```solidity
function checkLiquidation(uint256 positionId) external view returns (bool _liquidate)
```

_Checks if a position is eligible for liquidation._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| _liquidate | bool | A boolean indicating if the position is eligible for liquidation. |

### _checkLiquidation

```solidity
function _checkLiquidation(struct LpContext ctx, struct Position position) internal view returns (bool _liquidate, int256 _pnl)
```

_Internal function for checking if a position should be liquidated._

| Name | Type | Description |
| ---- | ---- | ----------- |
| ctx | struct LpContext | The LpContext containing the current oracle version and synchronization information. |
| position | struct Position | The Position object representing the position to be checked. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| _liquidate | bool | A boolean indicating whether the position should be liquidated. |
| _pnl | int256 | The profit or loss amount of the position. |

### checkClaimPosition

```solidity
function checkClaimPosition(uint256 positionId) external view returns (bool)
```

_Checks if a position is eligible for claim._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean indicating if the position is eligible for claim. |

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

### setFeeProtocol

```solidity
function setFeeProtocol(uint8 feeProtocol) external
```

Set the denominator of the protocol's % share of the fees

| Name | Type | Description |
| ---- | ---- | ----------- |
| feeProtocol | uint8 | new protocol fee for the market |

