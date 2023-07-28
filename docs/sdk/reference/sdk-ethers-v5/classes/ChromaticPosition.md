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

[entities/ChromaticPosition.ts:80](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L80)

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

[entities/ChromaticPosition.ts:86](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L86)

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

[entities/ChromaticPosition.ts:159](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L159)

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

[entities/ChromaticPosition.ts:135](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L135)

___

### getLiquidationPrice

▸ **getLiquidationPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

Calculates the liquidation price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `oraclePriceDecimals` | `number` | The number of decimals used for the oracle price. |

#### Returns

`Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

A promise that resolves to an object containing the profit stop price and loss cut price.

#### Defined in

[entities/ChromaticPosition.ts:227](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L227)

___

### getPnl

▸ **getPnl**(`marketAddress`, `entryPrice`, `exitPrice`, `position`, `tokenDecimals`, `options?`): `Promise`<`BigNumber`\>

Calculates the profit and loss (PNL) for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `exitPrice` | `BigNumber` | The exit price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `tokenDecimals` | `number` | The decimals of the settlement token. |
| `options` | `Object` | Optional parameters for PNL calculation. |
| `options.includeInterestFee` | `boolean` | - |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the PNL value.

#### Defined in

[entities/ChromaticPosition.ts:198](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L198)

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

[entities/ChromaticPosition.ts:100](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L100)

___

### lossCutPrice

▸ **lossCutPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<`BigNumber`\>

Calculates the loss cut price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `oraclePriceDecimals` | `number` | The number of decimals used for the oracle price. |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the loss cut price.

#### Defined in

[entities/ChromaticPosition.ts:313](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L313)

___

### profitStopPrice

▸ **profitStopPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<`BigNumber`\>

Calculates the profit stop price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `entryPrice` | `BigNumber` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `oraclePriceDecimals` | `number` | The number of decimals used for the oracle price. |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the profit stop price.

#### Defined in

[entities/ChromaticPosition.ts:288](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L288)
