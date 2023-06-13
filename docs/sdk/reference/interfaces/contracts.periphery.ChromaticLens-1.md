[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [periphery](../modules/contracts.periphery.md) / ChromaticLens

# Interface: ChromaticLens

[contracts](../modules/contracts.md).[periphery](../modules/contracts.periphery.md).ChromaticLens

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticLens`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.periphery.ChromaticLens-1.md#_deployedpromise)
- [\_runningEvents](contracts.periphery.ChromaticLens-1.md#_runningevents)
- [\_wrappedEmits](contracts.periphery.ChromaticLens-1.md#_wrappedemits)
- [address](contracts.periphery.ChromaticLens-1.md#address)
- [callStatic](contracts.periphery.ChromaticLens-1.md#callstatic)
- [deployTransaction](contracts.periphery.ChromaticLens-1.md#deploytransaction)
- [estimateGas](contracts.periphery.ChromaticLens-1.md#estimategas)
- [filters](contracts.periphery.ChromaticLens-1.md#filters)
- [functions](contracts.periphery.ChromaticLens-1.md#functions)
- [interface](contracts.periphery.ChromaticLens-1.md#interface)
- [off](contracts.periphery.ChromaticLens-1.md#off)
- [on](contracts.periphery.ChromaticLens-1.md#on)
- [once](contracts.periphery.ChromaticLens-1.md#once)
- [populateTransaction](contracts.periphery.ChromaticLens-1.md#populatetransaction)
- [provider](contracts.periphery.ChromaticLens-1.md#provider)
- [removeListener](contracts.periphery.ChromaticLens-1.md#removelistener)
- [resolvedAddress](contracts.periphery.ChromaticLens-1.md#resolvedaddress)
- [signer](contracts.periphery.ChromaticLens-1.md#signer)

### Methods

- [\_checkRunningEvents](contracts.periphery.ChromaticLens-1.md#_checkrunningevents)
- [\_deployed](contracts.periphery.ChromaticLens-1.md#_deployed)
- [\_wrapEvent](contracts.periphery.ChromaticLens-1.md#_wrapevent)
- [attach](contracts.periphery.ChromaticLens-1.md#attach)
- [calculateCLBTokenMintingBatch](contracts.periphery.ChromaticLens-1.md#calculateclbtokenmintingbatch)
- [calculateCLBTokenValueBatch](contracts.periphery.ChromaticLens-1.md#calculateclbtokenvaluebatch)
- [connect](contracts.periphery.ChromaticLens-1.md#connect)
- [deployed](contracts.periphery.ChromaticLens-1.md#deployed)
- [emit](contracts.periphery.ChromaticLens-1.md#emit)
- [fallback](contracts.periphery.ChromaticLens-1.md#fallback)
- [liquidityBinValue](contracts.periphery.ChromaticLens-1.md#liquiditybinvalue)
- [liquidityBins](contracts.periphery.ChromaticLens-1.md#liquiditybins)
- [listenerCount](contracts.periphery.ChromaticLens-1.md#listenercount)
- [listeners](contracts.periphery.ChromaticLens-1.md#listeners)
- [lpReceipts](contracts.periphery.ChromaticLens-1.md#lpreceipts)
- [oracleAtVersions](contracts.periphery.ChromaticLens-1.md#oracleatversions)
- [queryFilter](contracts.periphery.ChromaticLens-1.md#queryfilter)
- [removeAllListeners](contracts.periphery.ChromaticLens-1.md#removealllisteners)
- [totalSupplies](contracts.periphery.ChromaticLens-1.md#totalsupplies)

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
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `liquidityBinValue` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`LiquidityBinValueStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinvaluestructoutput)[]\> |
| `liquidityBins` | (`market`: `PromiseOrValue`<`string`\>, `params`: [`LiquidityBinsParamStruct`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinsparamstruct)[], `overrides?`: `CallOverrides`) => `Promise`<[`LiquidityBinStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinstructoutput)[]\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`LpReceiptStructOutput`[]\> |
| `oracleAtVersions` | (`market`: `PromiseOrValue`<`string`\>, `oracleVersions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`OracleVersionStructOutput`[]\> |
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:390](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L390)

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
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidityBinValue` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidityBins` | (`market`: `PromiseOrValue`<`string`\>, `params`: [`LiquidityBinsParamStruct`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinsparamstruct)[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `oracleAtVersions` | (`market`: `PromiseOrValue`<`string`\>, `oracleVersions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:470](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L470)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:468](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L468)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `results`: `BigNumber`[]  }\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `results`: `BigNumber`[]  }\> |
| `liquidityBinValue` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[[`LiquidityBinValueStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinvaluestructoutput)[]] & { `results`: [`LiquidityBinValueStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinvaluestructoutput)[]  }\> |
| `liquidityBins` | (`market`: `PromiseOrValue`<`string`\>, `params`: [`LiquidityBinsParamStruct`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinsparamstruct)[], `overrides?`: `CallOverrides`) => `Promise`<[[`LiquidityBinStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinstructoutput)[]] & { `results`: [`LiquidityBinStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinstructoutput)[]  }\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`LpReceiptStructOutput`[]] & { `result`: `LpReceiptStructOutput`[]  }\> |
| `oracleAtVersions` | (`market`: `PromiseOrValue`<`string`\>, `oracleVersions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`[]] & { `results`: `OracleVersionStructOutput`[]  }\> |
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]] & { `supplies`: `BigNumber`[]  }\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:224](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L224)

___

### interface

• **interface**: `ChromaticLensInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:203](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L203)

___

### off

• **off**: `OnEvent`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:219](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L219)

___

### on

• **on**: `OnEvent`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:220](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L220)

