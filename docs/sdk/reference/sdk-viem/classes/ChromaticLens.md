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

[packages/sdk-viem/src/entities/ChromaticLens.ts:54](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticLens.ts#L54)

## Methods

### claimableLiquidities

▸ **claimableLiquidities**(`marketAddress`, `params`): `Promise`<{ `burningCLBTokenAmount`: `bigint` ; `burningCLBTokenAmountRequested`: `bigint` ; `burningTokenAmount`: `bigint` ; `mintingCLBTokenAmount`: `bigint` ; `mintingTokenAmountRequested`: `bigint` ; `tradingFeeRate`: `number`  }[]\>

Retrieves the claimable liquidities for a given market and parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `params` | { `oracleVersion`: `bigint` ; `tradingFeeRate`: `number`  }[] | An array of objects containing tradingFeeRate and oracleVersion. |

#### Returns

`Promise`<{ `burningCLBTokenAmount`: `bigint` ; `burningCLBTokenAmountRequested`: `bigint` ; `burningTokenAmount`: `bigint` ; `mintingCLBTokenAmount`: `bigint` ; `mintingTokenAmountRequested`: `bigint` ; `tradingFeeRate`: `number`  }[]\>

A promise that resolves to an array of ClaimableLiquidityResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:164](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticLens.ts#L164)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:72](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticLens.ts#L72)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<{ `clbTokenTotalSupply`: `bigint` ; `clbValue`: `number` ; `freeLiquidity`: `bigint` = bin.freeLiquidity; `liquidity`: `bigint` = bin.liquidity; `tradingFeeRate`: `number` = bin.tradingFeeRate }[]\>

Retrieves the liquidity bins for a given market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<{ `clbTokenTotalSupply`: `bigint` ; `clbValue`: `number` ; `freeLiquidity`: `bigint` = bin.freeLiquidity; `liquidity`: `bigint` = bin.liquidity; `tradingFeeRate`: `number` = bin.tradingFeeRate }[]\>

A promise that resolves to an array of LiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:83](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticLens.ts#L83)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:192](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticLens.ts#L192)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<{ `clbBalance`: `bigint` = ownedBin.balance; `clbTotalSupply`: `bigint` = ownedBin.totalSupply; `clbValue`: `number` ; `freeLiquidity`: `bigint` = targetTotalLiqBin.freeLiquidity; `liquidity`: `bigint` = ownedBin.binValue; `removableRate`: `number` ; `tradingFeeRate`: `number`  }[]\>

Retrieves the owned liquidity bins for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `ownerAddress?` | \`0x${string}\` | The address of the liquidity owner. |

#### Returns

`Promise`<{ `clbBalance`: `bigint` = ownedBin.balance; `clbTotalSupply`: `bigint` = ownedBin.totalSupply; `clbValue`: `number` ; `freeLiquidity`: `bigint` = targetTotalLiqBin.freeLiquidity; `liquidity`: `bigint` = ownedBin.binValue; `removableRate`: `number` ; `tradingFeeRate`: `number`  }[]\>

A promise that resolves to an array of OwnedLiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:114](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticLens.ts#L114)
