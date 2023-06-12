---
id: IMarketState
title: IMarketState.sol
---
# [IMarketState.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketState.sol)

## IMarketState

_Interface for accessing the state of a market contract._

### factory

```solidity
function factory() external view returns (contract IChromaticMarketFactory)
```

_Returns the factory contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IChromaticMarketFactory | The factory contract. |

### settlementToken

```solidity
function settlementToken() external view returns (contract IERC20Metadata)
```

_Returns the settlement token of the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IERC20Metadata | The settlement token. |

### oracleProvider

```solidity
function oracleProvider() external view returns (contract IOracleProvider)
```

_Returns the oracle provider contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IOracleProvider | The oracle provider contract. |

### clbToken

```solidity
function clbToken() external view returns (contract ICLBToken)
```

_Returns the CLB token contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract ICLBToken | The CLB token contract. |

### liquidator

```solidity
function liquidator() external view returns (contract IChromaticLiquidator)
```

_Returns the liquidator contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IChromaticLiquidator | The liquidator contract. |

### vault

```solidity
function vault() external view returns (contract IChromaticVault)
```

_Returns the vault contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IChromaticVault | The vault contract. |

### keeperFeePayer

```solidity
function keeperFeePayer() external view returns (contract IKeeperFeePayer)
```

_Returns the keeper fee payer contract for the market._

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IKeeperFeePayer | The keeper fee payer contract. |

