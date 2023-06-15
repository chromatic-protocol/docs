[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / [core](../modules/factories.contracts.core.md) / CLBToken\_\_factory

# Class: CLBToken\_\_factory

[contracts](../modules/factories.contracts.md).[core](../modules/factories.contracts.core.md).CLBToken__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.core.CLBToken__factory.md#constructor)

### Properties

- [abi](factories.contracts.core.CLBToken__factory.md#abi)

### Methods

- [connect](factories.contracts.core.CLBToken__factory.md#connect)
- [createInterface](factories.contracts.core.CLBToken__factory.md#createinterface)

## Constructors

### constructor

• **new CLBToken__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"constructor"`` = "constructor" }, { `inputs`: readonly [] = []; `name`: ``"OnlyAccessableByMarket"`` = "OnlyAccessableByMarket"; `type`: ``"error"`` = "error" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"bool"`` = "bool"; `name`: ``"approved"`` = "approved"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"ApprovalForAll"`` = "ApprovalForAll"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"ids"`` = "ids"; `type`: ``"uint256[]"`` = "uint256[]" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"values"`` = "values"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"TransferBatch"`` = "TransferBatch"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"TransferSingle"`` = "TransferSingle"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``false`` = false; `internalType`: ``"string"`` = "string"; `name`: ``"value"`` = "value"; `type`: ``"string"`` = "string" }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"URI"`` = "URI"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"balanceOf"`` = "balanceOf"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address[]"`` = "address[]"; `name`: ``"accounts"`` = "accounts"; `type`: ``"address[]"`` = "address[]" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"ids"`` = "ids"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"balanceOfBatch"`` = "balanceOfBatch"; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``""`` = ""; `type`: ``"uint256[]"`` = "uint256[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"burn"`` = "burn"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"decimals"`` = "decimals"; `outputs`: readonly [{ `internalType`: ``"uint8"`` = "uint8"; `name`: ``""`` = ""; `type`: ``"uint8"`` = "uint8" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"description"`` = "description"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"exists"`` = "exists"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"image"`` = "image"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }] ; `name`: ``"isApprovedForAll"`` = "isApprovedForAll"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"market"`` = "market"; `outputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"mint"`` = "mint"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"name"`` = "name"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"ids"`` = "ids"; `type`: ``"uint256[]"`` = "uint256[]" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"amounts"`` = "amounts"; `type`: ``"uint256[]"`` = "uint256[]" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"safeBatchTransferFrom"`` = "safeBatchTransferFrom"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"safeTransferFrom"`` = "safeTransferFrom"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `internalType`: ``"bool"`` = "bool"; `name`: ``"approved"`` = "approved"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"setApprovalForAll"`` = "setApprovalForAll"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"bytes4"`` = "bytes4"; `name`: ``"interfaceId"`` = "interfaceId"; `type`: ``"bytes4"`` = "bytes4" }] ; `name`: ``"supportsInterface"`` = "supportsInterface"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"totalSupply"`` = "totalSupply"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"uri"`` = "uri"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/core/CLBToken__factory.ts:510](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/factories/contracts/core/CLBToken__factory.ts#L510)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`CLBToken`](../interfaces/contracts.core.CLBToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`CLBToken`](../interfaces/contracts.core.CLBToken.md)

#### Defined in

[src/gen/factories/contracts/core/CLBToken__factory.ts:514](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/factories/contracts/core/CLBToken__factory.ts#L514)

___

### createInterface

▸ `Static` **createInterface**(): [`CLBTokenInterface`](../interfaces/CLBTokenInterface.md)

#### Returns

[`CLBTokenInterface`](../interfaces/CLBTokenInterface.md)

#### Defined in

[src/gen/factories/contracts/core/CLBToken__factory.ts:511](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/factories/contracts/core/CLBToken__factory.ts#L511)
