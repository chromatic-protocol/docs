---
id: Mate2Liquidator
title: Mate2Liquidator.sol
---
# [Mate2Liquidator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/Mate2Liquidator.sol)

## Mate2Liquidator

_A contract that handles the liquidation and claiming of positions in Chromatic markets.
     It implements the ILiquidator and the IMate2Automation interface._

### automate

```solidity
contract IMate2AutomationRegistry automate
```

### UpkeepType

```solidity
enum UpkeepType {
  LiquidatePosition,
  ClaimPosition
}
```

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate) public
```

_Constructor function._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _factory | contract IChromaticMarketFactory | The address of the Chromatic Market Factory contract. |
  | _automate | address | The address of the Mate2 Automate contract. |

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
function resolveLiquidation(address _market, uint256 positionId) public view returns (bool canExec, bytes execPayload)
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
function resolveClaimPosition(address _market, uint256 positionId) public view returns (bool canExec, bytes execPayload)
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

### _registerUpkeep

```solidity
function _registerUpkeep(mapping(address => mapping(uint256 => uint256)) registry, uint256 positionId, enum Mate2Liquidator.UpkeepType upkeepType) internal
```

_Internal function to create a Mate2 upkeep for liquidation or claim position._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | registry | mapping(address &#x3D;&gt; mapping(uint256 &#x3D;&gt; uint256)) | The mapping to store task IDs. |
  | positionId | uint256 | The ID of the position. |
  | upkeepType | enum Mate2Liquidator.UpkeepType |  |

### _cancelUpkeep

```solidity
function _cancelUpkeep(mapping(address => mapping(uint256 => uint256)) registry, uint256 positionId) internal
```

_Internal function to cancel a Mate2 upkeep._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | registry | mapping(address &#x3D;&gt; mapping(uint256 &#x3D;&gt; uint256)) | The mapping storing task IDs. |
  | positionId | uint256 | The ID of the position. |

### checkUpkeep

```solidity
function checkUpkeep(bytes checkData) external view returns (bool upkeepNeeded, bytes performData)
```

method that is simulated by the keepers to see if any work actually
needs to be performed. This method does does not actually need to be
executable, and since it is only ever simulated it can consume lots of gas.

_To ensure that it is never called, you may want to add the
cannotExecute modifier from KeeperBase to your implementation of this
method._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | checkData | bytes | specified in the upkeep registration so it is always the same for a registered upkeep. This can easily be broken down into specific arguments using `abi.decode`, so multiple upkeeps can be registered on the same contract and easily differentiated by the contract. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | upkeepNeeded | bool | boolean to indicate whether the keeper should call performUpkeep or not. |
  | performData | bytes | bytes that the keeper should call performUpkeep with, if upkeep is needed. If you would like to encode data to decode later, try `abi.encode`. |

### performUpkeep

```solidity
function performUpkeep(bytes performData) external
```

method that is actually executed by the keepers, via the registry.
The data returned by the checkUpkeep simulation will be passed into
this method to actually be executed.

_The input to this method should not be trusted, and the caller of the
method should not even be restricted to any single registry. Anyone should
be able call it, and the input should be validated, there is no guarantee
that the data passed in is the performData returned from checkUpkeep. This
could happen due to malicious keepers, racing keepers, or simply a state
change while the performUpkeep transaction is waiting for confirmation.
Always validate the data passed in._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | performData | bytes | is the data which was passed back from the checkData simulation. If it is encoded, it can easily be decoded into other types by calling `abi.decode`. This data should not be trusted, and should be validated against the contract's current state. |

### getLiquidationTaskId

```solidity
function getLiquidationTaskId(address market, uint256 positionId) external view returns (bytes32 taskId)
```

### getLiquidationUpkeepId

```solidity
function getLiquidationUpkeepId(address market, uint256 positionId) public view returns (uint256 upkeepId)
```

### getClaimPositionTaskId

```solidity
function getClaimPositionTaskId(address market, uint256 positionId) external view returns (bytes32 taskId)
```

### getClaimPositionUpkeepId

```solidity
function getClaimPositionUpkeepId(address market, uint256 positionId) public view returns (uint256 upkeepId)
```

### _getFeeInfo

```solidity
function _getFeeInfo() internal view returns (uint256 fee, address feePayee)
```

