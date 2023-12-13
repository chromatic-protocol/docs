---
id: GelatoLiquidator
title: GelatoLiquidator.sol
---
# [GelatoLiquidator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/GelatoLiquidator.sol)

## GelatoLiquidator

_A contract that handles the liquidation and claiming of positions in Chromatic markets.
     It extends the AutomateReady contracts and implements the ILiquidator interface._

### waitPositionClaim

```solidity
uint256 waitPositionClaim
```

### WaitPositionClaimUpdated

```solidity
event WaitPositionClaimUpdated(uint256 waitingTime)
```

Emitted when the waiting time of the claim task is updated.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | waitingTime | uint256 | The new waiting time of the claim task. |

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate) public
```

_Constructor function._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _factory | contract IChromaticMarketFactory | The address of the Chromatic Market Factory contract. |
  | _automate | address | The address of the Gelato Automate contract. |

### updateWaitPositionClaim

```solidity
function updateWaitPositionClaim(uint256 waitingTime) external
```

Updates the waiting time of the claim task.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | waitingTime | uint256 | The new waiting time of the claim task. |

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

### cancelGelatoTask

```solidity
function cancelGelatoTask(bytes32 taskId) external
```

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

