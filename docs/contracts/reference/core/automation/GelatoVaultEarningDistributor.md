---
id: GelatoVaultEarningDistributor
title: GelatoVaultEarningDistributor.sol
---
# [GelatoVaultEarningDistributor.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/GelatoVaultEarningDistributor.sol)

## GelatoVaultEarningDistributor

### makerEarningDistributionTaskIds

```solidity
mapping(address => bytes32) makerEarningDistributionTaskIds
```

### marketEarningDistributionTaskIds

```solidity
mapping(address => bytes32) marketEarningDistributionTaskIds
```

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate) public
```

### createMakerEarningDistributionTask

```solidity
function createMakerEarningDistributionTask(address token) external
```

Creates a maker earning distribution task for a token.

_This function can only be called by the Chromatic factory contract or the DAO.
     Throws an `ExistMakerEarningDistributionTask` error if a maker earning distribution task already exists for the token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### cancelGelatoTask

```solidity
function cancelGelatoTask(bytes32 taskId) external
```

### cancelMakerEarningDistributionTask

```solidity
function cancelMakerEarningDistributionTask(address token) external
```

Cancels a maker earning distribution task for a token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### resolveMakerEarningDistribution

```solidity
function resolveMakerEarningDistribution(address token) external view returns (bool canExec, bytes execPayload)
```

Resolves the maker earning distribution for a specific token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | True if the distribution can be executed, otherwise False. |
  | execPayload | bytes | The payload for executing the distribution. |

### createMarketEarningDistributionTask

```solidity
function createMarketEarningDistributionTask(address market) external
```

Creates a market earning distribution task for a market.

_This function can only be called by the Chromatic factory contract or the DAO.
     Throws an `ExistMarketEarningDistributionTask` error if a market earning distribution task already exists for the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

### cancelMarketEarningDistributionTask

```solidity
function cancelMarketEarningDistributionTask(address market) external
```

Cancels a market earning distribution task for a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

### resolveMarketEarningDistribution

```solidity
function resolveMarketEarningDistribution(address market) external view returns (bool canExec, bytes execPayload)
```

Resolves the market earning distribution for a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | True if the distribution can be executed. |
  | execPayload | bytes | The payload for executing the distribution. |

### _getFeeInfo

```solidity
function _getFeeInfo() internal view returns (uint256 fee, address feePayee)
```

### _resolverModuleArg

```solidity
function _resolverModuleArg(bytes _resolverData) internal view returns (bytes)
```

### _timeTriggerModuleArg

```solidity
function _timeTriggerModuleArg(uint256 _startTime, uint256 _interval) internal pure returns (bytes)
```

### _proxyModuleArg

```solidity
function _proxyModuleArg() internal pure returns (bytes)
```

