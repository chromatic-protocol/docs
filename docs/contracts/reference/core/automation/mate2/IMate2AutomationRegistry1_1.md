---
id: IMate2AutomationRegistry1_1
title: IMate2AutomationRegistry1_1.sol
---
# [IMate2AutomationRegistry1_1.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/mate2/IMate2AutomationRegistry1_1.sol)

## ExtraData

```solidity
struct ExtraData {
  enum ExtraModule extraModule;
  bytes extraParam;
}
```

## IMate2AutomationRegistry1_1

### registerUpkeep

```solidity
function registerUpkeep(address target, uint32 gasLimit, address admin, bool useTreasury, bool singleExec, bytes checkData, enum ExtraModule extraModule, bytes extraParam) external returns (uint256 id)
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
function getUpkeep(uint256 id) external view returns (address target, uint32 executeGas, bytes checkData, struct ExtraData extraData, address lastKeeper, address admin, uint64 maxValidBlocknumber, uint256 amountSpent, bool[3] flags)
```

### getUpkeepTreasury

```solidity
function getUpkeepTreasury() external view returns (address)
```

### checkUpkeep

```solidity
function checkUpkeep(uint256 upkeepId, address from, bytes extraData) external view returns (bytes performData, uint256 maxPayment, uint256 gasLimit)
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

