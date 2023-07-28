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

[utils/helpers.ts:95](https://github.com/chromatic-protocol/sdk/blob/15b6120/packages/sdk-ethers-v6/src/utils/helpers.ts#L95)

___

### logger

• `Const` **logger**: `any`

#### Defined in

[utils/helpers.ts:23](https://github.com/chromatic-protocol/sdk/blob/15b6120/packages/sdk-ethers-v6/src/utils/helpers.ts#L23)

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

[utils/helpers.ts:39](https://github.com/chromatic-protocol/sdk/blob/15b6120/packages/sdk-ethers-v6/src/utils/helpers.ts#L39)

___

### decodeTokenId

▸ **decodeTokenId**(`encodedId`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encodedId` | `bigint` |

#### Returns

`number`

#### Defined in

[utils/helpers.ts:25](https://github.com/chromatic-protocol/sdk/blob/15b6120/packages/sdk-ethers-v6/src/utils/helpers.ts#L25)

___

### encodeTokenId

▸ **encodeTokenId**(`tradingFeeRate`, `long?`): `bigint`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tradingFeeRate` | `number` | `undefined` |
| `long` | `boolean` | `true` |

#### Returns

`bigint`

#### Defined in

[utils/helpers.ts:33](https://github.com/chromatic-protocol/sdk/blob/15b6120/packages/sdk-ethers-v6/src/utils/helpers.ts#L33)

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

[utils/helpers.ts:49](https://github.com/chromatic-protocol/sdk/blob/15b6120/packages/sdk-ethers-v6/src/utils/helpers.ts#L49)
