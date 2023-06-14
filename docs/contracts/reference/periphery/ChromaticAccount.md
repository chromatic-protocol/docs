---
id: ChromaticAccount
title: ChromaticAccount.sol
---
# [ChromaticAccount.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/ChromaticAccount.sol)

## ChromaticAccount

_This contract manages user accounts and positions._

### owner

```solidity
address owner
```

### isInitialized

```solidity
bool isInitialized
```

### NotRouter

```solidity
error NotRouter()
```

### NotOwner

```solidity
error NotOwner()
```

### AlreadyInitialized

```solidity
error AlreadyInitialized()
```

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

### NotExistPosition

```solidity
error NotExistPosition()
```

### onlyRouter

```solidity
modifier onlyRouter()
```

_Modifier that allows only the router to call a function._

### onlyOwner

```solidity
modifier onlyOwner()
```

_Modifier that allows only the owner to call a function._

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

### balance

```solidity
function balance(address token) public view returns (uint256)
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

### addPositionId

```solidity
function addPositionId(address market, uint256 positionId) internal
```

### removePositionId

```solidity
function removePositionId(address market, uint256 positionId) internal
```

### hasPositionId

```solidity
function hasPositionId(address market, uint256 id) public view returns (bool)
```

Checks if the specified market has the specified position ID.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address |  |
| id | uint256 |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean indicating whether the market has the position ID. |

### getPositionIds

```solidity
function getPositionIds(address market) external view returns (uint256[])
```

Retrieves an array of position IDs owned by this account for the specified market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | An array of position IDs. |

### openPosition

```solidity
function openPosition(address marketAddress, int224 qty, uint32 leverage, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct Position position)
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
| position | struct Position | position The opened position. |

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

### openPositionCallback

```solidity
function openPositionCallback(address settlementToken, address vault, uint256 marginRequired, bytes data) external
```

Callback function called after opening a position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The address of the settlement token used in the position. |
| vault | address | The address of the vault contract. |
| marginRequired | uint256 | The amount of margin required for the position. |
| data | bytes | Additional data related to the callback. |

### claimPositionCallback

```solidity
function claimPositionCallback(uint256 positionId, bytes data) external
```

Callback function called after claiming a position.

| Name | Type | Description |
| ---- | ---- | ----------- |
| positionId | uint256 | The ID of the claimed position. |
| data | bytes | Additional data related to the callback. |

