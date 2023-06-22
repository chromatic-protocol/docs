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

[gen/contracts/periphery/ChromaticAccount.ts:198](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L198)

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

[gen/contracts/periphery/ChromaticAccount.ts:348](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L348)

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

[gen/contracts/periphery/ChromaticAccount.ts:358](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L358)

___

### claimPositionCallback

▸ **claimPositionCallback**(`positionId`, `arg1`, `overrides?`): `Promise`<`ContractTransaction`\>

Callback function called after claiming a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the claimed position. |
| `arg1` | `PromiseOrValue`<`BytesLike`\> | - |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:369](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L369)

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

[gen/contracts/periphery/ChromaticAccount.ts:380](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L380)

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

[gen/contracts/periphery/ChromaticAccount.ts:197](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L197)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Returns

`Promise`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:199](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L199)

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

[gen/contracts/periphery/ChromaticAccount.ts:390](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L390)

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

[gen/contracts/periphery/ChromaticAccount.ts:400](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L400)

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

[gen/contracts/periphery/ChromaticAccount.ts:412](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L412)

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

[gen/contracts/periphery/ChromaticAccount.ts:209](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L209)

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

[gen/contracts/periphery/ChromaticAccount.ts:212](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L212)

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

[gen/contracts/periphery/ChromaticAccount.ts:428](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L428)

___

### openPositionCallback

▸ **openPositionCallback**(`settlementToken`, `vault`, `marginRequired`, `arg3`, `overrides?`): `Promise`<`ContractTransaction`\>

Callback function called after opening a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token used in the position. |
| `vault` | `PromiseOrValue`<`string`\> | The address of the vault contract. |
| `marginRequired` | `PromiseOrValue`<`BigNumberish`\> | The amount of margin required for the position. |
| `arg3` | `PromiseOrValue`<`BytesLike`\> | - |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticAccount.ts:445](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L445)

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

[gen/contracts/periphery/ChromaticAccount.ts:203](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L203)

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

[gen/contracts/periphery/ChromaticAccount.ts:213](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L213)

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

[gen/contracts/periphery/ChromaticAccount.ts:216](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L216)

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

[gen/contracts/periphery/ChromaticAccount.ts:458](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/contracts/periphery/ChromaticAccount.ts#L458)
