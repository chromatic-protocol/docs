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

[packages/sdk-ethers-v5/src/utils/helpers.ts:102](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/utils/helpers.ts#L102)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:43](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/utils/helpers.ts#L43)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:29](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/utils/helpers.ts#L29)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:37](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/utils/helpers.ts#L37)

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

[packages/sdk-ethers-v5/src/utils/helpers.ts:53](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/utils/helpers.ts#L53)

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
