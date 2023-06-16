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

[gen/contracts/core/ChromaticMarketFactory.ts:1052](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1052)

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

[gen/contracts/core/ChromaticMarketFactory.ts:639](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L639)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1066](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1066)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1079](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1079)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1089](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1089)

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

[gen/contracts/core/ChromaticMarketFactory.ts:638](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L638)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1099](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1099)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1109](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1109)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1120](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1120)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1129](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1129)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1137](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1137)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Returns

`Promise`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/ChromaticMarketFactory.ts:640](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L640)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1143](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1143)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1152](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1152)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1161](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1161)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1171](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1171)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1180](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1180)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1186](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1186)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1196](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1196)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1205](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1205)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1214](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1214)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1223](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1223)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1232](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1232)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1240](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1240)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1245](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1245)

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

[gen/contracts/core/ChromaticMarketFactory.ts:650](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L650)

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

[gen/contracts/core/ChromaticMarketFactory.ts:653](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L653)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1251](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1251)

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

[gen/contracts/core/ChromaticMarketFactory.ts:644](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L644)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1262](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1262)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1277](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1277)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1290](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1290)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1295](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1295)

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

[gen/contracts/core/ChromaticMarketFactory.ts:654](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L654)

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

[gen/contracts/core/ChromaticMarketFactory.ts:657](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L657)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1302](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1302)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1313](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1313)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1325](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1325)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1336](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1336)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1346](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1346)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1357](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1357)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1369](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1369)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1380](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1380)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1388](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1388)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1395](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1395)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1405](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1405)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1415](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1415)

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

[gen/contracts/core/ChromaticMarketFactory.ts:1423](https://github.com/chromatic-protocol/sdk/blob/7f95662/src/gen/contracts/core/ChromaticMarketFactory.ts#L1423)
