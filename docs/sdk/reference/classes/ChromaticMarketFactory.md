---
id: "ChromaticMarketFactory"
title: "Class: ChromaticMarketFactory"
sidebar_label: "ChromaticMarketFactory"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- `IChromaticMarketFactory`

## Constructors

### constructor

• **new ChromaticMarketFactory**(`addressOrName`, `_client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `_client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticMarketFactory.ts:25](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticMarketFactory.ts#L25)

## Methods

### currentInterestRate

▸ **currentInterestRate**(`settlementToken`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settlementToken` | `string` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[entities/ChromaticMarketFactory.ts:51](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticMarketFactory.ts#L51)

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

[entities/ChromaticMarketFactory.ts:55](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticMarketFactory.ts#L55)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(): `Promise`<[`SettlementToken`](../interfaces/SettlementToken.md)[]\>

#### Returns

`Promise`<[`SettlementToken`](../interfaces/SettlementToken.md)[]\>

#### Defined in

[entities/ChromaticMarketFactory.ts:29](https://github.com/chromatic-protocol/sdk/blob/7ef2c67/src/entities/ChromaticMarketFactory.ts#L29)
