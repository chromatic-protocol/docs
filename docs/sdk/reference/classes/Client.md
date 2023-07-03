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

[Client.ts:43](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L43)

## Accessors

### provider

• `get` **provider**(): `Provider`

#### Returns

`Provider`

#### Defined in

[Client.ts:22](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L22)

• `set` **provider**(`provider`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |

#### Returns

`void`

#### Defined in

[Client.ts:39](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L39)

___

### signer

• `get` **signer**(): `Signer`

#### Returns

`Signer`

#### Defined in

[Client.ts:18](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L18)

• `set` **signer**(`signer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`void`

#### Defined in

[Client.ts:36](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L36)

## Methods

### account

▸ **account**(): [`ChromaticAccount`](ChromaticAccount.md)

#### Returns

[`ChromaticAccount`](ChromaticAccount.md)

#### Defined in

[Client.ts:74](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L74)

___

### contracts

▸ **contracts**(): `Record`<`string`, `Contract`\>

#### Returns

`Record`<`string`, `Contract`\>

#### Defined in

[Client.ts:78](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L78)

___

### lens

▸ **lens**(): [`ChromaticLens`](ChromaticLens.md)

#### Returns

[`ChromaticLens`](ChromaticLens.md)

#### Defined in

[Client.ts:54](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L54)

___

### market

▸ **market**(): [`ChromaticMarket`](ChromaticMarket.md)

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

#### Defined in

[Client.ts:62](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L62)

___

### marketFactory

▸ **marketFactory**(): [`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Returns

[`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Defined in

[Client.ts:58](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L58)

___

### position

▸ **position**(): [`ChromaticPosition`](ChromaticPosition.md)

#### Returns

[`ChromaticPosition`](ChromaticPosition.md)

#### Defined in

[Client.ts:66](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L66)

___

### router

▸ **router**(): [`ChromaticRouter`](ChromaticRouter.md)

#### Returns

[`ChromaticRouter`](ChromaticRouter.md)

#### Defined in

[Client.ts:70](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L70)

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

[Client.ts:26](https://github.com/chromatic-protocol/sdk/blob/e183082/src/Client.ts#L26)
