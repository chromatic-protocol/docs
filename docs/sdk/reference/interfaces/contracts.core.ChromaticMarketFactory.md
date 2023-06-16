[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [core](../modules/contracts.core.md) / ChromaticMarketFactory

# Interface: ChromaticMarketFactory

[contracts](../modules/contracts.md).[core](../modules/contracts.core.md).ChromaticMarketFactory

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticMarketFactory`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.core.ChromaticMarketFactory.md#_deployedpromise)
- [\_runningEvents](contracts.core.ChromaticMarketFactory.md#_runningevents)
- [\_wrappedEmits](contracts.core.ChromaticMarketFactory.md#_wrappedemits)
- [address](contracts.core.ChromaticMarketFactory.md#address)
- [callStatic](contracts.core.ChromaticMarketFactory.md#callstatic)
- [deployTransaction](contracts.core.ChromaticMarketFactory.md#deploytransaction)
- [estimateGas](contracts.core.ChromaticMarketFactory.md#estimategas)
- [filters](contracts.core.ChromaticMarketFactory.md#filters)
- [functions](contracts.core.ChromaticMarketFactory.md#functions)
- [interface](contracts.core.ChromaticMarketFactory.md#interface)
- [off](contracts.core.ChromaticMarketFactory.md#off)
- [on](contracts.core.ChromaticMarketFactory.md#on)
- [once](contracts.core.ChromaticMarketFactory.md#once)
- [populateTransaction](contracts.core.ChromaticMarketFactory.md#populatetransaction)
- [provider](contracts.core.ChromaticMarketFactory.md#provider)
- [removeListener](contracts.core.ChromaticMarketFactory.md#removelistener)
- [resolvedAddress](contracts.core.ChromaticMarketFactory.md#resolvedaddress)
- [signer](contracts.core.ChromaticMarketFactory.md#signer)

### Methods

- [\_checkRunningEvents](contracts.core.ChromaticMarketFactory.md#_checkrunningevents)
- [\_deployed](contracts.core.ChromaticMarketFactory.md#_deployed)
- [\_wrapEvent](contracts.core.ChromaticMarketFactory.md#_wrapevent)
- [appendInterestRateRecord](contracts.core.ChromaticMarketFactory.md#appendinterestraterecord)
- [attach](contracts.core.ChromaticMarketFactory.md#attach)
- [calculateInterest](contracts.core.ChromaticMarketFactory.md#calculateinterest)
- [cancelMakerEarningDistributionTask](contracts.core.ChromaticMarketFactory.md#cancelmakerearningdistributiontask)
- [cancelMarketEarningDistributionTask](contracts.core.ChromaticMarketFactory.md#cancelmarketearningdistributiontask)
- [connect](contracts.core.ChromaticMarketFactory.md#connect)
- [createMakerEarningDistributionTask](contracts.core.ChromaticMarketFactory.md#createmakerearningdistributiontask)
- [createMarket](contracts.core.ChromaticMarketFactory.md#createmarket)
- [createMarketEarningDistributionTask](contracts.core.ChromaticMarketFactory.md#createmarketearningdistributiontask)
- [currentInterestRate](contracts.core.ChromaticMarketFactory.md#currentinterestrate)
- [dao](contracts.core.ChromaticMarketFactory.md#dao)
- [deployed](contracts.core.ChromaticMarketFactory.md#deployed)
- [emit](contracts.core.ChromaticMarketFactory.md#emit)
- [fallback](contracts.core.ChromaticMarketFactory.md#fallback)
- [getEarningDistributionThreshold](contracts.core.ChromaticMarketFactory.md#getearningdistributionthreshold)
- [getFlashLoanFeeRate](contracts.core.ChromaticMarketFactory.md#getflashloanfeerate)
- [getInterestRateRecords](contracts.core.ChromaticMarketFactory.md#getinterestraterecords)
- [getMarket](contracts.core.ChromaticMarketFactory.md#getmarket)
- [getMarkets](contracts.core.ChromaticMarketFactory.md#getmarkets)
- [getMarketsBySettlmentToken](contracts.core.ChromaticMarketFactory.md#getmarketsbysettlmenttoken)
- [getMinimumMargin](contracts.core.ChromaticMarketFactory.md#getminimummargin)
- [getUniswapFeeTier](contracts.core.ChromaticMarketFactory.md#getuniswapfeetier)
- [isRegisteredMarket](contracts.core.ChromaticMarketFactory.md#isregisteredmarket)
- [isRegisteredOracleProvider](contracts.core.ChromaticMarketFactory.md#isregisteredoracleprovider)
- [isRegisteredSettlementToken](contracts.core.ChromaticMarketFactory.md#isregisteredsettlementtoken)
- [keeperFeePayer](contracts.core.ChromaticMarketFactory.md#keeperfeepayer)
- [liquidator](contracts.core.ChromaticMarketFactory.md#liquidator)
- [listenerCount](contracts.core.ChromaticMarketFactory.md#listenercount)
- [listeners](contracts.core.ChromaticMarketFactory.md#listeners)
- [parameters](contracts.core.ChromaticMarketFactory.md#parameters)
- [queryFilter](contracts.core.ChromaticMarketFactory.md#queryfilter)
- [registerOracleProvider](contracts.core.ChromaticMarketFactory.md#registeroracleprovider)
- [registerSettlementToken](contracts.core.ChromaticMarketFactory.md#registersettlementtoken)
- [registeredOracleProviders](contracts.core.ChromaticMarketFactory.md#registeredoracleproviders)
- [registeredSettlementTokens](contracts.core.ChromaticMarketFactory.md#registeredsettlementtokens)
- [removeAllListeners](contracts.core.ChromaticMarketFactory.md#removealllisteners)
- [removeLastInterestRateRecord](contracts.core.ChromaticMarketFactory.md#removelastinterestraterecord)
- [setEarningDistributionThreshold](contracts.core.ChromaticMarketFactory.md#setearningdistributionthreshold)
- [setFlashLoanFeeRate](contracts.core.ChromaticMarketFactory.md#setflashloanfeerate)
- [setKeeperFeePayer](contracts.core.ChromaticMarketFactory.md#setkeeperfeepayer)
- [setLiquidator](contracts.core.ChromaticMarketFactory.md#setliquidator)
- [setMinimumMargin](contracts.core.ChromaticMarketFactory.md#setminimummargin)
- [setUniswapFeeTier](contracts.core.ChromaticMarketFactory.md#setuniswapfeetier)
- [setVault](contracts.core.ChromaticMarketFactory.md#setvault)
- [treasury](contracts.core.ChromaticMarketFactory.md#treasury)
- [unregisterOracleProvider](contracts.core.ChromaticMarketFactory.md#unregisteroracleprovider)
- [updateDao](contracts.core.ChromaticMarketFactory.md#updatedao)
- [updateTreasury](contracts.core.ChromaticMarketFactory.md#updatetreasury)
- [vault](contracts.core.ChromaticMarketFactory.md#vault)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appendInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `annualRateBPS`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `calculateInterest` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `from`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `currentInterestRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `dao` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestRateRecords` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`RecordStructOutput`](../modules/InterestRate.md#recordstructoutput)[]\> |
| `getMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getMarkets` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `getMarketsBySettlmentToken` | (`settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `getMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `isRegisteredMarket` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `isRegisteredSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `parameters` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `oracleProvider`: `string` ; `settlementToken`: `string`  }\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `interestRate`: `PromiseOrValue`<`BigNumberish`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `registeredSettlementTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `removeLastInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setKeeperFeePayer` | (`_keeperFeePayer`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setLiquidator` | (`_liquidator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setVault` | (`_vault`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `treasury` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateDao` | (`_dao`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateTreasury` | (`_treasury`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:1425](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1425)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appendInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `annualRateBPS`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateInterest` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `from`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `createMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `currentInterestRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `dao` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getInterestRateRecords` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarkets` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMarketsBySettlmentToken` | (`settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isRegisteredMarket` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isRegisteredSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `parameters` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `interestRate`: `PromiseOrValue`<`BigNumberish`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registeredSettlementTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeLastInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setKeeperFeePayer` | (`_keeperFeePayer`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setLiquidator` | (`_liquidator`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setVault` | (`_vault`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `treasury` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateDao` | (`_dao`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateTreasury` | (`_treasury`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:1940](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1940)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `InterestRateRecordAppended` | (`token?`: `PromiseOrValue`<`string`\>, `annualRateBPS?`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp?`: `PromiseOrValue`<`BigNumberish`\>) => [`InterestRateRecordAppendedEventFilter`](../modules.md#interestraterecordappendedeventfilter) |
| `InterestRateRecordAppended(address,uint256,uint256)` | (`token?`: `PromiseOrValue`<`string`\>, `annualRateBPS?`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp?`: `PromiseOrValue`<`BigNumberish`\>) => [`InterestRateRecordAppendedEventFilter`](../modules.md#interestraterecordappendedeventfilter) |
| `LastInterestRateRecordRemoved` | (`token?`: `PromiseOrValue`<`string`\>, `annualRateBPS?`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp?`: `PromiseOrValue`<`BigNumberish`\>) => [`LastInterestRateRecordRemovedEventFilter`](../modules.md#lastinterestraterecordremovedeventfilter) |
| `LastInterestRateRecordRemoved(address,uint256,uint256)` | (`token?`: `PromiseOrValue`<`string`\>, `annualRateBPS?`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp?`: `PromiseOrValue`<`BigNumberish`\>) => [`LastInterestRateRecordRemovedEventFilter`](../modules.md#lastinterestraterecordremovedeventfilter) |
| `MarketCreated` | (`oracleProvider?`: `PromiseOrValue`<`string`\>, `settlementToken?`: `PromiseOrValue`<`string`\>, `market?`: `PromiseOrValue`<`string`\>) => [`MarketCreatedEventFilter`](../modules.md#marketcreatedeventfilter) |
| `MarketCreated(address,address,address)` | (`oracleProvider?`: `PromiseOrValue`<`string`\>, `settlementToken?`: `PromiseOrValue`<`string`\>, `market?`: `PromiseOrValue`<`string`\>) => [`MarketCreatedEventFilter`](../modules.md#marketcreatedeventfilter) |
| `OracleProviderRegistered` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => [`OracleProviderRegisteredEventFilter`](../modules.md#oracleproviderregisteredeventfilter) |
| `OracleProviderRegistered(address)` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => [`OracleProviderRegisteredEventFilter`](../modules.md#oracleproviderregisteredeventfilter) |
| `OracleProviderUnregistered` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => [`OracleProviderUnregisteredEventFilter`](../modules.md#oracleproviderunregisteredeventfilter) |
| `OracleProviderUnregistered(address)` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => [`OracleProviderUnregisteredEventFilter`](../modules.md#oracleproviderunregisteredeventfilter) |
| `SetEarningDistributionThreshold` | (`token?`: `PromiseOrValue`<`string`\>, `earningDistributionThreshold?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetEarningDistributionThresholdEventFilter`](../modules.md#setearningdistributionthresholdeventfilter) |
| `SetEarningDistributionThreshold(address,uint256)` | (`token?`: `PromiseOrValue`<`string`\>, `earningDistributionThreshold?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetEarningDistributionThresholdEventFilter`](../modules.md#setearningdistributionthresholdeventfilter) |
| `SetFlashLoanFeeRate` | (`token?`: `PromiseOrValue`<`string`\>, `flashLoanFeeRate?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetFlashLoanFeeRateEventFilter`](../modules.md#setflashloanfeerateeventfilter) |
| `SetFlashLoanFeeRate(address,uint256)` | (`token?`: `PromiseOrValue`<`string`\>, `flashLoanFeeRate?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetFlashLoanFeeRateEventFilter`](../modules.md#setflashloanfeerateeventfilter) |
| `SetKeeperFeePayer` | (`keeperFeePayer?`: `PromiseOrValue`<`string`\>) => [`SetKeeperFeePayerEventFilter`](../modules.md#setkeeperfeepayereventfilter) |
| `SetKeeperFeePayer(address)` | (`keeperFeePayer?`: `PromiseOrValue`<`string`\>) => [`SetKeeperFeePayerEventFilter`](../modules.md#setkeeperfeepayereventfilter) |
| `SetLiquidator` | (`liquidator?`: `PromiseOrValue`<`string`\>) => [`SetLiquidatorEventFilter`](../modules.md#setliquidatoreventfilter) |
| `SetLiquidator(address)` | (`liquidator?`: `PromiseOrValue`<`string`\>) => [`SetLiquidatorEventFilter`](../modules.md#setliquidatoreventfilter) |
| `SetMinimumMargin` | (`token?`: `PromiseOrValue`<`string`\>, `minimumMargin?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetMinimumMarginEventFilter`](../modules.md#setminimummargineventfilter) |
| `SetMinimumMargin(address,uint256)` | (`token?`: `PromiseOrValue`<`string`\>, `minimumMargin?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetMinimumMarginEventFilter`](../modules.md#setminimummargineventfilter) |
| `SetUniswapFeeTier` | (`token?`: `PromiseOrValue`<`string`\>, `uniswapFeeTier?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetUniswapFeeTierEventFilter`](../modules.md#setuniswapfeetiereventfilter) |
| `SetUniswapFeeTier(address,uint24)` | (`token?`: `PromiseOrValue`<`string`\>, `uniswapFeeTier?`: `PromiseOrValue`<`BigNumberish`\>) => [`SetUniswapFeeTierEventFilter`](../modules.md#setuniswapfeetiereventfilter) |
| `SetVault` | (`vault?`: `PromiseOrValue`<`string`\>) => [`SetVaultEventFilter`](../modules.md#setvaulteventfilter) |
| `SetVault(address)` | (`vault?`: `PromiseOrValue`<`string`\>) => [`SetVaultEventFilter`](../modules.md#setvaulteventfilter) |
| `SettlementTokenRegistered` | (`token?`: `PromiseOrValue`<`string`\>, `minimumMargin?`: `PromiseOrValue`<`BigNumberish`\>, `interestRate?`: `PromiseOrValue`<`BigNumberish`\>, `flashLoanFeeRate?`: ``null``, `earningDistributionThreshold?`: ``null``, `uniswapFeeTier?`: ``null``) => [`SettlementTokenRegisteredEventFilter`](../modules.md#settlementtokenregisteredeventfilter) |
| `SettlementTokenRegistered(address,uint256,uint256,uint256,uint256,uint24)` | (`token?`: `PromiseOrValue`<`string`\>, `minimumMargin?`: `PromiseOrValue`<`BigNumberish`\>, `interestRate?`: `PromiseOrValue`<`BigNumberish`\>, `flashLoanFeeRate?`: ``null``, `earningDistributionThreshold?`: ``null``, `uniswapFeeTier?`: ``null``) => [`SettlementTokenRegisteredEventFilter`](../modules.md#settlementtokenregisteredeventfilter) |
| `UpdateDao` | (`dao?`: `PromiseOrValue`<`string`\>) => [`UpdateDaoEventFilter`](../modules.md#updatedaoeventfilter) |
| `UpdateDao(address)` | (`dao?`: `PromiseOrValue`<`string`\>) => [`UpdateDaoEventFilter`](../modules.md#updatedaoeventfilter) |
| `UpdateTreasury` | (`treasury?`: `PromiseOrValue`<`string`\>) => [`UpdateTreasuryEventFilter`](../modules.md#updatetreasuryeventfilter) |
| `UpdateTreasury(address)` | (`treasury?`: `PromiseOrValue`<`string`\>) => [`UpdateTreasuryEventFilter`](../modules.md#updatetreasuryeventfilter) |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:1807](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1807)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appendInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `annualRateBPS`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateInterest` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `from`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `currentInterestRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `annualRateBPS`: `BigNumber`  }\> |
| `dao` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getInterestRateRecords` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[[`RecordStructOutput`](../modules/InterestRate.md#recordstructoutput)[]]\> |
| `getMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getMarkets` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `getMarketsBySettlmentToken` | (`settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `getMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `getUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `isRegisteredMarket` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `isRegisteredSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `parameters` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`, `string`] & { `oracleProvider`: `string` ; `settlementToken`: `string`  }\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `interestRate`: `PromiseOrValue`<`BigNumberish`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `registeredSettlementTokens` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `removeLastInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setKeeperFeePayer` | (`_keeperFeePayer`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setLiquidator` | (`_liquidator`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setVault` | (`_vault`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `treasury` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateDao` | (`_dao`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateTreasury` | (`_treasury`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:663](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L663)

___

### interface

• **interface**: [`ChromaticMarketFactoryInterface`](ChromaticMarketFactoryInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:642](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L642)

___

### off

• **off**: `OnEvent`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:658](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L658)

___

### on

• **on**: `OnEvent`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:659](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L659)

___

### once

• **once**: `OnEvent`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:660](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L660)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appendInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `annualRateBPS`: `PromiseOrValue`<`BigNumberish`\>, `beginTimestamp`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateInterest` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `from`: `PromiseOrValue`<`BigNumberish`\>, `to`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `currentInterestRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `dao` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getInterestRateRecords` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMarket` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMarkets` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMarketsBySettlmentToken` | (`settlementToken`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isRegisteredMarket` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isRegisteredSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `parameters` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerSettlementToken` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `interestRate`: `PromiseOrValue`<`BigNumberish`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registeredSettlementTokens` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeLastInterestRateRecord` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setEarningDistributionThreshold` | (`token`: `PromiseOrValue`<`string`\>, `earningDistributionThreshold`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setFlashLoanFeeRate` | (`token`: `PromiseOrValue`<`string`\>, `flashLoanFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setKeeperFeePayer` | (`_keeperFeePayer`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setLiquidator` | (`_liquidator`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setMinimumMargin` | (`token`: `PromiseOrValue`<`string`\>, `minimumMargin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setUniswapFeeTier` | (`token`: `PromiseOrValue`<`string`\>, `uniswapFeeTier`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setVault` | (`_vault`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `treasury` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateDao` | (`_dao`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateTreasury` | (`_treasury`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:2318](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L2318)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:661](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L661)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1052](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1052)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:639](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L639)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1066](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1066)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1079](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1079)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1089](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1089)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:638](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L638)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1099](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1099)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1109](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1109)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1120](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1120)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1129](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1129)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1137](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1137)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Returns

`Promise`<[`ChromaticMarketFactory`](contracts.core.ChromaticMarketFactory.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:640](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L640)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1143](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1143)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1152](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1152)

___

### getInterestRateRecords

▸ **getInterestRateRecords**(`token`, `overrides?`): `Promise`<[`RecordStructOutput`](../modules/InterestRate.md#recordstructoutput)[]\>

Gets all the interest rate records for a settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`RecordStructOutput`](../modules/InterestRate.md#recordstructoutput)[]\>

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:1161](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1161)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1171](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1171)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1180](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1180)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1186](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1186)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1196](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1196)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1205](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1205)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1214](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1214)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1223](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1223)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1232](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1232)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1240](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1240)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1245](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1245)

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:650](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L650)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:653](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L653)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1251](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1251)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:644](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L644)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1262](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1262)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1277](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1277)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1290](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1290)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1295](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1295)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:654](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L654)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:657](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L657)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1302](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1302)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1313](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1313)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1325](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1325)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1336](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1336)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1346](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1346)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1357](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1357)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1369](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1369)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1380](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1380)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1388](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1388)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1395](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1395)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1405](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1405)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1415](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1415)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:1423](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarketFactory.ts#L1423)
