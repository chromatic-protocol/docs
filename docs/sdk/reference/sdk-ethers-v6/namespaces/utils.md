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

[packages/sdk-ethers-v6/src/utils/helpers.ts:92](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v6/src/utils/helpers.ts#L92)

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

[packages/sdk-ethers-v6/src/utils/helpers.ts:33](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v6/src/utils/helpers.ts#L33)

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

[packages/sdk-ethers-v6/src/utils/helpers.ts:19](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v6/src/utils/helpers.ts#L19)

___

### encodeTokenId

▸ **encodeTokenId**(`tradingFeeRate`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tradingFeeRate` | `number` |

#### Returns

`bigint`

#### Defined in

[packages/sdk-ethers-v6/src/utils/helpers.ts:27](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v6/src/utils/helpers.ts#L27)

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

[packages/sdk-ethers-v6/src/utils/helpers.ts:42](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v6/src/utils/helpers.ts#L42)

___

### logger

▸ **logger**(`formatter`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/@types/debug/index.d.ts:51
