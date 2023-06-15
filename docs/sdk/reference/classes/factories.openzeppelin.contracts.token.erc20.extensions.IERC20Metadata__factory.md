[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [openzeppelin](../modules/factories.openzeppelin.md) / [contracts](../modules/factories.openzeppelin.contracts.md) / [token](../modules/factories.openzeppelin.contracts.token.md) / [erc20](../modules/factories.openzeppelin.contracts.token.erc20.md) / [extensions](../modules/factories.openzeppelin.contracts.token.erc20.extensions.md) / IERC20Metadata\_\_factory

# Class: IERC20Metadata\_\_factory

[erc20](../modules/factories.openzeppelin.contracts.token.erc20.md).[extensions](../modules/factories.openzeppelin.contracts.token.erc20.extensions.md).IERC20Metadata__factory

## Table of contents

### Constructors

- [constructor](factories.openzeppelin.contracts.token.erc20.extensions.IERC20Metadata__factory.md#constructor)

### Properties

- [abi](factories.openzeppelin.contracts.token.erc20.extensions.IERC20Metadata__factory.md#abi)

### Methods

- [connect](factories.openzeppelin.contracts.token.erc20.extensions.IERC20Metadata__factory.md#connect)
- [createInterface](factories.openzeppelin.contracts.token.erc20.extensions.IERC20Metadata__factory.md#createinterface)

## Constructors

### constructor

• **new IERC20Metadata__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Approval"`` = "Approval"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Transfer"`` = "Transfer"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }] ; `name`: ``"allowance"`` = "allowance"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"approve"`` = "approve"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }] ; `name`: ``"balanceOf"`` = "balanceOf"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"decimals"`` = "decimals"; `outputs`: readonly [{ `internalType`: ``"uint8"`` = "uint8"; `name`: ``""`` = ""; `type`: ``"uint8"`` = "uint8" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"name"`` = "name"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"symbol"`` = "symbol"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"totalSupply"`` = "totalSupply"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"transfer"`` = "transfer"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"transferFrom"`` = "transferFrom"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory.ts:238](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory.ts#L238)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC20Metadata`](../interfaces/openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC20Metadata`](../interfaces/openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory.ts:242](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory.ts#L242)

___

### createInterface

▸ `Static` **createInterface**(): `IERC20MetadataInterface`

#### Returns

`IERC20MetadataInterface`

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory.ts:239](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/factories/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata__factory.ts#L239)
