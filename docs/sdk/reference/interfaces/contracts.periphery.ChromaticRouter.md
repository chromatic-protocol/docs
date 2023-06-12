[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [periphery](../modules/contracts.periphery.md) / ChromaticRouter

# Interface: ChromaticRouter

[contracts](../modules/contracts.md).[periphery](../modules/contracts.periphery.md).ChromaticRouter

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticRouter`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.periphery.ChromaticRouter.md#_deployedpromise)
- [\_runningEvents](contracts.periphery.ChromaticRouter.md#_runningevents)
- [\_wrappedEmits](contracts.periphery.ChromaticRouter.md#_wrappedemits)
- [address](contracts.periphery.ChromaticRouter.md#address)
- [callStatic](contracts.periphery.ChromaticRouter.md#callstatic)
- [deployTransaction](contracts.periphery.ChromaticRouter.md#deploytransaction)
- [estimateGas](contracts.periphery.ChromaticRouter.md#estimategas)
- [filters](contracts.periphery.ChromaticRouter.md#filters)
- [functions](contracts.periphery.ChromaticRouter.md#functions)
- [interface](contracts.periphery.ChromaticRouter.md#interface)
- [off](contracts.periphery.ChromaticRouter.md#off)
- [on](contracts.periphery.ChromaticRouter.md#on)
- [once](contracts.periphery.ChromaticRouter.md#once)
- [populateTransaction](contracts.periphery.ChromaticRouter.md#populatetransaction)
- [provider](contracts.periphery.ChromaticRouter.md#provider)
- [removeListener](contracts.periphery.ChromaticRouter.md#removelistener)
- [resolvedAddress](contracts.periphery.ChromaticRouter.md#resolvedaddress)
- [signer](contracts.periphery.ChromaticRouter.md#signer)

### Methods

- [\_checkRunningEvents](contracts.periphery.ChromaticRouter.md#_checkrunningevents)
- [\_deployed](contracts.periphery.ChromaticRouter.md#_deployed)
- [\_wrapEvent](contracts.periphery.ChromaticRouter.md#_wrapevent)
- [addLiquidity](contracts.periphery.ChromaticRouter.md#addliquidity)
- [addLiquidityBatch](contracts.periphery.ChromaticRouter.md#addliquiditybatch)
- [addLiquidityCallback](contracts.periphery.ChromaticRouter.md#addliquiditycallback)
- [attach](contracts.periphery.ChromaticRouter.md#attach)
- [claimLiquidity](contracts.periphery.ChromaticRouter.md#claimliquidity)
- [claimLiquidityBatch](contracts.periphery.ChromaticRouter.md#claimliquiditybatch)
- [claimLiquidityCallback](contracts.periphery.ChromaticRouter.md#claimliquiditycallback)
- [claimPosition](contracts.periphery.ChromaticRouter.md#claimposition)
- [closePosition](contracts.periphery.ChromaticRouter.md#closeposition)
- [connect](contracts.periphery.ChromaticRouter.md#connect)
- [deployed](contracts.periphery.ChromaticRouter.md#deployed)
- [emit](contracts.periphery.ChromaticRouter.md#emit)
- [fallback](contracts.periphery.ChromaticRouter.md#fallback)
- [getAccount](contracts.periphery.ChromaticRouter.md#getaccount)
- [getLpReceiptIds](contracts.periphery.ChromaticRouter.md#getlpreceiptids)
- [initialize](contracts.periphery.ChromaticRouter.md#initialize)
- [listenerCount](contracts.periphery.ChromaticRouter.md#listenercount)
- [listeners](contracts.periphery.ChromaticRouter.md#listeners)
- [openPosition](contracts.periphery.ChromaticRouter.md#openposition)
- [owner](contracts.periphery.ChromaticRouter.md#owner)
- [queryFilter](contracts.periphery.ChromaticRouter.md#queryfilter)
- [removeAllListeners](contracts.periphery.ChromaticRouter.md#removealllisteners)
- [removeLiquidity](contracts.periphery.ChromaticRouter.md#removeliquidity)
- [removeLiquidityBatch](contracts.periphery.ChromaticRouter.md#removeliquiditybatch)
- [removeLiquidityCallback](contracts.periphery.ChromaticRouter.md#removeliquiditycallback)
- [renounceOwnership](contracts.periphery.ChromaticRouter.md#renounceownership)
- [transferOwnership](contracts.periphery.ChromaticRouter.md#transferownership)
- [withdrawLiquidity](contracts.periphery.ChromaticRouter.md#withdrawliquidity)
- [withdrawLiquidityBatch](contracts.periphery.ChromaticRouter.md#withdrawliquiditybatch)
- [withdrawLiquidityCallback](contracts.periphery.ChromaticRouter.md#withdrawliquiditycallback)

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
| `addLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`LpReceiptStructOutput`\> |
| `addLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `CallOverrides`) => `Promise`<`LpReceiptStructOutput`[]\> |
| `addLiquidityCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimPosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `closePosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getLpReceiptIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `initialize` | (`_accountFactory`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `openPosition` | (`market`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PositionStructOutput`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `removeLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`LpReceiptStructOutput`\> |
| `removeLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `CallOverrides`) => `Promise`<`LpReceiptStructOutput`[]\> |
| `removeLiquidityCallback` | (`clbToken`: `PromiseOrValue`<`string`\>, `clbTokenId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `renounceOwnership` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:868](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L868)

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
| `addLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `addLiquidityCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimPosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `closePosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLpReceiptIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_accountFactory`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `openPosition` | (`market`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeLiquidityCallback` | (`clbToken`: `PromiseOrValue`<`string`\>, `clbTokenId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:1117](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L1117)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OwnershipTransferred` | (`previousOwner?`: `PromiseOrValue`<`string`\>, `newOwner?`: `PromiseOrValue`<`string`\>) => [`OwnershipTransferredEventFilter`](../modules.md#ownershiptransferredeventfilter) |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: `PromiseOrValue`<`string`\>, `newOwner?`: `PromiseOrValue`<`string`\>) => [`OwnershipTransferredEventFilter`](../modules.md#ownershiptransferredeventfilter) |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:1106](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L1106)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addLiquidityCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimPosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `closePosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getAccount` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getLpReceiptIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `initialize` | (`_accountFactory`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `openPosition` | (`market`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `removeLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeLiquidityCallback` | (`clbToken`: `PromiseOrValue`<`string`\>, `clbTokenId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:390](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L390)

___

### interface

• **interface**: [`ChromaticRouterInterface`](ChromaticRouterInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:369](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L369)

___

### off

• **off**: `OnEvent`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:385](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L385)

___

### on

• **on**: `OnEvent`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:386](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L386)

___

### once

• **once**: `OnEvent`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:387](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L387)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addLiquidityCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimPosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `closePosition` | (`market`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLpReceiptIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_accountFactory`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `openPosition` | (`market`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `owner` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidityCallback` | (`clbToken`: `PromiseOrValue`<`string`\>, `clbTokenId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `renounceOwnership` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:1357](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L1357)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:388](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L388)

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

### addLiquidity

▸ **addLiquidity**(`market`, `feeRate`, `amount`, `recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds liquidity to a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `feeRate` | `PromiseOrValue`<`BigNumberish`\> | The fee rate of the liquidity bin. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount to add as liquidity. |
| `recipient` | `PromiseOrValue`<`string`\> | The recipient address. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:637](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L637)

___

### addLiquidityBatch

▸ **addLiquidityBatch**(`market`, `feeRates`, `amounts`, `recipients`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds liquidity to multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `feeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of fee rates for each liquidity bin. |
| `amounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of amounts to add as liquidity for each bin. |
| `recipients` | `PromiseOrValue`<`string`\>[] | An array of recipient addresses. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:652](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L652)

___

### addLiquidityCallback

▸ **addLiquidityCallback**(`settlementToken`, `vault`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after adding liquidity to the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token used for adding liquidity. |
| `vault` | `PromiseOrValue`<`string`\> | The address of the vault where the liquidity is added. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity addition. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:666](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L666)

___

### attach

▸ **attach**(`addressOrName`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:366](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L366)

___

### claimLiquidity

▸ **claimLiquidity**(`market`, `receiptId`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the LP receipt. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:678](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L678)

___

### claimLiquidityBatch

▸ **claimLiquidityBatch**(`market`, `_receiptIds`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `_receiptIds` | `PromiseOrValue`<`BigNumberish`\>[] | - |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:689](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L689)

___

### claimLiquidityCallback

▸ **claimLiquidityCallback**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after claiming liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity claim receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity claim. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:700](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L700)

