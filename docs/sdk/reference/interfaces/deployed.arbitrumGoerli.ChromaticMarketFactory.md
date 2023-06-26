---
id: "deployed.arbitrumGoerli.ChromaticMarketFactory"
title: "Interface: ChromaticMarketFactory"
sidebar_label: "ChromaticMarketFactory"
custom_edit_url: null
---

[deployed](../namespaces/deployed.md).[arbitrumGoerli](../namespaces/deployed.arbitrumGoerli.md).ChromaticMarketFactory

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticMarketFactory`**

## Methods

### appendInterestRateRecord

▸ **appendInterestRateRecord**(`token`, `annualRateBPS`, `beginTimestamp`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Appends an interest rate record for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `annualRateBPS` | `PromiseOrValue`<`BigNumberish`\> | The annual interest rate in basis points (BPS). |
| `beginTimestamp` | `PromiseOrValue`<`BigNumberish`\> | The timestamp when the interest rate record begins. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1027](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1027)

___

### attach

▸ **attach**(`addressOrName`): [`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:633](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L633)

___

### calculateInterest

▸ **calculateInterest**(`token`, `amount`, `from`, `to`, `overrides?`): `Promise`<`BigNumber`\>

Calculates the interest accrued for a given token and amount within a specified time range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of the token. |
| `from` | `PromiseOrValue`<`BigNumberish`\> | The starting timestamp (inclusive) of the time range. |
| `to` | `PromiseOrValue`<`BigNumberish`\> | The ending timestamp (exclusive) of the time range. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1041](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1041)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:632](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L632)

___

### createMarket

▸ **createMarket**(`oracleProvider`, `settlementToken`, `overrides?`): `Promise`<`ContractTransaction`\>

Creates a new market associated with an oracle provider and settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider. |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1054](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1054)

___

### currentInterestRate

▸ **currentInterestRate**(`token`, `overrides?`): `Promise`<`BigNumber`\>

Gets the current interest rate for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1064](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1064)

___

### dao

▸ **dao**(`overrides?`): `Promise`<`string`\>

Returns the address of the DAO.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1072](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1072)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)\>

#### Returns

`Promise`<[`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:634](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L634)

___

### getEarningDistributionThreshold

▸ **getEarningDistributionThreshold**(`token`, `overrides?`): `Promise`<`BigNumber`\>

Gets the earning distribution threshold for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1078](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1078)

___

### getFlashLoanFeeRate

▸ **getFlashLoanFeeRate**(`token`, `overrides?`): `Promise`<`BigNumber`\>

Gets the flash loan fee rate for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1087](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1087)

___

### getInterestRateRecords

▸ **getInterestRateRecords**(`token`, `overrides?`): `Promise`<`RecordStructOutput`[]\>

Gets all the interest rate records for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`RecordStructOutput`[]\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1096](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1096)

___

### getMarket

▸ **getMarket**(`oracleProvider`, `settlementToken`, `overrides?`): `Promise`<`string`\>

Returns the address of a market associated with an oracle provider and settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider. |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1106](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1106)

___

### getMarkets

▸ **getMarkets**(`overrides?`): `Promise`<`string`[]\>

Returns an array of all market addresses.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1115](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1115)

___

### getMarketsBySettlmentToken

▸ **getMarketsBySettlmentToken**(`settlementToken`, `overrides?`): `Promise`<`string`[]\>

Returns an array of market addresses associated with a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1121](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1121)

___

### getMinimumMargin

▸ **getMinimumMargin**(`token`, `overrides?`): `Promise`<`BigNumber`\>

The minimumMargin is used as the minimum value for the taker margin of a position      or as the minimum value for the maker margin of each bin.
Gets the minimum margin for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1131](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1131)

___

### getOracleProviderLevel

▸ **getOracleProviderLevel**(`oracleProvider`, `overrides?`): `Promise`<`number`\>

Retrieves the level of an oracle provider in the registry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`number`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1140](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1140)

___

### getUniswapFeeTier

▸ **getUniswapFeeTier**(`token`, `overrides?`): `Promise`<`number`\>

Gets the Uniswap fee tier for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`number`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1149](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1149)

___

### isRegisteredMarket

▸ **isRegisteredMarket**(`market`, `overrides?`): `Promise`<`boolean`\>

Checks if a market is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1158](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1158)

___

### isRegisteredOracleProvider

▸ **isRegisteredOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`boolean`\>

Checks if an oracle provider is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1167](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1167)

___

### isRegisteredSettlementToken

▸ **isRegisteredSettlementToken**(`token`, `overrides?`): `Promise`<`boolean`\>

Checks if a settlement token is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1176](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1176)

___

### keeperFeePayer

▸ **keeperFeePayer**(`overrides?`): `Promise`<`string`\>

Returns the address of the keeper fee payer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1184](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1184)

___

### liquidator

▸ **liquidator**(`overrides?`): `Promise`<`string`\>

Returns the address of the liquidator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1189](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1189)

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:644](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L644)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:647](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L647)

___

### parameters

▸ **parameters**(`overrides?`): `Promise`<[`string`, `string`] & { `oracleProvider`: `string` ; `settlementToken`: `string`  }\>

Called by the market constructor to fetch the parameters of the market Returns underlyingAsset The underlying asset of the market Returns settlementToken The settlement token of the market Returns vPoolCapacity Capacity of virtual future pool Returns vPoolA Amplification coefficient of virtual future pool, precise value
Get the parameters to be used in constructing the market, set transiently during market creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`string`, `string`] & { `oracleProvider`: `string` ; `settlementToken`: `string`  }\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1195](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1195)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:638](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L638)

___

### registerOracleProvider

▸ **registerOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Registers an oracle provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to register. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1206](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1206)

___

### registerSettlementToken

▸ **registerSettlementToken**(`token`, `minimumMargin`, `interestRate`, `flashLoanFeeRate`, `earningDistributionThreshold`, `uniswapFeeTier`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Registers a new settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token to register. |
| `minimumMargin` | `PromiseOrValue`<`BigNumberish`\> | The minimum margin for the settlement token. |
| `interestRate` | `PromiseOrValue`<`BigNumberish`\> | The interest rate for the settlement token. |
| `flashLoanFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The flash loan fee rate for the settlement token. |
| `earningDistributionThreshold` | `PromiseOrValue`<`BigNumberish`\> | The earning distribution threshold for the settlement token. |
| `uniswapFeeTier` | `PromiseOrValue`<`BigNumberish`\> | The Uniswap fee tier for the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1221](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1221)

