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

[entities/ChromaticPosition.ts:41](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L41)

## Accessors

### lensContract

• `get` **lensContract**(): `ChromaticLens`

#### Returns

`ChromaticLens`

#### Defined in

[entities/ChromaticPosition.ts:49](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L49)

___

### market

• `get` **market**(): [`ChromaticMarket`](ChromaticMarket.md)

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

#### Defined in

[entities/ChromaticPosition.ts:45](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L45)

## Methods

### getBpsRecords

▸ **getBpsRecords**(`marketAddress`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[entities/ChromaticPosition.ts:86](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L86)

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

[entities/ChromaticPosition.ts:108](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L108)

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

[entities/ChromaticPosition.ts:155](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L155)

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

[entities/ChromaticPosition.ts:137](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L137)

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

[entities/ChromaticPosition.ts:53](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L53)

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

[entities/ChromaticPosition.ts:193](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L193)

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

[entities/ChromaticPosition.ts:183](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticPosition.ts#L183)