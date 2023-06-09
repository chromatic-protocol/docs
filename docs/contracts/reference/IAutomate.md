# Solidity API

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

