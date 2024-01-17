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

### vault

```solidity
function vault() external view returns (contract IChromaticVault _vault)
```

_Returns the vault contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _vault | contract IChromaticVault | The vault contract. |

### protocolFeeRate

```solidity
function protocolFeeRate() external view returns (uint16 _protocolFeeRate)
```

Returns the protocol fee rate

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _protocolFeeRate | uint16 | The protocol fee rate for the market |

### updateProtocolFeeRate

```solidity
function updateProtocolFeeRate(uint16 _protocolFeeRate) external
```

Update the new protocol fee rate

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _protocolFeeRate | uint16 | new protocol fee rate for the market |

### positionMode

```solidity
function positionMode() external view returns (enum PositionMode _positionMode)
```

Returns the position mode

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _positionMode | enum PositionMode | The position mode for the market |

### updatePositionMode

```solidity
function updatePositionMode(enum PositionMode _positionMode) external
```

Update the new position mode

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _positionMode | enum PositionMode | new position mode for the market |

### liquidityMode

```solidity
function liquidityMode() external view returns (enum LiquidityMode _liquidityMode)
```

Returns the liquidity mode

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _liquidityMode | enum LiquidityMode | The liquidity mode for the market |

### updateLiquidityMode

```solidity
function updateLiquidityMode(enum LiquidityMode _liquidityMode) external
```

Update the new liquidity mode

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _liquidityMode | enum LiquidityMode | new liquidity mode for the market |

### displayMode

```solidity
function displayMode() external view returns (enum DisplayMode _displayMode)
```

Returns the display mode

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _displayMode | enum DisplayMode | The display mode for the market |

### updateDisplayMode

```solidity
function updateDisplayMode(enum DisplayMode _displayMode) external
```

Update the new display mode

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _displayMode | enum DisplayMode | new display mode for the market |

