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

| Name | Type |
| :------ | :------ |
| `_client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticLens.ts:34](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticLens.ts#L34)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<[`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `params` | { `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number`  }[] |

#### Returns

`Promise`<[`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md)[]\>

#### Defined in

[entities/ChromaticLens.ts:114](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticLens.ts#L114)

___

### getContract

▸ **getContract**(`lensAddress?`): `ChromaticLens`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lensAddress?` | `string` |

#### Returns

`ChromaticLens`

#### Defined in

[entities/ChromaticLens.ts:36](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticLens.ts#L36)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

liquidity bins

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<[`LiquidityBinResult`](../interfaces/LiquidityBinResult.md)[]\>

#### Defined in

[entities/ChromaticLens.ts:48](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticLens.ts#L48)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `ownerAddress?` | `string` |

#### Returns

`Promise`<[`OwnedLiquidityBinResult`](../interfaces/OwnedLiquidityBinResult.md)[]\>

#### Defined in

[entities/ChromaticLens.ts:68](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticLens.ts#L68)
