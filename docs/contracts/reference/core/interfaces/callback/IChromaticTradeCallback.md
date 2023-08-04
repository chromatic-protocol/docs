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
function claimPositionCallback(struct Position position, struct ClaimPositionInfo claimInfo, bytes data) external
```

Callback function called after claiming a position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | position | struct Position | The claimed position. |
  | claimInfo | struct ClaimPositionInfo | The pnl related information of the claim |
  | data | bytes | Additional data related to the callback. |