___

### claimPosition

▸ **claimPosition**(`market`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims a position from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:711](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L711)

___

### closePosition

▸ **closePosition**(`market`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Closes a position in a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to close. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:722](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L722)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:365](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L365)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Returns

`Promise`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:367](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L367)

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

### getAccount

▸ **getAccount**(`overrides?`): `Promise`<`string`\>

Retrieves the account of the caller.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:731](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L731)

___

### getLpReceiptIds

▸ **getLpReceiptIds**(`market`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves the LP receipt IDs of the caller for the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:737](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L737)

___

### initialize

▸ **initialize**(`_accountFactory`, `_marketFactory`, `overrides?`): `Promise`<`ContractTransaction`\>

Initializes the ChromaticRouter contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_accountFactory` | `PromiseOrValue`<`string`\> | The address of the AccountFactory contract. |
| `_marketFactory` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarketFactory contract. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:747](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L747)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:377](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L377)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:380](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L380)

___

### openPosition

▸ **openPosition**(`market`, `qty`, `leverage`, `takerMargin`, `makerMargin`, `maxAllowableTradingFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Opens a new position in a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `qty` | `PromiseOrValue`<`BigNumberish`\> | The quantity of the position. |
| `leverage` | `PromiseOrValue`<`BigNumberish`\> | The leverage of the position. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount for the taker. |
| `makerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount for the maker. |
| `maxAllowableTradingFee` | `PromiseOrValue`<`BigNumberish`\> | The maximum allowable trading fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:762](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L762)

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

Returns the address of the current owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:775](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L775)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:371](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L371)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:381](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L381)

▸ **removeAllListeners**(`eventName?`): [`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:384](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L384)

