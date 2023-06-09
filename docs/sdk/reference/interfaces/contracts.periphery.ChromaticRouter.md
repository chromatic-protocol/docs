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
- [calculateCLBTokenMintingBatch](contracts.periphery.ChromaticRouter.md#calculateclbtokenmintingbatch)
- [calculateCLBTokenValueBatch](contracts.periphery.ChromaticRouter.md#calculateclbtokenvaluebatch)
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
- [totalSupplies](contracts.periphery.ChromaticRouter.md#totalsupplies)
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
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
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
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:980](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L980)

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
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
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
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:1266](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L1266)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:1255](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L1255)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `addLiquidityCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `results`: `BigNumber`[]  }\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `results`: `BigNumber`[]  }\> |
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
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `supplies`: `BigNumber`[]  }\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:428](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L428)

___

### interface

• **interface**: [`ChromaticRouterInterface`](ChromaticRouterInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:407](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L407)

___

### off

• **off**: `OnEvent`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:423](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L423)

___

### on

• **on**: `OnEvent`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:424](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L424)

___

### once

• **once**: `OnEvent`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:425](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L425)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `feeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `feeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `recipients`: `PromiseOrValue`<`string`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `addLiquidityCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
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
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferOwnership` | (`newOwner`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `receiptId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidityBatch` | (`market`: `PromiseOrValue`<`string`\>, `_receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidityCallback` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:1543](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L1543)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:426](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L426)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:712](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L712)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:727](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L727)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:741](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L741)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:404](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L404)

___

### calculateCLBTokenMintingBatch

▸ **calculateCLBTokenMintingBatch**(`market`, `tradingFeeRates`, `amounts`, `overrides?`): `Promise`<`BigNumber`[]\>

Calculates the amount of CLB tokens to mint for multiple trading amounts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading fee rates for each liquidity provider. |
| `amounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading amounts for each provider. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:754](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L754)

___

### calculateCLBTokenValueBatch

▸ **calculateCLBTokenValueBatch**(`market`, `tradingFeeRates`, `clbTokenAmounts`, `overrides?`): `Promise`<`BigNumber`[]\>

Calculates the value of CLB tokens for multiple liquidity amounts in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading fee rates for each liquidity provider. |
| `clbTokenAmounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of CLB token amounts for each provider. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:767](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L767)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:779](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L779)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:790](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L790)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:801](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L801)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:812](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L812)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:823](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L823)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:403](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L403)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Returns

`Promise`<[`ChromaticRouter`](contracts.periphery.ChromaticRouter.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:405](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L405)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:832](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L832)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:838](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L838)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:848](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L848)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:415](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L415)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:418](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L418)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:863](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L863)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:876](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L876)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:409](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L409)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:419](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L419)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:422](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L422)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:885](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L885)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:900](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L900)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:914](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L914)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:924](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L924)

___

### totalSupplies

▸ **totalSupplies**(`market`, `tradingFeeRates`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves the total supplies of CLB tokens for multiple trading fee rates in a batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the ChromaticMarket contract. |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading fee rates to retrieve total supplies for. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:933](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L933)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:942](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L942)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:952](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L952)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:963](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L963)

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

[src/gen/contracts/periphery/ChromaticRouter.ts:974](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/ChromaticRouter.ts#L974)
