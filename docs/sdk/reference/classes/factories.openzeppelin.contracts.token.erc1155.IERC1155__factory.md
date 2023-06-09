[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [openzeppelin](../modules/factories.openzeppelin.md) / [contracts](../modules/factories.openzeppelin.contracts.md) / [token](../modules/factories.openzeppelin.contracts.token.md) / [erc1155](../modules/factories.openzeppelin.contracts.token.erc1155.md) / IERC1155\_\_factory

# Class: IERC1155\_\_factory

[token](../modules/factories.openzeppelin.contracts.token.md).[erc1155](../modules/factories.openzeppelin.contracts.token.erc1155.md).IERC1155__factory

## Table of contents

### Constructors

- [constructor](factories.openzeppelin.contracts.token.erc1155.IERC1155__factory.md#constructor)

### Properties

- [abi](factories.openzeppelin.contracts.token.erc1155.IERC1155__factory.md#abi)

### Methods

- [connect](factories.openzeppelin.contracts.token.erc1155.IERC1155__factory.md#connect)
- [createInterface](factories.openzeppelin.contracts.token.erc1155.IERC1155__factory.md#createinterface)

## Constructors

### constructor

• **new IERC1155__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"bool"`` = "bool"; `name`: ``"approved"`` = "approved"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"ApprovalForAll"`` = "ApprovalForAll"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"ids"`` = "ids"; `type`: ``"uint256[]"`` = "uint256[]" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"values"`` = "values"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"TransferBatch"`` = "TransferBatch"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"TransferSingle"`` = "TransferSingle"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``false`` = false; `internalType`: ``"string"`` = "string"; `name`: ``"value"`` = "value"; `type`: ``"string"`` = "string" }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"URI"`` = "URI"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"balanceOf"`` = "balanceOf"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address[]"`` = "address[]"; `name`: ``"accounts"`` = "accounts"; `type`: ``"address[]"`` = "address[]" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"ids"`` = "ids"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"balanceOfBatch"`` = "balanceOfBatch"; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``""`` = ""; `type`: ``"uint256[]"`` = "uint256[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"account"`` = "account"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }] ; `name`: ``"isApprovedForAll"`` = "isApprovedForAll"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"ids"`` = "ids"; `type`: ``"uint256[]"`` = "uint256[]" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"amounts"`` = "amounts"; `type`: ``"uint256[]"`` = "uint256[]" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"safeBatchTransferFrom"`` = "safeBatchTransferFrom"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"safeTransferFrom"`` = "safeTransferFrom"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `internalType`: ``"bool"`` = "bool"; `name`: ``"approved"`` = "approved"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"setApprovalForAll"`` = "setApprovalForAll"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"bytes4"`` = "bytes4"; `name`: ``"interfaceId"`` = "interfaceId"; `type`: ``"bytes4"`` = "bytes4" }] ; `name`: ``"supportsInterface"`` = "supportsInterface"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC1155/IERC1155__factory.ts:309](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/factories/@openzeppelin/contracts/token/ERC1155/IERC1155__factory.ts#L309)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC1155`](../interfaces/openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC1155`](../interfaces/openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC1155/IERC1155__factory.ts:313](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/factories/@openzeppelin/contracts/token/ERC1155/IERC1155__factory.ts#L313)

___

### createInterface

▸ `Static` **createInterface**(): `IERC1155Interface`

#### Returns

`IERC1155Interface`

#### Defined in

[src/gen/factories/@openzeppelin/contracts/token/ERC1155/IERC1155__factory.ts:310](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/factories/@openzeppelin/contracts/token/ERC1155/IERC1155__factory.ts#L310)
