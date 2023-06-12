---
id: IAccount
title: IAccount.sol
---
# [IAccount.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/interfaces/IAccount.sol)

## IAccount

_Interface for the Account contract, which manages user accounts and positions._

### balance

```solidity
function balance(address token) external view returns (uint256)
```

Returns the balance of the specified token for the account.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The balance of the token. |

### withdraw

```solidity
function withdraw(address token, uint256 amount) external
```

Withdraws the specified amount of tokens from the account.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token to withdraw. |
| amount | uint256 | The amount of tokens to withdraw. |

### initialize

```solidity
function initialize(address _owner, address _router, address _marketFactory) external
```

Initializes the account with the specified owner, router, and market factory addresses.

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The address of the account owner. |
| _router | address | The address of the router contract. |
| _marketFactory | address | The address of the market factory contract. |

### hasPositionId

```solidity
function hasPositionId(address marketAddress, uint256 positionId) external view returns (bool)
```

Checks if the specified market has the specified position ID.

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketAddress | address | The address of the market. |
| positionId | uint256 | The ID of the position. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean indicating whether the market has the position ID. |

### getPositionIds

```solidity
function getPositionIds(address marketAddress) external view returns (uint256[])
```

Retrieves an array of position IDs owned by this account for the specified market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketAddress | address | The address of the market. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | An array of position IDs. |

### openPosition

```solidity
function openPosition(address marketAddress, int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct Position)
```

Opens a new position in the specified market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketAddress | address | The address of the market. |
| qty | int224 | The quantity of the position. |
| leverage | uint32 | The leverage of the position. |
| takerMargin | uint256 | The margin required for the taker. |
| makerMargin | uint256 | The margin required for the maker. |
| maxAllowableTradingFee | uint256 | The maximum allowable trading fee. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct Position | position The opened position. |

### closePosition

```solidity
function closePosition(address marketAddress, uint256 positionId) external
```

Closes the specified position in the specified market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketAddress | address | The address of the market. |
| positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(address marketAddress, uint256 positionId) external
```

Claims the specified position in the specified market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| marketAddress | address | The address of the market. |
| positionId | uint256 | The ID of the position to claim. |

