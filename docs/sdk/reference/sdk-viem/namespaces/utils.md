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

[packages/sdk-viem/src/utils/helpers.ts:26](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L26)

## Variables

### MAX\_UINT256

• `Const` **MAX\_UINT256**: `bigint`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:103](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L103)

___

### errorSignitures

• `Const` **errorSignitures**: `ErrorSignatures`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:94](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L94)

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

[packages/sdk-viem/src/utils/helpers.ts:57](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L57)

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

[packages/sdk-viem/src/utils/helpers.ts:44](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L44)

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

[packages/sdk-viem/src/utils/helpers.ts:33](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L33)

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

[packages/sdk-viem/src/utils/helpers.ts:38](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L38)

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

[packages/sdk-viem/src/utils/helpers.ts:18](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L18)

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

[packages/sdk-viem/src/utils/helpers.ts:51](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L51)

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

[packages/sdk-viem/src/utils/helpers.ts:66](https://github.com/chromatic-protocol/sdk/blob/3c3ce86/packages/sdk-viem/src/utils/helpers.ts#L66)
