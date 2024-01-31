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

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:75](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L75)

## Methods

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with Chromatic Position.

#### Returns

`Object`

An object containing the contract instances of Lens, Market, and Market Factory.

| Name | Type |
| :------ | :------ |
| `lens` | `ChromaticLens` |
| `market` | (`marketAddress`: `string`) => `IChromaticMarket` |
| `marketFactory` | `ChromaticMarketFactory` |

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:81](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L81)

___

### getInterest

▸ **getInterest**(`marketAddress`, `position`): `Promise`<`BigNumber`\>

Retrieves the interest for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `position` | `InterestParam` | The position parameters. |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the interest.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:158](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L158)

___

### getInterestRateRecords

▸ **getInterestRateRecords**(`marketAddress`): `Promise`<`RecordStructOutput`[]\>

Retrieves the interest rate records for the specified market address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<`RecordStructOutput`[]\>

A promise that resolves to an array of interest rate records.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:134](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L134)

___

### getLiquidationPrice

▸ **getLiquidationPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

Calculates the liquidation price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |

#### Returns

`Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

A promise that resolves to an object containing the profit stop price and loss cut price.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:219](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L219)

___

### getPnl

▸ **getPnl**(`marketAddress`, `entryPrice`, `exitPrice`, `position`, `options?`): `Promise`<`BigNumber`\>

Calculates the profit and loss (PNL) for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `exitPrice` | `BigNumber` | The exit price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `options` | `Object` | Optional parameters for PNL calculation. |
| `options.includeInterest` | `boolean` | - |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the PNL value.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:196](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L196)

___

### getPositions

▸ **getPositions**(`marketAddress`, `positionIds`): `Promise`<[`IPosition`](../interfaces/IPosition.md)[]\>

Retrieves positions from the Chromatic Market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `positionIds` | `BigNumberish`[] | An array of position IDs. |

#### Returns

`Promise`<[`IPosition`](../interfaces/IPosition.md)[]\>

A promise that resolves to an array of positions.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:95](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L95)

___

### lossCutPrice

▸ **lossCutPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<`BigNumber`\>

Calculates the loss cut price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the loss cut price.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:275](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L275)

___

### profitStopPrice

▸ **profitStopPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<`BigNumber`\>

Calculates the profit stop price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the profit stop price.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:258](https://github.com/chromatic-protocol/sdk/blob/5882a5a/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L258)
