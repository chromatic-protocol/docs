---
id: IMarketTrade
title: IMarketTrade.sol
---
# [IMarketTrade.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketTrade.sol)

## OpenPositionInfo

```solidity
struct OpenPositionInfo {
  uint256 id;
  uint256 openVersion;
  int256 qty;
  uint256 openTimestamp;
  uint256 takerMargin;
  uint256 makerMargin;
  uint256 tradingFee;
}
```

_The OpenPositionInfo struct represents a opened trading position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The position identifier |
| openVersion | uint256 | The version of the oracle when the position was opened |
| closeVersion |  | The version of the oracle when the position was closed |
| qty | int256 | The quantity of the position |
| openTimestamp | uint256 | The timestamp when the position was opened |
| closeTimestamp |  | The timestamp when the position was closed |
| takerMargin | uint256 | The amount of collateral that a trader must provide |
| makerMargin | uint256 | The margin amount provided by the maker. |
| tradingFee | uint256 | The trading fee associated with the position. |

## ClosePositionInfo

```solidity
struct ClosePositionInfo {
  uint256 id;
  uint256 closeVersion;
  uint256 closeTimestamp;
}
```

_The ClosePositionInfo struct represents a closed trading position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The position identifier |
| closeVersion | uint256 | The version of the oracle when the position was closed |
| closeTimestamp | uint256 | The timestamp when the position was closed |

## ClaimPositionInfo

```solidity
struct ClaimPositionInfo {
  uint256 id;
  uint256 entryPrice;
  uint256 exitPrice;
  int256 realizedPnl;
  uint256 interest;
  bytes4 cause;
}
```

_The ClaimPositionInfo struct represents a claimed position information._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The position identifier |
| entryPrice | uint256 | The entry price of the position |
| exitPrice | uint256 | The exit price of the position |
| realizedPnl | int256 | The profit or loss of the claimed position. |
| interest | uint256 | The interest paid for the claimed position. |
| cause | bytes4 | The description of being claimed. |

## CLAIM_USER

```solidity
bytes4 CLAIM_USER
```

## CLAIM_KEEPER

```solidity
bytes4 CLAIM_KEEPER
```

## CLAIM_TP

```solidity
bytes4 CLAIM_TP
```

## CLAIM_SL

```solidity
bytes4 CLAIM_SL
```

## IMarketTrade

_Interface for trading positions in a market._

### OpenPosition

```solidity
event OpenPosition(address account, struct Position position)
```

_Emitted when a position is opened._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account opening the position. |
  | position | struct Position | The opened position. |

### ClosePosition

```solidity
event ClosePosition(address account, struct Position position)
```

_Emitted when a position is closed._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account closing the position. |
  | position | struct Position | The closed position. |

### ClaimPosition

```solidity
event ClaimPosition(address account, int256 pnl, uint256 interest, struct Position position)
```

_Emitted when a position is claimed._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | account | address | The address of the account claiming the position. |
  | pnl | int256 | The profit or loss of the claimed position. |
  | interest | uint256 | The interest paid for the claimed position. |
  | position | struct Position | The claimed position. |

### TransferProtocolFee

```solidity
event TransferProtocolFee(uint256 positionId, uint256 amount)
```

_Emitted when protocol fees are transferred._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position for which the fees are transferred. |
  | amount | uint256 | The amount of fees transferred. |

### openPosition

```solidity
function openPosition(int256 qty, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee, bytes data) external returns (struct OpenPositionInfo)
```

_Opens a new position in the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | qty | int256 | The quantity of the position. |
  | takerMargin | uint256 | The margin amount provided by the taker. |
  | makerMargin | uint256 | The margin amount provided by the maker. |
  | maxAllowableTradingFee | uint256 | The maximum allowable trading fee for the position. |
  | data | bytes | Additional data for the position callback. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct OpenPositionInfo | The opened position. |

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

### getPositions

```solidity
function getPositions(uint256[] positionIds) external view returns (struct Position[] positions)
```

_Retrieves multiple positions by their IDs._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionIds | uint256[] | The IDs of the positions to retrieve. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positions | struct Position[] | An array of retrieved positions. |

