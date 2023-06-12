---
id: AutomateTaskCreator
title: AutomateTaskCreator.sol
---
# [AutomateTaskCreator.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/base/gelato/AutomateTaskCreator.sol)

## AutomateTaskCreator

_Inherit this contract to allow your smart contract
to be a task creator and create tasks._

### fundsOwner

```solidity
address fundsOwner
```

### taskTreasury

```solidity
contract ITaskTreasuryUpgradable taskTreasury
```

### constructor

```solidity
constructor(address _automate, address _fundsOwner, address opsTaskFactory) internal
```

### withdrawFunds

```solidity
function withdrawFunds(uint256 _amount, address _token) external
```

@dev
Withdraw funds from this contract's Gelato balance to fundsOwner.

### _depositFunds

```solidity
function _depositFunds(uint256 _amount, address _token) internal
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

### _timeModuleArg

```solidity
function _timeModuleArg(uint256 _startTime, uint256 _interval) internal pure returns (bytes)
```

### _proxyModuleArg

```solidity
function _proxyModuleArg() internal pure returns (bytes)
```

### _singleExecModuleArg

```solidity
function _singleExecModuleArg() internal pure returns (bytes)
```

