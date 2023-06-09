# Solidity API

## OracleProviderRegistry

```solidity
struct OracleProviderRegistry {
  struct EnumerableSet.AddressSet _oracleProviders;
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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to register. |

### unregister

```solidity
function unregister(struct OracleProviderRegistry self, address oracleProvider) external
```

Unregisters an oracle provider from the registry.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to unregister. |

### oracleProviders

```solidity
function oracleProviders(struct OracleProviderRegistry self) external view returns (address[])
```

Returns an array of all registered oracle providers.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | oracleProviders An array of addresses representing the registered oracle providers. |

### isRegistered

```solidity
function isRegistered(struct OracleProviderRegistry self, address oracleProvider) external view returns (bool)
```

Checks if an oracle provider is registered in the registry.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to check. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | bool Whether the oracle provider is registered. |

