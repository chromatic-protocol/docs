---
id: IMate2AutomationRegistry
title: IMate2AutomationRegistry.sol
---
# [IMate2AutomationRegistry.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/mate2/IMate2AutomationRegistry.sol)

## IMate2AutomationRegistry

### registerUpkeep

```solidity
function registerUpkeep(address target, uint32 gasLimit, address admin, bool useTreasury, bool singleExec, bytes checkData) external returns (uint256 id)
```

### cancelUpkeep

```solidity
function cancelUpkeep(uint256 id) external
```

### pauseUpkeep

```solidity
function pauseUpkeep(uint256 id) external
```

### unpauseUpkeep

```solidity
function unpauseUpkeep(uint256 id) external
```

### transferUpkeepAdmin

```solidity
function transferUpkeepAdmin(uint256 id, address proposed) external
```

### updateCheckData

```solidity
function updateCheckData(uint256 id, bytes newCheckData) external
```

### getUpkeep

```solidity
function getUpkeep(uint256 id) external view returns (address target, uint32 executeGas, bytes checkData, address lastKeeper, address admin, uint64 maxValidBlocknumber, uint256 amountSpent, bool useTreasury, bool singleExec, bool paused)
```

### getUpkeepTreasury

```solidity
function getUpkeepTreasury() external view returns (address)
```

### checkUpkeep

```solidity
function checkUpkeep(uint256 upkeepId, address from) external view returns (bytes performData, uint256 maxLinkPayment, uint256 gasLimit)
```

### getPerformUpkeepFee

```solidity
function getPerformUpkeepFee() external view returns (uint256 fee)
```

### addWhitelistedRegistrar

```solidity
function addWhitelistedRegistrar(address registrar) external
```

### removeWhitelistedRegistrar

```solidity
function removeWhitelistedRegistrar(address registrar) external
```

