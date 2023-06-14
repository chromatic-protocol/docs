---
id: AccountFactory
title: AccountFactory.sol
---
# [AccountFactory.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/base/AccountFactory.sol)

## AccountFactory

_Abstract contract for creating and managing user accounts._

### constructor

```solidity
constructor(address _marketFactory) internal
```

_Initializes the AccountFactory contract with the provided router and market factory addresses._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketFactory | address | The address of the market factory contract. |

### createAccount

```solidity
function createAccount() external
```

Creates a new user account.

_Only one account can be created per user.
     Emits an `AccountCreated` event upon successful creation._

### getAccount

```solidity
function getAccount() external view returns (address)
```

Retrieves the account of the caller.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The account address. |

### getAccount

```solidity
function getAccount(address accountAddress) internal view returns (address)
```

Retrieves the address of a user's account.

| Name | Type | Description |
| ---- | ---- | ----------- |
| accountAddress | address | The address of the user's account. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the user's account. |
