---
id: IMarketLiquidate
title: IMarketLiquidate.sol
---
# [IMarketLiquidate.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketLiquidate.sol)

## IMarketLiquidate

_Interface for liquidating and claiming positions in a market._

### checkLiquidation

```solidity
function checkLiquidation(uint256 positionId) external view returns (bool)
```

_Checks if a position is eligible for liquidation._

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean indicating if the position is eligible for liquidation. |

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

