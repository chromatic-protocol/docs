---
id: IChromaticLiquidator
title: IChromaticLiquidator.sol
---
# [IChromaticLiquidator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/IChromaticLiquidator.sol)

## IChromaticLiquidator

_Interface for the Chromatic Liquidator contract._

### UpdateLiquidationInterval

```solidity
event UpdateLiquidationInterval(uint256 interval)
```

Emitted when the liquidation task interval is updated.

| Name | Type | Description |
| ---- | ---- | ----------- |
| interval | uint256 | The new liquidation task interval. |

### UpdateClaimInterval

```solidity
event UpdateClaimInterval(uint256 interval)
```

Emitted when the claim task interval is updated.

| Name | Type | Description |
| ---- | ---- | ----------- |
| interval | uint256 | The new claim task interval. |

### updateLiquidationInterval

```solidity
function updateLiquidationInterval(uint256 interval) external
```

Updates the liquidation task interval.

| Name | Type | Description |
| ---- | ---- | ----------- |
| interval | uint256 | The new liquidation task interval. |

### updateClaimInterval

```solidity
function updateClaimInterval(uint256 interval) external
```

Updates the claim task interval.

| Name | Type | Description |
| ---- | ---- | ----------- |
| interval | uint256 | The new claim task interval. |

### createLiquidationTask

```solidity
function createLiquidationTask(uint256 positionId) external
```

Creates a liquidation task for a given position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to be liquidated. |

### cancelLiquidationTask

```solidity
function cancelLiquidationTask(uint256 positionId) external
```

Cancels a liquidation task for a given position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position for which to cancel the liquidation task. |

### resolveLiquidation

```solidity
function resolveLiquidation(address market, uint256 positionId) external view returns (bool canExec, bytes execPayload)
```

Resolves the liquidation of a position.

_This function is called by the Gelato automation system._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be liquidated. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| canExec | bool | Whether the liquidation can be executed. |
| execPayload | bytes | The encoded function call to execute the liquidation. |

### liquidate

```solidity
function liquidate(address market, uint256 positionId) external
```

Liquidates a position in a market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be liquidated. |

### createClaimPositionTask

```solidity
function createClaimPositionTask(uint256 positionId) external
```

Creates a claim position task for a given position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to be claimed. |

### cancelClaimPositionTask

```solidity
function cancelClaimPositionTask(uint256 positionId) external
```

Cancels a claim position task for a given position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position for which to cancel the claim position task. |

### resolveClaimPosition

```solidity
function resolveClaimPosition(address market, uint256 positionId) external view returns (bool canExec, bytes execPayload)
```

Resolves the claim of a position.

_This function is called by the Gelato automation system._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be claimed. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| canExec | bool | Whether the claim can be executed. |
| execPayload | bytes | The encoded function call to execute the claim. |

### claimPosition

```solidity
function claimPosition(address market, uint256 positionId) external
```

Claims a position in a market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be claimed. |

