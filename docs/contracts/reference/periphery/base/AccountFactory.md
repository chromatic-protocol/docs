---
id: AccountFactory
title: AccountFactory.sol
---
# [AccountFactory.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/base/AccountFactory.sol)

## AccountFactory

_Abstract contract for creating and managing user accounts._

### accountBase

```solidity
contract ChromaticAccount accountBase
```

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO.
     Throws an `OnlyAccessableByDao` error if the caller is not the DAO._

### constructor

```solidity
constructor(address _marketFactory) internal
```

_Initializes the AccountFactory contract with the provided router and market factory addresses._

- Parameters:

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

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The account address. |

### getAccount

```solidity
function getAccount(address accountAddress) internal view returns (address)
```

Retrieves the address of a user's account.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | accountAddress | address | The address of the user's account. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address | The address of the user's account. |

