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

[gen/contracts/periphery/ChromaticLens.ts:202](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L202)

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

[gen/contracts/periphery/ChromaticLens.ts:297](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L297)

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

[gen/contracts/periphery/ChromaticLens.ts:309](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L309)

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

[gen/contracts/periphery/ChromaticLens.ts:201](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L201)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Returns

`Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:203](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L203)

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

[gen/contracts/periphery/ChromaticLens.ts:319](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L319)

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

[gen/contracts/periphery/ChromaticLens.ts:213](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L213)

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

[gen/contracts/periphery/ChromaticLens.ts:216](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L216)

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

[gen/contracts/periphery/ChromaticLens.ts:329](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L329)

___

### multicall

▸ **multicall**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

Receives and executes a batch of function calls on this contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PromiseOrValue`<`BytesLike`\>[] |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/periphery/ChromaticLens.ts:338](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L338)

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

[gen/contracts/periphery/ChromaticLens.ts:348](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L348)

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

[gen/contracts/periphery/ChromaticLens.ts:207](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L207)

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

[gen/contracts/periphery/ChromaticLens.ts:217](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L217)

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

[gen/contracts/periphery/ChromaticLens.ts:220](https://github.com/chromatic-protocol/sdk/blob/a45d886/src/gen/contracts/periphery/ChromaticLens.ts#L220)
