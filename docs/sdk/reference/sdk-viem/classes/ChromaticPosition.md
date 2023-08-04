---
id: "ChromaticPosition"
title: "Class: ChromaticPosition"
sidebar_label: "ChromaticPosition"
sidebar_position: 0
custom_edit_url: null
---

Represents a Chromatic position and provides methods to interact with it.

## Constructors

### constructor

• **new ChromaticPosition**(`_client`)

Creates a new instance of ChromaticPosition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:80](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L80)

## Methods

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with Chromatic Position.

#### Returns

`Object`

An object containing the contract instances of Lens, Market, and Market Factory.

| Name | Type |
| :------ | :------ |
| `lens` | `ContractChromaticLens` |
| `market` | (`marketAddress`: \`0x${string}\`) => `ContractChromaticMarket` |
| `marketFactory` | `ContractChromaticFactory` |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:86](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L86)

___

### getInterest

▸ **getInterest**(`marketAddress`, `position`): `Promise`<`bigint`\>

Retrieves the interest for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `position` | `InterestParam` | The position parameters. |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the interest.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:163](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L163)

___

### getInterestRateRecords

▸ **getInterestRateRecords**(`marketAddress`): `Promise`<`InterestRateRecord`[]\>

Retrieves the interest rate records for the specified market address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<`InterestRateRecord`[]\>

A promise that resolves to an array of interest rate records.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:137](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L137)

___

### getLiquidationPrice

▸ **getLiquidationPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<{ `lossCutPrice`: `undefined` \| `bigint` ; `profitStopPrice`: `undefined` \| `bigint`  }\>

Calculates the liquidation price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `undefined` \| `bigint` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |

#### Returns

`Promise`<{ `lossCutPrice`: `undefined` \| `bigint` ; `profitStopPrice`: `undefined` \| `bigint`  }\>

A promise that resolves to an object containing the profit stop price and loss cut price.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:219](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L219)

___

### getPnl

▸ **getPnl**(`marketAddress`, `entryPrice`, `exitPrice`, `position`, `options?`): `Promise`<`bigint`\>

Calculates the profit and loss (PNL) for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `bigint` | The entry price of the position. |
| `exitPrice` | `bigint` | The exit price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `options` | `Object` | Optional parameters for PNL calculation. |
| `options.includeInterest` | `boolean` | - |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the PNL value.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:196](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L196)

___

### getPositions

▸ **getPositions**(`marketAddress`, `positionIds`): `Promise`<[`IPosition`](../interfaces/IPosition.md)[]\>

Retrieves positions from the Chromatic Market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `positionIds` | `bigint`[] | An array of position IDs. |

#### Returns

`Promise`<[`IPosition`](../interfaces/IPosition.md)[]\>

A promise that resolves to an array of positions.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:100](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L100)

___

### lossCutPrice

▸ **lossCutPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<`undefined` \| `bigint`\>

Calculates the loss cut price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `undefined` \| `bigint` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |

#### Returns

`Promise`<`undefined` \| `bigint`\>

A promise that resolves to the loss cut price.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:275](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L275)

___

### profitStopPrice

▸ **profitStopPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<`undefined` \| `bigint`\>

Calculates the profit stop price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `undefined` \| `bigint` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |

#### Returns

`Promise`<`undefined` \| `bigint`\>

A promise that resolves to the profit stop price.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:258](https://github.com/chromatic-protocol/sdk/blob/9a97bd0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L258)
