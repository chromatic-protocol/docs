# Solidity API

## PositionParam

```solidity
struct PositionParam {
  uint256 openVersion;
  uint256 closeVersion;
  int256 leveragedQty;
  uint256 takerMargin;
  uint256 makerMargin;
  uint256 openTimestamp;
  uint256 closeTimestamp;
  struct IOracleProvider.OracleVersion _entryVersionCache;
  struct IOracleProvider.OracleVersion _exitVersionCache;
}
```

## PositionParamLib

Library for manipulating PositionParam struct.

### entryVersion

```solidity
function entryVersion(struct PositionParam self) internal pure returns (uint256)
```

Returns the settle version for the position's entry.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct PositionParam | The PositionParam struct. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The settle version for the position's entry. |

### entryPrice

```solidity
function entryPrice(struct PositionParam self, struct LpContext ctx) internal view returns (UFixed18)
```

Calculates the entry price for a PositionParam.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct PositionParam | The PositionParam struct. |
| ctx | struct LpContext | The LpContext struct. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | UFixed18 | UFixed18 The entry price. |

### entryAmount

```solidity
function entryAmount(struct PositionParam self, struct LpContext ctx) internal view returns (uint256)
```

Calculates the entry amount for a PositionParam.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct PositionParam | The PositionParam struct. |
| ctx | struct LpContext | The LpContext struct. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The entry amount. |

### entryOracleVersion

```solidity
function entryOracleVersion(struct PositionParam self, struct LpContext ctx) internal view returns (struct IOracleProvider.OracleVersion)
```

Retrieves the settle oracle version for the position's entry.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct PositionParam | The PositionParam struct. |
| ctx | struct LpContext | The LpContext struct. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IOracleProvider.OracleVersion | OracleVersion The settle oracle version for the position's entry. |

### calculateInterest

```solidity
function calculateInterest(struct PositionParam self, struct LpContext ctx, uint256 until) internal view returns (uint256)
```

_Calculates the interest for a PositionParam until a specified timestamp.
It is used only to deduct accumulated accrued interest when close position_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct PositionParam | The PositionParam struct. |
| ctx | struct LpContext | The LpContext struct. |
| until | uint256 | The timestamp until which to calculate the interest. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | uint256 The calculated interest. |

### clone

```solidity
function clone(struct PositionParam self) internal pure returns (struct PositionParam)
```

Creates a clone of a PositionParam.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct PositionParam | The PositionParam data struct. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct PositionParam | PositionParam The cloned PositionParam. |

### inverse

```solidity
function inverse(struct PositionParam self) internal pure returns (struct PositionParam)
```

Creates the inverse of a PositionParam by negating the leveragedQty.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct PositionParam | The PositionParam data struct. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct PositionParam | PositionParam The inverted PositionParam. |

