---
id: MarketStateFacet
title: MarketStateFacet.sol
---
# [MarketStateFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketStateFacet.sol)

## MarketStateFacet

### factory

```solidity
function factory() external view returns (contract IChromaticMarketFactory _factory)
```

_Returns the factory contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _factory | contract IChromaticMarketFactory | The factory contract. |

### settlementToken

```solidity
function settlementToken() external view returns (contract IERC20Metadata _token)
```

_Returns the settlement token of the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _token | contract IERC20Metadata | The settlement token. |

### oracleProvider

```solidity
function oracleProvider() external view returns (contract IOracleProvider _provider)
```

_Returns the oracle provider contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _provider | contract IOracleProvider | The oracle provider contract. |

### clbToken

```solidity
function clbToken() external view returns (contract ICLBToken _token)
```

_Returns the CLB token contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _token | contract ICLBToken | The CLB token contract. |

### liquidator

```solidity
function liquidator() external view returns (contract IChromaticLiquidator _liquidator)
```

_Returns the liquidator contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _liquidator | contract IChromaticLiquidator | The liquidator contract. |

### vault

```solidity
function vault() external view returns (contract IChromaticVault _vault)
```

_Returns the vault contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _vault | contract IChromaticVault | The vault contract. |

### keeperFeePayer

```solidity
function keeperFeePayer() external view returns (contract IKeeperFeePayer _keeperFeePayer)
```

_Returns the keeper fee payer contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _keeperFeePayer | contract IKeeperFeePayer | The keeper fee payer contract. |

### feeProtocol

```solidity
function feeProtocol() external view returns (uint8 _feeProtocol)
```

Returns the denominator of the protocol's % share of the fees

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _feeProtocol | uint8 | The protocol fee for the market |

### setFeeProtocol

```solidity
function setFeeProtocol(uint8 _feeProtocol) external
```

Set the denominator of the protocol's % share of the fees

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _feeProtocol | uint8 | new protocol fee for the market |

