---
id: OracleProviderRegistry
title: OracleProviderRegistry.sol
---
# [OracleProviderRegistry.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/registry/OracleProviderRegistry.sol)

## OracleProviderRegistry

```solidity
struct OracleProviderRegistry {
  EnumerableSet.AddressSet _oracleProviders;
  mapping(address => uint32) _minTakeProfitBPSs;
  mapping(address => uint32) _maxTakeProfitBPSs;
  mapping(address => uint8) _leverageLevels;
}
```

_A registry for managing oracle providers._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _oracleProviders | EnumerableSet.AddressSet | Set of registered oracle providers |

## OracleProviderRegistryLib

Library for managing a registry of oracle providers.

### register

```solidity
function register(struct OracleProviderRegistry self, address oracleProvider, uint32 minTakeProfitBPS, uint32 maxTakeProfitBPS, uint8 leverageLevel) internal
```

Registers an oracle provider in the registry.

_Throws an error with the code `Errors.ALREADY_REGISTERED_ORACLE_PROVIDER` if the oracle provider is already registered._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to register. |
| minTakeProfitBPS | uint32 | The minimum take-profit basis points. |
| maxTakeProfitBPS | uint32 | The maximum take-profit basis points. |
| leverageLevel | uint8 | The leverage level of the oracle provider. |

### unregister

```solidity
function unregister(struct OracleProviderRegistry self, address oracleProvider) internal
```

Unregisters an oracle provider from the registry.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to unregister. |

### oracleProviders

```solidity
function oracleProviders(struct OracleProviderRegistry self) internal view returns (address[])
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
function isRegistered(struct OracleProviderRegistry self, address oracleProvider) internal view returns (bool)
```

Checks if an oracle provider is registered in the registry.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider to check. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | bool Whether the oracle provider is registered. |

### getOracleProviderProperties

```solidity
function getOracleProviderProperties(struct OracleProviderRegistry self, address oracleProvider) internal view returns (uint32 minTakeProfitBPS, uint32 maxTakeProfitBPS, uint8 leverageLevel)
```

Retrieves the properties of an oracle provider.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| minTakeProfitBPS | uint32 | The minimum take-profit basis points. |
| maxTakeProfitBPS | uint32 | The maximum take-profit basis points. |
| leverageLevel | uint8 | The leverage level of the oracle provider. |

### setTakeProfitBPSRange

```solidity
function setTakeProfitBPSRange(struct OracleProviderRegistry self, address oracleProvider, uint32 minTakeProfitBPS, uint32 maxTakeProfitBPS) internal
```

Sets the range for take-profit basis points for an oracle provider.

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The OracleProviderRegistry storage. |
| oracleProvider | address | The address of the oracle provider. |
| minTakeProfitBPS | uint32 | The minimum take-profit basis points. |
| maxTakeProfitBPS | uint32 | The maximum take-profit basis points. |

### setLeverageLevel

```solidity
function setLeverageLevel(struct OracleProviderRegistry self, address oracleProvider, uint8 leverageLevel) internal
```

Sets the leverage level of an oracle provider in the registry.

_The leverage level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1._

| Name | Type | Description |
| ---- | ---- | ----------- |
| self | struct OracleProviderRegistry | The storage reference to the OracleProviderRegistry. |
| oracleProvider | address | The address of the oracle provider. |
| leverageLevel | uint8 | The new leverage level to be set for the oracle provider. |