___

### registeredOracleProviders

▸ **registeredOracleProviders**(`overrides?`): `Promise`<`string`[]\>

Gets the registered oracle providers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1234](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1234)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(`overrides?`): `Promise`<`string`[]\>

Gets the list of registered settlement tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1239](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1239)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:648](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L648)

▸ **removeAllListeners**(`eventName?`): [`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticMarketFactory`](deployed.arbitrumGoerli.ChromaticMarketFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:651](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L651)

___

### removeLastInterestRateRecord

▸ **removeLastInterestRateRecord**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Removes the last interest rate record for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1246](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1246)

___

### setEarningDistributionThreshold

▸ **setEarningDistributionThreshold**(`token`, `earningDistributionThreshold`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Sets the earning distribution threshold for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `earningDistributionThreshold` | `PromiseOrValue`<`BigNumberish`\> | The new earning distribution threshold for the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1257](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1257)

___

### setFlashLoanFeeRate

▸ **setFlashLoanFeeRate**(`token`, `flashLoanFeeRate`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Sets the flash loan fee rate for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `flashLoanFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The new flash loan fee rate for the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1269](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1269)

___

### setKeeperFeePayer

▸ **setKeeperFeePayer**(`_keeperFeePayer`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Sets the keeper fee payer address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_keeperFeePayer` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1280](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1280)

___

### setLiquidator

▸ **setLiquidator**(`_liquidator`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Sets the liquidator address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_liquidator` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1290](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1290)

___

### setMinimumMargin

▸ **setMinimumMargin**(`token`, `minimumMargin`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Sets the minimum margin for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `minimumMargin` | `PromiseOrValue`<`BigNumberish`\> | The new minimum margin for the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1301](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1301)

___

### setOracleProviderLevel

▸ **setOracleProviderLevel**(`oracleProvider`, `level`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO and registered oracle providers.
Sets the level of an oracle provider in the registry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider. |
| `level` | `PromiseOrValue`<`BigNumberish`\> | The new level to be set for the oracle provider. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1313](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1313)

___

### setUniswapFeeTier

▸ **setUniswapFeeTier**(`token`, `uniswapFeeTier`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Sets the Uniswap fee tier for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `uniswapFeeTier` | `PromiseOrValue`<`BigNumberish`\> | The new Uniswap fee tier for the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1325](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1325)

___

### setVault

▸ **setVault**(`_vault`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Sets the vault address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_vault` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1336](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1336)

___

### treasury

▸ **treasury**(`overrides?`): `Promise`<`string`\>

Returns the address of the DAO treasury.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1344](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1344)

___

### unregisterOracleProvider

▸ **unregisterOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Unregisters an oracle provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to unregister. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1351](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1351)

___

### updateDao

▸ **updateDao**(`_dao`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Updates the DAO address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_dao` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1361](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1361)

___

### updateTreasury

▸ **updateTreasury**(`_treasury`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Updates the DAO treasury address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_treasury` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1371](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1371)

___

### vault

▸ **vault**(`overrides?`): `Promise`<`string`\>

Returns the address of the vault.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts:1379](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/deployed/arbitrum_goerli/ChromaticMarketFactory.ts#L1379)
