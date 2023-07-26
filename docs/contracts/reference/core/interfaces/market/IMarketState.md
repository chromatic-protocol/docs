---
id: IMarketState
title: IMarketState.sol
---
# [IMarketState.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/market/IMarketState.sol)

## IMarketState

_Interface for accessing the state of a market contract._

### SetFeeProtocol

```solidity
event SetFeeProtocol(uint8 feeProtocolOld, uint8 feeProtocolNew)
```

Emitted when the protocol fee is changed by the market

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | feeProtocolOld | uint8 | The previous value of the protocol fee |
  | feeProtocolNew | uint8 | The updated value of the protocol fee |

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

### liquidator

```solidity
function liquidator() external view returns (contract IChromaticLiquidator)
```

_Returns the liquidator contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract IChromaticLiquidator | The liquidator contract. |

### vault

```solidity
function vault() external view returns (contract IChromaticVault)
```

_Returns the vault contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract IChromaticVault | The vault contract. |

### keeperFeePayer

```solidity
function keeperFeePayer() external view returns (contract IKeeperFeePayer)
```

_Returns the keeper fee payer contract for the market._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | contract IKeeperFeePayer | The keeper fee payer contract. |

### feeProtocol

```solidity
function feeProtocol() external view returns (uint8)
```

Returns the denominator of the protocol's % share of the fees

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint8 | The protocol fee for the market |

### setFeeProtocol

```solidity
function setFeeProtocol(uint8 _feeProtocol) external
```

Set the denominator of the protocol's % share of the fees

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _feeProtocol | uint8 | new protocol fee for the market |

