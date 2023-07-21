---
id: LpContext
title: LpContext.sol
---
# [LpContext.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/LpContext.sol)

## LpContext

```solidity
struct LpContext {
  contract IOracleProvider oracleProvider;
  contract IInterestCalculator interestCalculator;
  contract IChromaticVault vault;
  contract ICLBToken clbToken;
  address market;
  address settlementToken;
  uint256 tokenPrecision;
  struct IOracleProvider.OracleVersion _currentVersionCache;
}
```

_Represents the context information required for LP bin operations._

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | contract IOracleProvider | The Oracle Provider contract used for price feed |
| interestCalculator | contract IInterestCalculator | The Interest Calculator contract used for interest calculations |
| vault | contract IChromaticVault | The Chromatic Vault contract responsible for managing liquidity and margin |
| clbToken | contract ICLBToken | The CLB token contract that represents LP ownership in the pool |
| market | address | The address of market contract |
| settlementToken | address | The address of the settlement token used in the market |
| tokenPrecision | uint256 | The precision of the settlement token used in the market |
| _currentVersionCache | struct IOracleProvider.OracleVersion | Cached instance of the current oracle version |

## LpContextLib

Provides functions that operate on the `LpContext` struct

### syncOracleVersion

```solidity
function syncOracleVersion(struct LpContext self) internal
```

Syncs the oracle version used by the market.

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

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of `LpContext` struct |

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

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of `LpContext` struct |
| version | uint256 | The requested version number |

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

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of the `LpContext` struct. |
| amount | uint256 | The amount of settlement tokens for which the interest needs to be calculated. |
| from | uint256 | The starting timestamp of the time range (inclusive). |
| to | uint256 | The ending timestamp of the time range (exclusive). |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The accrued interest as a `uint256` value. |

### isPastVersion

```solidity
function isPastVersion(struct LpContext self, uint256 oracleVersion) internal view returns (bool)
```

Checks if an oracle version is in the past.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct LpContext | The memory instance of the `LpContext` struct. |
| oracleVersion | uint256 | The oracle version to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean value indicating whether the oracle version is in the past. |

