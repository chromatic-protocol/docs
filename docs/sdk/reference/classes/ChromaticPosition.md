---
id: "ChromaticPosition"
title: "Class: ChromaticPosition"
sidebar_label: "ChromaticPosition"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ChromaticPosition**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticPosition.ts:43](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L43)

## Methods

### contracts

▸ **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lens` | `ChromaticLens` |
| `market` | (`marketAddress`: `string`) => `ChromaticMarket` |
| `marketFactory` | `ChromaticMarketFactory` |

#### Defined in

[entities/ChromaticPosition.ts:47](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L47)

___

### getBpsRecords

▸ **getBpsRecords**(`marketAddress`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[entities/ChromaticPosition.ts:86](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L86)

___

### getInterestFee

▸ **getInterestFee**(`marketAddress`, `position`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `position` | `InterestFeeParam` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticPosition.ts:100](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L100)

___

### getLiquidationPrice

▸ **getLiquidationPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `entryPrice` | `BigNumber` |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) |
| `oraclePriceDecimals` | `number` |

#### Returns

`Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

#### Defined in

[entities/ChromaticPosition.ts:147](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L147)

___

### getPnl

▸ **getPnl**(`marketAddress`, `entryPrice`, `exitPrice`, `position`, `options?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `entryPrice` | `BigNumber` |
| `exitPrice` | `BigNumber` |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) |
| `options` | `Object` |
| `options.includeInterestFee` | `boolean` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticPosition.ts:129](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L129)

___

### getPositions

▸ **getPositions**(`marketAddress`, `positionIds`): `Promise`<[`IPosition`](../interfaces/IPosition.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `positionIds` | `BigNumberish`[] |

#### Returns

`Promise`<[`IPosition`](../interfaces/IPosition.md)[]\>

#### Defined in

[entities/ChromaticPosition.ts:54](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L54)

___

### lossCutPrice

▸ **lossCutPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `entryPrice` | `BigNumber` |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) |
| `oraclePriceDecimals` | `number` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticPosition.ts:207](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L207)

___

### profitStopPrice

▸ **profitStopPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `entryPrice` | `BigNumber` |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) |
| `oraclePriceDecimals` | `number` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticPosition.ts:190](https://github.com/chromatic-protocol/sdk/blob/1fd4062/src/entities/ChromaticPosition.ts#L190)
