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

[packages/sdk-viem/src/utils/helpers.ts:42](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L42)

## Variables

### MAX\_UINT256

• `Const` **MAX\_UINT256**: `bigint`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:132](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L132)

___

### errorSignitures

• `Const` **errorSignitures**: `ErrorSignatures`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:107](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L107)

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

[packages/sdk-viem/src/utils/helpers.ts:73](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L73)

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

[packages/sdk-viem/src/utils/helpers.ts:60](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L60)

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

[packages/sdk-viem/src/utils/helpers.ts:49](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L49)

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

[packages/sdk-viem/src/utils/helpers.ts:54](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L54)

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

[packages/sdk-viem/src/utils/helpers.ts:34](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L34)

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

[packages/sdk-viem/src/utils/helpers.ts:67](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L67)

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

[packages/sdk-viem/src/utils/helpers.ts:82](https://github.com/chromatic-protocol/sdk/blob/eca2b32/packages/sdk-viem/src/utils/helpers.ts#L82)
