[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [core](../modules/contracts.core.md) / ChromaticVault

# Interface: ChromaticVault

[contracts](../modules/contracts.md).[core](../modules/contracts.core.md).ChromaticVault

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticVault`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.core.ChromaticVault.md#_deployedpromise)
- [\_runningEvents](contracts.core.ChromaticVault.md#_runningevents)
- [\_wrappedEmits](contracts.core.ChromaticVault.md#_wrappedemits)
- [address](contracts.core.ChromaticVault.md#address)
- [callStatic](contracts.core.ChromaticVault.md#callstatic)
- [deployTransaction](contracts.core.ChromaticVault.md#deploytransaction)
- [estimateGas](contracts.core.ChromaticVault.md#estimategas)
- [filters](contracts.core.ChromaticVault.md#filters)
- [functions](contracts.core.ChromaticVault.md#functions)
- [interface](contracts.core.ChromaticVault.md#interface)
- [off](contracts.core.ChromaticVault.md#off)
- [on](contracts.core.ChromaticVault.md#on)
- [once](contracts.core.ChromaticVault.md#once)
- [populateTransaction](contracts.core.ChromaticVault.md#populatetransaction)
- [provider](contracts.core.ChromaticVault.md#provider)
- [removeListener](contracts.core.ChromaticVault.md#removelistener)
- [resolvedAddress](contracts.core.ChromaticVault.md#resolvedaddress)
- [signer](contracts.core.ChromaticVault.md#signer)

### Methods

- [\_checkRunningEvents](contracts.core.ChromaticVault.md#_checkrunningevents)
- [\_deployed](contracts.core.ChromaticVault.md#_deployed)
- [\_wrapEvent](contracts.core.ChromaticVault.md#_wrapevent)
- [attach](contracts.core.ChromaticVault.md#attach)
- [automate](contracts.core.ChromaticVault.md#automate)
- [cancelMakerEarningDistributionTask](contracts.core.ChromaticVault.md#cancelmakerearningdistributiontask)
- [cancelMarketEarningDistributionTask](contracts.core.ChromaticVault.md#cancelmarketearningdistributiontask)
- [connect](contracts.core.ChromaticVault.md#connect)
- [createMakerEarningDistributionTask](contracts.core.ChromaticVault.md#createmakerearningdistributiontask)
- [createMarketEarningDistributionTask](contracts.core.ChromaticVault.md#createmarketearningdistributiontask)
- [dedicatedMsgSender](contracts.core.ChromaticVault.md#dedicatedmsgsender)
- [deployed](contracts.core.ChromaticVault.md#deployed)
- [distributeMakerEarning](contracts.core.ChromaticVault.md#distributemakerearning)
- [distributeMarketEarning](contracts.core.ChromaticVault.md#distributemarketearning)
- [emit](contracts.core.ChromaticVault.md#emit)
- [fallback](contracts.core.ChromaticVault.md#fallback)
- [flashLoan](contracts.core.ChromaticVault.md#flashloan)
- [getPendingBinShare](contracts.core.ChromaticVault.md#getpendingbinshare)
- [listenerCount](contracts.core.ChromaticVault.md#listenercount)
- [listeners](contracts.core.ChromaticVault.md#listeners)
- [makerBalances](contracts.core.ChromaticVault.md#makerbalances)
- [makerEarningDistributionTaskIds](contracts.core.ChromaticVault.md#makerearningdistributiontaskids)
- [makerMarketBalances](contracts.core.ChromaticVault.md#makermarketbalances)
- [marketEarningDistributionTaskIds](contracts.core.ChromaticVault.md#marketearningdistributiontaskids)
- [onAddLiquidity](contracts.core.ChromaticVault.md#onaddliquidity)
- [onClaimPosition](contracts.core.ChromaticVault.md#onclaimposition)
- [onOpenPosition](contracts.core.ChromaticVault.md#onopenposition)
- [onSettlePendingLiquidity](contracts.core.ChromaticVault.md#onsettlependingliquidity)
- [onWithdrawLiquidity](contracts.core.ChromaticVault.md#onwithdrawliquidity)
- [pendingDeposits](contracts.core.ChromaticVault.md#pendingdeposits)
- [pendingMakerEarnings](contracts.core.ChromaticVault.md#pendingmakerearnings)
- [pendingMarketEarnings](contracts.core.ChromaticVault.md#pendingmarketearnings)
- [pendingWithdrawals](contracts.core.ChromaticVault.md#pendingwithdrawals)
- [queryFilter](contracts.core.ChromaticVault.md#queryfilter)
- [removeAllListeners](contracts.core.ChromaticVault.md#removealllisteners)
- [resolveMakerEarningDistribution](contracts.core.ChromaticVault.md#resolvemakerearningdistribution)
- [resolveMarketEarningDistribution](contracts.core.ChromaticVault.md#resolvemarketearningdistribution)
- [takerBalances](contracts.core.ChromaticVault.md#takerbalances)
- [takerMarketBalances](contracts.core.ChromaticVault.md#takermarketbalances)
- [transferKeeperFee](contracts.core.ChromaticVault.md#transferkeeperfee)

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
| `automate` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `dedicatedMsgSender` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `distributeMakerEarning` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `distributeMarketEarning` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `flashLoan` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getPendingBinShare` | (`market`: `PromiseOrValue`<`string`\>, `binBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `makerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `makerEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `makerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marketEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `onAddLiquidity` | (`amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `onClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `settlementAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `onOpenPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `tradingFee`: `PromiseOrValue`<`BigNumberish`\>, `protocolFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `onSettlePendingLiquidity` | (`pendingDeposit`: `PromiseOrValue`<`BigNumberish`\>, `pendingWithdrawal`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `onWithdrawLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `pendingDeposits` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingMakerEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingMarketEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingWithdrawals` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `resolveMakerEarningDistribution` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\> |
| `resolveMarketEarningDistribution` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\> |
| `takerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `takerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferKeeperFee` | (`keeper`: `PromiseOrValue`<`string`\>, `fee`: `PromiseOrValue`<`BigNumberish`\>, `margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:1014](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L1014)

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
| `automate` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `dedicatedMsgSender` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `distributeMakerEarning` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `distributeMarketEarning` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `flashLoan` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getPendingBinShare` | (`market`: `PromiseOrValue`<`string`\>, `binBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `makerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `makerEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `makerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `marketEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `onAddLiquidity` | (`amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `settlementAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onOpenPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `tradingFee`: `PromiseOrValue`<`BigNumberish`\>, `protocolFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onSettlePendingLiquidity` | (`pendingDeposit`: `PromiseOrValue`<`BigNumberish`\>, `pendingWithdrawal`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onWithdrawLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `pendingDeposits` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingMakerEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingMarketEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `pendingWithdrawals` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `resolveMakerEarningDistribution` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `resolveMarketEarningDistribution` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `takerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `takerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferKeeperFee` | (`keeper`: `PromiseOrValue`<`string`\>, `fee`: `PromiseOrValue`<`BigNumberish`\>, `margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:1383](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L1383)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FlashLoan` | (`sender?`: `PromiseOrValue`<`string`\>, `recipient?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>, `paid?`: ``null``, `paidToTakerPool?`: ``null``, `paidToMakerPool?`: ``null``) => [`FlashLoanEventFilter`](../modules.md#flashloaneventfilter) |
| `FlashLoan(address,address,uint256,uint256,uint256,uint256)` | (`sender?`: `PromiseOrValue`<`string`\>, `recipient?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>, `paid?`: ``null``, `paidToTakerPool?`: ``null``, `paidToMakerPool?`: ``null``) => [`FlashLoanEventFilter`](../modules.md#flashloaneventfilter) |
| `MakerEarningDistributed` | (`token?`: `PromiseOrValue`<`string`\>, `earning?`: `PromiseOrValue`<`BigNumberish`\>, `usedKeeperFee?`: `PromiseOrValue`<`BigNumberish`\>) => [`MakerEarningDistributedEventFilter`](../modules.md#makerearningdistributedeventfilter) |
| `MakerEarningDistributed(address,uint256,uint256)` | (`token?`: `PromiseOrValue`<`string`\>, `earning?`: `PromiseOrValue`<`BigNumberish`\>, `usedKeeperFee?`: `PromiseOrValue`<`BigNumberish`\>) => [`MakerEarningDistributedEventFilter`](../modules.md#makerearningdistributedeventfilter) |
| `MarketEarningAccumulated` | (`market?`: `PromiseOrValue`<`string`\>, `earning?`: ``null``) => [`MarketEarningAccumulatedEventFilter`](../modules.md#marketearningaccumulatedeventfilter) |
| `MarketEarningAccumulated(address,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `earning?`: ``null``) => [`MarketEarningAccumulatedEventFilter`](../modules.md#marketearningaccumulatedeventfilter) |
| `MarketEarningDistributed` | (`market?`: `PromiseOrValue`<`string`\>, `earning?`: `PromiseOrValue`<`BigNumberish`\>, `usedKeeperFee?`: `PromiseOrValue`<`BigNumberish`\>, `marketBalance?`: ``null``) => [`MarketEarningDistributedEventFilter`](../modules.md#marketearningdistributedeventfilter) |
| `MarketEarningDistributed(address,uint256,uint256,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `earning?`: `PromiseOrValue`<`BigNumberish`\>, `usedKeeperFee?`: `PromiseOrValue`<`BigNumberish`\>, `marketBalance?`: ``null``) => [`MarketEarningDistributedEventFilter`](../modules.md#marketearningdistributedeventfilter) |
| `OnAddLiquidity` | (`market?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => [`OnAddLiquidityEventFilter`](../modules.md#onaddliquidityeventfilter) |
| `OnAddLiquidity(address,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => [`OnAddLiquidityEventFilter`](../modules.md#onaddliquidityeventfilter) |
| `OnClaimPosition` | (`market?`: `PromiseOrValue`<`string`\>, `positionId?`: `PromiseOrValue`<`BigNumberish`\>, `recipient?`: `PromiseOrValue`<`string`\>, `takerMargin?`: ``null``, `settlementAmount?`: ``null``) => [`OnClaimPositionEventFilter`](../modules.md#onclaimpositioneventfilter) |
| `OnClaimPosition(address,uint256,address,uint256,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `positionId?`: `PromiseOrValue`<`BigNumberish`\>, `recipient?`: `PromiseOrValue`<`string`\>, `takerMargin?`: ``null``, `settlementAmount?`: ``null``) => [`OnClaimPositionEventFilter`](../modules.md#onclaimpositioneventfilter) |
| `OnOpenPosition` | (`market?`: `PromiseOrValue`<`string`\>, `positionId?`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin?`: `PromiseOrValue`<`BigNumberish`\>, `tradingFee?`: ``null``, `protocolFee?`: ``null``) => [`OnOpenPositionEventFilter`](../modules.md#onopenpositioneventfilter) |
| `OnOpenPosition(address,uint256,uint256,uint256,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `positionId?`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin?`: `PromiseOrValue`<`BigNumberish`\>, `tradingFee?`: ``null``, `protocolFee?`: ``null``) => [`OnOpenPositionEventFilter`](../modules.md#onopenpositioneventfilter) |
| `OnSettlePendingLiquidity` | (`market?`: `PromiseOrValue`<`string`\>, `pendingDeposit?`: `PromiseOrValue`<`BigNumberish`\>, `pendingWithdrawal?`: `PromiseOrValue`<`BigNumberish`\>) => [`OnSettlePendingLiquidityEventFilter`](../modules.md#onsettlependingliquidityeventfilter) |
| `OnSettlePendingLiquidity(address,uint256,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `pendingDeposit?`: `PromiseOrValue`<`BigNumberish`\>, `pendingWithdrawal?`: `PromiseOrValue`<`BigNumberish`\>) => [`OnSettlePendingLiquidityEventFilter`](../modules.md#onsettlependingliquidityeventfilter) |
| `OnWithdrawLiquidity` | (`market?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>, `recipient?`: `PromiseOrValue`<`string`\>) => [`OnWithdrawLiquidityEventFilter`](../modules.md#onwithdrawliquidityeventfilter) |
| `OnWithdrawLiquidity(address,uint256,address)` | (`market?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>, `recipient?`: `PromiseOrValue`<`string`\>) => [`OnWithdrawLiquidityEventFilter`](../modules.md#onwithdrawliquidityeventfilter) |
| `TransferKeeperFee(address,uint256,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `fee?`: `PromiseOrValue`<`BigNumberish`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => [`TransferKeeperFee_address_uint256_uint256_EventFilter`](../modules.md#transferkeeperfee_address_uint256_uint256_eventfilter) |
| `TransferKeeperFee(uint256,uint256)` | (`fee?`: `PromiseOrValue`<`BigNumberish`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => [`TransferKeeperFee_uint256_uint256_EventFilter`](../modules.md#transferkeeperfee_uint256_uint256_eventfilter) |
| `TransferProtocolFee` | (`market?`: `PromiseOrValue`<`string`\>, `positionId?`: `PromiseOrValue`<`BigNumberish`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => `TransferProtocolFeeEventFilter` |
| `TransferProtocolFee(address,uint256,uint256)` | (`market?`: `PromiseOrValue`<`string`\>, `positionId?`: `PromiseOrValue`<`BigNumberish`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => `TransferProtocolFeeEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:1249](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L1249)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `automate` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `dedicatedMsgSender` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `distributeMakerEarning` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `distributeMarketEarning` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `flashLoan` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getPendingBinShare` | (`market`: `PromiseOrValue`<`string`\>, `binBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `makerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `makerEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `makerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `marketEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `onAddLiquidity` | (`amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `settlementAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onOpenPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `tradingFee`: `PromiseOrValue`<`BigNumberish`\>, `protocolFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onSettlePendingLiquidity` | (`pendingDeposit`: `PromiseOrValue`<`BigNumberish`\>, `pendingWithdrawal`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onWithdrawLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `pendingDeposits` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `pendingMakerEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `pendingMarketEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `pendingWithdrawals` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `resolveMakerEarningDistribution` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\> |
| `resolveMarketEarningDistribution` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\> |
| `takerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `takerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transferKeeperFee` | (`keeper`: `PromiseOrValue`<`string`\>, `fee`: `PromiseOrValue`<`BigNumberish`\>, `margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:546](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L546)

___

### interface

• **interface**: [`ChromaticVaultInterface`](ChromaticVaultInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:525](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L525)

___

### off

• **off**: `OnEvent`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:541](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L541)

___

### on

• **on**: `OnEvent`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:542](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L542)

___

### once

• **once**: `OnEvent`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:543](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L543)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `automate` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `cancelMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `cancelMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMakerEarningDistributionTask` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `createMarketEarningDistributionTask` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `dedicatedMsgSender` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `distributeMakerEarning` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `distributeMarketEarning` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `flashLoan` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getPendingBinShare` | (`market`: `PromiseOrValue`<`string`\>, `binBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `makerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `makerEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `makerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `marketEarningDistributionTaskIds` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `onAddLiquidity` | (`amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `settlementAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onOpenPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `tradingFee`: `PromiseOrValue`<`BigNumberish`\>, `protocolFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onSettlePendingLiquidity` | (`pendingDeposit`: `PromiseOrValue`<`BigNumberish`\>, `pendingWithdrawal`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onWithdrawLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `pendingDeposits` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingMakerEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingMarketEarnings` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `pendingWithdrawals` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `resolveMakerEarningDistribution` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `resolveMarketEarningDistribution` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `takerBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `takerMarketBalances` | (`arg0`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferKeeperFee` | (`keeper`: `PromiseOrValue`<`string`\>, `fee`: `PromiseOrValue`<`BigNumberish`\>, `margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:1618](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L1618)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:544](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L544)

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

### attach

▸ **attach**(`addressOrName`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:522](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L522)

___

### automate

▸ **automate**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:781](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L781)

___

### cancelMakerEarningDistributionTask

▸ **cancelMakerEarningDistributionTask**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancels a maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:787](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L787)

___

### cancelMarketEarningDistributionTask

▸ **cancelMarketEarningDistributionTask**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

Cancels a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:796](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L796)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:521](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L521)

___

### createMakerEarningDistributionTask

▸ **createMakerEarningDistributionTask**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

Creates a maker earning distribution task for a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:805](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L805)

___

### createMarketEarningDistributionTask

▸ **createMarketEarningDistributionTask**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

Creates a market earning distribution task for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:814](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L814)

___

### dedicatedMsgSender

▸ **dedicatedMsgSender**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:819](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L819)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Returns

`Promise`<[`ChromaticVault`](contracts.core.ChromaticVault.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:523](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L523)

___

### distributeMakerEarning

▸ **distributeMakerEarning**(`token`, `overrides?`): `Promise`<`ContractTransaction`\>

Distributes the maker earning for a token to the each markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:825](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L825)

___

### distributeMarketEarning

▸ **distributeMarketEarning**(`market`, `overrides?`): `Promise`<`ContractTransaction`\>

Distributes the market earning for a market to the each bins.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:834](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L834)

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

### flashLoan

▸ **flashLoan**(`token`, `amount`, `recipient`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Executes a flash loan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token for the flash loan. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of the flash loan. |
| `recipient` | `PromiseOrValue`<`string`\> | The address to receive the flash loan. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the flash loan. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:846](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L846)

___

### getPendingBinShare

▸ **getPendingBinShare**(`market`, `binBalance`, `overrides?`): `Promise`<`BigNumber`\>

The pending share of earnings is calculated based on the bin balance, maker balances, and market balances.
Retrieves the pending share of earnings for a specific bin (subset) of funds in a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `binBalance` | `PromiseOrValue`<`BigNumberish`\> | The balance of funds in the bin. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:860](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L860)

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

[src/gen/contracts/core/ChromaticVault.ts:533](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L533)

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

[src/gen/contracts/core/ChromaticVault.ts:536](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L536)

___

### makerBalances

▸ **makerBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:866](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L866)

___

### makerEarningDistributionTaskIds

▸ **makerEarningDistributionTaskIds**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:871](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L871)

___

### makerMarketBalances

▸ **makerMarketBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:876](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L876)

___

### marketEarningDistributionTaskIds

▸ **marketEarningDistributionTaskIds**(`arg0`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:881](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L881)

___

### onAddLiquidity

▸ **onAddLiquidity**(`amount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when liquidity is added to the vault by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of liquidity being added. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:891](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L891)

___

### onClaimPosition

▸ **onClaimPosition**(`positionId`, `recipient`, `takerMargin`, `settlementAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when a position is claimed by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the claimed position. |
| `recipient` | `PromiseOrValue`<`string`\> | The address that will receive the settlement amount. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the taker for the position. |
| `settlementAmount` | `PromiseOrValue`<`BigNumberish`\> | The amount to be settled for the position. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:904](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L904)

___

### onOpenPosition

▸ **onOpenPosition**(`positionId`, `takerMargin`, `tradingFee`, `protocolFee`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when a position is opened by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the opened position. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the taker for the position. |
| `tradingFee` | `PromiseOrValue`<`BigNumberish`\> | The trading fee associated with the position. |
| `protocolFee` | `PromiseOrValue`<`BigNumberish`\> | The protocol fee associated with the position. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:920](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L920)

___

### onSettlePendingLiquidity

▸ **onSettlePendingLiquidity**(`pendingDeposit`, `pendingWithdrawal`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when pending liquidity is settled in the vault by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pendingDeposit` | `PromiseOrValue`<`BigNumberish`\> | The amount of pending deposits being settled. |
| `pendingWithdrawal` | `PromiseOrValue`<`BigNumberish`\> | The amount of pending withdrawals being settled. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:934](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L934)

___

### onWithdrawLiquidity

▸ **onWithdrawLiquidity**(`recipient`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Called when liquidity is withdrawn from the vault by a market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `PromiseOrValue`<`string`\> | The address that will receive the withdrawn liquidity. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of liquidity to be withdrawn. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:946](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L946)

___

### pendingDeposits

▸ **pendingDeposits**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:952](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L952)

___

### pendingMakerEarnings

▸ **pendingMakerEarnings**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:957](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L957)

___

### pendingMarketEarnings

▸ **pendingMarketEarnings**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:962](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L962)

___

### pendingWithdrawals

▸ **pendingWithdrawals**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:967](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L967)

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

[src/gen/contracts/core/ChromaticVault.ts:527](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L527)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:537](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L537)

▸ **removeAllListeners**(`eventName?`): [`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticVault`](contracts.core.ChromaticVault.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:540](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L540)

___

### resolveMakerEarningDistribution

▸ **resolveMakerEarningDistribution**(`token`, `overrides?`): `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

Resolves the maker earning distribution for a specific token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the settlement token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:976](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L976)

___

### resolveMarketEarningDistribution

▸ **resolveMarketEarningDistribution**(`market`, `overrides?`): `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

Resolves the market earning distribution for a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:985](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L985)

___

### takerBalances

▸ **takerBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:990](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L990)

___

### takerMarketBalances

▸ **takerMarketBalances**(`arg0`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:995](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L995)

___

### transferKeeperFee

▸ **transferKeeperFee**(`keeper`, `fee`, `margin`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by a market contract.
Transfers the keeper fee from the market to the specified keeper.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keeper` | `PromiseOrValue`<`string`\> | The address of the keeper to receive the fee. |
| `fee` | `PromiseOrValue`<`BigNumberish`\> | The amount of the fee to transfer as native token. |
| `margin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount used for the fee payment. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:1007](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/contracts/core/ChromaticVault.ts#L1007)