___

### removeLiquidity

▸ **removeLiquidity**(`market`, `feeRate`, `clbTokenAmount`, `recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

Removes liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `feeRate` | `PromiseOrValue`<`BigNumberish`\> | The fee rate of the liquidity bin. |
| `clbTokenAmount` | `PromiseOrValue`<`BigNumberish`\> | The amount of CLB tokens to remove as liquidity. |
| `recipient` | `PromiseOrValue`<`string`\> | The recipient address. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:784](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L784)

___

### removeLiquidityBatch

▸ **removeLiquidityBatch**(`market`, `feeRates`, `clbTokenAmounts`, `recipients`, `overrides?`): `Promise`<`ContractTransaction`\>

Removes liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `feeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of fee rates for each liquidity bin. |
| `clbTokenAmounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of CLB token amounts to remove as liquidity for each bin. |
| `recipients` | `PromiseOrValue`<`string`\>[] | An array of recipient addresses. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:799](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L799)

___

### removeLiquidityCallback

▸ **removeLiquidityCallback**(`clbToken`, `clbTokenId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after removing liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clbToken` | `PromiseOrValue`<`string`\> | The address of the Chromatic liquidity token. |
| `clbTokenId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the Chromatic liquidity token to be removed. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity removal. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:813](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L813)

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<`ContractTransaction`\>

Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:823](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L823)

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<`ContractTransaction`\>

Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:830](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L830)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`market`, `receiptId`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws liquidity from a ChromaticMarket contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the LP receipt. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:840](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L840)

___

### withdrawLiquidityBatch

▸ **withdrawLiquidityBatch**(`market`, `_receiptIds`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws liquidity from multiple ChromaticMarket contracts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `_receiptIds` | `PromiseOrValue`<`BigNumberish`\>[] | - |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:851](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L851)

___

### withdrawLiquidityCallback

▸ **withdrawLiquidityCallback**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Handles the callback after withdrawing liquidity from the Chromatic protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity withdrawal receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data associated with the liquidity withdrawal. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:862](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/periphery/ChromaticRouter.ts#L862)
