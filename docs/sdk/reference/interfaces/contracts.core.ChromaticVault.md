---
id: "contracts.core.ChromaticVault"
title: "Interface: ChromaticVault"
sidebar_label: "ChromaticVault"
custom_edit_url: null
---

[contracts](../namespaces/contracts.md).[core](../namespaces/contracts.core.md).ChromaticVault

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticVault`**

## Methods

### attach

▸ **attach**(`addressOrName`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/core/ChromaticVault.ts:522](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L522)

___

### automate

▸ **automate**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:781](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L781)

___

### cancelMakerEarningDistributionTask

▸ **cancelMakerEarningDistributionTask**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancels a maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:787](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L787)

___

### cancelMarketEarningDistributionTask

▸ **cancelMarketEarningDistributionTask**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancels a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:796](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L796)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/core/ChromaticVault.ts:521](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L521)

___

### createMakerEarningDistributionTask

▸ **createMakerEarningDistributionTask**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

Creates a maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:805](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L805)

___

### createMarketEarningDistributionTask

▸ **createMarketEarningDistributionTask**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

Creates a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:814](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L814)

___

### dedicatedMsgSender

▸ **dedicatedMsgSender**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:819](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L819)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Returns

`Promise`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/ChromaticVault.ts:523](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L523)

___

### distributeMakerEarning

▸ **distributeMakerEarning**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

Distributes the maker earning for a token to the each markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:825](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L825)

___

### distributeMarketEarning

▸ **distributeMarketEarning**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

Distributes the market earning for a market to the each bins.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:834](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L834)

___

### flashLoan

▸ **flashLoan**(`token`, `amount`, `recipient`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Executes a flash loan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token for the flash loan. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of the flash loan. |
| `recipient` | `PromiseOrValue`<`string`\> | The address to receive the flash loan. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the flash loan. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:846](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L846)

___

### getPendingBinShare

▸ **getPendingBinShare**(`market`, `binBalance`, `overrides?`): `Promise`<`BigNumber`\>

The pending share of earnings is calculated based on the bin balance, maker balances, and market balances.
Retrieves the pending share of earnings for a specific bin (subset) of funds in a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `binBalance` | `PromiseOrValue`<`BigNumberish`\> | The balance of funds in the bin. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:860](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L860)

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

[gen/contracts/core/ChromaticVault.ts:533](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L533)

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

[gen/contracts/core/ChromaticVault.ts:536](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L536)

___

### makerBalances

▸ **makerBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:866](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L866)

___

### makerEarningDistributionTaskIds

▸ **makerEarningDistributionTaskIds**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:871](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L871)

___

### makerMarketBalances

▸ **makerMarketBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:876](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L876)

___

### marketEarningDistributionTaskIds

▸ **marketEarningDistributionTaskIds**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:881](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L881)

___

### onAddLiquidity

▸ **onAddLiquidity**(`amount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when liquidity is added to the vault by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of liquidity being added. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:891](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L891)

___

### onClaimPosition

▸ **onClaimPosition**(`positionId`, `recipient`, `takerMargin`, `settlementAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when a position is claimed by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the claimed position. |
| `recipient` | `PromiseOrValue`<`string`\> | The address that will receive the settlement amount. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the taker for the position. |
| `settlementAmount` | `PromiseOrValue`<`BigNumberish`\> | The amount to be settled for the position. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:904](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L904)

___

### onOpenPosition

▸ **onOpenPosition**(`positionId`, `takerMargin`, `tradingFee`, `protocolFee`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when a position is opened by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the opened position. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the taker for the position. |
| `tradingFee` | `PromiseOrValue`<`BigNumberish`\> | The trading fee associated with the position. |
| `protocolFee` | `PromiseOrValue`<`BigNumberish`\> | The protocol fee associated with the position. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:920](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L920)

___

### onSettlePendingLiquidity

▸ **onSettlePendingLiquidity**(`pendingDeposit`, `pendingWithdrawal`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when pending liquidity is settled in the vault by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pendingDeposit` | `PromiseOrValue`<`BigNumberish`\> | The amount of pending deposits being settled. |
| `pendingWithdrawal` | `PromiseOrValue`<`BigNumberish`\> | The amount of pending withdrawals being settled. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:934](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L934)

___

### onWithdrawLiquidity

▸ **onWithdrawLiquidity**(`recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when liquidity is withdrawn from the vault by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `PromiseOrValue`<`string`\> | The address that will receive the withdrawn liquidity. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of liquidity to be withdrawn. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:946](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L946)

___

### pendingDeposits

▸ **pendingDeposits**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:952](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L952)

___

### pendingMakerEarnings

▸ **pendingMakerEarnings**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:957](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L957)

___

### pendingMarketEarnings

▸ **pendingMarketEarnings**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:962](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L962)

___

### pendingWithdrawals

▸ **pendingWithdrawals**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:967](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L967)

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

[gen/contracts/core/ChromaticVault.ts:527](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L527)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/ChromaticVault.ts:537](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L537)

▸ **removeAllListeners**(`eventName?`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/ChromaticVault.ts:540](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L540)

___

### resolveMakerEarningDistribution

▸ **resolveMakerEarningDistribution**(`token`, `overrides?`): `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

Resolves the maker earning distribution for a specific token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:976](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L976)

___

### resolveMarketEarningDistribution

▸ **resolveMarketEarningDistribution**(`market`, `overrides?`): `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

Resolves the market earning distribution for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:985](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L985)

___

### takerBalances

▸ **takerBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:990](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L990)

___

### takerMarketBalances

▸ **takerMarketBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:995](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L995)

___

### transferKeeperFee

▸ **transferKeeperFee**(`keeper`, `fee`, `margin`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Transfers the keeper fee from the market to the specified keeper.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keeper` | `PromiseOrValue`<`string`\> | The address of the keeper to receive the fee. |
| `fee` | `PromiseOrValue`<`BigNumberish`\> | The amount of the fee to transfer as native token. |
| `margin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount used for the fee payment. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticVault.ts:1007](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticVault.ts#L1007)
