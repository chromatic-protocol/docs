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

[entities/ChromaticPosition.ts:42](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L42)

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

[entities/ChromaticPosition.ts:46](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L46)

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

[entities/ChromaticPosition.ts:85](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L85)

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

[entities/ChromaticPosition.ts:99](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L99)

___

### getLiquidationPrice

▸ **getLiquidationPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `entryPrice` | `BigNumber` |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) |

#### Returns

`Promise`<{ `lossCutPrice`: `BigNumber` ; `profitStopPrice`: `BigNumber`  }\>

#### Defined in

[entities/ChromaticPosition.ts:146](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L146)

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

[entities/ChromaticPosition.ts:128](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L128)

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

[entities/ChromaticPosition.ts:53](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L53)

___

### lossCutPrice

▸ **lossCutPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `entryPrice` | `BigNumber` |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticPosition.ts:184](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L184)

___

### profitStopPrice

▸ **profitStopPrice**(`marketAddress`, `entryPrice`, `position`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `entryPrice` | `BigNumber` |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticPosition.ts:174](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticPosition.ts#L174)
