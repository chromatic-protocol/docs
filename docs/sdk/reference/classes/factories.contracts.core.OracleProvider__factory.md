[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / [core](../modules/factories.contracts.core.md) / OracleProvider\_\_factory

# Class: OracleProvider\_\_factory

[contracts](../modules/factories.contracts.md).[core](../modules/factories.contracts.core.md).OracleProvider__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.core.OracleProvider__factory.md#constructor)

### Properties

- [abi](factories.contracts.core.OracleProvider__factory.md#abi)

### Methods

- [connect](factories.contracts.core.OracleProvider__factory.md#connect)
- [createInterface](factories.contracts.core.OracleProvider__factory.md#createinterface)

## Constructors

### constructor

• **new OracleProvider__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"aggregator"`` = "aggregator"; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"constructor"`` = "constructor" }, { `inputs`: readonly [] = []; `name`: ``"InvalidOracleRound"`` = "InvalidOracleRound"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [] = []; `name`: ``"UnableToSyncError"`` = "UnableToSyncError"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [] = []; `name`: ``"aggregator"`` = "aggregator"; `outputs`: readonly [{ `internalType`: ``"ChainlinkAggregator"`` = "ChainlinkAggregator"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"atVersion"`` = "atVersion"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = "struct IOracleProvider.OracleVersion"; `name`: ``"oracleVersion"`` = "oracleVersion"; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"versions"`` = "versions"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"atVersions"`` = "atVersions"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion[]"`` = "struct IOracleProvider.OracleVersion[]"; `name`: ``"oracleVersions"`` = "oracleVersions"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"currentVersion"`` = "currentVersion"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = "struct IOracleProvider.OracleVersion"; `name`: ``"oracleVersion"`` = "oracleVersion"; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"description"`` = "description"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"sync"`` = "sync"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = "struct IOracleProvider.OracleVersion"; `name`: ``""`` = ""; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/core/OracleProvider__factory.ts:195](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/factories/contracts/core/OracleProvider__factory.ts#L195)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`OracleProvider`](../interfaces/contracts.core.OracleProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`OracleProvider`](../interfaces/contracts.core.OracleProvider.md)

#### Defined in

[src/gen/factories/contracts/core/OracleProvider__factory.ts:199](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/factories/contracts/core/OracleProvider__factory.ts#L199)

___

### createInterface

▸ `Static` **createInterface**(): [`OracleProviderInterface`](../interfaces/OracleProviderInterface.md)

#### Returns

[`OracleProviderInterface`](../interfaces/OracleProviderInterface.md)

#### Defined in

[src/gen/factories/contracts/core/OracleProvider__factory.ts:196](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/factories/contracts/core/OracleProvider__factory.ts#L196)
