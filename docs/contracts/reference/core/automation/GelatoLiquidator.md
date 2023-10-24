---
id: GelatoLiquidator
title: GelatoLiquidator.sol
---
# [GelatoLiquidator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/GelatoLiquidator.sol)

## GelatoLiquidator

_A contract that handles the liquidation and claiming of positions in Chromatic markets.
     It extends the AutomateReady contracts and implements the ILiquidator interface._

### liquidationInterval

```solidity
uint256 liquidationInterval
```

### claimInterval

```solidity
uint256 claimInterval
```

### UpdateLiquidationInterval

```solidity
event UpdateLiquidationInterval(uint256 interval)
```

Emitted when the liquidation task interval is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | interval | uint256 | The new liquidation task interval. |

### UpdateClaimInterval

```solidity
event UpdateClaimInterval(uint256 interval)
```

Emitted when the claim task interval is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | interval | uint256 | The new claim task interval. |

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate, address opsProxyFactory) public
```

_Constructor function._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _factory | contract IChromaticMarketFactory | The address of the Chromatic Market Factory contract. |
  | _automate | address | The address of the Gelato Automate contract. |
  | opsProxyFactory | address | The address of the Ops Proxy Factory contract. |

### updateLiquidationInterval

```solidity
function updateLiquidationInterval(uint256 interval) external
```

Updates the liquidation task interval.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | interval | uint256 | The new liquidation task interval. |

### updateClaimInterval

```solidity
function updateClaimInterval(uint256 interval) external
```

Updates the claim task interval.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | interval | uint256 | The new claim task interval. |

### createLiquidationTask

```solidity
function createLiquidationTask(uint256 positionId) external
```

Creates a liquidation task for a given position.

_Can only be called by a registered market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to be liquidated. |

### cancelLiquidationTask

```solidity
function cancelLiquidationTask(uint256 positionId) external
```

Cancels a liquidation task for a given position.

_Can only be called by a registered market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position for which to cancel the liquidation task. |

### resolveLiquidation

```solidity
function resolveLiquidation(address _market, uint256 positionId) external view returns (bool canExec, bytes execPayload)
```

Resolves the liquidation of a position.

_This function is called by the automation system._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _market | address |  |
  | positionId | uint256 | The ID of the position to be liquidated. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | Whether the liquidation can be executed. |
  | execPayload | bytes | The encoded function call to execute the liquidation. |

### createClaimPositionTask

```solidity
function createClaimPositionTask(uint256 positionId) external
```

Creates a claim position task for a given position.

_Can only be called by a registered market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position to be claimed. |

### cancelClaimPositionTask

```solidity
function cancelClaimPositionTask(uint256 positionId) external
```

Cancels a claim position task for a given position.

_Can only be called by a registered market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionId | uint256 | The ID of the position for which to cancel the claim position task. |

### resolveClaimPosition

```solidity
function resolveClaimPosition(address _market, uint256 positionId) external view returns (bool canExec, bytes execPayload)
```

Resolves the claim of a position.

_This function is called by the automation system._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _market | address |  |
  | positionId | uint256 | The ID of the position to be claimed. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | Whether the claim can be executed. |
  | execPayload | bytes | The encoded function call to execute the claim. |

### _createTask

```solidity
function _createTask(mapping(address => mapping(uint256 => bytes32)) registry, uint256 positionId, function (address,uint256) view external returns (bool,bytes) resolve, uint256 interval) internal
```

_Internal function to create a Gelato task for liquidation or claim position._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | registry | mapping(address &#x3D;&gt; mapping(uint256 &#x3D;&gt; bytes32)) | The mapping to store task IDs. |
  | positionId | uint256 | The ID of the position. |
  | resolve | function (address,uint256) view external returns (bool,bytes) | The resolve function to be called by the Gelato automation system. |
  | interval | uint256 | The interval between task executions. |

### _cancelTask

```solidity
function _cancelTask(mapping(address => mapping(uint256 => bytes32)) registry, uint256 positionId) internal
```

_Internal function to cancel a Gelato task._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | registry | mapping(address &#x3D;&gt; mapping(uint256 &#x3D;&gt; bytes32)) | The mapping storing task IDs. |
  | positionId | uint256 | The ID of the position. |

### getLiquidationTaskId

```solidity
function getLiquidationTaskId(address market, uint256 positionId) external view returns (bytes32 taskId)
```

### getClaimPositionTaskId

```solidity
function getClaimPositionTaskId(address market, uint256 positionId) external view returns (bytes32 taskId)
```

### _getFeeInfo

```solidity
function _getFeeInfo() internal view returns (uint256 fee, address feePayee)
```

