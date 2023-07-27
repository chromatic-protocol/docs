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

[packages/sdk-viem/src/entities/ChromaticLens.ts:83](https://github.com/chromatic-protocol/sdk/blob/0919269/packages/sdk-viem/src/entities/ChromaticLens.ts#L83)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:197](https://github.com/chromatic-protocol/sdk/blob/0919269/packages/sdk-viem/src/entities/ChromaticLens.ts#L197)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:101](https://github.com/chromatic-protocol/sdk/blob/0919269/packages/sdk-viem/src/entities/ChromaticLens.ts#L101)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:112](https://github.com/chromatic-protocol/sdk/blob/0919269/packages/sdk-viem/src/entities/ChromaticLens.ts#L112)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:225](https://github.com/chromatic-protocol/sdk/blob/0919269/packages/sdk-viem/src/entities/ChromaticLens.ts#L225)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:147](https://github.com/chromatic-protocol/sdk/blob/0919269/packages/sdk-viem/src/entities/ChromaticLens.ts#L147)
