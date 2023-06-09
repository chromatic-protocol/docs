# Solidity API

## Position

```solidity
struct Position {
  uint256 id;
  uint256 openVersion;
  uint256 closeVersion;
  int224 qty;
  uint32 leverage;
  uint256 openTimestamp;
  uint256 closeTimestamp;
  uint256 takerMargin;
  address owner;
  struct BinMargin[] _binMargins;
}
```

## PositionLib

Provides functions that operate on the `Position` struct

### entryVersion

```solidity
function entryVersion(struct Position self) internal pure returns (uint256)
```

Calculates the settle version for the position's entry

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | utin256 The settle version for the position's entry |

### exitVersion

```solidity
function exitVersion(struct Position self) internal pure returns (uint256)
```

Calculates the settle version for the position's exit

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | utin256 The settle version for the position's exit |

### leveragedQty

```solidity
function leveragedQty(struct Position self, struct LpContext ctx) internal pure returns (int256)
```

Calculates the leveraged quantity of the position
        based on the position's quantity and leverage

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |
| ctx | struct LpContext | The context object for this transaction |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | uint256 The leveraged quantity |

### entryPrice

```solidity
function entryPrice(struct Position self, struct LpContext ctx) internal view returns (UFixed18)
```

Calculates the entry price of the position based on the position's open oracle version

_It fetches oracle price from `IOracleProvider`
     at the settle version calculated based on the position's open oracle version_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |
| ctx | struct LpContext | The context object for this transaction |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | UFixed18 | UFixed18 The entry price |

### exitPrice

```solidity
function exitPrice(struct Position self, struct LpContext ctx) internal view returns (UFixed18)
```

Calculates the exit price of the position based on the position's close oracle version

_It fetches oracle price from `IOracleProvider`
     at the settle version calculated based on the position's close oracle version_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |
| ctx | struct LpContext | The context object for this transaction |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | UFixed18 | UFixed18 The exit price |

### pnl

```solidity
function pnl(struct Position self, struct LpContext ctx) internal view returns (int256)
```

Calculates the profit or loss of the position
        based on the close oracle version and the leveraged quantity

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |
| ctx | struct LpContext | The context object for this transaction |

#### Return Values

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |

#### Return Values

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| fee | uint256 | The trading fee |

### binMargins

```solidity
function binMargins(struct Position self) internal pure returns (struct BinMargin[] margins)
```

Returns an array of BinMargin instances
        representing the bin margins for the position

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| margins | struct BinMargin[] | The bin margins for the position |

### setBinMargins

```solidity
function setBinMargins(struct Position self, struct BinMargin[] margins) internal pure
```

Sets the `_binMargins` array for the position

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |
| margins | struct BinMargin[] | The bin margins for the position |

### storeTo

```solidity
function storeTo(struct Position self, struct Position storedPosition) internal
```

Stores the memory values of the `Position` struct to the storage

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct Position | The memory instance of the `Position` struct |
| storedPosition | struct Position | The target storage |

