---
id: Mate2MarketSettlement
title: Mate2MarketSettlement.sol
---
# [Mate2MarketSettlement.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/Mate2MarketSettlement.sol)

## Mate2MarketSettlement

### DEFAULT_UPKEEP_GAS_LIMIT

```solidity
uint32 DEFAULT_UPKEEP_GAS_LIMIT
```

### factory

```solidity
contract IChromaticMarketFactory factory
```

### automate

```solidity
contract IMate2AutomationRegistry automate
```

### upkeepGasLimit

```solidity
uint32 upkeepGasLimit
```

### marketSettlementUpkeepIds

```solidity
mapping(address => uint256) marketSettlementUpkeepIds
```

### UpkeepGasLimitUpdated

```solidity
event UpkeepGasLimitUpdated(uint32 gasLimitOld, uint32 gasLimitNew)
```

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

_Throws an error indicating that the caller is neither the chromatic factory contract nor the DAO._

### ExistMarketSettlementTask

```solidity
error ExistMarketSettlementTask()
```

_Throws an error indicating that a market settlement task already exists._

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO.
     Throws an `OnlyAccessableByDao` error if the caller is not the DAO._

### onlyFactoryOrDao

```solidity
modifier onlyFactoryOrDao()
```

_Modifier to restrict access to only the factory or the DAO.
     Throws an `OnlyAccessableByFactoryOrDao` error if the caller is neither the chromatic factory contract nor the DAO._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate) public
```

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

### createSettlementTask

```solidity
function createSettlementTask(address market) external
```

Creates a settlement task for a given market.

_This function can only be called by the Chromatic factory contract or the DAO.
     Throws an `ExistMarketSettlementTask` error if a market earning distribution task already exists for the market._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the chromatic market contract to be settled. |

### cancelSettlementTask

```solidity
function cancelSettlementTask(address market) external
```

Cancels a settlement task for a given market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the chromatic market contract for which to cancel the settlement task. |

### resolveSettlement

```solidity
function resolveSettlement(address market) public view returns (bool canExec, bytes execPayload)
```

Resolves the settlement of a market.

_This function is called by the automation system._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market contract. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | canExec | bool | Whether the settlement can be executed. |
  | execPayload | bytes | The encoded function call to execute the settlement. |

### settle

```solidity
function settle(address market) public
```

Settles a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market contract. |

### balanceOfUpkeepTreasury

```solidity
function balanceOfUpkeepTreasury() external view returns (uint256)
```

### withdrawUpkeepTreasuryFunds

```solidity
function withdrawUpkeepTreasuryFunds(address payable _receiver, uint256 _amount) external
```

### cancelUpkeep

```solidity
function cancelUpkeep(uint256 upkeepId) external
```

### updateUpkeepGasLimit

```solidity
function updateUpkeepGasLimit(uint32 gasLimit) external
```

