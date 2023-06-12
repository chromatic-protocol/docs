---
id: IOracleProviderRegistry
title: IOracleProviderRegistry.sol
---
# [IOracleProviderRegistry.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/interfaces/factory/IOracleProviderRegistry.sol)

## IOracleProviderRegistry

_Interface for the Oracle Provider Registry contract._

### OracleProviderRegistered

```solidity
event OracleProviderRegistered(address oracleProvider)
```

_Emitted when a new oracle provider is registered._

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the registered oracle provider. |

### OracleProviderUnregistered

```solidity
event OracleProviderUnregistered(address oracleProvider)
```

_Emitted when an oracle provider is unregistered._

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the unregistered oracle provider. |

### registerOracleProvider

```solidity
function registerOracleProvider(address oracleProvider) external
```

Registers an oracle provider.

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider to register. |

### unregisterOracleProvider

```solidity
function unregisterOracleProvider(address oracleProvider) external
```

Unregisters an oracle provider.

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider to unregister. |

### registeredOracleProviders

```solidity
function registeredOracleProviders() external view returns (address[])
```

Gets the registered oracle providers.

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | An array of registered oracle provider addresses. |

### isRegisteredOracleProvider

```solidity
function isRegisteredOracleProvider(address oracleProvider) external view returns (bool)
```

Checks if an oracle provider is registered.

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | A boolean indicating if the oracle provider is registered. |

