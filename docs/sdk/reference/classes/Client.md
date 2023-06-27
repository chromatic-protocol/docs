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

[Client.ts:45](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L45)

## Accessors

### provider

• `get` **provider**(): `Provider`

#### Returns

`Provider`

#### Defined in

[Client.ts:31](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L31)

• `set` **provider**(`provider`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |

#### Returns

`void`

#### Defined in

[Client.ts:40](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L40)

___

### signer

• `get` **signer**(): `Signer`

#### Returns

`Signer`

#### Defined in

[Client.ts:27](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L27)

• `set` **signer**(`signer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`void`

#### Defined in

[Client.ts:36](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L36)

## Methods

### contracts

▸ **contracts**(): `Record`<`string`, `Contract`\>

#### Returns

`Record`<`string`, `Contract`\>

#### Defined in

[Client.ts:112](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L112)

___

### currentMarket

▸ **currentMarket**(): [`ChromaticMarket`](ChromaticMarket.md)

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

#### Defined in

[Client.ts:81](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L81)

___

### lens

▸ **lens**(): [`ChromaticLens`](ChromaticLens.md)

#### Returns

[`ChromaticLens`](ChromaticLens.md)

#### Defined in

[Client.ts:56](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L56)

___

### market

▸ **market**(): [`ChromaticMarket`](ChromaticMarket.md)

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

#### Defined in

[Client.ts:75](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L75)

___

### marketFactory

▸ **marketFactory**(): [`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Returns

[`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Defined in

[Client.ts:67](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L67)

___

### position

▸ **position**(): [`ChromaticPosition`](ChromaticPosition.md)

#### Returns

[`ChromaticPosition`](ChromaticPosition.md)

#### Defined in

[Client.ts:85](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L85)

___

### router

▸ **router**(): [`ChromaticRouter`](ChromaticRouter.md)

#### Returns

[`ChromaticRouter`](ChromaticRouter.md)

#### Defined in

[Client.ts:97](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L97)

___

### routerContract

▸ **routerContract**(): `ChromaticRouter`

#### Returns

`ChromaticRouter`

#### Defined in

[Client.ts:103](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L103)

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

[Client.ts:35](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/Client.ts#L35)
