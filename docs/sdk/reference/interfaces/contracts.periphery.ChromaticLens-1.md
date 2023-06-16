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
- [claimableLiquidity](contracts.periphery.ChromaticLens-1.md#claimableliquidity)
- [clbBalanceOf](contracts.periphery.ChromaticLens-1.md#clbbalanceof)
- [connect](contracts.periphery.ChromaticLens-1.md#connect)
- [deployed](contracts.periphery.ChromaticLens-1.md#deployed)
- [emit](contracts.periphery.ChromaticLens-1.md#emit)
- [fallback](contracts.periphery.ChromaticLens-1.md#fallback)
- [liquidityBinStatuses](contracts.periphery.ChromaticLens-1.md#liquiditybinstatuses)
- [listenerCount](contracts.periphery.ChromaticLens-1.md#listenercount)
- [listeners](contracts.periphery.ChromaticLens-1.md#listeners)
- [lpReceipts](contracts.periphery.ChromaticLens-1.md#lpreceipts)
- [multicall](contracts.periphery.ChromaticLens-1.md#multicall)
- [oracleVersion](contracts.periphery.ChromaticLens-1.md#oracleversion)
- [queryFilter](contracts.periphery.ChromaticLens-1.md#queryfilter)
- [removeAllListeners](contracts.periphery.ChromaticLens-1.md#removealllisteners)

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
| `claimableLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `_oracleVersion`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`ClaimableLiquidityStructOutput`\> |
| `clbBalanceOf` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`CLBBalanceStructOutput`](../modules/contracts.periphery.ChromaticLens.md#clbbalancestructoutput)[]\> |
| `liquidityBinStatuses` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`LiquidityBinStatusStructOutput`[]\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`LpReceiptStructOutput`[]\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `oracleVersion` | (`market`: `PromiseOrValue`<`string`\>, `version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`OracleVersionStructOutput`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:354](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L354)

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
| `claimableLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `_oracleVersion`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `clbBalanceOf` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `liquidityBinStatuses` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `oracleVersion` | (`market`: `PromiseOrValue`<`string`\>, `version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:421](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L421)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:419](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L419)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimableLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `_oracleVersion`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`ClaimableLiquidityStructOutput`]\> |
| `clbBalanceOf` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[[`CLBBalanceStructOutput`](../modules/contracts.periphery.ChromaticLens.md#clbbalancestructoutput)[]]\> |
| `liquidityBinStatuses` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`LiquidityBinStatusStructOutput`[]]\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`LpReceiptStructOutput`[]] & { `result`: `LpReceiptStructOutput`[]  }\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `oracleVersion` | (`market`: `PromiseOrValue`<`string`\>, `version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:226](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L226)

___

### interface

• **interface**: `ChromaticLensInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:205](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L205)

___

### off

• **off**: `OnEvent`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:221](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L221)

___

### on

• **on**: `OnEvent`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:222](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L222)

___

### once

• **once**: `OnEvent`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:223](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L223)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `claimableLiquidity` | (`market`: `PromiseOrValue`<`string`\>, `tradingFeeRate`: `PromiseOrValue`<`BigNumberish`\>, `_oracleVersion`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `clbBalanceOf` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `liquidityBinStatuses` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `lpReceipts` | (`market`: `PromiseOrValue`<`string`\>, `owner`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `multicall` | (`data`: `PromiseOrValue`<`BytesLike`\>[], `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `oracleVersion` | (`market`: `PromiseOrValue`<`string`\>, `version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:486](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L486)

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

[src/gen/contracts/periphery/ChromaticLens.ts:224](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L224)

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

[src/gen/contracts/periphery/ChromaticLens.ts:202](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L202)

___

### claimableLiquidity

▸ **claimableLiquidity**(`market`, `tradingFeeRate`, `_oracleVersion`, `overrides?`): `Promise`<`ClaimableLiquidityStructOutput`\>

Retrieves the claimable liquidity information for a specific trading fee rate and oracle version from the given Chromatic Market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The Chromatic Market from which to retrieve the claimable liquidity information. |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> | The trading fee rate for which to retrieve the claimable liquidity. |
| `_oracleVersion` | `PromiseOrValue`<`BigNumberish`\> | The oracle version for which to retrieve the claimable liquidity. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`ClaimableLiquidityStructOutput`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:297](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L297)

___

### clbBalanceOf

▸ **clbBalanceOf**(`market`, `owner`, `overrides?`): `Promise`<[`CLBBalanceStructOutput`](../modules/contracts.periphery.ChromaticLens.md#clbbalancestructoutput)[]\>

Retrieves the CLB token balances for the specified owner in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `owner` | `PromiseOrValue`<`string`\> | The address of the CLB token owner. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`CLBBalanceStructOutput`](../modules/contracts.periphery.ChromaticLens.md#clbbalancestructoutput)[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:309](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L309)

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

[src/gen/contracts/periphery/ChromaticLens.ts:201](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L201)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Returns

`Promise`<[`ChromaticLens`](contracts.periphery.ChromaticLens-1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:203](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L203)

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

### liquidityBinStatuses

▸ **liquidityBinStatuses**(`market`, `overrides?`): `Promise`<`LiquidityBinStatusStructOutput`[]\>

Retrieves the liquidity bin statuses for the specified Chromatic Market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The Chromatic Market contract for which liquidity bin statuses are retrieved. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`LiquidityBinStatusStructOutput`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:319](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L319)

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

[src/gen/contracts/periphery/ChromaticLens.ts:213](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L213)

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

[src/gen/contracts/periphery/ChromaticLens.ts:216](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L216)

___

### lpReceipts

▸ **lpReceipts**(`market`, `owner`, `overrides?`): `Promise`<`LpReceiptStructOutput`[]\>

Retrieves the LP receipts for the specified owner in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `owner` | `PromiseOrValue`<`string`\> | The address of the LP token owner. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`LpReceiptStructOutput`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:329](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L329)

___

### multicall

▸ **multicall**(`data`, `overrides?`): `Promise`<`ContractTransaction`\>

Receives and executes a batch of function calls on this contract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PromiseOrValue`<`BytesLike`\>[] |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:338](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L338)

___

### oracleVersion

▸ **oracleVersion**(`market`, `version`, `overrides?`): `Promise`<`OracleVersionStructOutput`\>

Retrieves the OracleVersion for the specified oracle version in the given Chromatic market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the Chromatic market contract. |
| `version` | `PromiseOrValue`<`BigNumberish`\> | An oracle versions. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`OracleVersionStructOutput`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:348](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L348)

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

[src/gen/contracts/periphery/ChromaticLens.ts:207](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L207)

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

[src/gen/contracts/periphery/ChromaticLens.ts:217](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L217)

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

[src/gen/contracts/periphery/ChromaticLens.ts:220](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/periphery/ChromaticLens.ts#L220)
