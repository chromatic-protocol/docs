---
id: MarketLiquidateFacet
title: MarketLiquidateFacet.sol
---
# [MarketLiquidateFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketLiquidateFacet.sol)

## MarketLiquidateFacet

_A contract that manages liquidations._

### AlreadyClosedPosition

```solidity
error AlreadyClosedPosition()
```

### NotClaimablePosition

```solidity
error NotClaimablePosition()
```

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

