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

[entities/ChromaticLens.ts:34](https://github.com/chromatic-protocol/sdk/blob/f9c6d1a/src/entities/ChromaticLens.ts#L34)

## Accessors

### contracts

• `get` **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lens` | `ChromaticLens` |

#### Defined in

[entities/ChromaticLens.ts:43](https://github.com/chromatic-protocol/sdk/blob/f9c6d1a/src/entities/ChromaticLens.ts#L43)

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

[entities/ChromaticLens.ts:120](https://github.com/chromatic-protocol/sdk/blob/f9c6d1a/src/entities/ChromaticLens.ts#L120)

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

[entities/ChromaticLens.ts:54](https://github.com/chromatic-protocol/sdk/blob/f9c6d1a/src/entities/ChromaticLens.ts#L54)

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

[entities/ChromaticLens.ts:74](https://github.com/chromatic-protocol/sdk/blob/f9c6d1a/src/entities/ChromaticLens.ts#L74)
