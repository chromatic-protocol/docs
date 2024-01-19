---
id: IMarketState
title: IMarketState.sol
---
# [IMarketState.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketState.sol)

## IMarketState

_Interface for accessing the state of a market contract._

### ProtocolFeeRateUpdated

```solidity
event ProtocolFeeRateUpdated(uint16 protocolFeeRateOld, uint16 protocolFeeRateNew)
```

Emitted when the protocol fee rate of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | protocolFeeRateOld | uint16 | The previous value of the protocol fee rate |
  | protocolFeeRateNew | uint16 | The updated value of the protocol fee rate |

### PositionModeUpdated

```solidity
event PositionModeUpdated(enum PositionMode positionModeOld, enum PositionMode positionModeNew)
```

Emitted when the position mode of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | positionModeOld | enum PositionMode | The previous value of the position mode |
  | positionModeNew | enum PositionMode | The updated value of the position mode |

### LiquidityModeUpdated

```solidity
event LiquidityModeUpdated(enum LiquidityMode liquidityModeOld, enum LiquidityMode liquidityModeNew)
```

Emitted when the liquidity mode of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | liquidityModeOld | enum LiquidityMode | The previous value of the liquidity mode |
  | liquidityModeNew | enum LiquidityMode | The updated value of the liquidity mode |

### DisplayModeUpdated

```solidity
event DisplayModeUpdated(enum DisplayMode displayModeOld, enum DisplayMode displayModeNew)
```

Emitted when the display mode of the market is changed

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | displayModeOld | enum DisplayMode | The previous value of the display mode |
  | displayModeNew | enum DisplayMode | The updated value of the display mode |

### factory

```solidity
function factory() external view returns (contract IChromaticMarketFactory)
```

_Returns the factory contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract IChromaticMarketFactory | The factory contract. |

### settlementToken

```solidity
function settlementToken() external view returns (contract IERC20Metadata)
```

_Returns the settlement token of the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract IERC20Metadata | The settlement token. |

### oracleProvider

```solidity
function oracleProvider() external view returns (contract IOracleProvider)
```

_Returns the oracle provider contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract IOracleProvider | The oracle provider contract. |

### clbToken

```solidity
function clbToken() external view returns (contract ICLBToken)
```

_Returns the CLB token contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract ICLBToken | The CLB token contract. |

### vault

```solidity
function vault() external view returns (contract IChromaticVault)
```

_Returns the vault contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract IChromaticVault | The vault contract. |

### protocolFeeRate

```solidity
function protocolFeeRate() external view returns (uint16)
```

Returns the protocol fee rate

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint16 | The protocol fee rate for the market |

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
function positionMode() external view returns (enum PositionMode)
```

Returns the position mode

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | enum PositionMode | The position mode for the market |

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
function liquidityMode() external view returns (enum LiquidityMode)
```

Returns the liquidity mode

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | enum LiquidityMode | The liquidity mode for the market |

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
function displayMode() external view returns (enum DisplayMode)
```

Returns the display mode

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | enum DisplayMode | The display mode for the market |

### updateDisplayMode

```solidity
function updateDisplayMode(enum DisplayMode _displayMode) external
```

Update the new display mode

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _displayMode | enum DisplayMode | new display mode for the market |

