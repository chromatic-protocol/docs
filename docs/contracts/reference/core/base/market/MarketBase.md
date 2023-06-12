---
id: MarketBase
title: MarketBase.sol
---
# [MarketBase.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/base/market/MarketBase.sol)

## MarketBase

_Base contract for Chromatic markets._

### factory

```solidity
contract IChromaticMarketFactory factory
```

_Returns the factory contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |

### oracleProvider

```solidity
contract IOracleProvider oracleProvider
```

_Returns the oracle provider contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |

### settlementToken

```solidity
contract IERC20Metadata settlementToken
```

_Returns the settlement token of the market._

| Name | Type | Description |
| ---- | ---- | ----------- |

### clbToken

```solidity
contract ICLBToken clbToken
```

_Returns the CLB token contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |

### liquidator

```solidity
contract IChromaticLiquidator liquidator
```

_Returns the liquidator contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |

### vault

```solidity
contract IChromaticVault vault
```

_Returns the vault contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |

### keeperFeePayer

```solidity
contract IKeeperFeePayer keeperFeePayer
```

_Returns the keeper fee payer contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |

### liquidityPool

```solidity
struct LiquidityPool liquidityPool
```

### positions

```solidity
mapping(uint256 => struct Position) positions
```

### lpReceipts

```solidity
mapping(uint256 => struct LpReceipt) lpReceipts
```

### onlyLiquidator

```solidity
modifier onlyLiquidator()
```

_Modifier to restrict access to only the liquidator contract._

### constructor

```solidity
constructor() internal
```

_Initializes the market contract._

### newLpContext

```solidity
function newLpContext() internal view returns (struct LpContext)
```

_Creates a new LP context._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct LpContext | The LP context. |

