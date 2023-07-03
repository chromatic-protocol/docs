---
id: "ChromaticMarket"
title: "Class: ChromaticMarket"
sidebar_label: "ChromaticMarket"
sidebar_position: 0
custom_edit_url: null
---

Represents a Chromatic Market and provides methods to interact with it.

## Constructors

### constructor

• **new ChromaticMarket**(`_client`)

Creates a new instance of ChromaticMarket.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[entities/ChromaticMarket.ts:21](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L21)

## Methods

### clbToken

▸ **clbToken**(`marketAddress`): `Promise`<`CLBToken`\>

Retrieves the CLB token associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |

#### Returns

`Promise`<`CLBToken`\>

A promise that resolves to the CLB token instance.

#### Defined in

[entities/ChromaticMarket.ts:54](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L54)

___

### clbTokenMeta

▸ **clbTokenMeta**(`marketAddress`, `tokenId`): `Promise`<{ `decimals`: `number` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

Retrieves the metadata of a CLB token associated with a specific market and token ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |
| `tokenId` | `BigNumberish` | The ID of the CLB token. |

#### Returns

`Promise`<{ `decimals`: `number` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

A promise that resolves to the CLB token metadata.

#### Defined in

[entities/ChromaticMarket.ts:67](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L67)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Market.

#### Returns

`Object`

An object containing the contract instances.

| Name | Type |
| :------ | :------ |
| `market` | (`marketAddress`: `string`) => `ChromaticMarket` |

#### Defined in

[entities/ChromaticMarket.ts:27](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L27)

___

### getCurrentPrice

▸ **getCurrentPrice**(`marketAddress`): `Promise`<`OracleVersionStructOutput`\>

Retrieves the current price from the OracleProvider contract associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |

#### Returns

`Promise`<`OracleVersionStructOutput`\>

A promise that resolves to the current price.

#### Defined in

[entities/ChromaticMarket.ts:102](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L102)

___

### getCurrentPrices

▸ **getCurrentPrices**(`marketAddresses`): `Promise`<{ `market`: `string` ; `value`: `OracleVersionStructOutput`  }[]\>

Retrieves the current prices from the OracleProvider contracts associated with multiple markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddresses` | `string`[] | An array of market addresses. |

#### Returns

`Promise`<{ `market`: `string` ; `value`: `OracleVersionStructOutput`  }[]\>

A promise that resolves to an array of market addresses and their corresponding current prices.

#### Defined in

[entities/ChromaticMarket.ts:121](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L121)

___

### getMarketName

▸ **getMarketName**(`marketAddress`): `Promise`<`string`\>

Retrieves the name of the market from the OracleProvider contract associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |

#### Returns

`Promise`<`string`\>

A promise that resolves to the market name.

#### Defined in

[entities/ChromaticMarket.ts:112](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L112)

___

### getOracleProviderContract

▸ **getOracleProviderContract**(`marketAddress`): `Promise`<`IOracleProvider`\>

Retrieves the OracleProvider contract associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |

#### Returns

`Promise`<`IOracleProvider`\>

A promise that resolves to the OracleProvider contract instance.

#### Defined in

[entities/ChromaticMarket.ts:88](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L88)

___

### settlementToken

▸ **settlementToken**(`marketAddress`): `Promise`<`IERC20`\>

Retrieves the settlement token associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |

#### Returns

`Promise`<`IERC20`\>

A promise that resolves to the settlement token instance.

#### Defined in

[entities/ChromaticMarket.ts:42](https://github.com/chromatic-protocol/sdk/blob/07584ba/src/entities/ChromaticMarket.ts#L42)
