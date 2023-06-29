---
id: "ChromaticLens"
title: "Class: ChromaticLens"
sidebar_label: "ChromaticLens"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ChromaticLens**(`_client`)

#### Parameters

| Name      | Type                  |
| :-------- | :-------------------- |
| `_client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticLens.ts:35](https://github.com/chromatic-protocol/sdk/blob/b12d4c9/src/entities/ChromaticLens.ts#L35)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<[`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md)[]\>

#### Parameters

| Name            | Type                                                             |
| :-------------- | :--------------------------------------------------------------- |
| `marketAddress` | `string`                                                         |
| `params`        | { `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number`  }[] |

#### Returns

`Promise`<[`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md)[]\>

#### Defined in

[entities/ChromaticLens.ts:121](https://github.com/chromatic-protocol/sdk/blob/b12d4c9/src/entities/ChromaticLens.ts#L121)

___

### contracts

▸ **contracts**(): `Object`

#### Returns

`Object`

| Name   | Type            |
| :----- | :-------------- |
| `lens` | `ChromaticLens` |

#### Defined in

[entities/ChromaticLens.ts:44](https://github.com/chromatic-protocol/sdk/blob/b12d4c9/src/entities/ChromaticLens.ts#L44)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

liquidity bins

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `marketAddress` | `string` |

#### Returns

`Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

#### Defined in

[entities/ChromaticLens.ts:55](https://github.com/chromatic-protocol/sdk/blob/b12d4c9/src/entities/ChromaticLens.ts#L55)

___

### lpReceipts

▸ **lpReceipts**(`marketAddress`, `owner?`): `Promise`<`LpReceiptStructOutput`[]\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `marketAddress` | `string` |
| `owner?`        | `string` |

#### Returns

`Promise`<`LpReceiptStructOutput`[]\>

#### Defined in

[entities/ChromaticLens.ts:154](https://github.com/chromatic-protocol/sdk/blob/b12d4c9/src/entities/ChromaticLens.ts#L154)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `marketAddress` | `string` |
| `ownerAddress?` | `string` |

#### Returns

`Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

#### Defined in

[entities/ChromaticLens.ts:75](https://github.com/chromatic-protocol/sdk/blob/b12d4c9/src/entities/ChromaticLens.ts#L75)
