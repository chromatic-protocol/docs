---
id: "utils"
title: "Namespace: utils"
sidebar_label: "utils"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### logger

• `Const` **logger**: `any`

#### Defined in

[utils/helpers.ts:5](https://github.com/chromatic-protocol/sdk/blob/6709577/src/utils/helpers.ts#L5)

## Functions

### PromiseOnlySuccess

▸ **PromiseOnlySuccess**<`T`\>(`values`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> |

#### Returns

`Promise`<`T`[]\>

#### Defined in

[utils/helpers.ts:21](https://github.com/chromatic-protocol/sdk/blob/6709577/src/utils/helpers.ts#L21)

___

### decodeTokenId

▸ **decodeTokenId**(`encodedId`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedId` | `BigNumber` |

#### Returns

`number`

#### Defined in

[utils/helpers.ts:7](https://github.com/chromatic-protocol/sdk/blob/6709577/src/utils/helpers.ts#L7)

___

### encodeTokenId

▸ **encodeTokenId**(`tradingFeeRate`, `long?`): `BigNumber`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tradingFeeRate` | `number` | `undefined` |
| `long` | `boolean` | `true` |

#### Returns

`BigNumber`

#### Defined in

[utils/helpers.ts:15](https://github.com/chromatic-protocol/sdk/blob/6709577/src/utils/helpers.ts#L15)
