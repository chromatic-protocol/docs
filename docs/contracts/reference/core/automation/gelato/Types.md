---
id: Types
title: Types.sol
---
# [Types.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/gelato/Types.sol)

## Module

```solidity
enum Module {
  RESOLVER,
  DEPRECATED_TIME,
  PROXY,
  SINGLE_EXEC,
  WEB3_FUNCTION,
  TRIGGER
}
```

## TriggerType

```solidity
enum TriggerType {
  TIME,
  CRON,
  EVENT,
  BLOCK
}
```

## ModuleData

```solidity
struct ModuleData {
  enum Module[] modules;
  bytes[] args;
}
```

## IAutomate

### createTask

```solidity
function createTask(address execAddress, bytes execDataOrSelector, struct ModuleData moduleData, address feeToken) external returns (bytes32 taskId)
```

### cancelTask

```solidity
function cancelTask(bytes32 taskId) external
```

### getFeeDetails

```solidity
function getFeeDetails() external view returns (uint256, address)
```

### gelato

```solidity
function gelato() external view returns (address payable)
```

### taskModuleAddresses

```solidity
function taskModuleAddresses(enum Module) external view returns (address)
```

## IProxyModule

### opsProxyFactory

```solidity
function opsProxyFactory() external view returns (address)
```

## IOpsProxyFactory

### getProxyOf

```solidity
function getProxyOf(address account) external view returns (address, bool)
```

## IGelato1Balance

### depositNative

```solidity
function depositNative(address _sponsor) external payable
```

### depositToken

```solidity
function depositToken(address _sponsor, address _token, uint256 _amount) external
```

## IGelato

### feeCollector

```solidity
function feeCollector() external view returns (address)
```

