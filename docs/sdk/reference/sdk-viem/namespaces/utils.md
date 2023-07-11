---
id: "utils"
title: "Namespace: utils"
sidebar_label: "utils"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### Contract

Ƭ **Contract**<`TAbi`\>: `GetContractReturnType`<`TAbi`, `PublicClient`, `WalletClient`, `Address`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends `Abi` |

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:32](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L32)

## Variables

### MAX\_UINT256

• `Const` **MAX\_UINT256**: `bigint`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:110](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L110)

___

### errorSignitures

• `Const` **errorSignitures**: `ErrorSignatures`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:92](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L92)

## Functions

### PromiseOnlySuccess

▸ **PromiseOnlySuccess**<`T`\>(`values`): `Promise`<`Awaited`<`T`\>[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Iterable`<`T` \| `PromiseLike`<`T`\>\> |

#### Returns

`Promise`<`Awaited`<`T`\>[]\>

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:63](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L63)

___

### checkClient

▸ **checkClient**(`client`): asserts client is Client & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](../classes/Client.md) |

#### Returns

asserts client is Client & Object

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:50](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L50)

___

### checkPublicClient

▸ **checkPublicClient**(`client`): asserts client is Client & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](../classes/Client.md) |

#### Returns

asserts client is Client & Object

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:39](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L39)

___

### checkWalletClient

▸ **checkWalletClient**(`client`): asserts client is Client & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](../classes/Client.md) |

#### Returns

asserts client is Client & Object

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:44](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L44)

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

[packages/sdk-viem/src/utils/helpers.ts:24](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L24)

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

[packages/sdk-viem/src/utils/helpers.ts:57](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L57)

___

### handleBytesError

▸ **handleBytesError**<`T`\>(`fn`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:73](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/utils/helpers.ts#L73)
