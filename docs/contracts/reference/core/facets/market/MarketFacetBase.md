---
id: MarketFacetBase
title: MarketFacetBase.sol
---
# [MarketFacetBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketFacetBase.sol)

## MarketFacetBase

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO.
     Throws an `OnlyAccessableByDao` error if the caller is not the DAO._

### onlyVault

```solidity
modifier onlyVault()
```

_Modifier to restrict a function to be called only by the vault contract.
     Throws an `OnlyAccessableByVault` error if the caller is not the chromatic vault contract._

### withTradingLock

```solidity
modifier withTradingLock()
```

### newLpContext

```solidity
function newLpContext(struct MarketStorage ms) internal view returns (struct LpContext)
```

_Creates a new LP context._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpContext | The LP context. |

