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

[packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts:24](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts#L24)

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

[packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts:42](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts#L42)

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

[packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts:78](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts#L78)

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

[packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts:89](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts#L89)

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

[packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts:115](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts#L115)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(): `Promise`<{ `address`: `string` ; `decimals`: `number` ; `name`: `string`  }[]\>

Retrieves the registered settlement tokens.

#### Returns

`Promise`<{ `address`: `string` ; `decimals`: `number` ; `name`: `string`  }[]\>

A promise that resolves to an array of settlement tokens.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts:52](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticMarketFactory.ts#L52)
