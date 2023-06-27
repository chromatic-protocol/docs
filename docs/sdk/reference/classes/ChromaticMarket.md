---
id: "ChromaticMarket"
title: "Class: ChromaticMarket"
sidebar_label: "ChromaticMarket"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ChromaticMarket**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticMarket.ts:18](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L18)

## Methods

### clbToken

▸ **clbToken**(`marketAddress`): `Promise`<`CLBToken`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`CLBToken`\>

#### Defined in

[entities/ChromaticMarket.ts:33](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L33)

___

### clbTokenMeta

▸ **clbTokenMeta**(`marketAddress`, `tokenId`): `Promise`<{ `decimals`: `number` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `tokenId` | `BigNumberish` |

#### Returns

`Promise`<{ `decimals`: `number` ; `description`: `string` ; `image`: `string` ; `name`: `string`  }\>

#### Defined in

[entities/ChromaticMarket.ts:40](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L40)

___

### getContract

▸ **getContract**(`address`): `ChromaticMarket`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`ChromaticMarket`

#### Defined in

[entities/ChromaticMarket.ts:22](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L22)

___

### getCurrentPrice

▸ **getCurrentPrice**(`marketAddress`): `Promise`<`OracleVersionStructOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`OracleVersionStructOutput`\>

#### Defined in

[entities/ChromaticMarket.ts:66](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L66)

___

### getCurrentPrices

▸ **getCurrentPrices**(`marketAddresses`): `Promise`<{ `market`: `string` ; `value`: `OracleVersionStructOutput`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddresses` | `string`[] |

#### Returns

`Promise`<{ `market`: `string` ; `value`: `OracleVersionStructOutput`  }[]\>

#### Defined in

[entities/ChromaticMarket.ts:75](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L75)

___

### getMarketName

▸ **getMarketName**(`marketAddress`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[entities/ChromaticMarket.ts:71](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L71)

___

### getOracleProviderContract

▸ **getOracleProviderContract**(`marketAddress`): `Promise`<`IOracleProvider`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`IOracleProvider`\>

#### Defined in

[entities/ChromaticMarket.ts:56](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L56)

___

### settlementToken

▸ **settlementToken**(`marketAddress`): `Promise`<`IERC20`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`IERC20`\>

#### Defined in

[entities/ChromaticMarket.ts:26](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticMarket.ts#L26)
