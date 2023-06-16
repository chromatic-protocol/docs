[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / [core](../modules/factories.contracts.core.md) / [interfaces](../modules/factories.contracts.core.interfaces.md) / [factory](../modules/factories.contracts.core.interfaces.factory.md) / IOracleProviderRegistry\_\_factory

# Class: IOracleProviderRegistry\_\_factory

[interfaces](../modules/factories.contracts.core.interfaces.md).[factory](../modules/factories.contracts.core.interfaces.factory.md).IOracleProviderRegistry__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.core.interfaces.factory.IOracleProviderRegistry__factory.md#constructor)

### Properties

- [abi](factories.contracts.core.interfaces.factory.IOracleProviderRegistry__factory.md#abi)

### Methods

- [connect](factories.contracts.core.interfaces.factory.IOracleProviderRegistry__factory.md#connect)
- [createInterface](factories.contracts.core.interfaces.factory.IOracleProviderRegistry__factory.md#createinterface)

## Constructors

### constructor

• **new IOracleProviderRegistry__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"oracleProvider"`` = "oracleProvider"; `type`: ``"address"`` = "address" }] ; `name`: ``"OracleProviderRegistered"`` = "OracleProviderRegistered"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"oracleProvider"`` = "oracleProvider"; `type`: ``"address"`` = "address" }] ; `name`: ``"OracleProviderUnregistered"`` = "OracleProviderUnregistered"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"oracleProvider"`` = "oracleProvider"; `type`: ``"address"`` = "address" }] ; `name`: ``"isRegisteredOracleProvider"`` = "isRegisteredOracleProvider"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"oracleProvider"`` = "oracleProvider"; `type`: ``"address"`` = "address" }] ; `name`: ``"registerOracleProvider"`` = "registerOracleProvider"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"registeredOracleProviders"`` = "registeredOracleProviders"; `outputs`: readonly [{ `internalType`: ``"address[]"`` = "address[]"; `name`: ``""`` = ""; `type`: ``"address[]"`` = "address[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"oracleProvider"`` = "oracleProvider"; `type`: ``"address"`` = "address" }] ; `name`: ``"unregisterOracleProvider"`` = "unregisterOracleProvider"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/core/interfaces/factory/IOracleProviderRegistry__factory.ts:100](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/core/interfaces/factory/IOracleProviderRegistry__factory.ts#L100)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IOracleProviderRegistry`](../interfaces/contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IOracleProviderRegistry`](../interfaces/contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Defined in

[src/gen/factories/contracts/core/interfaces/factory/IOracleProviderRegistry__factory.ts:104](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/core/interfaces/factory/IOracleProviderRegistry__factory.ts#L104)

___

### createInterface

▸ `Static` **createInterface**(): `IOracleProviderRegistryInterface`

#### Returns

`IOracleProviderRegistryInterface`

#### Defined in

[src/gen/factories/contracts/core/interfaces/factory/IOracleProviderRegistry__factory.ts:101](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/core/interfaces/factory/IOracleProviderRegistry__factory.ts#L101)
