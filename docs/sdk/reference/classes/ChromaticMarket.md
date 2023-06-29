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

[entities/ChromaticMarket.ts:18](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L18)

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

[entities/ChromaticMarket.ts:43](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L43)

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

[entities/ChromaticMarket.ts:50](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L50)

___

### contracts

▸ **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `market` | (`marketAddress`: `string`) => `ChromaticMarket` |

#### Defined in

[entities/ChromaticMarket.ts:26](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L26)

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

[entities/ChromaticMarket.ts:76](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L76)

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

[entities/ChromaticMarket.ts:85](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L85)

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

[entities/ChromaticMarket.ts:81](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L81)

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

[entities/ChromaticMarket.ts:66](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L66)

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

[entities/ChromaticMarket.ts:36](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticMarket.ts#L36)
