---
id: "contracts.periphery.ChromaticRouter"
title: "Interface: ChromaticRouter"
sidebar_label: "ChromaticRouter"
custom_edit_url: null
---

[contracts](../namespaces/contracts.md).[periphery](../namespaces/contracts.periphery.md).ChromaticRouter

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticRouter`**

## Methods

### addLiquidity

▸ **addLiquidity**(`market`, `feeRate`, `amount`, `recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds liquidity to a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `feeRate` | `PromiseOrValue`<`BigNumberish`\> | The fee rate of the liquidity bin. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount to add as liquidity. |
| `recipient` | `PromiseOrValue`<`string`\> | The recipient address. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:674](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L674)

___

### addLiquidityBatch

▸ **addLiquidityBatch**(`market`, `recipient`, `feeRates`, `amounts`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds liquidity to multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `recipient` | `PromiseOrValue`<`string`\> | The address of the recipient for each liquidity bin. |
| `feeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of fee rates for each liquidity bin. |
| `amounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of amounts to add as liquidity for each bin. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:689](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L689)

___

### addLiquidityCallback

▸ **addLiquidityCallback**(`settlementToken`, `vault`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after adding liquidity to the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token used for adding liquidity. |
| `vault` | `PromiseOrValue`<`string`\> | The address of the vault where the liquidity is added. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity addition. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:703](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L703)

___

### attach

▸ **attach**(`addressOrName`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:395](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L395)

___

### claimLiquidity

▸ **claimLiquidity**(`market`, `receiptId`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the LP receipt. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:715](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L715)

___

### claimLiquidityBatch

▸ **claimLiquidityBatch**(`market`, `_receiptIds`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `_receiptIds` | `PromiseOrValue`<`BigNumberish`\>[] | - |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:726](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L726)

___

### claimLiquidityCallback

▸ **claimLiquidityCallback**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after claiming liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity claim receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity claim. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:737](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L737)

___

### claimPosition

▸ **claimPosition**(`market`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims a position from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:748](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L748)

___

### closePosition

▸ **closePosition**(`market`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Closes a position in a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to close. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:759](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L759)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:394](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L394)

___

### createAccount

▸ **createAccount**(`overrides?`): `Promise`<`ContractTransaction`\>

Only one account can be created per user.      Emits an `AccountCreated` event upon successful creation.
Creates a new user account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:769](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L769)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Returns

`Promise`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:396](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L396)

___

### getAccount

▸ **getAccount**(`overrides?`): `Promise`<`string`\>

Retrieves the account of the caller.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:776](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L776)

___

### getLpReceiptIds(address)

▸ **getLpReceiptIds(address)**(`market`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves the LP receipt IDs of the caller for the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:793](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L793)

___

### getLpReceiptIds(address,address)

▸ **getLpReceiptIds(address,address)**(`market`, `owner`, `overrides?`): `Promise`<`BigNumber`[]\>

Get the LP receipt IDs associated with a specific market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `owner` | `PromiseOrValue`<`string`\> | The address of the owner. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:783](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L783)

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

[gen/contracts/periphery/ChromaticRouter.ts:406](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L406)

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

[gen/contracts/periphery/ChromaticRouter.ts:409](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L409)

___

### openPosition

▸ **openPosition**(`market`, `qty`, `leverage`, `takerMargin`, `makerMargin`, `maxAllowableTradingFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Opens a new position in a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `qty` | `PromiseOrValue`<`BigNumberish`\> | The quantity of the position. |
| `leverage` | `PromiseOrValue`<`BigNumberish`\> | The leverage of the position. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount for the taker. |
| `makerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount for the maker. |
| `maxAllowableTradingFee` | `PromiseOrValue`<`BigNumberish`\> | The maximum allowable trading fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:807](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L807)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

Returns the address of the current owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:820](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L820)

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

[gen/contracts/periphery/ChromaticRouter.ts:400](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L400)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:410](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L410)

▸ **removeAllListeners**(`eventName?`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:413](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L413)

___

### removeLiquidity

▸ **removeLiquidity**(`market`, `feeRate`, `clbTokenAmount`, `recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Removes liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `feeRate` | `PromiseOrValue`<`BigNumberish`\> | The fee rate of the liquidity bin. |
| `clbTokenAmount` | `PromiseOrValue`<`BigNumberish`\> | The amount of CLB tokens to remove as liquidity. |
| `recipient` | `PromiseOrValue`<`string`\> | The recipient address. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:829](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L829)

___

### removeLiquidityBatch

▸ **removeLiquidityBatch**(`market`, `recipient`, `feeRates`, `clbTokenAmounts`, `overrides?`): `Promise`<`ContractTransaction`\>

Removes liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `recipient` | `PromiseOrValue`<`string`\> | The address of the recipient for each liquidity bin. |
| `feeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of fee rates for each liquidity bin. |
| `clbTokenAmounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of CLB token amounts to remove as liquidity for each bin. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:844](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L844)

___

### removeLiquidityCallback

▸ **removeLiquidityCallback**(`clbToken`, `clbTokenId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after removing liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clbToken` | `PromiseOrValue`<`string`\> | The address of the Chromatic liquidity token. |
| `clbTokenId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the Chromatic liquidity token to be removed. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity removal. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:858](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L858)

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:868](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L868)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:875](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L875)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`market`, `receiptId`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the LP receipt. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:885](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L885)

___

### withdrawLiquidityBatch

▸ **withdrawLiquidityBatch**(`market`, `_receiptIds`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `_receiptIds` | `PromiseOrValue`<`BigNumberish`\>[] | - |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:896](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L896)

___

### withdrawLiquidityCallback

▸ **withdrawLiquidityCallback**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after withdrawing liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity withdrawal receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity withdrawal. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticRouter.ts:907](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/contracts/periphery/ChromaticRouter.ts#L907)
