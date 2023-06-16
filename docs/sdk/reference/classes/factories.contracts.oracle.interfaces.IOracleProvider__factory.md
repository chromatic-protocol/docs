[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / [oracle](../modules/factories.contracts.oracle.md) / [interfaces](../modules/factories.contracts.oracle.interfaces.md) / IOracleProvider\_\_factory

# Class: IOracleProvider\_\_factory

[oracle](../modules/factories.contracts.oracle.md).[interfaces](../modules/factories.contracts.oracle.interfaces.md).IOracleProvider__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.oracle.interfaces.IOracleProvider__factory.md#constructor)

### Properties

- [abi](factories.contracts.oracle.interfaces.IOracleProvider__factory.md#abi)

### Methods

- [connect](factories.contracts.oracle.interfaces.IOracleProvider__factory.md#connect)
- [createInterface](factories.contracts.oracle.interfaces.IOracleProvider__factory.md#createinterface)

## Constructors

### constructor

• **new IOracleProvider__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [] = []; `name`: ``"InvalidOracleRound"`` = "InvalidOracleRound"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"atVersion"`` = "atVersion"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = "struct IOracleProvider.OracleVersion"; `name`: ``""`` = ""; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"currentVersion"`` = "currentVersion"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = "struct IOracleProvider.OracleVersion"; `name`: ``""`` = ""; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"description"`` = "description"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"sync"`` = "sync"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = "struct IOracleProvider.OracleVersion"; `name`: ``""`` = ""; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/oracle/interfaces/IOracleProvider__factory.ts:130](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/oracle/interfaces/IOracleProvider__factory.ts#L130)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IOracleProvider`](../interfaces/contracts.oracle.interfaces.IOracleProvider-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IOracleProvider`](../interfaces/contracts.oracle.interfaces.IOracleProvider-1.md)

#### Defined in

[src/gen/factories/contracts/oracle/interfaces/IOracleProvider__factory.ts:134](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/oracle/interfaces/IOracleProvider__factory.ts#L134)

___

### createInterface

▸ `Static` **createInterface**(): [`IOracleProviderInterface`](../interfaces/IOracleProviderInterface.md)

#### Returns

[`IOracleProviderInterface`](../interfaces/IOracleProviderInterface.md)

#### Defined in

[src/gen/factories/contracts/oracle/interfaces/IOracleProvider__factory.ts:131](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/oracle/interfaces/IOracleProvider__factory.ts#L131)
