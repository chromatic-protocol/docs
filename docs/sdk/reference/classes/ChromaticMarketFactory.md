---
id: "ChromaticMarketFactory"
title: "Class: ChromaticMarketFactory"
sidebar_label: "ChromaticMarketFactory"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ChromaticMarketFactory**(`addressOrName`, `_client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `_client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticMarketFactory.ts:21](https://github.com/chromatic-protocol/sdk/blob/9276400/src/entities/ChromaticMarketFactory.ts#L21)

## Methods

### contracts

▸ **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `marketFactory` | `ChromaticMarketFactory` |

#### Defined in

[entities/ChromaticMarketFactory.ts:31](https://github.com/chromatic-protocol/sdk/blob/9276400/src/entities/ChromaticMarketFactory.ts#L31)

___

### currentInterestRate

▸ **currentInterestRate**(`settlementToken`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settlementToken` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticMarketFactory.ts:60](https://github.com/chromatic-protocol/sdk/blob/9276400/src/entities/ChromaticMarketFactory.ts#L60)

___

### getMarkets

▸ **getMarkets**(`settlementToken`): `Promise`<{ `address`: `string` ; `description`: `string` ; `oracleValue`: `OracleVersionStructOutput` = value }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settlementToken` | `string` |

#### Returns

`Promise`<{ `address`: `string` ; `description`: `string` ; `oracleValue`: `OracleVersionStructOutput` = value }[]\>

#### Defined in

[entities/ChromaticMarketFactory.ts:64](https://github.com/chromatic-protocol/sdk/blob/9276400/src/entities/ChromaticMarketFactory.ts#L64)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(): `Promise`<[`SettlementToken`](../interfaces/SettlementToken.md)[]\>

#### Returns

`Promise`<[`SettlementToken`](../interfaces/SettlementToken.md)[]\>

#### Defined in

[entities/ChromaticMarketFactory.ts:37](https://github.com/chromatic-protocol/sdk/blob/9276400/src/entities/ChromaticMarketFactory.ts#L37)
