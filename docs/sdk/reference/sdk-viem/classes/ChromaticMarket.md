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

[packages/sdk-viem/src/entities/ChromaticMarket.ts:20](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L20)

## Methods

### clbToken

▸ **clbToken**(`marketAddress`): `Promise`<\`0x${string}\`\>

Retrieves the CLB token address associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the market. |

#### Returns

`Promise`<\`0x${string}\`\>

A promise that resolves to the CLB token contract address.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:75](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L75)

___

### clbTokenMeta

▸ **clbTokenMeta**(`marketAddress`, `tokenId`): `Promise`<{ `decimals`: `number` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

Retrieves the metadata of a CLB token associated with a specific market and token ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the market. |
| `tokenId` | `bigint` | The ID of the CLB token. |

#### Returns

`Promise`<{ `decimals`: `number` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

A promise that resolves to the CLB token metadata.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:87](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L87)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Market.

#### Returns

`Object`

An object containing the contract instances.

| Name | Type |
| :------ | :------ |
| `clbToken` | (`marketAddress`: \`0x${string}\`) => `Promise`<`ContractClbToken`\> |
| `market` | (`marketAddress`: \`0x${string}\`) => `ContractChromaticMarket` |
| `oracleProvider` | (`marketAddress`: \`0x${string}\`) => `Promise`<`ContractIOracleProvider`\> |
| `settlementToken` | (`marketAddress`: \`0x${string}\`) => `Promise`<`ContractIErc20Metadata`\> |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:26](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L26)

___

### getCurrentPrice

▸ **getCurrentPrice**(`marketAddress`): `Promise`<{ `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  }\>

Retrieves the current price from the OracleProvider contract associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the market. |

#### Returns

`Promise`<{ `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  }\>

A promise that resolves to the current price.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:122](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L122)

___

### getCurrentPrices

▸ **getCurrentPrices**(`marketAddresses`): `Promise`<{ `market`: \`0x${string}\` = address; `value`: { `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  }  }[]\>

Retrieves the current prices from the OracleProvider contracts associated with multiple markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddresses` | \`0x${string}\`[] | An array of market addresses. |

#### Returns

`Promise`<{ `market`: \`0x${string}\` = address; `value`: { `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  }  }[]\>

A promise that resolves to an array of market addresses and their corresponding current prices.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:146](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L146)

___

### getMarketName

▸ **getMarketName**(`marketAddress`): `Promise`<`string`\>

Retrieves the name of the market from the OracleProvider contract associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the market. |

#### Returns

`Promise`<`string`\>

A promise that resolves to the market name.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:134](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L134)

___

### oracleProvider

▸ **oracleProvider**(`marketAddress`): `Promise`<\`0x${string}\`\>

Retrieves the OracleProvider contract associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the market. |

#### Returns

`Promise`<\`0x${string}\`\>

A promise that resolves to the OracleProvider contract instance.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:110](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L110)

___

### settlementToken

▸ **settlementToken**(`marketAddress`): `Promise`<\`0x${string}\`\>

Retrieves the settlement token address associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the market. |

#### Returns

`Promise`<\`0x${string}\`\>

A promise that resolves to the settlement token contract address.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarket.ts:64](https://github.com/chromatic-protocol/sdk/blob/9e3330a/packages/sdk-viem/src/entities/ChromaticMarket.ts#L64)
