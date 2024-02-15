---
id: Mate2VaultEarningDistributor
title: Mate2VaultEarningDistributor.sol
---
# [Mate2VaultEarningDistributor.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/Mate2VaultEarningDistributor.sol)

## Mate2VaultEarningDistributor

### DEFAULT_UPKEEP_GAS_LIMIT

```solidity
uint32 DEFAULT_UPKEEP_GAS_LIMIT
```

### automate

```solidity
contract IMate2AutomationRegistry1_1 automate
```

### upkeepGasLimit

```solidity
uint32 upkeepGasLimit
```

### makerEarningDistributionUpkeepIds

```solidity
mapping(address => uint256) makerEarningDistributionUpkeepIds
```

### marketEarningDistributionUpkeepIds

```solidity
mapping(address => uint256) marketEarningDistributionUpkeepIds
```

### UpkeepType

```solidity
enum UpkeepType {
  MakerEarningDistribution,
  MarketEarningDistribution
}
```

### UpkeepGasLimitUpdated

```solidity
event UpkeepGasLimitUpdated(uint32 gasLimitOld, uint32 gasLimitNew)
```

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate) public
```

### checkUpkeep

```solidity
function checkUpkeep(bytes checkData, bytes) external view returns (bool upkeepNeeded, bytes performData)
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
  |  | bytes |  |

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
function resolveMakerEarningDistribution(address token) public view returns (bool canExec, bytes execPayload)
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
function resolveMarketEarningDistribution(address market) public view returns (bool canExec, bytes execPayload)
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

### cancelUpkeep

```solidity
function cancelUpkeep(uint256 upkeepId) external
```

### updateUpkeepGasLimit

```solidity
function updateUpkeepGasLimit(uint32 gasLimit) external
```

