---
id: "contracts.core.ChromaticMarket"
title: "Interface: ChromaticMarket"
sidebar_label: "ChromaticMarket"
custom_edit_url: null
---

[contracts](../namespaces/contracts.md).[core](../namespaces/contracts.core.md).ChromaticMarket

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticMarket`**

## Methods

### addLiquidity

▸ **addLiquidity**(`recipient`, `tradingFeeRate`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds liquidity to the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `PromiseOrValue`<`string`\> | The address to receive the liquidity tokens. |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for the liquidity. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:916](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L916)

___

### attach

▸ **attach**(`addressOrName`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:606](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L606)

___

### checkClaimPosition

▸ **checkClaimPosition**(`positionId`, `overrides?`): `Promise`<`boolean`\>

Checks if a position is eligible for claim.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:927](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L927)

___

### checkLiquidation

▸ **checkLiquidation**(`positionId`, `overrides?`): `Promise`<`boolean`\>

Checks if a position is eligible for liquidation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:936](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L936)

___

### claimLiquidity

▸ **claimLiquidity**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims liquidity from a liquidity receipt.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:946](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L946)

___

### claimPosition(uint256,address,bytes)

▸ **claimPosition(uint256,address,bytes)**(`positionId`, `recipient`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims a closed position in the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `recipient` | `PromiseOrValue`<`string`\> | The address of the recipient of the claimed position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the claim callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:958](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L958)

___

### claimPosition(uint256,address,uint256)

▸ **claimPosition(uint256,address,uint256)**(`positionId`, `keeper`, `keeperFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims a closed position on behalf of a keeper.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `keeper` | `PromiseOrValue`<`string`\> | The address of the keeper claiming the position. |
| `keeperFee` | `PromiseOrValue`<`BigNumberish`\> | The native token amount of the keeper's fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:971](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L971)

___

### claimableLiquidity

▸ **claimableLiquidity**(`tradingFeeRate`, `oracleVersion`, `overrides?`): `Promise`<`ClaimableLiquidityStructOutput`\>

Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the associated LiquidityPool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for which to retrieve the claimable liquidity. |
| `oracleVersion` | `PromiseOrValue`<`BigNumberish`\> | The oracle version for which to retrieve the claimable liquidity. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ClaimableLiquidityStructOutput`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:983](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L983)

___

### clbToken

▸ **clbToken**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:989](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L989)

___

### closePosition

▸ **closePosition**(`positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Closes a position in the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to close. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:995](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L995)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:605](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L605)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Returns

`Promise`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:607](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L607)

___

### distributeEarningToBins

▸ **distributeEarningToBins**(`earning`, `marketBalance`, `overrides?`): `Promise`<`ContractTransaction`\>

Distributes earning to the liquidity bins.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `earning` | `PromiseOrValue`<`BigNumberish`\> | The amount of earning to distribute. |
| `marketBalance` | `PromiseOrValue`<`BigNumberish`\> | The balance of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1005](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1005)

___

### factory

▸ **factory**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1011](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1011)

___

### getBinFreeLiquidity

▸ **getBinFreeLiquidity**(`tradingFeeRate`, `overrides?`): `Promise`<`BigNumber`\>

Retrieves the available (free) liquidity amount for a specific trading fee rate in the liquidity pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for which to retrieve the available liquidity amount. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1017](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1017)

___

### getBinLiquidity

▸ **getBinLiquidity**(`tradingFeeRate`, `overrides?`): `Promise`<`BigNumber`\>

Retrieves the total liquidity amount for a specific trading fee rate in the liquidity pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for which to retrieve the liquidity amount. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1026](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1026)

___

### getBinValues

▸ **getBinValues**(`tradingFeeRates`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves the values of a specific trading fee rate's bins in the liquidity pool.      The value of a bin represents the total valuation of the liquidity in the bin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | The list of trading fee rate for which to retrieve the bin value. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1035](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1035)

___

### getLpReceipt

▸ **getLpReceipt**(`receiptId`, `overrides?`): `Promise`<`LpReceiptStructOutput`\>

Retrieves the liquidity receipt with the given receipt ID.      It throws NotExistLpReceipt if the specified receipt ID does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity receipt to retrieve. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`LpReceiptStructOutput`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1044](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1044)

