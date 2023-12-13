---
id: Position
title: Position.sol
---
# [Position.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/Position.sol)

## Position

```solidity
struct Position {
  uint256 id;
  uint256 openVersion;
  uint256 closeVersion;
  int256 qty;
  uint256 openTimestamp;
  uint256 closeTimestamp;
  uint256 takerMargin;
  address owner;
  address liquidator;
  BinMargin[] _binMargins;
  uint8 _feeProtocol;
}
```

_The Position struct represents a trading position._

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The position identifier |
| openVersion | uint256 | The version of the oracle when the position was opened |
| closeVersion | uint256 | The version of the oracle when the position was closed |
| qty | int256 | The quantity of the position |
| openTimestamp | uint256 | The timestamp when the position was opened |
| closeTimestamp | uint256 | The timestamp when the position was closed |
| takerMargin | uint256 | The amount of collateral that a trader must provide |
| owner | address | The owner of the position, usually it is the account address of trader |
| liquidator | address | The liquidator contract address |
| _binMargins | BinMargin[] | The bin margins for the position, it represents the amount of collateral for each bin |
| _feeProtocol | uint8 | The protocol fee for the market |

## PositionLib

Provides functions that operate on the `Position` struct

### entryPrice

```solidity
function entryPrice(struct Position self, struct LpContext ctx) internal view returns (uint256)
```

Calculates the entry price of the position based on the position's open oracle version

_It fetches oracle price from `IOracleProvider`
     at the settle version calculated based on the position's open oracle version_

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The memory instance of the `Position` struct |
  | ctx | struct LpContext | The context object for this transaction |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The entry price |

### exitPrice

```solidity
function exitPrice(struct Position self, struct LpContext ctx) internal view returns (uint256)
```

Calculates the exit price of the position based on the position's close oracle version

_It fetches oracle price from `IOracleProvider`
     at the settle version calculated based on the position's close oracle version_

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The memory instance of the `Position` struct |
  | ctx | struct LpContext | The context object for this transaction |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | uint256 The exit price |

### pnl

```solidity
function pnl(struct Position self, struct LpContext ctx) internal view returns (int256)
```

Calculates the profit or loss of the position based on the close oracle version and the qty

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The memory instance of the `Position` struct |
  | ctx | struct LpContext | The context object for this transaction |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | int256 | int256 The profit or loss |

### makerMargin

```solidity
function makerMargin(struct Position self) internal pure returns (uint256 margin)
```

Calculates the total margin required for the makers of the position

_The maker margin is calculated by summing up the amounts of all bin margins
     in the `_binMargins` array_

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The memory instance of the `Position` struct |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | margin | uint256 | The maker margin |

### tradingFee

```solidity
function tradingFee(struct Position self) internal pure returns (uint256 fee)
```

Calculates the total trading fee for the position

_The trading fee is calculated by summing up the trading fees of all bin margins
     in the `_binMargins` array_

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The memory instance of the `Position` struct |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | fee | uint256 | The trading fee |

### protocolFee

```solidity
function protocolFee(struct Position self) internal pure returns (uint256 fee)
```

Calculates the total protocol fee for a position.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The Position struct representing the position. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | fee | uint256 | The total protocol fee amount. |

### binMargins

```solidity
function binMargins(struct Position self) internal pure returns (struct BinMargin[] margins)
```

Returns an array of BinMargin instances
        representing the bin margins for the position

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The memory instance of the `Position` struct |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | margins | struct BinMargin[] | The bin margins for the position |

### setBinMargins

```solidity
function setBinMargins(struct Position self, struct BinMargin[] margins) internal pure
```

Sets the `_binMargins` array for the position

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct Position | The memory instance of the `Position` struct |
  | margins | struct BinMargin[] | The bin margins for the position |

