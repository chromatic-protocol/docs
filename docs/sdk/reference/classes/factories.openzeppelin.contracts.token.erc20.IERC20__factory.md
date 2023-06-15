[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [openzeppelin](../modules/factories.openzeppelin.md) / [contracts](../modules/factories.openzeppelin.contracts.md) / [token](../modules/factories.openzeppelin.contracts.token.md) / [erc20](../modules/factories.openzeppelin.contracts.token.erc20.md) / IERC20\_\_factory

# Class: IERC20\_\_factory

[token](../modules/factories.openzeppelin.contracts.token.md).[erc20](../modules/factories.openzeppelin.contracts.token.erc20.md).IERC20__factory

## Table of contents

### Constructors

- [constructor](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#constructor)

### Properties

- [abi](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#abi)

### Methods

- [connect](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#connect)
- [createInterface](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#createinterface)

## Constructors

### constructor

• **new IERC20__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Approval"`` = "Approval"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Transfer"`` = "Transfer"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }] ; `name`: ``"allowance"`` = "allowance"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"approve"`` = "approve"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }] ; `name`: ``"balanceOf"`` = "balanceOf"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"totalSupply"`` = "totalSupply"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"transfer"`` = "transfer"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"transferFrom"`` = "transferFrom"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts:199](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts#L199)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC20`](../interfaces/openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC20`](../interfaces/openzeppelin.contracts.token.erc20.IERC20.md)

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts:203](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts#L203)

___

### createInterface

▸ `Static` **createInterface**(): `IERC20Interface`

#### Returns

`IERC20Interface`

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts:200](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts#L200)
