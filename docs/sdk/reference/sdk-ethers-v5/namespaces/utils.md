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

[packages/sdk-ethers-v5/src/utils/helpers.ts:93](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v5/src/utils/helpers.ts#L93)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:34](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v5/src/utils/helpers.ts#L34)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:20](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v5/src/utils/helpers.ts#L20)

___

### encodeTokenId

▸ **encodeTokenId**(`tradingFeeRate`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tradingFeeRate` | `number` |

#### Returns

`BigNumber`

#### Defined in

[packages/sdk-ethers-v5/src/utils/helpers.ts:28](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v5/src/utils/helpers.ts#L28)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:44](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v5/src/utils/helpers.ts#L44)

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
