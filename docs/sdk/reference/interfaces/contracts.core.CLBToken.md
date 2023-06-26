---
id: "contracts.core.CLBToken"
title: "Interface: CLBToken"
sidebar_label: "CLBToken"
custom_edit_url: null
---

[contracts](../namespaces/contracts.md).[core](../namespaces/contracts.core.md).CLBToken

## Hierarchy

- `BaseContract`

  ↳ **`CLBToken`**

## Methods

### attach

▸ **attach**(`addressOrName`): [`CLBToken`](contracts.core.CLBToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/core/CLBToken.ts:271](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L271)

___

### balanceOf

▸ **balanceOf**(`account`, `id`, `overrides?`): `Promise`<`BigNumber`\>

See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:464](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L464)

___

### balanceOfBatch

▸ **balanceOfBatch**(`accounts`, `ids`, `overrides?`): `Promise`<`BigNumber`[]\>

See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `PromiseOrValue`<`string`\>[] |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[gen/contracts/core/CLBToken.ts:473](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L473)

___

### burn

▸ **burn**(`from`, `id`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the Chromatic Market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> | The address from which to burn tokens. |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID to burn. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens to burn. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:485](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L485)

___

### connect

▸ **connect**(`signerOrProvider`): [`CLBToken`](contracts.core.CLBToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/core/CLBToken.ts:270](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L270)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

Retrieves the number of decimals used for token amounts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:495](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L495)

___

### deployed

▸ **deployed**(): `Promise`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Returns

`Promise`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/CLBToken.ts:272](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L272)

___

### description

▸ **description**(`id`, `overrides?`): `Promise`<`string`\>

Retrieves the description of a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the description. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:501](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L501)

___

### exists

▸ **exists**(`id`, `overrides?`): `Promise`<`boolean`\>

Indicates whether any token exist with a given id, or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:509](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L509)

___

### image

▸ **image**(`id`, `overrides?`): `Promise`<`string`\>

Retrieves the image URI of a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the image URI. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:518](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L518)

___

### isApprovedForAll

▸ **isApprovedForAll**(`account`, `operator`, `overrides?`): `Promise`<`boolean`\>

See {IERC1155-isApprovedForAll}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `operator` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:526](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L526)

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/contracts/core/CLBToken.ts:282](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L282)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/contracts/core/CLBToken.ts:285](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L285)

___

### market

▸ **market**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:532](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L532)

___

### mint

▸ **mint**(`to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the Chromatic Market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `PromiseOrValue`<`string`\> | The address to which the minted tokens will be assigned. |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID to mint. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens to mint. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data to pass during the minting process. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:541](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L541)

___

### name

▸ **name**(`id`, `overrides?`): `Promise`<`string`\>

Retrieves the name of a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the name. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:553](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L553)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

[gen/contracts/core/CLBToken.ts:276](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L276)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CLBToken`](contracts.core.CLBToken.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/CLBToken.ts:286](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L286)

▸ **removeAllListeners**(`eventName?`): [`CLBToken`](contracts.core.CLBToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/CLBToken.ts:289](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L289)

___

### safeBatchTransferFrom

▸ **safeBatchTransferFrom**(`from`, `to`, `ids`, `amounts`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

See {IERC1155-safeBatchTransferFrom}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> |
| `to` | `PromiseOrValue`<`string`\> |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] |
| `amounts` | `PromiseOrValue`<`BigNumberish`\>[] |
| `data` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:561](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L561)

___

### safeTransferFrom

▸ **safeTransferFrom**(`from`, `to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

See {IERC1155-safeTransferFrom}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> |
| `to` | `PromiseOrValue`<`string`\> |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `data` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:573](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L573)

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

See {IERC1155-setApprovalForAll}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `PromiseOrValue`<`string`\> |
| `approved` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:585](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L585)

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

See {IERC165-supportsInterface}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:594](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L594)

___

### totalSupply

▸ **totalSupply**(`id`, `overrides?`): `Promise`<`BigNumber`\>

Total amount of tokens in with a given id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the total supply. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:603](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L603)

___

### totalSupplyBatch

▸ **totalSupplyBatch**(`ids`, `overrides?`): `Promise`<`BigNumber`[]\>

Total amounts of tokens in with the given ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] | The token IDs for which to retrieve the total supply. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[gen/contracts/core/CLBToken.ts:612](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L612)

___

### uri

▸ **uri**(`id`, `overrides?`): `Promise`<`string`\>

Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/CLBToken.ts:620](https://github.com/chromatic-protocol/sdk/blob/096ebb3/src/gen/contracts/core/CLBToken.ts#L620)
