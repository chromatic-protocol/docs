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

[gen/contracts/core/ChromaticMarket.ts:936](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L936)

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

[gen/contracts/core/ChromaticMarket.ts:622](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L622)

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

[gen/contracts/core/ChromaticMarket.ts:947](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L947)

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

[gen/contracts/core/ChromaticMarket.ts:956](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L956)

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

[gen/contracts/core/ChromaticMarket.ts:966](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L966)

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

[gen/contracts/core/ChromaticMarket.ts:978](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L978)

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

[gen/contracts/core/ChromaticMarket.ts:991](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L991)

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

[gen/contracts/core/ChromaticMarket.ts:1003](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1003)

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

[gen/contracts/core/ChromaticMarket.ts:1009](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1009)

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

[gen/contracts/core/ChromaticMarket.ts:1015](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1015)

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

[gen/contracts/core/ChromaticMarket.ts:621](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L621)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Returns

`Promise`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:623](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L623)

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

[gen/contracts/core/ChromaticMarket.ts:1025](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1025)

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

[gen/contracts/core/ChromaticMarket.ts:1031](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1031)

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

[gen/contracts/core/ChromaticMarket.ts:1037](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1037)

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

[gen/contracts/core/ChromaticMarket.ts:1046](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1046)

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

[gen/contracts/core/ChromaticMarket.ts:1055](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1055)

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

[gen/contracts/core/ChromaticMarket.ts:1064](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1064)

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

[gen/contracts/core/ChromaticMarket.ts:1073](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1073)

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

[gen/contracts/core/ChromaticMarket.ts:1078](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1078)

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

[gen/contracts/core/ChromaticMarket.ts:1086](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1086)

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

[gen/contracts/core/ChromaticMarket.ts:1093](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1093)

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

[gen/contracts/core/ChromaticMarket.ts:1098](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1098)

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

[gen/contracts/core/ChromaticMarket.ts:633](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L633)

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

[gen/contracts/core/ChromaticMarket.ts:636](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L636)

___

### onERC1155BatchReceived

▸ **onERC1155BatchReceived**(`arg0`, `arg1`, `arg2`, `arg3`, `arg4`, `overrides?`): `Promise`<`string`\>

Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` (i.e. 0xbc197c81, or its own function selector).

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `arg1` | `PromiseOrValue`<`string`\> |
| `arg2` | `PromiseOrValue`<`BigNumberish`\>[] |
| `arg3` | `PromiseOrValue`<`BigNumberish`\>[] |
| `arg4` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1110](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1110)

___

### onERC1155Received

▸ **onERC1155Received**(`arg0`, `arg1`, `arg2`, `arg3`, `arg4`, `overrides?`): `Promise`<`string`\>

Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` (i.e. 0xf23a6e61, or its own function selector).

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `arg1` | `PromiseOrValue`<`string`\> |
| `arg2` | `PromiseOrValue`<`BigNumberish`\> |
| `arg3` | `PromiseOrValue`<`BigNumberish`\> |
| `arg4` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1127](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1127)

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

[gen/contracts/core/ChromaticMarket.ts:1145](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1145)

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

[gen/contracts/core/ChromaticMarket.ts:1155](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1155)

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

[gen/contracts/core/ChromaticMarket.ts:627](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L627)

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

[gen/contracts/core/ChromaticMarket.ts:637](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L637)

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

[gen/contracts/core/ChromaticMarket.ts:640](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L640)

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

[gen/contracts/core/ChromaticMarket.ts:1163](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1163)

___

### setFeeProtocol

▸ **setFeeProtocol**(`feeProtocol`, `overrides?`): `Promise`<`ContractTransaction`\>

Set the denominator of the protocol's % share of the fees

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feeProtocol` | `PromiseOrValue`<`BigNumberish`\> | new protocol fee for the market |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarket.ts:1174](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1174)

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

[gen/contracts/core/ChromaticMarket.ts:1183](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1183)

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

[gen/contracts/core/ChromaticMarket.ts:1187](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1187)

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

[gen/contracts/core/ChromaticMarket.ts:1192](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1192)

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

[gen/contracts/core/ChromaticMarket.ts:1197](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1197)

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

[gen/contracts/core/ChromaticMarket.ts:1204](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/contracts/core/ChromaticMarket.ts#L1204)
