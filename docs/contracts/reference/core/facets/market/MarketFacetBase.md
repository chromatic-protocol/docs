---
id: MarketFacetBase
title: MarketFacetBase.sol
---
# [MarketFacetBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketFacetBase.sol)

## MarketFacetBase

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### OnlyAccessableByLiquidator

```solidity
error OnlyAccessableByLiquidator()
```

_Throws an error indicating that the caller is not the chromatic liquidator contract._

### OnlyAccessableByVault

```solidity
error OnlyAccessableByVault()
```

_Throws an error indicating that the caller is not the chromatch vault contract._

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO.
     Throws an `OnlyAccessableByDao` error if the caller is not the DAO._

### onlyLiquidator

```solidity
modifier onlyLiquidator()
```

_Modifier to restrict access to only the liquidator contract.
     Throws an `OnlyAccessableByLiquidator` error if the caller is not the chromatic liquidator contract._

### onlyVault

```solidity
modifier onlyVault()
```

_Modifier to restrict a function to be called only by the vault contract.
     Throws an `OnlyAccessableByVault` error if the caller is not the chromatic vault contract._

### newLpContext

```solidity
function newLpContext(struct MarketStorage ms) internal view returns (struct LpContext)
```

_Creates a new LP context._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct LpContext | The LP context. |

