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

_Throws an error indicating that the caller is not the chromatic router contract._

### NotOwner

```solidity
error NotOwner()
```

_Throws an error indicating that the caller is not the owner of this account contract._

### AlreadyInitialized

```solidity
error AlreadyInitialized()
```

_Throws an error indicating that the account is already initialized, and calling the initialization function again is not allowed._

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

_Throws an error indicating that the account does not have sufficient balance to perform a particular operation, such as withdrawing an amount of tokens._

### NotExistPosition

```solidity
error NotExistPosition()
```

_Throws an error indicating that the caller is not the owner of this account contractthat the caller is not the owner of this account contract._

### onlyRouter

```solidity
modifier onlyRouter()
```

_Modifier that allows only the router to call a function.
     Throws an `NotRouter` error if the caller is not the chromatic router contract._

### onlyOwner

```solidity
modifier onlyOwner()
```

_Modifier that allows only the owner to call a function.
     Throws an `NotOwner` error if the caller is not the owner of this account contract._

### initialize

```solidity
function initialize(address _owner, address _router, address _marketFactory) external
```

Initializes the account with the specified owner, router, and market factory addresses.

_Throws an `AlreadyInitialized` error if the account has already been initialized._

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the token. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The balance of the token. |

### withdraw

```solidity
function withdraw(address token, uint256 amount) external
```

Withdraws the specified amount of tokens from the account.

_This function can only be called by owner.
     Throws a `NotEnoughBalance` error if the account does not have enough balance of the specified token._

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address |  |
  | id | uint256 |  |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | A boolean indicating whether the market has the position ID. |

### getPositionIds

```solidity
function getPositionIds(address market) external view returns (uint256[])
```

Retrieves an array of position IDs owned by this account for the specified market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address |  |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256[] | An array of position IDs. |

### openPosition

```solidity
function openPosition(address marketAddress, int256 qty, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct OpenPositionInfo position)
```

Opens a new position in the specified market.

_This function can only be called by the chromatic router contract._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | qty | int256 | The quantity of the position. |
  | takerMargin | uint256 | The margin required for the taker. |
  | makerMargin | uint256 | The margin required for the maker. |
  | maxAllowableTradingFee | uint256 | The maximum allowable trading fee. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | position | struct OpenPositionInfo | openPositionInfo The opened position information. |

### closePosition

```solidity
function closePosition(address marketAddress, uint256 positionId) external
```

Closes the specified position in the specified market.

_This function can only be called by the chromatic router contract.
     Throws a `NotExistPosition` error if the position does not exist._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | positionId | uint256 | The ID of the position to close. |

### claimPosition

```solidity
function claimPosition(address marketAddress, uint256 positionId) external
```

Claims the specified position in the specified market.

_This function can only be called by the chromatic router contract.
     Throws a `NotExistPosition` error if the position does not exist._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | positionId | uint256 | The ID of the position to claim. |

### openPositionCallback

```solidity
function openPositionCallback(address settlementToken, address vault, uint256 marginRequired, bytes) external
```

Callback function called after opening a position.

_Transfers the required margin from the account to the specified vault.
     Throws a `NotEnoughBalance` error if the account does not have enough balance of the settlement token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | settlementToken | address | The address of the settlement token used in the position. |
  | vault | address | The address of the vault contract. |
  | marginRequired | uint256 | The amount of margin required for the position. |
  |  | bytes |  |

### claimPositionCallback

```solidity
function claimPositionCallback(struct Position position, struct ClaimPositionInfo claimInfo, bytes) external
```

Callback function called after claiming a position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | position | struct Position | The claimed position. |
  | claimInfo | struct ClaimPositionInfo | The pnl related information of the claim |
  |  | bytes |  |

