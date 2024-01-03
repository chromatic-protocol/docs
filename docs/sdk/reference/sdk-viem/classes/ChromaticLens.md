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

[packages/sdk-viem/src/entities/ChromaticLens.ts:100](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L100)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:282](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L282)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:118](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L118)

___

### findFromCLBTotalSupplies

▸ **findFromCLBTotalSupplies**(`clbTokenSupplies`): (`tokenId`: `bigint`) => `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clbTokenSupplies` | `Record`<`string`, `Partial`<`ClbTokenTotalSupply`\>[]\> |

#### Returns

`fn`

▸ (`tokenId`): `bigint`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `bigint` |

##### Returns

`bigint`

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:123](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L123)

___

### getCLBTokenTotalSupplies

▸ **getCLBTokenTotalSupplies**(`clbTokenAddress`): `Promise`<`Record`<`string`, `ClbTokenTotalSupply`[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clbTokenAddress` | `string` |

#### Returns

`Promise`<`Record`<`string`, `ClbTokenTotalSupply`[]\>\>

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:169](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L169)

___

### liquidityBins

▸ **liquidityBins**(`marketAddress`): `Promise`<{ `clbTokenTotalSupply`: `bigint` = clbTotalSupply; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` ; `liquidity`: `bigint` ; `tradingFeeRate`: `number` = binStatus.tradingFeeRate }[]\>

Retrieves the liquidity bins for a given market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<{ `clbTokenTotalSupply`: `bigint` = clbTotalSupply; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` ; `liquidity`: `bigint` ; `tradingFeeRate`: `number` = binStatus.tradingFeeRate }[]\>

A promise that resolves to an array of LiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:139](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L139)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:358](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L358)

___

### ownedLiquidityBins

▸ **ownedLiquidityBins**(`marketAddress`, `ownerAddress?`): `Promise`<{ `binValue`: `bigint` ; `clbBalance`: `bigint` = ownedLiquidity.balance; `clbTotalSupply`: `bigint` ; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` ; `liquidity`: `bigint` ; `tradingFeeRate`: `number` = tradingFeeRate }[]\>

Retrieves the owned liquidity bins for a given market and owner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `ownerAddress?` | \`0x${string}\` | The address of the liquidity owner. |

#### Returns

`Promise`<{ `binValue`: `bigint` ; `clbBalance`: `bigint` = ownedLiquidity.balance; `clbTotalSupply`: `bigint` ; `clbValue`: `bigint` ; `freeLiquidity`: `bigint` ; `liquidity`: `bigint` ; `tradingFeeRate`: `number` = tradingFeeRate }[]\>

A promise that resolves to an array of OwnedLiquidityBinResult.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:228](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L228)

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

[packages/sdk-viem/src/entities/ChromaticLens.ts:334](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-viem/src/entities/ChromaticLens.ts#L334)
