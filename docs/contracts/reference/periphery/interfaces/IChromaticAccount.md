---
id: IChromaticAccount
title: IChromaticAccount.sol
---
# [IChromaticAccount.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/periphery/interfaces/IChromaticAccount.sol)

## IChromaticAccount

_Interface for the ChromaticAccount contract, which manages user accounts and positions._

### OpenPosition

```solidity
event OpenPosition(address marketAddress, uint256 positionId, uint256 openVersion, int256 qty, uint256 openTimestamp, uint256 takerMargin, uint256 makerMargin, uint256 tradingFee)
```

_Emitted when a position is opened._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | positionId | uint256 | The position identifier |
  | openVersion | uint256 | The version of the oracle when the position was opened |
  | qty | int256 | The quantity of the position |
  | openTimestamp | uint256 | The timestamp when the position was opened |
  | takerMargin | uint256 | The amount of collateral that a trader must provide |
  | makerMargin | uint256 | The margin amount provided by the maker. |
  | tradingFee | uint256 | The trading fee associated with the position. |

### ClosePosition

```solidity
event ClosePosition(address marketAddress, uint256 positionId, uint256 closeVersion, uint256 closeTimestamp)
```

_Emitted when a position is closed._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | positionId | uint256 | The position identifier |
  | closeVersion | uint256 | The version of the oracle when the position was closed |
  | closeTimestamp | uint256 | The timestamp when the position was closed |

### ClaimPosition

```solidity
event ClaimPosition(address marketAddress, uint256 positionId, uint256 entryPrice, uint256 exitPrice, int256 realizedPnl, uint256 interest, bytes4 cause)
```

_Emitted when a position is claimed._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | positionId | uint256 | The position identifier |
  | entryPrice | uint256 | The entry price of the position |
  | exitPrice | uint256 | The exit price of the position |
  | realizedPnl | int256 | The profit or loss of the claimed position. |
  | interest | uint256 | The interest paid for the claimed position. |
  | cause | bytes4 | The description of being claimed. |

### balance

```solidity
function balance(address token) external view returns (uint256)
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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the token to withdraw. |
  | amount | uint256 | The amount of tokens to withdraw. |

### hasPositionId

```solidity
function hasPositionId(address marketAddress, uint256 positionId) external view returns (bool)
```

Checks if the specified market has the specified position ID.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | positionId | uint256 | The ID of the position. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | A boolean indicating whether the market has the position ID. |

### getPositionIds

```solidity
function getPositionIds(address marketAddress) external view returns (uint256[])
```

Retrieves an array of position IDs owned by this account for the specified market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256[] | An array of position IDs. |

### openPosition

```solidity
function openPosition(address marketAddress, int256 qty, uint256 takerMargin, uint256 makerMargin, uint256 maxAllowableTradingFee) external returns (struct OpenPositionInfo)
```

Opens a new position in the specified market.

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
  | [0] | struct OpenPositionInfo | openPositionInfo The opened position information. |

### closePosition

```solidity
function closePosition(address marketAddress, uint256 positionId) external
```

Closes the specified position in the specified market.

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | marketAddress | address | The address of the market. |
  | positionId | uint256 | The ID of the position to claim. |

