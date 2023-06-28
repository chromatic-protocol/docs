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

[Client.ts:46](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L46)

## Accessors

### provider

• `get` **provider**(): `Provider`

#### Returns

`Provider`

#### Defined in

[Client.ts:32](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L32)

• `set` **provider**(`provider`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |

#### Returns

`void`

#### Defined in

[Client.ts:41](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L41)

___

### signer

• `get` **signer**(): `Signer`

#### Returns

`Signer`

#### Defined in

[Client.ts:28](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L28)

• `set` **signer**(`signer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`void`

#### Defined in

[Client.ts:37](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L37)

## Methods

### account

▸ **account**(): `ChromaticAccount`

#### Returns

`ChromaticAccount`

#### Defined in

[Client.ts:99](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L99)

___

### contracts

▸ **contracts**(): `Record`<`string`, `Contract`\>

#### Returns

`Record`<`string`, `Contract`\>

#### Defined in

[Client.ts:104](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L104)

___

### lens

▸ **lens**(): [`ChromaticLens`](ChromaticLens.md)

#### Returns

[`ChromaticLens`](ChromaticLens.md)

#### Defined in

[Client.ts:57](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L57)

___

### market

▸ **market**(): [`ChromaticMarket`](ChromaticMarket.md)

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

#### Defined in

[Client.ts:69](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L69)

___

### marketFactory

▸ **marketFactory**(): [`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Returns

[`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Defined in

[Client.ts:61](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L61)

___

### position

▸ **position**(): [`ChromaticPosition`](ChromaticPosition.md)

#### Returns

[`ChromaticPosition`](ChromaticPosition.md)

#### Defined in

[Client.ts:74](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L74)

___

### router

▸ **router**(): [`ChromaticRouter`](ChromaticRouter.md)

#### Returns

[`ChromaticRouter`](ChromaticRouter.md)

#### Defined in

[Client.ts:86](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L86)

___

### routerContract

▸ **routerContract**(): `ChromaticRouter`

#### Returns

`ChromaticRouter`

#### Defined in

[Client.ts:91](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L91)

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

[Client.ts:36](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/Client.ts#L36)
