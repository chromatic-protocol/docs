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

### OnlyAccessableByLiquidator

```solidity
error OnlyAccessableByLiquidator()
```

### OnlyAccessableByVault

```solidity
error OnlyAccessableByVault()
```

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO._

### onlyLiquidator

```solidity
modifier onlyLiquidator()
```

_Modifier to restrict access to only the liquidator contract._

### onlyVault

```solidity
modifier onlyVault()
```

_Modifier to restrict a function to be called only by the vault contract._

### newLpContext

```solidity
function newLpContext(struct MarketStorage ms) internal view returns (struct LpContext)
```

_Creates a new LP context._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpContext | The LP context. |

