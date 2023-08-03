---
id: IChromaticTradeCallback
title: IChromaticTradeCallback.sol
---
# [IChromaticTradeCallback.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/callback/IChromaticTradeCallback.sol)

## IChromaticTradeCallback

_The interface for handling callbacks related to Chromatic trading operations._

### openPositionCallback

```solidity
function openPositionCallback(address settlementToken, address vault, uint256 marginRequired, bytes data) external
```

Callback function called after opening a position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | settlementToken | address | The address of the settlement token used in the position. |
  | vault | address | The address of the vault contract. |
  | marginRequired | uint256 | The amount of margin required for the position. |
  | data | bytes | Additional data related to the callback. |

### claimPositionCallback

```solidity
function claimPositionCallback(struct Position position, uint256 entryPrice, uint256 exitPrice, int256 realizedPnl, uint256 interest, bytes data) external
```

Callback function called after claiming a position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | position | struct Position | The claimed position. |
  | entryPrice | uint256 | The entry price of the position |
  | exitPrice | uint256 | The exit price of the position |
  | realizedPnl | int256 | The realized position pnl (taker side). |
  | interest | uint256 | The interest paid for the claimed position. |
  | data | bytes | Additional data related to the callback. |

