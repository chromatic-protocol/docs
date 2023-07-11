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

[utils/helpers.ts:93](https://github.com/chromatic-protocol/sdk/blob/4bf5570/packages/sdk-ethers-v5/src/utils/helpers.ts#L93)

___

### logger

• `Const` **logger**: `any`

#### Defined in

[utils/helpers.ts:24](https://github.com/chromatic-protocol/sdk/blob/4bf5570/packages/sdk-ethers-v5/src/utils/helpers.ts#L24)

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

[utils/helpers.ts:40](https://github.com/chromatic-protocol/sdk/blob/4bf5570/packages/sdk-ethers-v5/src/utils/helpers.ts#L40)

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

[utils/helpers.ts:26](https://github.com/chromatic-protocol/sdk/blob/4bf5570/packages/sdk-ethers-v5/src/utils/helpers.ts#L26)

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

[utils/helpers.ts:34](https://github.com/chromatic-protocol/sdk/blob/4bf5570/packages/sdk-ethers-v5/src/utils/helpers.ts#L34)

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

[utils/helpers.ts:50](https://github.com/chromatic-protocol/sdk/blob/4bf5570/packages/sdk-ethers-v5/src/utils/helpers.ts#L50)
