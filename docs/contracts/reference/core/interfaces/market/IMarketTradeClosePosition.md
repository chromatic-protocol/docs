---
id: IMarketTradeClosePosition
title: IMarketTradeClosePosition.sol
---
# [IMarketTradeClosePosition.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketTradeClosePosition.sol)

## IMarketTradeClosePosition

_Interface for closing and claiming positions in a market._

### closePosition

```solidity
function closePosition(uint256 positionId) external returns (struct ClosePositionInfo)
```

_Closes a position in the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to close. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct ClosePositionInfo | The closed position. |

### claimPosition

```solidity
function claimPosition(uint256 positionId, address recipient, bytes data) external
```

_Claims a closed position in the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to claim. |
  | recipient | address | The address of the recipient of the claimed position. |
  | data | bytes | Additional data for the claim callback. |

