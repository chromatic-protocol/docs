# Solidity API

## IAccountFactory

_Interface for the AccountFactory contract, which creates and manages user accounts._

### AccountCreated

```solidity
event AccountCreated(address account, address owner)
```

_Emitted when a new account is created._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| account | address | The address of the created account. |
| owner | address | The address of the owner of the created account. |

### createAccount

```solidity
function createAccount() external
```

Creates a new user account.

### getAccount

```solidity
function getAccount(address accountAddress) external view returns (address)
```

Retrieves the address of a user's account.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accountAddress | address | The address of the user's account. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the user's account. |

### getAccount

```solidity
function getAccount() external view returns (address)
```

Retrieves the address of the caller's account.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The address of the caller's account. |

