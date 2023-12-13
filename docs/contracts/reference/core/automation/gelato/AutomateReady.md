---
id: AutomateReady
title: AutomateReady.sol
---
# [AutomateReady.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/gelato/AutomateReady.sol)

## AutomateReady

_Inherit this contract to allow your smart contract to
- Make synchronous fee payments.
- Have call restrictions for functions to be automated._

### automate

```solidity
contract IAutomate automate
```

### dedicatedMsgSender

```solidity
address dedicatedMsgSender
```

### ETH

```solidity
address ETH
```

### CancelTaskSucceeded

```solidity
event CancelTaskSucceeded(bytes32 taskId)
```

### CancelTaskFailed

```solidity
event CancelTaskFailed(bytes32 taskId)
```

### onlyDedicatedMsgSender

```solidity
modifier onlyDedicatedMsgSender()
```

@dev
Only tasks created by _taskCreator defined in constructor can call
the functions with this modifier.

### constructor

```solidity
constructor(address _automate, address _taskCreator) internal
```

@dev
_taskCreator is the address which will create tasks for this contract.

### _transfer

```solidity
function _transfer(uint256 _fee, address _feeToken) internal
```

@dev
Transfers fee to gelato for synchronous fee payments.

_fee & _feeToken should be queried from IAutomate.getFeeDetails()

### _getFeeDetails

```solidity
function _getFeeDetails() internal view returns (uint256 fee, address feeToken)
```

