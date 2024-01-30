---
id: MarketTradeFacetBase
title: MarketTradeFacetBase.sol
---
# [MarketTradeFacetBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketTradeFacetBase.sol)

## MarketTradeFacetBase

### CLAIM_POSITION_CALLBACK_GASLIMIT

```solidity
uint32 CLAIM_POSITION_CALLBACK_GASLIMIT
```

### NotExistPosition

```solidity
error NotExistPosition()
```

_Throws an error indicating that the requested position does not exist._

### ClaimPositionCallbackError

```solidity
error ClaimPositionCallbackError()
```

_Throws an error indicating that an error occurred during the claim position callback._

### _claimPosition

```solidity
function _claimPosition(struct LpContext ctx, struct Position position, int256 pnl, uint256 usedKeeperFee, address recipient, bytes data, bytes4 cause) internal returns (uint256 interest)
```

_Internal function for claiming a position._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | ctx | struct LpContext | The LpContext containing the current oracle version and synchronization information. |
  | position | struct Position | The Position object representing the position to be claimed. |
  | pnl | int256 | The profit or loss amount of the position. |
  | usedKeeperFee | uint256 | The amount of the keeper fee used. |
  | recipient | address | The address of the recipient (EOA or account contract) receiving the settlement. |
  | data | bytes | Additional data for the claim position callback. |
  | cause | bytes4 | The description of being claimed. |

### _callClaimPositionCallback

```solidity
function _callClaimPositionCallback(struct LpContext ctx, struct Position position, int256 realizedPnl, uint256 interest, bytes data, bytes4 cause) internal
```

### _getPosition

```solidity
function _getPosition(struct PositionStorage ps, uint256 positionId) internal view returns (struct Position position)
```

