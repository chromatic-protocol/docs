---
id: IOracleProviderRegistry
title: IOracleProviderRegistry.sol
---
# [IOracleProviderRegistry.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/factory/IOracleProviderRegistry.sol)

## IOracleProviderRegistry

_Interface for the Oracle Provider Registry contract._

### OracleProviderProperties

```solidity
struct OracleProviderProperties {
  uint32 minTakeProfitBPS;
  uint32 maxTakeProfitBPS;
  uint8 leverageLevel;
}
```

_The OracleProviderProperties struct represents properties of the oracle provider._

| Name | Type | Description |
| ---- | ---- | ----------- |
| minTakeProfitBPS | uint32 | The minimum take-profit basis points. |
| maxTakeProfitBPS | uint32 | The maximum take-profit basis points. |
| leverageLevel | uint8 | The leverage level of the oracle provider. |

### OracleProviderRegistered

```solidity
event OracleProviderRegistered(address oracleProvider, struct IOracleProviderRegistry.OracleProviderProperties properties)
```

_Emitted when a new oracle provider is registered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the registered oracle provider. |
  | properties | struct IOracleProviderRegistry.OracleProviderProperties | The properties of the registered oracle provider. |

### OracleProviderUnregistered

```solidity
event OracleProviderUnregistered(address oracleProvider)
```

_Emitted when an oracle provider is unregistered._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the unregistered oracle provider. |

### UpdateTakeProfitBPSRange

```solidity
event UpdateTakeProfitBPSRange(address oracleProvider, uint32 minTakeProfitBPS, uint32 maxTakeProfitBPS)
```

_Emitted when the take-profit basis points range of an oracle provider is updated._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider. |
  | minTakeProfitBPS | uint32 | The new minimum take-profit basis points. |
  | maxTakeProfitBPS | uint32 | The new maximum take-profit basis points. |

### UpdateLeverageLevel

```solidity
event UpdateLeverageLevel(address oracleProvider, uint8 level)
```

_Emitted when the level of an oracle provider is set._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider. |
  | level | uint8 | The new level set for the oracle provider. |

### registerOracleProvider

```solidity
function registerOracleProvider(address oracleProvider, struct IOracleProviderRegistry.OracleProviderProperties properties) external
```

Registers an oracle provider.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider to register. |
  | properties | struct IOracleProviderRegistry.OracleProviderProperties | The properties of the oracle provider. |

### unregisterOracleProvider

```solidity
function unregisterOracleProvider(address oracleProvider) external
```

Unregisters an oracle provider.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider to unregister. |

### registeredOracleProviders

```solidity
function registeredOracleProviders() external view returns (address[])
```

Gets the registered oracle providers.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | address[] | An array of registered oracle provider addresses. |

### isRegisteredOracleProvider

```solidity
function isRegisteredOracleProvider(address oracleProvider) external view returns (bool)
```

Checks if an oracle provider is registered.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider to check. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | bool | A boolean indicating if the oracle provider is registered. |

### getOracleProviderProperties

```solidity
function getOracleProviderProperties(address oracleProvider) external view returns (struct IOracleProviderRegistry.OracleProviderProperties)
```

Retrieves the properties of an oracle provider.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProviderRegistry.OracleProviderProperties | The properties of the oracle provider. |

### updateTakeProfitBPSRange

```solidity
function updateTakeProfitBPSRange(address oracleProvider, uint32 minTakeProfitBPS, uint32 maxTakeProfitBPS) external
```

Updates the take-profit basis points range of an oracle provider.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider. |
  | minTakeProfitBPS | uint32 | The new minimum take-profit basis points. |
  | maxTakeProfitBPS | uint32 | The new maximum take-profit basis points. |

### updateLeverageLevel

```solidity
function updateLeverageLevel(address oracleProvider, uint8 level) external
```

Updates the leverage level of an oracle provider in the registry.

_The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleProvider | address | The address of the oracle provider. |
  | level | uint8 | The new leverage level to be set for the oracle provider. |

