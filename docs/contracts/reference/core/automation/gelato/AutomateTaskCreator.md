---
id: AutomateTaskCreator
title: AutomateTaskCreator.sol
---
# [AutomateTaskCreator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/gelato/AutomateTaskCreator.sol)

## AutomateTaskCreator

_Inherit this contract to allow your smart contract
to be a task creator and create tasks._

### gelato1Balance

```solidity
contract IGelato1Balance gelato1Balance
```

### constructor

```solidity
constructor(address _automate) internal
```

### _depositFunds1Balance

```solidity
function _depositFunds1Balance(uint256 _amount, address _token, address _sponsor) internal
```

### _createTask

```solidity
function _createTask(address _execAddress, bytes _execDataOrSelector, struct ModuleData _moduleData, address _feeToken) internal returns (bytes32)
```

### _cancelTask

```solidity
function _cancelTask(bytes32 _taskId) internal
```

### _resolverModuleArg

```solidity
function _resolverModuleArg(address _resolverAddress, bytes _resolverData) internal pure returns (bytes)
```

### _proxyModuleArg

```solidity
function _proxyModuleArg() internal pure returns (bytes)
```

### _singleExecModuleArg

```solidity
function _singleExecModuleArg() internal pure returns (bytes)
```

### _web3FunctionModuleArg

```solidity
function _web3FunctionModuleArg(string _web3FunctionHash, bytes _web3FunctionArgsHex) internal pure returns (bytes)
```

### _timeTriggerModuleArg

```solidity
function _timeTriggerModuleArg(uint128 _start, uint128 _interval) internal pure returns (bytes)
```

### _cronTriggerModuleArg

```solidity
function _cronTriggerModuleArg(string _expression) internal pure returns (bytes)
```

### _eventTriggerModuleArg

```solidity
function _eventTriggerModuleArg(address _address, bytes32[][] _topics, uint256 _blockConfirmations) internal pure returns (bytes)
```

### _blockTriggerModuleArg

```solidity
function _blockTriggerModuleArg() internal pure returns (bytes)
```

