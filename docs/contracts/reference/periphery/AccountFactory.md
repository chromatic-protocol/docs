# Solidity API

## AccountFactory

_Contract for creating and managing user accounts._

### constructor

```solidity
constructor(address _router, address _marketFactory) public
```

_Initializes the AccountFactory contract with the provided router and market factory addresses._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _router | address | The address of the router contract. |
| _marketFactory | address | The address of the market factory contract. |

### onlyRouter

```solidity
modifier onlyRouter()
```

_Modifier to allow only the router contract to call a function._

### createAccount

```solidity
function createAccount() external
```

Creates a new user account.

_Only one account can be created per user.
     Emits an `AccountCreated` event upon successful creation._

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

