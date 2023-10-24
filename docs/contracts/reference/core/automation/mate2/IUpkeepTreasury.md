---
id: IUpkeepTreasury
title: IUpkeepTreasury.sol
---
# [IUpkeepTreasury.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/automation/mate2/IUpkeepTreasury.sol)

## IUpkeepTreasury

### userBalance

```solidity
function userBalance(address owner) external view returns (uint256)
```

### useFunds

```solidity
function useFunds(uint256 _amount, address _user) external
```

### depositFunds

```solidity
function depositFunds(address _receiver) external payable
```

### withdrawFunds

```solidity
function withdrawFunds(address payable _receiver, uint256 _amount) external
```

