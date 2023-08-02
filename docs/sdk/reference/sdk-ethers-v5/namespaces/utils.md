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

[packages/sdk-ethers-v5/src/utils/helpers.ts:93](https://github.com/chromatic-protocol/sdk/blob/5887df0/packages/sdk-ethers-v5/src/utils/helpers.ts#L93)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:40](https://github.com/chromatic-protocol/sdk/blob/5887df0/packages/sdk-ethers-v5/src/utils/helpers.ts#L40)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:26](https://github.com/chromatic-protocol/sdk/blob/5887df0/packages/sdk-ethers-v5/src/utils/helpers.ts#L26)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:34](https://github.com/chromatic-protocol/sdk/blob/5887df0/packages/sdk-ethers-v5/src/utils/helpers.ts#L34)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:50](https://github.com/chromatic-protocol/sdk/blob/5887df0/packages/sdk-ethers-v5/src/utils/helpers.ts#L50)

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
