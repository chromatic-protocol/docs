---
id: Types
title: Types.sol
---
# [Types.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/gelato/Types.sol)

## Module

```solidity
enum Module {
  RESOLVER,
  TIME,
  PROXY,
  SINGLE_EXEC
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

### taskTreasury

```solidity
function taskTreasury() external view returns (contract ITaskTreasuryUpgradable)
```

## ITaskTreasuryUpgradable

### depositFunds

```solidity
function depositFunds(address receiver, address token, uint256 amount) external payable
```

### withdrawFunds

```solidity
function withdrawFunds(address payable receiver, address token, uint256 amount) external
```

## IOpsProxyFactory

### getProxyOf

```solidity
function getProxyOf(address account) external view returns (address, bool)
```

