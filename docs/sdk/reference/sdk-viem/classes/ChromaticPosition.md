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

[packages/sdk-viem/src/entities/ChromaticPosition.ts:61](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L61)

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

[packages/sdk-viem/src/entities/ChromaticPosition.ts:67](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L67)

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

[packages/sdk-viem/src/entities/ChromaticPosition.ts:144](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L144)

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

[packages/sdk-viem/src/entities/ChromaticPosition.ts:118](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L118)

___

### getLiquidationPrice

▸ **getLiquidationPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<{ `lossCutPrice`: `undefined` \| `bigint` ; `profitStopPrice`: `undefined` \| `bigint`  }\>

Calculates the liquidation price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `undefined` \| `bigint` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `oraclePriceDecimals` | `number` | The number of decimals used for the oracle price. |

#### Returns

`Promise`<{ `lossCutPrice`: `undefined` \| `bigint` ; `profitStopPrice`: `undefined` \| `bigint`  }\>

A promise that resolves to an object containing the profit stop price and loss cut price.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:206](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L206)

___

### getPnl

▸ **getPnl**(`marketAddress`, `entryPrice`, `exitPrice`, `position`, `tokenDecimals`, `options?`): `Promise`<`bigint`\>

Calculates the profit and loss (PNL) for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `bigint` | The entry price of the position. |
| `exitPrice` | `bigint` | The exit price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `tokenDecimals` | `number` | The decimals of the settlement token. |
| `options` | `Object` | Optional parameters for PNL calculation. |
| `options.includeInterestFee` | `boolean` | - |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the PNL value.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:178](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L178)

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

[packages/sdk-viem/src/entities/ChromaticPosition.ts:81](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L81)

___

### lossCutPrice

▸ **lossCutPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<`undefined` \| `bigint`\>

Calculates the loss cut price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `undefined` \| `bigint` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `oraclePriceDecimals` | `number` | The number of decimals used for the oracle price. |

#### Returns

`Promise`<`undefined` \| `bigint`\>

A promise that resolves to the loss cut price.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:290](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L290)

___

### profitStopPrice

▸ **profitStopPrice**(`marketAddress`, `entryPrice`, `position`, `oraclePriceDecimals`): `Promise`<`undefined` \| `bigint`\>

Calculates the profit stop price for a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `entryPrice` | `undefined` \| `bigint` | The entry price of the position. |
| `position` | [`PositionParam`](../interfaces/PositionParam.md) | The position parameters. |
| `oraclePriceDecimals` | `number` | The number of decimals used for the oracle price. |

#### Returns

`Promise`<`undefined` \| `bigint`\>

A promise that resolves to the profit stop price.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:265](https://github.com/chromatic-protocol/sdk/blob/bd29eb3/packages/sdk-viem/src/entities/ChromaticPosition.ts#L265)
