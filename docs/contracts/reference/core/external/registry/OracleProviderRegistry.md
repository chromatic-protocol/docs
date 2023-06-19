---
id: OracleProviderRegistry
title: OracleProviderRegistry.sol
---
# [OracleProviderRegistry.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/external/registry/OracleProviderRegistry.sol)

## OracleProviderRegistry

_A registry for managing oracle providers._

```solidity
struct OracleProviderRegistry {
  struct EnumerableSet.AddressSet _oracleProviders;
  mapping(address => uint8) _oracleProviderLevels;
}
```

## OracleProviderRegistryLib

Library for managing a registry of oracle providers.

### register

```solidity
function register(struct OracleProviderRegistry self, address oracleProvider) external
```

Registers an oracle provider in the registry.

_Throws an error if the oracle provider is already registered._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to register. |

### unregister

```solidity
function unregister(struct OracleProviderRegistry self, address oracleProvider) external
```

Unregisters an oracle provider from the registry.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to unregister. |

### oracleProviders

```solidity
function oracleProviders(struct OracleProviderRegistry self) external view returns (address[])
```

Returns an array of all registered oracle providers.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | oracleProviders An array of addresses representing the registered oracle providers. |

### isRegistered

```solidity
function isRegistered(struct OracleProviderRegistry self, address oracleProvider) external view returns (bool)
```

Checks if an oracle provider is registered in the registry.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | bool Whether the oracle provider is registered. |

### getOracleProviderLevel

```solidity
function getOracleProviderLevel(struct OracleProviderRegistry self, address oracleProvider) external view returns (uint8)
```

Retrieves the level of an oracle provider in the registry.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The storage reference to the OracleProviderRegistry. |
| oracleProvider | address | The address of the oracle provider. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | The level of the oracle provider. |

### setOracleProviderLevel

```solidity
function setOracleProviderLevel(struct OracleProviderRegistry self, address oracleProvider, uint8 level) external
```

Sets the level of an oracle provider in the registry.

_The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The storage reference to the OracleProviderRegistry. |
| oracleProvider | address | The address of the oracle provider. |
| level | uint8 | The new level to be set for the oracle provider. |

