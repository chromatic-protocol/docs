---
id: "Client"
title: "Class: Client"
sidebar_label: "Client"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Client**(`chainName`, `signerOrProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainName` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Defined in

[Client.ts:38](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L38)

## Accessors

### provider

• `get` **provider**(): `Provider`

#### Returns

`Provider`

#### Defined in

[Client.ts:24](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L24)

• `set` **provider**(`provider`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |

#### Returns

`void`

#### Defined in

[Client.ts:33](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L33)

___

### signer

• `get` **signer**(): `Signer`

#### Returns

`Signer`

#### Defined in

[Client.ts:20](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L20)

• `set` **signer**(`signer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`void`

#### Defined in

[Client.ts:29](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L29)

## Methods

### account

▸ **account**(): [`ChromaticAccount`](ChromaticAccount.md)

#### Returns

[`ChromaticAccount`](ChromaticAccount.md)

#### Defined in

[Client.ts:72](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L72)

___

### contracts

▸ **contracts**(): `Record`<`string`, `Contract`\>

#### Returns

`Record`<`string`, `Contract`\>

#### Defined in

[Client.ts:76](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L76)

___

### lens

▸ **lens**(): [`ChromaticLens`](ChromaticLens.md)

#### Returns

[`ChromaticLens`](ChromaticLens.md)

#### Defined in

[Client.ts:49](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L49)

___

### market

▸ **market**(): [`ChromaticMarket`](ChromaticMarket.md)

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

#### Defined in

[Client.ts:60](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L60)

___

### marketFactory

▸ **marketFactory**(): [`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Returns

[`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Defined in

[Client.ts:53](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L53)

___

### position

▸ **position**(): [`ChromaticPosition`](ChromaticPosition.md)

#### Returns

[`ChromaticPosition`](ChromaticPosition.md)

#### Defined in

[Client.ts:64](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L64)

___

### router

▸ **router**(): [`ChromaticRouter`](ChromaticRouter.md)

#### Returns

[`ChromaticRouter`](ChromaticRouter.md)

#### Defined in

[Client.ts:68](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L68)

___

### setSignerOrProvider

▸ **setSignerOrProvider**(`signerOrProvider`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

`void`

#### Defined in

[Client.ts:28](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/Client.ts#L28)
