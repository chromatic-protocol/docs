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

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:26](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L26)

## Methods

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Market Factory.

#### Returns

`Object`

An object containing the contract instance of the Market Factory.

| Name | Type |
| :------ | :------ |
| `IERC20Meta` | (`address`: \`0x${string}\`) => `ContractIErc20Metadata` |
| `marketFactory` | `ContractChromaticFactory` |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:49](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L49)

___

### currentInterestRate

▸ **currentInterestRate**(`settlementToken`): `Promise`<`bigint`\>

Retrieves the current interest rate for a specific settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | \`0x${string}\` | The address of the settlement token. |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the current interest rate.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:88](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L88)

___

### getMarkets

▸ **getMarkets**(`settlementToken`): `Promise`<{ `address`: \`0x${string}\` ; `description`: `string` ; `oracleValue`: { `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  } = value }[]\>

Retrieves the markets associated with a specific settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | \`0x${string}\` | The address of the settlement token. |

#### Returns

`Promise`<{ `address`: \`0x${string}\` ; `description`: `string` ; `oracleValue`: { `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  } = value }[]\>

A promise that resolves to an array of market information.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:99](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L99)

___

### getOracleProviderProperties

▸ **getOracleProviderProperties**(`oracleProvider`): `Promise`<{ `leverageLevel`: `number` ; `maxTakeProfitBPS`: `number` ; `minTakeProfitBPS`: `number`  }\>

Retrieves the oracle provider properties for a specific oracle provider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | \`0x${string}\` | The address of the oracle provider |

#### Returns

`Promise`<{ `leverageLevel`: `number` ; `maxTakeProfitBPS`: `number` ; `minTakeProfitBPS`: `number`  }\>

A Promise that resolves to an object containing the oracle properties

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:124](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L124)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(): `Promise`<{ `address`: \`0x${string}\` ; `decimals`: `number` ; `name`: `string`  }[]\>

Retrieves the registered settlement tokens.

#### Returns

`Promise`<{ `address`: \`0x${string}\` ; `decimals`: `number` ; `name`: `string`  }[]\>

A promise that resolves to an array of settlement tokens.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:66](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L66)
