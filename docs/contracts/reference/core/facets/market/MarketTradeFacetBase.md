---
id: MarketTradeFacetBase
title: MarketTradeFacetBase.sol
---
# [MarketTradeFacetBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketTradeFacetBase.sol)

## MarketTradeFacetBase

### NotExistPosition

```solidity
error NotExistPosition()
```

### ClaimPositionCallbackError

```solidity
error ClaimPositionCallbackError()
```

### _claimPosition

```solidity
function _claimPosition(struct LpContext ctx, struct Position position, int256 pnl, uint256 usedKeeperFee, address recipient, bytes data) internal returns (uint256 interest)
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

### _getPosition

```solidity
function _getPosition(struct PositionStorage ps, uint256 positionId) internal view returns (struct Position position)
```
