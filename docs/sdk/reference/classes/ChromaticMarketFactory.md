---
id: "ChromaticMarketFactory"
title: "Class: ChromaticMarketFactory"
sidebar_label: "ChromaticMarketFactory"
sidebar_position: 0
custom_edit_url: null
---

Represents the Chromatic Market Factory and provides methods to interact with it.

## Constructors

### constructor

• **new ChromaticMarketFactory**(`_client`)

Creates a new instance of ChromaticMarketFactory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[entities/ChromaticMarketFactory.ts:22](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticMarketFactory.ts#L22)

## Methods

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Market Factory.

#### Returns

`Object`

An object containing the contract instance of the Market Factory.

| Name | Type |
| :------ | :------ |
| `marketFactory` | `ChromaticMarketFactory` |

#### Defined in

[entities/ChromaticMarketFactory.ts:40](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticMarketFactory.ts#L40)

___

### currentInterestRate

▸ **currentInterestRate**(`settlementToken`): `Promise`<`BigNumber`\>

Retrieves the current interest rate for a specific settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `string` | The address of the settlement token. |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the current interest rate.

#### Defined in

[entities/ChromaticMarketFactory.ts:78](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticMarketFactory.ts#L78)

___

### getMarkets

▸ **getMarkets**(`settlementToken`): `Promise`<{ `address`: `string` ; `description`: `string` ; `oracleValue`: `OracleVersionStructOutput` = value }[]\>

Retrieves the markets associated with a specific settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `string` | The address of the settlement token. |

#### Returns

`Promise`<{ `address`: `string` ; `description`: `string` ; `oracleValue`: `OracleVersionStructOutput` = value }[]\>

A promise that resolves to an array of market information.

#### Defined in

[entities/ChromaticMarketFactory.ts:87](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticMarketFactory.ts#L87)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(): `Promise`<[`SettlementToken`](../interfaces/SettlementToken.md)[]\>

Retrieves the registered settlement tokens.

#### Returns

`Promise`<[`SettlementToken`](../interfaces/SettlementToken.md)[]\>

A promise that resolves to an array of settlement tokens.

#### Defined in

[entities/ChromaticMarketFactory.ts:50](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticMarketFactory.ts#L50)
