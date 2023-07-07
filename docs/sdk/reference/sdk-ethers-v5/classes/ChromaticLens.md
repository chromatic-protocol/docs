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

[entities/ChromaticLens.ts:50](https://github.com/chromatic-protocol/sdk/blob/56e7c5d/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L50)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<[`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md)[]\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<[`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md)[]\>

A promise that resolves to an array of ClaimableLiquidityResult.

#### Defined in

[entities/ChromaticLens.ts:156](https://github.com/chromatic-protocol/sdk/blob/56e7c5d/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L156)

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

[entities/ChromaticLens.ts:63](https://github.com/chromatic-protocol/sdk/blob/56e7c5d/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L63)

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

[entities/ChromaticLens.ts:74](https://github.com/chromatic-protocol/sdk/blob/56e7c5d/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L74)

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

[entities/ChromaticLens.ts:197](https://github.com/chromatic-protocol/sdk/blob/56e7c5d/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L197)

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

[entities/ChromaticLens.ts:102](https://github.com/chromatic-protocol/sdk/blob/56e7c5d/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L102)