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

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:90](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L90)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

A promise that resolves to an object with mappings between tradingFee and oracleVersion.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:205](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L205)

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

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:103](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L103)

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

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:114](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L114)

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

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:283](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L283)

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

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:149](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L149)

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

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:260](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L260)
