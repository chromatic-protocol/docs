---
id: IMarketTradeOpenPosition
title: IMarketTradeOpenPosition.sol
---
# [IMarketTradeOpenPosition.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketTradeOpenPosition.sol)

## IMarketTradeOpenPosition

_Interface for open positions in a market._

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

