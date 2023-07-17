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

[entities/ChromaticMarketFactory.ts:23](https://github.com/chromatic-protocol/sdk/blob/9da1dc8/packages/sdk-ethers-v6/src/entities/ChromaticMarketFactory.ts#L23)

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

[entities/ChromaticMarketFactory.ts:41](https://github.com/chromatic-protocol/sdk/blob/9da1dc8/packages/sdk-ethers-v6/src/entities/ChromaticMarketFactory.ts#L41)

___

### currentInterestRate

▸ **currentInterestRate**(`settlementToken`): `Promise`<`bigint`\>

Retrieves the current interest rate for a specific settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `string` | The address of the settlement token. |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the current interest rate.

#### Defined in

[entities/ChromaticMarketFactory.ts:76](https://github.com/chromatic-protocol/sdk/blob/9da1dc8/packages/sdk-ethers-v6/src/entities/ChromaticMarketFactory.ts#L76)

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

[entities/ChromaticMarketFactory.ts:87](https://github.com/chromatic-protocol/sdk/blob/9da1dc8/packages/sdk-ethers-v6/src/entities/ChromaticMarketFactory.ts#L87)

___

### getOracleProviderProperties

▸ **getOracleProviderProperties**(`oracleProvider`): `Promise`<`OracleProviderPropertiesStructOutput`\>

Retrieves the oracle provider properties for a specific oracle provider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `string` | The address of the oracle provider |

#### Returns

`Promise`<`OracleProviderPropertiesStructOutput`\>

A Promise that resolves to an object containing the oracle properties

#### Defined in

[entities/ChromaticMarketFactory.ts:113](https://github.com/chromatic-protocol/sdk/blob/9da1dc8/packages/sdk-ethers-v6/src/entities/ChromaticMarketFactory.ts#L113)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(): `Promise`<{ `address`: `string` ; `decimals`: `bigint` ; `name`: `string`  }[]\>

Retrieves the registered settlement tokens.

#### Returns

`Promise`<{ `address`: `string` ; `decimals`: `bigint` ; `name`: `string`  }[]\>

A promise that resolves to an array of settlement tokens.

#### Defined in

[entities/ChromaticMarketFactory.ts:51](https://github.com/chromatic-protocol/sdk/blob/9da1dc8/packages/sdk-ethers-v6/src/entities/ChromaticMarketFactory.ts#L51)
