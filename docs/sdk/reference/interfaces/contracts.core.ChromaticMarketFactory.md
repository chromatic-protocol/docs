---
id: "contracts.core.ChromaticMarketFactory"
title: "Interface: ChromaticMarketFactory"
sidebar_label: "ChromaticMarketFactory"
custom_edit_url: null
---

[contracts](../namespaces/contracts.md).[core](../namespaces/contracts.core.md).ChromaticMarketFactory

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

[gen/contracts/core/ChromaticMarketFactory.ts:1107](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1107)

___

### attach

▸ **attach**(`addressOrName`): [`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:673](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L673)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1121](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1121)

___

### cancelMakerEarningDistributionTask

▸ **cancelMakerEarningDistributionTask**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Cancels a Maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:1134](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1134)

___

### cancelMarketEarningDistributionTask

▸ **cancelMarketEarningDistributionTask**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Cancels a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:1144](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1144)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:672](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L672)

___

### createMakerEarningDistributionTask

▸ **createMakerEarningDistributionTask**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Creates a Maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:1154](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1154)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1164](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1164)

___

### createMarketEarningDistributionTask

▸ **createMarketEarningDistributionTask**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the DAO address.
Creates a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:1175](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1175)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1184](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1184)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1192](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1192)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Returns

`Promise`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:674](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L674)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1198](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1198)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1207](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1207)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1216](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1216)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1226](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1226)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1235](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1235)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1241](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1241)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1251](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1251)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1260](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1260)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1269](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1269)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1278](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1278)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1287](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1287)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1296](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1296)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1304](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1304)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1309](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1309)

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

[gen/contracts/core/ChromaticMarketFactory.ts:684](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L684)

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

[gen/contracts/core/ChromaticMarketFactory.ts:687](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L687)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1315](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1315)

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

[gen/contracts/core/ChromaticMarketFactory.ts:678](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L678)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1326](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1326)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1341](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1341)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1354](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1354)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1359](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1359)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:688](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L688)

▸ **removeAllListeners**(`eventName?`): [`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:691](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L691)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1366](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1366)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1377](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1377)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1389](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1389)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1400](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1400)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1410](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1410)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1421](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1421)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1433](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1433)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1445](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1445)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1456](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1456)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1464](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1464)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1471](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1471)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1481](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1481)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1491](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1491)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1499](https://github.com/chromatic-protocol/sdk/blob/8dc63ae/src/gen/contracts/core/ChromaticMarketFactory.ts#L1499)
