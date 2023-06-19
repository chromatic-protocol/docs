---
id: "contracts.periphery.ChromaticLens-1"
title: "Interface: ChromaticLens"
sidebar_label: "ChromaticLens"
custom_edit_url: null
---

[contracts](../namespaces/contracts.md).[periphery](../namespaces/contracts.periphery.md).ChromaticLens

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticLens`**

## Methods

### attach

▸ **attach**(`addressOrName`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:200](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L200)

___

### claimableLiquidity

▸ **claimableLiquidity**(`market`, `tradingFeeRate`, `_oracleVersion`, `overrides?`): `Promise`<`ClaimableLiquidityStructOutput`\>

Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The Chromatic Market from which to retrieve the claimable liquidity information. |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for which to retrieve the claimable liquidity. |
| `_oracleVersion` | `PromiseOrValue`<`BigNumberish`\> | The oracle version for which to retrieve the claimable liquidity. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ClaimableLiquidityStructOutput`\>

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:292](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L292)

___

### clbBalanceOf

▸ **clbBalanceOf**(`market`, `owner`, `overrides?`): `Promise`<[`CLBBalanceStructOutput`](../namespaces/contracts.periphery.ChromaticLens.md#clbbalancestructoutput)[]\>

Retrieves the CLB token balances for the specified owner in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `owner` | `PromiseOrValue`<`string`\> | The address of the CLB token owner. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`CLBBalanceStructOutput`](../namespaces/contracts.periphery.ChromaticLens.md#clbbalancestructoutput)[]\>

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:304](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L304)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:199](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L199)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Returns

`Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:201](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L201)

___

### liquidityBinStatuses

▸ **liquidityBinStatuses**(`market`, `overrides?`): `Promise`<`LiquidityBinStatusStructOutput`[]\>

Retrieves the liquidity bin statuses for the specified Chromatic Market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The Chromatic Market contract for which liquidity bin statuses are retrieved. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`LiquidityBinStatusStructOutput`[]\>

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:314](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L314)

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

[gen/contracts/periphery/ChromaticLens.ts:211](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L211)

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

[gen/contracts/periphery/ChromaticLens.ts:214](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L214)

___

### lpReceipts

▸ **lpReceipts**(`market`, `owner`, `overrides?`): `Promise`<`LpReceiptStructOutput`[]\>

Retrieves the LP receipts for the specified owner in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `owner` | `PromiseOrValue`<`string`\> | The address of the LP token owner. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`LpReceiptStructOutput`[]\>

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:324](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L324)

___

### multicall

▸ **multicall**(`data`, `overrides?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PromiseOrValue`<`BytesLike`\>[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:330](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L330)

___

### oracleVersion

▸ **oracleVersion**(`market`, `version`, `overrides?`): `Promise`<`OracleVersionStructOutput`\>

Retrieves the OracleVersion for the specified oracle version in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `version` | `PromiseOrValue`<`BigNumberish`\> | An oracle versions. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`OracleVersionStructOutput`\>

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:340](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L340)

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

[gen/contracts/periphery/ChromaticLens.ts:205](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L205)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:215](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L215)

▸ **removeAllListeners**(`eventName?`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:218](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/periphery/ChromaticLens.ts#L218)
