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

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:22](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L22)

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

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:57](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L57)

___

### clbTokenMeta

▸ **clbTokenMeta**(`marketAddress`, `tokenId`): `Promise`<{ `decimals`: `bigint` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

Retrieves the metadata of a CLB token associated with a specific market and token ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |
| `tokenId` | `BigNumberish` | The ID of the CLB token. |

#### Returns

`Promise`<{ `decimals`: `bigint` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

A promise that resolves to the CLB token metadata.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:72](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L72)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Market.

#### Returns

`Object`

An object containing the contract instances.

| Name | Type |
| :------ | :------ |
| `market` | (`marketAddress`: `string`) => `IChromaticMarket` |

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:28](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L28)

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

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:111](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L111)

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

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:134](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L134)

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

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:123](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L123)

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

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:95](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L95)

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

[packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts:43](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticMarket.ts#L43)
