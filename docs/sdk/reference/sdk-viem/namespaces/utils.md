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

[packages/sdk-viem/src/utils/helpers.ts:39](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L39)

## Variables

### MAX\_UINT256

• `Const` **MAX\_UINT256**: `bigint`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:124](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L124)

___

### errorSignitures

• `Const` **errorSignitures**: `ErrorSignatures`

#### Defined in

[packages/sdk-viem/src/utils/helpers.ts:99](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L99)

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

[packages/sdk-viem/src/utils/helpers.ts:70](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L70)

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

[packages/sdk-viem/src/utils/helpers.ts:57](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L57)

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

[packages/sdk-viem/src/utils/helpers.ts:46](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L46)

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

[packages/sdk-viem/src/utils/helpers.ts:51](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L51)

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

[packages/sdk-viem/src/utils/helpers.ts:31](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L31)

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

[packages/sdk-viem/src/utils/helpers.ts:64](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L64)

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

[packages/sdk-viem/src/utils/helpers.ts:80](https://github.com/chromatic-protocol/sdk/blob/e1c5d6c/packages/sdk-viem/src/utils/helpers.ts#L80)
