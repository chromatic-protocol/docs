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

[packages/sdk-viem/src/entities/ChromaticLens.ts:95](https://github.com/chromatic-protocol/sdk/blob/952dc51/packages/sdk-viem/src/entities/ChromaticLens.ts#L95)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `bigint` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<{ `[tradingFeeRate: string | number]`: { `[oracleVersion: string | number]`: [`ClaimableLiquidityResult`](../interfaces/ClaimableLiquidityResult.md);  };  }\>

A promise that resolves to an object with mappings between tradingFee and oracleVersion.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:209](https://github.com/chromatic-protocol/sdk/blob/952dc51/packages/sdk-viem/src/entities/ChromaticLens.ts#L209)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticLens contract.

#### Returns

`Object`

The ChromaticLens contract.

| Name | Type |
| :------ | :------ |
| `lens` | `ContractChromaticLens` |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:113](https://github.com/chromatic-protocol/sdk/blob/952dc51/packages/sdk-viem/src/entities/ChromaticLens.ts#L113)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<{ `clbTokenTotalSupply`: `bigint` ; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` = bin.freeLiquidity; `liquidity`: `bigint` = bin.liquidity; `tradingFeeRate`: `number` = bin.tradingFeeRate }[]\>

Retrieves the liquidity bins for a given market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<{ `clbTokenTotalSupply`: `bigint` ; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` = bin.freeLiquidity; `liquidity`: `bigint` = bin.liquidity; `tradingFeeRate`: `number` = bin.tradingFeeRate }[]\>

A promise that resolves to an array of LiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:124](https://github.com/chromatic-protocol/sdk/blob/952dc51/packages/sdk-viem/src/entities/ChromaticLens.ts#L124)

___

### lpReceipts

▸ **lpReceipts**(`marketAddress`, `owner?`): `Promise`<readonly { `action`: `number` ; `amount`: `bigint` ; `id`: `bigint` ; `oracleVersion`: `bigint` ; `recipient`: \`0x${string}\` ; `tradingFeeRate`: `number`  }[]\>

Retrieves the LP receipts for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `owner?` | \`0x${string}\` | The address of the LP owner. |

#### Returns

`Promise`<readonly { `action`: `number` ; `amount`: `bigint` ; `id`: `bigint` ; `oracleVersion`: `bigint` ; `recipient`: \`0x${string}\` ; `tradingFeeRate`: `number`  }[]\>

A promise that resolves to the LP receipts.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:283](https://github.com/chromatic-protocol/sdk/blob/952dc51/packages/sdk-viem/src/entities/ChromaticLens.ts#L283)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<{ `binValue`: `bigint` = ownedBin.binValue; `clbBalance`: `bigint` = ownedBin.balance; `clbTotalSupply`: `bigint` = ownedBin.totalSupply; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` = targetTotalLiqBin.freeLiquidity; `liquidity`: `bigint` = targetTotalLiqBin.liquidity; `tradingFeeRate`: `number`  }[]\>

Retrieves the owned liquidity bins for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `ownerAddress?` | \`0x${string}\` | The address of the liquidity owner. |

#### Returns

`Promise`<{ `binValue`: `bigint` = ownedBin.binValue; `clbBalance`: `bigint` = ownedBin.balance; `clbTotalSupply`: `bigint` = ownedBin.totalSupply; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` = targetTotalLiqBin.freeLiquidity; `liquidity`: `bigint` = targetTotalLiqBin.liquidity; `tradingFeeRate`: `number`  }[]\>

A promise that resolves to an array of OwnedLiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:159](https://github.com/chromatic-protocol/sdk/blob/952dc51/packages/sdk-viem/src/entities/ChromaticLens.ts#L159)

___

### pendingLiquidityBatch

▸ **pendingLiquidityBatch**(`marketAddress`, `tradingFeeRates`): `Promise`<[`PendingLiquidityResult`](../interfaces/PendingLiquidityResult.md)[]\>

Retrieves the pending liquidities for a given market and trading fee rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `tradingFeeRates` | `number`[] | An array of tradingFeeRate. |

#### Returns

`Promise`<[`PendingLiquidityResult`](../interfaces/PendingLiquidityResult.md)[]\>

A promise that resolves to an array of PendingLiquidity.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:260](https://github.com/chromatic-protocol/sdk/blob/952dc51/packages/sdk-viem/src/entities/ChromaticLens.ts#L260)
