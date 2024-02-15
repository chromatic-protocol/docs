---
id: MarketTradeClosePositionFacet
title: MarketTradeClosePositionFacet.sol
---
# [MarketTradeClosePositionFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketTradeClosePositionFacet.sol)

## MarketTradeClosePositionFacet

_A contract that manages trading positions._

### closePosition

```solidity
function closePosition(uint256 positionId) external returns (struct ClosePositionInfo closed)
```

_This function allows the owner of the position to close it. The position must exist, be owned by the caller,
     and not have already been closed. Upon successful closure, the position is settled, and a `ClosePosition` event is emitted.
     If the position is closed in a different oracle version than the open version, a claim position task is created by the liquidator.
     Otherwise, the position is immediately claimed, and a `ClaimPosition` event is emitted.
     Throws a `NotExistPosition` error if the specified position does not exist.
     Throws a `NotPermitted` error if the caller is not the owner of the position.
     Throws an `AlreadyClosedPosition` error if the position has already been closed.
     Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to close. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | closed | struct ClosePositionInfo | The closed position. |

### claimPosition

```solidity
function claimPosition(uint256 positionId, address recipient, bytes data) external
```

_Claims the position by transferring the available funds to the recipient.
     The caller must be the owner of the position.
     The position must be eligible for claim in the current oracle version.
     The claimed amount is determined based on the position's profit and loss (pnl).
     Throws a `NotExistPosition` error if the requested position does not exist.
     Throws a `NotPermitted` error if the caller is not permitted to perform the action as they are not the owner of the position.
     Throws a `NotClaimablePosition` error if the position cannot be claimed as it is not eligible for claim in the current oracle version.
     Throws a `ClaimPositionCallbackError` error if an error occurred during the claim position callback._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to claim. |
  | recipient | address | The address of the recipient of the claimed position. |
  | data | bytes | Additional data for the claim callback. |

### _requireClosePositionEnabled

```solidity
function _requireClosePositionEnabled(struct MarketStorage ms) internal view virtual
```

_Throws if close position is disabled._

