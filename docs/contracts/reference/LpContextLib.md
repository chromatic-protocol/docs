# Solidity API

## LpContextLib

Provides functions that operate on the `LpContext` struct

### syncOracleVersion

```solidity
function syncOracleVersion(struct LpContext self) internal
```

Syncs the oracle version used by the market.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of `LpContext` struct |

### currentOracleVersion

```solidity
function currentOracleVersion(struct LpContext self) internal view returns (struct IOracleProvider.OracleVersion)
```

Retrieves the current oracle version used by the market

_If the `_currentVersionCache` has been initialized, then returns it.
     If not, it calls the `currentVersion` function on the `oracleProvider of the market
     to fetch the current version and stores it in the cache,
     and then returns the current version._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of `LpContext` struct |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IOracleProvider.OracleVersion | OracleVersion The current oracle version |

### oracleVersionAt

```solidity
function oracleVersionAt(struct LpContext self, uint256 version) internal view returns (struct IOracleProvider.OracleVersion)
```

Retrieves the oracle version at a specific version number

_If the `_currentVersionCache` matches the requested version, then returns it.
     Otherwise, it calls the `atVersion` function on the `oracleProvider` of the market
     to fetch the desired version._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of `LpContext` struct |
| version | uint256 | The requested version number |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IOracleProvider.OracleVersion | OracleVersion The oracle version at the requested version number |

### calculateInterest

```solidity
function calculateInterest(struct LpContext self, uint256 amount, uint256 from, uint256 to) internal view returns (uint256)
```

Calculates the interest accrued for a given amount of settlement tokens
               within a specified time range.

_This function internally calls the `calculateInterest` function on the `interestCalculator` contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of the `LpContext` struct. |
| amount | uint256 | The amount of settlement tokens for which the interest needs to be calculated. |
| from | uint256 | The starting timestamp of the time range (inclusive). |
| to | uint256 | The ending timestamp of the time range (exclusive). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The accrued interest as a `uint256` value. |