___

### getPositions

▸ **getPositions**(`positionIds`, `overrides?`): `Promise`<`PositionStructOutput`[]\>

Retrieves multiple positions by their IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionIds` | `PromiseOrValue`<`BigNumberish`\>[] | The IDs of the positions to retrieve. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`PositionStructOutput`[]\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1053](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1053)

___

### getProtocolFee

▸ **getProtocolFee**(`margin`, `overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1058](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1058)

___

### keeperFeePayer

▸ **keeperFeePayer**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1063](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1063)

___

### liquidate

▸ **liquidate**(`positionId`, `keeper`, `keeperFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Liquidates a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to liquidate. |
| `keeper` | `PromiseOrValue`<`string`\> | The address of the keeper performing the liquidation. |
| `keeperFee` | `PromiseOrValue`<`BigNumberish`\> | The native token amount of the keeper's fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1071](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1071)

___

### liquidator

▸ **liquidator**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1078](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1078)

___

### liquidityBinStatuses

▸ **liquidityBinStatuses**(`overrides?`): `Promise`<`LiquidityBinStatusStructOutput`[]\>

Retrieves the liquidity bin statuses for the caller's liquidity pool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`LiquidityBinStatusStructOutput`[]\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1083](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1083)

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

[gen/contracts/core/ChromaticMarket.ts:617](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L617)

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

[gen/contracts/core/ChromaticMarket.ts:620](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L620)

___

### onERC1155BatchReceived

▸ **onERC1155BatchReceived**(`operator`, `from`, `ids`, `values`, `data`, `overrides?`): `Promise`<`string`\>

Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` (i.e. 0xbc197c81, or its own function selector).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operator` | `PromiseOrValue`<`string`\> | The address which initiated the batch transfer (i.e. msg.sender) |
| `from` | `PromiseOrValue`<`string`\> | The address which previously owned the token |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] | An array containing ids of each token being transferred (order and length must match values array) |
| `values` | `PromiseOrValue`<`BigNumberish`\>[] | An array containing amounts of each token being transferred (order and length must match ids array) |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data with no specified format |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1095](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1095)

___

### onERC1155Received

▸ **onERC1155Received**(`operator`, `from`, `id`, `value`, `data`, `overrides?`): `Promise`<`string`\>

Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` (i.e. 0xf23a6e61, or its own function selector).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operator` | `PromiseOrValue`<`string`\> | The address which initiated the transfer (i.e. msg.sender) |
| `from` | `PromiseOrValue`<`string`\> | The address which previously owned the token |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The ID of the token being transferred |
| `value` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens being transferred |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data with no specified format |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1112](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1112)

___

### openPosition

▸ **openPosition**(`qty`, `leverage`, `takerMargin`, `makerMargin`, `maxAllowableTradingFee`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Opens a new position in the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qty` | `PromiseOrValue`<`BigNumberish`\> | The quantity of the position. |
| `leverage` | `PromiseOrValue`<`BigNumberish`\> | The leverage of the position in basis points. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the taker. |
| `makerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the maker. |
| `maxAllowableTradingFee` | `PromiseOrValue`<`BigNumberish`\> | The maximum allowable trading fee for the position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the position callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1130](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1130)

___

### oracleProvider

▸ **oracleProvider**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1140](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1140)

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

[gen/contracts/core/ChromaticMarket.ts:611](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L611)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:621](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L621)

▸ **removeAllListeners**(`eventName?`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:624](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L624)

___

### removeLiquidity

▸ **removeLiquidity**(`recipient`, `tradingFeeRate`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Removes liquidity from the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `PromiseOrValue`<`string`\> | The address to receive the removed liquidity. |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for the liquidity. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1148](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1148)

___

### settle

▸ **settle**(`overrides?`): `Promise`<`ContractTransaction`\>

This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
Executes the settlement process for the Chromatic market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1159](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1159)

___

### settlementToken

▸ **settlementToken**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1163](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1163)

___

### supportsInterface

▸ **supportsInterface**(`interfaceID`, `overrides?`): `Promise`<`boolean`\>

Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceID` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1168](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1168)

___

### vault

▸ **vault**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1173](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1173)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws liquidity from a liquidity receipt.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1180](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/ChromaticMarket.ts#L1180)
