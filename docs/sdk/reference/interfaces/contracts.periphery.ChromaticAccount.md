---
id: "contracts.periphery.ChromaticAccount"
title: "Interface: ChromaticAccount"
sidebar_label: "ChromaticAccount"
custom_edit_url: null
---

[contracts](../namespaces/contracts.md).[periphery](../namespaces/contracts.periphery.md).ChromaticAccount

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticAccount`**

## Methods

### attach

▸ **attach**(`addressOrName`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:195](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L195)

___

### balance

▸ **balance**(`token`, `overrides?`): `Promise`<`BigNumber`\>

Returns the balance of the specified token for the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:345](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L345)

___

### claimPosition

▸ **claimPosition**(`marketAddress`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims the specified position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `PromiseOrValue`<`string`\> | The address of the market. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:355](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L355)

___

### claimPositionCallback

▸ **claimPositionCallback**(`positionId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Callback function called after claiming a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the claimed position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data related to the callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:366](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L366)

___

### closePosition

▸ **closePosition**(`marketAddress`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Closes the specified position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `PromiseOrValue`<`string`\> | The address of the market. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to close. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:377](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L377)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:194](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L194)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Returns

`Promise`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:196](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L196)

___

### getPositionIds

▸ **getPositionIds**(`market`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves an array of position IDs owned by this account for the specified market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:387](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L387)

___

### hasPositionId

▸ **hasPositionId**(`market`, `id`, `overrides?`): `Promise`<`boolean`\>

Checks if the specified market has the specified position ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:397](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L397)

___

### initialize

▸ **initialize**(`_owner`, `_router`, `_marketFactory`, `overrides?`): `Promise`<`ContractTransaction`\>

Initializes the account with the specified owner, router, and market factory addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> | The address of the account owner. |
| `_router` | `PromiseOrValue`<`string`\> | The address of the router contract. |
| `_marketFactory` | `PromiseOrValue`<`string`\> | The address of the market factory contract. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:409](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L409)

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

[gen/contracts/periphery/ChromaticAccount.ts:206](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L206)

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

[gen/contracts/periphery/ChromaticAccount.ts:209](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L209)

___

### openPosition

▸ **openPosition**(`marketAddress`, `qty`, `leverage`, `takerMargin`, `makerMargin`, `maxAllowableTradingFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Opens a new position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `PromiseOrValue`<`string`\> | The address of the market. |
| `qty` | `PromiseOrValue`<`BigNumberish`\> | The quantity of the position. |
| `leverage` | `PromiseOrValue`<`BigNumberish`\> | The leverage of the position. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin required for the taker. |
| `makerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin required for the maker. |
| `maxAllowableTradingFee` | `PromiseOrValue`<`BigNumberish`\> | The maximum allowable trading fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:425](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L425)

___

### openPositionCallback

▸ **openPositionCallback**(`settlementToken`, `vault`, `marginRequired`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Callback function called after opening a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token used in the position. |
| `vault` | `PromiseOrValue`<`string`\> | The address of the vault contract. |
| `marginRequired` | `PromiseOrValue`<`BigNumberish`\> | The amount of margin required for the position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data related to the callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:442](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L442)

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

[gen/contracts/periphery/ChromaticAccount.ts:200](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L200)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:210](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L210)

▸ **removeAllListeners**(`eventName?`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:213](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L213)

___

### withdraw

▸ **withdraw**(`token`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws the specified amount of tokens from the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token to withdraw. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens to withdraw. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:455](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticAccount.ts#L455)
