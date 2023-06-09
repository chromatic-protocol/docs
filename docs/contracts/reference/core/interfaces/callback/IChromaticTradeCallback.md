# Solidity API

## IChromaticTradeCallback

_The interface for handling callbacks related to Chromatic trading operations._

### openPositionCallback

```solidity
function openPositionCallback(address settlementToken, address vault, uint256 marginRequired, bytes data) external
```

Callback function called after opening a position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The address of the settlement token used in the position. |
| vault | address | The address of the vault contract. |
| marginRequired | uint256 | The amount of margin required for the position. |
| data | bytes | Additional data related to the callback. |

### claimPositionCallback

```solidity
function claimPositionCallback(uint256 positionId, bytes data) external
```

Callback function called after claiming a position.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the claimed position. |
| data | bytes | Additional data related to the callback. |

