---
id: "ChromaticLens"
title: "Class: ChromaticLens"
sidebar_label: "ChromaticLens"
sidebar_position: 0
custom_edit_url: null
---

A class representing Chromatic Lens, which provides access to liquidity-related functions.

## Constructors

### constructor

• **new ChromaticLens**(`_client`)

Creates a new instance of ChromaticLens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:91](https://github.com/chromatic-protocol/sdk/blob/b211966/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L91)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `bigint` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

A promise that resolves to an object with mappings between tradingFee and oracleVersion.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:203](https://github.com/chromatic-protocol/sdk/blob/b211966/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L203)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticLens contract.

#### Returns

`Object`

The ChromaticLens contract.

| Name | Type |
| :------ | :------ |
| `lens` | `ChromaticLens` |

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:104](https://github.com/chromatic-protocol/sdk/blob/b211966/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L104)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

Retrieves the liquidity bins for a given market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

A promise that resolves to an array of LiquidityBinResult.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:115](https://github.com/chromatic-protocol/sdk/blob/b211966/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L115)

___

### lpReceipts

▸ **lpReceipts**(`marketAddress`, `owner?`): `Promise`<`LpReceiptStructOutput`[]\>

Retrieves the LP receipts for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `owner?` | `string` | The address of the LP owner. |

#### Returns

`Promise`<`LpReceiptStructOutput`[]\>

A promise that resolves to the LP receipts.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:281](https://github.com/chromatic-protocol/sdk/blob/b211966/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L281)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

Retrieves the owned liquidity bins for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `ownerAddress?` | `string` | The address of the liquidity owner. |

#### Returns

`Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

A promise that resolves to an array of OwnedLiquidityBinResult.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:147](https://github.com/chromatic-protocol/sdk/blob/b211966/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L147)

___

### pendingLiquidityBatch

▸ **pendingLiquidityBatch**(`marketAddress`, `tradingFeeRates`): `Promise`<[`PendingLiquidityResult`](../interfaces/PendingLiquidityResult.md)[]\>

Retrieves the pending liquidities for a given market and trading fee rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `tradingFeeRates` | `number`[] | An array of tradingFeeRate. |

#### Returns

`Promise`<[`PendingLiquidityResult`](../interfaces/PendingLiquidityResult.md)[]\>

A promise that resolves to an array of PendingLiquidity.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticLens.ts:258](https://github.com/chromatic-protocol/sdk/blob/b211966/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L258)
