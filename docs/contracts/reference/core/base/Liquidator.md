# Solidity API

## Liquidator

_An abstract contract for liquidation functionality in the Chromatic protocol._

### factory

```solidity
contract IChromaticMarketFactory factory
```

### onlyMarket

```solidity
modifier onlyMarket()
```

_Modifier to check if the calling contract is a registered market._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory) internal
```

_Initializes the Liquidator contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _factory | contract IChromaticMarketFactory | The address of the ChromaticMarketFactory contract. |

### getAutomate

```solidity
function getAutomate() internal view virtual returns (contract IAutomate)
```

_Retrieves the IAutomate contract instance._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IAutomate | IAutomate The IAutomate contract instance. |

### createLiquidationTask

```solidity
function createLiquidationTask(uint256 positionId) external
```

Creates a liquidation task for a given position.

_Can only be called by a registered market._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to be liquidated. |

### cancelLiquidationTask

```solidity
function cancelLiquidationTask(uint256 positionId) external
```

Cancels a liquidation task for a given position.

_Can only be called by a registered market._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position for which to cancel the liquidation task. |

### resolveLiquidation

```solidity
function resolveLiquidation(address _market, uint256 positionId) external view returns (bool canExec, bytes execPayload)
```

Resolves the liquidation of a position.

_This function is called by the Gelato automation system._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _market | address |  |
| positionId | uint256 | The ID of the position to be liquidated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| canExec | bool | Whether the liquidation can be executed. |
| execPayload | bytes | The encoded function call to execute the liquidation. |

### _liquidate

```solidity
function _liquidate(address _market, uint256 positionId, uint256 fee) internal
```

_Internal function to perform the liquidation of a position._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be liquidated. |
| fee | uint256 | The fee to be paid for the liquidation. |

### createClaimPositionTask

```solidity
function createClaimPositionTask(uint256 positionId) external
```

Creates a claim position task for a given position.

_Can only be called by a registered market._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position to be claimed. |

### cancelClaimPositionTask

```solidity
function cancelClaimPositionTask(uint256 positionId) external
```

Cancels a claim position task for a given position.

_Can only be called by a registered market._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the position for which to cancel the claim position task. |

### resolveClaimPosition

```solidity
function resolveClaimPosition(address _market, uint256 positionId) external view returns (bool canExec, bytes execPayload)
```

Resolves the claim of a position.

_This function is called by the Gelato automation system._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _market | address |  |
| positionId | uint256 | The ID of the position to be claimed. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| canExec | bool | Whether the claim can be executed. |
| execPayload | bytes | The encoded function call to execute the claim. |

### _claimPosition

```solidity
function _claimPosition(address _market, uint256 positionId, uint256 fee) internal
```

_Internal function to perform the claim of a position._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _market | address | The address of the market contract. |
| positionId | uint256 | The ID of the position to be claimed. |
| fee | uint256 | The fee to be paid for the claim. |

### _createTask

```solidity
function _createTask(mapping(address => mapping(uint256 => bytes32)) registry, uint256 positionId, function (address,uint256) view external returns (bool,bytes) resolve, uint256 interval) internal
```

_Internal function to create a Gelato task for liquidation or claim position._

#### Parameters

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| registry | mapping(address &#x3D;&gt; mapping(uint256 &#x3D;&gt; bytes32)) | The mapping storing task IDs. |
| positionId | uint256 | The ID of the position. |