___

### once

• **once**: `OnEvent`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:221](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L221)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `calculateCLBTokenMintingBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `calculateCLBTokenValueBatch` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `clbTokenAmounts`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidityBinValue` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidityBins` | (`market`: `PromiseOrValue`<`string`\>, `params`: [`LiquidityBinsParamStruct`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinsparamstruct)[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `receiptIds`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `oracleAtVersions` | (`market`: `PromiseOrValue`<`string`\>, `oracleVersions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupplies` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRates`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:548](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L548)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:222](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L222)

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

▸ **attach**(`addressOrName`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:200](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L200)

___

### calculateCLBTokenMintingBatch

▸ **calculateCLBTokenMintingBatch**(`market`, `tradingFeeRates`, `amounts`, `overrides?`): `Promise`<`BigNumber`[]\>

Calculates the amount of CLB tokens to be minted for each trading fee rate and specified amount in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading fee rates. |
| `amounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of specified amounts. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:320](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L320)

___

### calculateCLBTokenValueBatch

▸ **calculateCLBTokenValueBatch**(`market`, `tradingFeeRates`, `clbTokenAmounts`, `overrides?`): `Promise`<`BigNumber`[]\>

Calculates the value of CLB tokens for each trading fee rate and CLB token amount in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading fee rates. |
| `clbTokenAmounts` | `PromiseOrValue`<`BigNumberish`\>[] | An array of CLB token amounts. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:333](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L333)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:199](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L199)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Returns

`Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:201](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L201)

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

### liquidityBinValue

▸ **liquidityBinValue**(`market`, `tradingFeeRates`, `overrides?`): `Promise`<[`LiquidityBinValueStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinvaluestructoutput)[]\>

Retrieves the liquidity bin values for the specified trading fee rates in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading fee rates. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`LiquidityBinValueStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinvaluestructoutput)[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:345](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L345)

___

### liquidityBins

▸ **liquidityBins**(`market`, `params`, `overrides?`): `Promise`<[`LiquidityBinStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinstructoutput)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> |
| `params` | [`LiquidityBinsParamStruct`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinsparamstruct)[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`LiquidityBinStructOutput`](../modules/contracts.periphery.ChromaticLens.md#liquiditybinstructoutput)[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:351](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L351)

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

[src/gen/contracts/periphery/ChromaticLens.ts:211](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L211)

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

[src/gen/contracts/periphery/ChromaticLens.ts:214](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L214)

___

### lpReceipts

▸ **lpReceipts**(`market`, `receiptIds`, `overrides?`): `Promise`<`LpReceiptStructOutput`[]\>

Retrieves the LP receipts for the specified receipt IDs in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `receiptIds` | `PromiseOrValue`<`BigNumberish`\>[] | An array of receipt IDs. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`LpReceiptStructOutput`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:362](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L362)

___

### oracleAtVersions

▸ **oracleAtVersions**(`market`, `oracleVersions`, `overrides?`): `Promise`<`OracleVersionStructOutput`[]\>

Retrieves the Oracle versions for the specified oracle versions in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `oracleVersions` | `PromiseOrValue`<`BigNumberish`\>[] | An array of Oracle versions. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`OracleVersionStructOutput`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:373](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L373)

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

[src/gen/contracts/periphery/ChromaticLens.ts:205](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L205)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:215](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L215)

▸ **removeAllListeners**(`eventName?`): [`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:218](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L218)

___

### totalSupplies

▸ **totalSupplies**(`market`, `tradingFeeRates`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves the total supply of CLB tokens for each trading fee rate in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `tradingFeeRates` | `PromiseOrValue`<`BigNumberish`\>[] | An array of trading fee rates. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:384](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/periphery/ChromaticLens.ts#L384)
