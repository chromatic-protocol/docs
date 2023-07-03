---
id: "utils"
title: "Namespace: utils"
sidebar_label: "utils"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### errorSignitures

• `Const` **errorSignitures**: `ErrorSignatures`

#### Defined in

[utils/helpers.ts:86](https://github.com/chromatic-protocol/sdk/blob/6602637/src/utils/helpers.ts#L86)

___

### logger

• `Const` **logger**: `any`

#### Defined in

[utils/helpers.ts:17](https://github.com/chromatic-protocol/sdk/blob/6602637/src/utils/helpers.ts#L17)

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

[utils/helpers.ts:33](https://github.com/chromatic-protocol/sdk/blob/6602637/src/utils/helpers.ts#L33)

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

[utils/helpers.ts:19](https://github.com/chromatic-protocol/sdk/blob/6602637/src/utils/helpers.ts#L19)

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

[utils/helpers.ts:27](https://github.com/chromatic-protocol/sdk/blob/6602637/src/utils/helpers.ts#L27)

___

### handleBytesError

▸ **handleBytesError**<`T`\>(`fn`, `provider`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`T`\> |
| `provider` | `Provider` |

#### Returns

`Promise`<`T`\>

#### Defined in

[utils/helpers.ts:43](https://github.com/chromatic-protocol/sdk/blob/6602637/src/utils/helpers.ts#L43)
