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

[packages/sdk-ethers-v6/src/utils/helpers.ts:101](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-ethers-v6/src/utils/helpers.ts#L101)

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

[packages/sdk-ethers-v6/src/utils/helpers.ts:42](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-ethers-v6/src/utils/helpers.ts#L42)

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

[packages/sdk-ethers-v6/src/utils/helpers.ts:28](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-ethers-v6/src/utils/helpers.ts#L28)

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

[packages/sdk-ethers-v6/src/utils/helpers.ts:36](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-ethers-v6/src/utils/helpers.ts#L36)

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

[packages/sdk-ethers-v6/src/utils/helpers.ts:51](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-ethers-v6/src/utils/helpers.ts#L51)

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
