[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / [periphery](../modules/factories.contracts.periphery.md) / AccountFactory\_\_factory

# Class: AccountFactory\_\_factory

[contracts](../modules/factories.contracts.md).[periphery](../modules/factories.contracts.periphery.md).AccountFactory__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.periphery.AccountFactory__factory.md#constructor)

### Properties

- [abi](factories.contracts.periphery.AccountFactory__factory.md#abi)

### Methods

- [connect](factories.contracts.periphery.AccountFactory__factory.md#connect)
- [createInterface](factories.contracts.periphery.AccountFactory__factory.md#createinterface)

## Constructors

### constructor

• **new AccountFactory__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"_router"`` = "\_router"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"_marketFactory"`` = "\_marketFactory"; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"constructor"`` = "constructor" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }] ; `name`: ``"AccountCreated"`` = "AccountCreated"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [] = []; `name`: ``"createAccount"`` = "createAccount"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"getAccount"`` = "getAccount"; `outputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"accountAddress"`` = "accountAddress"; `type`: ``"address"`` = "address" }] ; `name`: ``"getAccount"`` = "getAccount"; `outputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/periphery/AccountFactory__factory.ts:90](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/factories/contracts/periphery/AccountFactory__factory.ts#L90)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`AccountFactory`](../interfaces/contracts.periphery.AccountFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`AccountFactory`](../interfaces/contracts.periphery.AccountFactory.md)

#### Defined in

[src/gen/factories/contracts/periphery/AccountFactory__factory.ts:94](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/factories/contracts/periphery/AccountFactory__factory.ts#L94)

___

### createInterface

▸ `Static` **createInterface**(): `AccountFactoryInterface`

#### Returns

`AccountFactoryInterface`

#### Defined in

[src/gen/factories/contracts/periphery/AccountFactory__factory.ts:91](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/factories/contracts/periphery/AccountFactory__factory.ts#L91)
