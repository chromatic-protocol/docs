---
id: IMarketState
title: IMarketState.sol
---
# [IMarketState.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketState.sol)

## IMarketState

_Interface for accessing the state of a market contract._

### ProtocolFeeRateSet

```solidity
event ProtocolFeeRateSet(uint16 protocolFeeRateOld, uint16 protocolFeeRateNew)
```

Emitted when the protocol fee rate is changed by the market

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | protocolFeeRateOld | uint16 | The previous value of the protocol fee rate |
  | protocolFeeRateNew | uint16 | The updated value of the protocol fee rate |

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

### setProtocolFeeRate

```solidity
function setProtocolFeeRate(uint16 _protocolFeeRate) external
```

Set the new protocol fee rate

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _protocolFeeRate | uint16 | new protocol fee rate for the market |

