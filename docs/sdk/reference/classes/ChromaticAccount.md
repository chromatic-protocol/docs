---
id: "ChromaticAccount"
title: "Class: ChromaticAccount"
sidebar_label: "ChromaticAccount"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ChromaticAccount**(`_client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticAccount.ts:11](https://github.com/chromatic-protocol/sdk/blob/9c1a5ec/src/entities/ChromaticAccount.ts#L11)

## Methods

### balance

▸ **balance**(`token`, `accountAddress?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `accountAddress?` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticAccount.ts:37](https://github.com/chromatic-protocol/sdk/blob/9c1a5ec/src/entities/ChromaticAccount.ts#L37)

___

### balances

▸ **balances**(`tokens`, `accountAddress?`): `Promise`<[`TokenBalancesResult`](../interfaces/TokenBalancesResult.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokens` | `string`[] |
| `accountAddress?` | `string` |

#### Returns

`Promise`<[`TokenBalancesResult`](../interfaces/TokenBalancesResult.md)[]\>

#### Defined in

[entities/ChromaticAccount.ts:44](https://github.com/chromatic-protocol/sdk/blob/9c1a5ec/src/entities/ChromaticAccount.ts#L44)

___

### contracts

▸ **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | (`address?`: `string`) => `ChromaticAccount` |
| `router` | (`signerOrProvider?`: `Signer` \| `Provider`) => `ChromaticRouter` |

#### Defined in

[entities/ChromaticAccount.ts:15](https://github.com/chromatic-protocol/sdk/blob/9c1a5ec/src/entities/ChromaticAccount.ts#L15)

___

### createAccount

▸ **createAccount**(): `Promise`<`ContractReceipt`\>

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticAccount.ts:22](https://github.com/chromatic-protocol/sdk/blob/9c1a5ec/src/entities/ChromaticAccount.ts#L22)

___

### getAccount

▸ **getAccount**(`signer?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Returns

`Promise`<`string`\>

#### Defined in

[entities/ChromaticAccount.ts:27](https://github.com/chromatic-protocol/sdk/blob/9c1a5ec/src/entities/ChromaticAccount.ts#L27)

___

### getPositionIds

▸ **getPositionIds**(`marketAddress`, `accountAddress?`): `Promise`<`BigNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `accountAddress?` | `string` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[entities/ChromaticAccount.ts:31](https://github.com/chromatic-protocol/sdk/blob/9c1a5ec/src/entities/ChromaticAccount.ts#L31)
