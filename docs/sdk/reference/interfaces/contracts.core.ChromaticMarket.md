[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [core](../modules/contracts.core.md) / ChromaticMarket

# Interface: ChromaticMarket

[contracts](../modules/contracts.md).[core](../modules/contracts.core.md).ChromaticMarket

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticMarket`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.core.ChromaticMarket.md#_deployedpromise)
- [\_runningEvents](contracts.core.ChromaticMarket.md#_runningevents)
- [\_wrappedEmits](contracts.core.ChromaticMarket.md#_wrappedemits)
- [address](contracts.core.ChromaticMarket.md#address)
- [callStatic](contracts.core.ChromaticMarket.md#callstatic)
- [deployTransaction](contracts.core.ChromaticMarket.md#deploytransaction)
- [estimateGas](contracts.core.ChromaticMarket.md#estimategas)
- [filters](contracts.core.ChromaticMarket.md#filters)
- [functions](contracts.core.ChromaticMarket.md#functions)
- [interface](contracts.core.ChromaticMarket.md#interface)
- [off](contracts.core.ChromaticMarket.md#off)
- [on](contracts.core.ChromaticMarket.md#on)
- [once](contracts.core.ChromaticMarket.md#once)
- [populateTransaction](contracts.core.ChromaticMarket.md#populatetransaction)
- [provider](contracts.core.ChromaticMarket.md#provider)
- [removeListener](contracts.core.ChromaticMarket.md#removelistener)
- [resolvedAddress](contracts.core.ChromaticMarket.md#resolvedaddress)
- [signer](contracts.core.ChromaticMarket.md#signer)

### Methods

- [\_checkRunningEvents](contracts.core.ChromaticMarket.md#_checkrunningevents)
- [\_deployed](contracts.core.ChromaticMarket.md#_deployed)
- [\_wrapEvent](contracts.core.ChromaticMarket.md#_wrapevent)
- [addLiquidity](contracts.core.ChromaticMarket.md#addliquidity)
- [attach](contracts.core.ChromaticMarket.md#attach)
- [calculateCLBTokenMinting](contracts.core.ChromaticMarket.md#calculateclbtokenminting)
- [calculateCLBTokenValue](contracts.core.ChromaticMarket.md#calculateclbtokenvalue)
- [checkClaimPosition](contracts.core.ChromaticMarket.md#checkclaimposition)
- [checkLiquidation](contracts.core.ChromaticMarket.md#checkliquidation)
- [claimLiquidity](contracts.core.ChromaticMarket.md#claimliquidity)
- [claimPosition(uint256,address,bytes)](contracts.core.ChromaticMarket.md#claimposition(uint256,address,bytes))
- [claimPosition(uint256,address,uint256)](contracts.core.ChromaticMarket.md#claimposition(uint256,address,uint256))
- [clbToken](contracts.core.ChromaticMarket.md#clbtoken)
- [closePosition](contracts.core.ChromaticMarket.md#closeposition)
- [connect](contracts.core.ChromaticMarket.md#connect)
- [deployed](contracts.core.ChromaticMarket.md#deployed)
- [distributeEarningToBins](contracts.core.ChromaticMarket.md#distributeearningtobins)
- [emit](contracts.core.ChromaticMarket.md#emit)
- [factory](contracts.core.ChromaticMarket.md#factory)
- [fallback](contracts.core.ChromaticMarket.md#fallback)
- [getBinFreeLiquidities](contracts.core.ChromaticMarket.md#getbinfreeliquidities)
- [getBinLiquidities](contracts.core.ChromaticMarket.md#getbinliquidities)
- [getPositions](contracts.core.ChromaticMarket.md#getpositions)
- [getProtocolFee](contracts.core.ChromaticMarket.md#getprotocolfee)
- [keeperFeePayer](contracts.core.ChromaticMarket.md#keeperfeepayer)
- [liquidate](contracts.core.ChromaticMarket.md#liquidate)
- [liquidator](contracts.core.ChromaticMarket.md#liquidator)
- [listenerCount](contracts.core.ChromaticMarket.md#listenercount)
- [listeners](contracts.core.ChromaticMarket.md#listeners)
- [onERC1155BatchReceived](contracts.core.ChromaticMarket.md#onerc1155batchreceived)
- [onERC1155Received](contracts.core.ChromaticMarket.md#onerc1155received)
- [openPosition](contracts.core.ChromaticMarket.md#openposition)
- [oracleProvider](contracts.core.ChromaticMarket.md#oracleprovider)
- [queryFilter](contracts.core.ChromaticMarket.md#queryfilter)
- [removeAllListeners](contracts.core.ChromaticMarket.md#removealllisteners)
- [removeLiquidity](contracts.core.ChromaticMarket.md#removeliquidity)
- [settle](contracts.core.ChromaticMarket.md#settle)
- [settlementToken](contracts.core.ChromaticMarket.md#settlementtoken)
- [supportsInterface](contracts.core.ChromaticMarket.md#supportsinterface)
- [vault](contracts.core.ChromaticMarket.md#vault)
- [withdrawLiquidity](contracts.core.ChromaticMarket.md#withdrawliquidity)

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
| `addLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`LpReceiptStructOutput`](../modules.md#lpreceiptstructoutput)\> |
| `calculateCLBTokenMinting` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCLBTokenValue` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `checkClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `checkLiquidation` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `claimLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimPosition(uint256,address,bytes)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimPosition(uint256,address,uint256)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `clbToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `closePosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `distributeEarningToBins` | (`earning`: `PromiseOrValue`<`BigNumberish`\>, `marketBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getBinFreeLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `getBinLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `getPositions` | (`positionIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`PositionStructOutput`](../modules.md#positionstructoutput)[]\> |
| `getProtocolFee` | (`margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `liquidate` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `onERC1155BatchReceived` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `values`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `onERC1155Received` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `openPosition` | (`qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`PositionStructOutput`](../modules.md#positionstructoutput)\> |
| `oracleProvider` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `removeLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`LpReceiptStructOutput`](../modules.md#lpreceiptstructoutput)\> |
| `settle` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `settlementToken` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `supportsInterface` | (`interfaceID`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `withdrawLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1095](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1095)

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
| `addLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `calculateCLBTokenMinting` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCLBTokenValue` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `checkClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `checkLiquidation` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `claimLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimPosition(uint256,address,bytes)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimPosition(uint256,address,uint256)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `clbToken` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `closePosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `distributeEarningToBins` | (`earning`: `PromiseOrValue`<`BigNumberish`\>, `marketBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getBinFreeLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getBinLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getPositions` | (`positionIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getProtocolFee` | (`margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidate` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `onERC1155BatchReceived` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `values`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `onERC1155Received` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `openPosition` | (`qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `oracleProvider` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `removeLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `settle` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `settlementToken` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceID`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `withdrawLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1452](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1452)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AddLiquidity` | (`recipient?`: `PromiseOrValue`<`string`\>, `receipt?`: ``null``) => [`AddLiquidityEventFilter`](../modules.md#addliquidityeventfilter) |
| `AddLiquidity(address,tuple)` | (`recipient?`: `PromiseOrValue`<`string`\>, `receipt?`: ``null``) => [`AddLiquidityEventFilter`](../modules.md#addliquidityeventfilter) |
| `ClaimLiquidity` | (`recipient?`: `PromiseOrValue`<`string`\>, `clbTokenAmount?`: `PromiseOrValue`<`BigNumberish`\>, `receipt?`: ``null``) => [`ClaimLiquidityEventFilter`](../modules.md#claimliquidityeventfilter) |
| `ClaimLiquidity(address,uint256,tuple)` | (`recipient?`: `PromiseOrValue`<`string`\>, `clbTokenAmount?`: `PromiseOrValue`<`BigNumberish`\>, `receipt?`: ``null``) => [`ClaimLiquidityEventFilter`](../modules.md#claimliquidityeventfilter) |
| `ClaimPosition` | (`account?`: `PromiseOrValue`<`string`\>, `pnl?`: `PromiseOrValue`<`BigNumberish`\>, `interest?`: `PromiseOrValue`<`BigNumberish`\>, `position?`: ``null``) => [`ClaimPositionEventFilter`](../modules.md#claimpositioneventfilter) |
| `ClaimPosition(address,int256,uint256,tuple)` | (`account?`: `PromiseOrValue`<`string`\>, `pnl?`: `PromiseOrValue`<`BigNumberish`\>, `interest?`: `PromiseOrValue`<`BigNumberish`\>, `position?`: ``null``) => [`ClaimPositionEventFilter`](../modules.md#claimpositioneventfilter) |
| `ClosePosition` | (`account?`: `PromiseOrValue`<`string`\>, `position?`: ``null``) => [`ClosePositionEventFilter`](../modules.md#closepositioneventfilter) |
| `ClosePosition(address,tuple)` | (`account?`: `PromiseOrValue`<`string`\>, `position?`: ``null``) => [`ClosePositionEventFilter`](../modules.md#closepositioneventfilter) |
| `Liquidate` | (`account?`: `PromiseOrValue`<`string`\>, `usedKeeperFee?`: `PromiseOrValue`<`BigNumberish`\>, `position?`: ``null``) => [`LiquidateEventFilter`](../modules.md#liquidateeventfilter) |
| `Liquidate(address,uint256,tuple)` | (`account?`: `PromiseOrValue`<`string`\>, `usedKeeperFee?`: `PromiseOrValue`<`BigNumberish`\>, `position?`: ``null``) => [`LiquidateEventFilter`](../modules.md#liquidateeventfilter) |
| `OpenPosition` | (`account?`: `PromiseOrValue`<`string`\>, `position?`: ``null``) => [`OpenPositionEventFilter`](../modules.md#openpositioneventfilter) |
| `OpenPosition(address,tuple)` | (`account?`: `PromiseOrValue`<`string`\>, `position?`: ``null``) => [`OpenPositionEventFilter`](../modules.md#openpositioneventfilter) |
| `RemoveLiquidity` | (`recipient?`: `PromiseOrValue`<`string`\>, `receipt?`: ``null``) => [`RemoveLiquidityEventFilter`](../modules.md#removeliquidityeventfilter) |
| `RemoveLiquidity(address,tuple)` | (`recipient?`: `PromiseOrValue`<`string`\>, `receipt?`: ``null``) => [`RemoveLiquidityEventFilter`](../modules.md#removeliquidityeventfilter) |
| `TransferProtocolFee` | (`positionId?`: `PromiseOrValue`<`BigNumberish`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => [`TransferProtocolFeeEventFilter`](../modules.md#transferprotocolfeeeventfilter) |
| `TransferProtocolFee(uint256,uint256)` | (`positionId?`: `PromiseOrValue`<`BigNumberish`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>) => [`TransferProtocolFeeEventFilter`](../modules.md#transferprotocolfeeeventfilter) |
| `WithdrawLiquidity` | (`recipient?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>, `burnedCLBTokenAmount?`: `PromiseOrValue`<`BigNumberish`\>, `receipt?`: ``null``) => [`WithdrawLiquidityEventFilter`](../modules.md#withdrawliquidityeventfilter) |
| `WithdrawLiquidity(address,uint256,uint256,tuple)` | (`recipient?`: `PromiseOrValue`<`string`\>, `amount?`: `PromiseOrValue`<`BigNumberish`\>, `burnedCLBTokenAmount?`: `PromiseOrValue`<`BigNumberish`\>, `receipt?`: ``null``) => [`WithdrawLiquidityEventFilter`](../modules.md#withdrawliquidityeventfilter) |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1357](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1357)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `calculateCLBTokenMinting` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `calculateCLBTokenValue` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `checkClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `checkLiquidation` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`] & { `_liquidate`: `boolean`  }\> |
| `claimLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimPosition(uint256,address,bytes)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimPosition(uint256,address,uint256)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `clbToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `closePosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `distributeEarningToBins` | (`earning`: `PromiseOrValue`<`BigNumberish`\>, `marketBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getBinFreeLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `amounts`: `BigNumber`[]  }\> |
| `getBinLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `amounts`: `BigNumber`[]  }\> |
| `getPositions` | (`positionIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[[`PositionStructOutput`](../modules.md#positionstructoutput)[]] & { `_positions`: [`PositionStructOutput`](../modules.md#positionstructoutput)[]  }\> |
| `getProtocolFee` | (`margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `liquidate` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `onERC1155BatchReceived` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `values`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `onERC1155Received` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `openPosition` | (`qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `oracleProvider` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `removeLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `settle` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `settlementToken` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `supportsInterface` | (`interfaceID`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `withdrawLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:567](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L567)

___

### interface

• **interface**: [`ChromaticMarketInterface`](ChromaticMarketInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:546](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L546)

___

### off

• **off**: `OnEvent`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:562](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L562)

___

### on

• **on**: `OnEvent`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:563](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L563)

___

### once

• **once**: `OnEvent`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:564](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L564)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `calculateCLBTokenMinting` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateCLBTokenValue` | (`tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `clbTokenAmount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `checkClaimPosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `checkLiquidation` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimPosition(uint256,address,bytes)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `recipient`: `PromiseOrValue`<`string`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimPosition(uint256,address,uint256)` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `clbToken` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `closePosition` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `distributeEarningToBins` | (`earning`: `PromiseOrValue`<`BigNumberish`\>, `marketBalance`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `factory` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getBinFreeLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getBinLiquidities` | (`tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getPositions` | (`positionIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getProtocolFee` | (`margin`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `keeperFeePayer` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidate` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `keeper`: `PromiseOrValue`<`string`\>, `keeperFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `liquidator` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `onERC1155BatchReceived` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `values`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `onERC1155Received` | (`operator`: `PromiseOrValue`<`string`\>, `from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `value`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `openPosition` | (`qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `oracleProvider` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `removeLiquidity` | (`recipient`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `settle` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `settlementToken` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceID`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `vault` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `withdrawLiquidity` | (`receiptId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1716](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1716)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:565](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L565)

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

▸ **addLiquidity**(`recipient`, `tradingFeeRate`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds liquidity to the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `PromiseOrValue`<`string`\> | The address to receive the liquidity tokens. |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for the liquidity. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:839](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L839)

___

### attach

▸ **attach**(`addressOrName`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:543](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L543)

___

### calculateCLBTokenMinting

▸ **calculateCLBTokenMinting**(`tradingFeeRate`, `amount`, `overrides?`): `Promise`<`BigNumber`\>

Calculates the amount of CLB tokens to mint for the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of liquidity. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:851](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L851)

___

### calculateCLBTokenValue

▸ **calculateCLBTokenValue**(`tradingFeeRate`, `clbTokenAmount`, `overrides?`): `Promise`<`BigNumber`\>

Calculates the value of CLB tokens for the given parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate. |
| `clbTokenAmount` | `PromiseOrValue`<`BigNumberish`\> | The amount of CLB tokens. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:862](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L862)

___

### checkClaimPosition

▸ **checkClaimPosition**(`positionId`, `overrides?`): `Promise`<`boolean`\>

Checks if a position is eligible for claim.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:872](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L872)

___

### checkLiquidation

▸ **checkLiquidation**(`positionId`, `overrides?`): `Promise`<`boolean`\>

Checks if a position is eligible for liquidation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:881](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L881)

___

### claimLiquidity

▸ **claimLiquidity**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims liquidity from a liquidity receipt.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:891](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L891)

___

### claimPosition(uint256,address,bytes)

▸ **claimPosition(uint256,address,bytes)**(`positionId`, `recipient`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims a closed position in the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `recipient` | `PromiseOrValue`<`string`\> | The address of the recipient of the claimed position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the claim callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:903](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L903)

___

### claimPosition(uint256,address,uint256)

▸ **claimPosition(uint256,address,uint256)**(`positionId`, `keeper`, `keeperFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims a closed position on behalf of a keeper.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `keeper` | `PromiseOrValue`<`string`\> | The address of the keeper claiming the position. |
| `keeperFee` | `PromiseOrValue`<`BigNumberish`\> | The native token amount of the keeper's fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:916](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L916)

___

### clbToken

▸ **clbToken**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:923](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L923)

___

### closePosition

▸ **closePosition**(`positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Closes a position in the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to close. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:929](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L929)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:542](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L542)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Returns

`Promise`<[`ChromaticMarket`](contracts.core.ChromaticMarket.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:544](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L544)

___

### distributeEarningToBins

▸ **distributeEarningToBins**(`earning`, `marketBalance`, `overrides?`): `Promise`<`ContractTransaction`\>

Distributes earning to the liquidity bins.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `earning` | `PromiseOrValue`<`BigNumberish`\> | The amount of earning to distribute. |
| `marketBalance` | `PromiseOrValue`<`BigNumberish`\> | The balance of the market. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:939](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L939)

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

### factory

▸ **factory**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:945](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L945)

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

### getBinFreeLiquidities

▸ **getBinFreeLiquidities**(`tradingFeeRates`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves the bin free liquidities for the given trading fee rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | The trading fee rates to retrieve bin free liquidities for. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:951](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L951)

___

### getBinLiquidities

▸ **getBinLiquidities**(`tradingFeeRates`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves the bin liquidities for the given trading fee rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | The trading fee rates to retrieve bin liquidities for. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:960](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L960)

___

### getPositions

▸ **getPositions**(`positionIds`, `overrides?`): `Promise`<[`PositionStructOutput`](../modules.md#positionstructoutput)[]\>

Retrieves multiple positions by their IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionIds` | `PromiseOrValue`<`BigNumberish`\>[] | The IDs of the positions to retrieve. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`PositionStructOutput`](../modules.md#positionstructoutput)[]\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:969](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L969)

___

### getProtocolFee

▸ **getProtocolFee**(`margin`, `overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:974](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L974)

___

### keeperFeePayer

▸ **keeperFeePayer**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:979](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L979)

___

### liquidate

▸ **liquidate**(`positionId`, `keeper`, `keeperFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Liquidates a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to liquidate. |
| `keeper` | `PromiseOrValue`<`string`\> | The address of the keeper performing the liquidation. |
| `keeperFee` | `PromiseOrValue`<`BigNumberish`\> | The native token amount of the keeper's fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:987](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L987)

___

### liquidator

▸ **liquidator**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:994](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L994)

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

[src/gen/contracts/core/ChromaticMarket.ts:554](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L554)

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

[src/gen/contracts/core/ChromaticMarket.ts:557](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L557)

___

### onERC1155BatchReceived

▸ **onERC1155BatchReceived**(`operator`, `from`, `ids`, `values`, `data`, `overrides?`): `Promise`<`string`\>

Handles the receipt of a multiple ERC1155 token types. This function is called at the end of a `safeBatchTransferFrom` after the balances have been updated. NOTE: To accept the transfer(s), this must return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` (i.e. 0xbc197c81, or its own function selector).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operator` | `PromiseOrValue`<`string`\> | The address which initiated the batch transfer (i.e. msg.sender) |
| `from` | `PromiseOrValue`<`string`\> | The address which previously owned the token |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] | An array containing ids of each token being transferred (order and length must match values array) |
| `values` | `PromiseOrValue`<`BigNumberish`\>[] | An array containing amounts of each token being transferred (order and length must match ids array) |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data with no specified format |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1004](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1004)

___

### onERC1155Received

▸ **onERC1155Received**(`operator`, `from`, `id`, `value`, `data`, `overrides?`): `Promise`<`string`\>

Handles the receipt of a single ERC1155 token type. This function is called at the end of a `safeTransferFrom` after the balance has been updated. NOTE: To accept the transfer, this must return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` (i.e. 0xf23a6e61, or its own function selector).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `operator` | `PromiseOrValue`<`string`\> | The address which initiated the transfer (i.e. msg.sender) |
| `from` | `PromiseOrValue`<`string`\> | The address which previously owned the token |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The ID of the token being transferred |
| `value` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens being transferred |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data with no specified format |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1021](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1021)

___

### openPosition

▸ **openPosition**(`qty`, `leverage`, `takerMargin`, `makerMargin`, `maxAllowableTradingFee`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Opens a new position in the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qty` | `PromiseOrValue`<`BigNumberish`\> | The quantity of the position. |
| `leverage` | `PromiseOrValue`<`BigNumberish`\> | The leverage of the position in basis points. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the taker. |
| `makerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin amount provided by the maker. |
| `maxAllowableTradingFee` | `PromiseOrValue`<`BigNumberish`\> | The maximum allowable trading fee for the position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the position callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1039](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1039)

___

### oracleProvider

▸ **oracleProvider**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1049](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1049)

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

[src/gen/contracts/core/ChromaticMarket.ts:548](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L548)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:558](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L558)

▸ **removeAllListeners**(`eventName?`): [`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticMarket`](contracts.core.ChromaticMarket.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:561](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L561)

___

### removeLiquidity

▸ **removeLiquidity**(`recipient`, `tradingFeeRate`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Removes liquidity from the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipient` | `PromiseOrValue`<`string`\> | The address to receive the removed liquidity. |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for the liquidity. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1057](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1057)

___

### settle

▸ **settle**(`overrides?`): `Promise`<`ContractTransaction`\>

This function settles the market by synchronizing the oracle version      and calling the settle function of the liquidity pool.
Executes the settlement process for the Chromatic market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1068](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1068)

___

### settlementToken

▸ **settlementToken**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1072](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1072)

___

### supportsInterface

▸ **supportsInterface**(`interfaceID`, `overrides?`): `Promise`<`boolean`\>

Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceID` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1077](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1077)

___

### vault

▸ **vault**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1082](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1082)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`receiptId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws liquidity from a liquidity receipt.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the liquidity receipt. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data for the liquidity callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:1089](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L1089)
