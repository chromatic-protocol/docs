[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [core](../modules/contracts.core.md) / OracleProvider

# Interface: OracleProvider

[contracts](../modules/contracts.md).[core](../modules/contracts.core.md).OracleProvider

## Hierarchy

- `BaseContract`

  ↳ **`OracleProvider`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.core.OracleProvider.md#_deployedpromise)
- [\_runningEvents](contracts.core.OracleProvider.md#_runningevents)
- [\_wrappedEmits](contracts.core.OracleProvider.md#_wrappedemits)
- [address](contracts.core.OracleProvider.md#address)
- [callStatic](contracts.core.OracleProvider.md#callstatic)
- [deployTransaction](contracts.core.OracleProvider.md#deploytransaction)
- [estimateGas](contracts.core.OracleProvider.md#estimategas)
- [filters](contracts.core.OracleProvider.md#filters)
- [functions](contracts.core.OracleProvider.md#functions)
- [interface](contracts.core.OracleProvider.md#interface)
- [off](contracts.core.OracleProvider.md#off)
- [on](contracts.core.OracleProvider.md#on)
- [once](contracts.core.OracleProvider.md#once)
- [populateTransaction](contracts.core.OracleProvider.md#populatetransaction)
- [provider](contracts.core.OracleProvider.md#provider)
- [removeListener](contracts.core.OracleProvider.md#removelistener)
- [resolvedAddress](contracts.core.OracleProvider.md#resolvedaddress)
- [signer](contracts.core.OracleProvider.md#signer)

### Methods

- [\_checkRunningEvents](contracts.core.OracleProvider.md#_checkrunningevents)
- [\_deployed](contracts.core.OracleProvider.md#_deployed)
- [\_wrapEvent](contracts.core.OracleProvider.md#_wrapevent)
- [aggregator](contracts.core.OracleProvider.md#aggregator)
- [atVersion](contracts.core.OracleProvider.md#atversion)
- [atVersions](contracts.core.OracleProvider.md#atversions)
- [attach](contracts.core.OracleProvider.md#attach)
- [connect](contracts.core.OracleProvider.md#connect)
- [currentVersion](contracts.core.OracleProvider.md#currentversion)
- [deployed](contracts.core.OracleProvider.md#deployed)
- [description](contracts.core.OracleProvider.md#description)
- [emit](contracts.core.OracleProvider.md#emit)
- [fallback](contracts.core.OracleProvider.md#fallback)
- [listenerCount](contracts.core.OracleProvider.md#listenercount)
- [listeners](contracts.core.OracleProvider.md#listeners)
- [queryFilter](contracts.core.OracleProvider.md#queryfilter)
- [removeAllListeners](contracts.core.OracleProvider.md#removealllisteners)
- [sync](contracts.core.OracleProvider.md#sync)

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
| `aggregator` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)[]\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `sync` | (`overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:218](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L218)

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
| `aggregator` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:262](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L262)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:260](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L260)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregator` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)] & { `oracleVersion`: [`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)  }\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)[]] & { `oracleVersions`: [`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)[]  }\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<[[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)] & { `oracleVersion`: [`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)  }\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:124](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L124)

___

### interface

• **interface**: [`OracleProviderInterface`](OracleProviderInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:103](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L103)

___

### off

• **off**: `OnEvent`<[`OracleProvider`](contracts.core.OracleProvider.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:119](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L119)

___

### on

• **on**: `OnEvent`<[`OracleProvider`](contracts.core.OracleProvider.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:120](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L120)

___

### once

• **once**: `OnEvent`<[`OracleProvider`](contracts.core.OracleProvider.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:121](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L121)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aggregator` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:302](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L302)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`OracleProvider`](contracts.core.OracleProvider.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:122](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L122)

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

### aggregator

▸ **aggregator**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:178](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L178)

___

### atVersion

▸ **atVersion**(`version`, `overrides?`): `Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)\>

Returns the current oracle version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `PromiseOrValue`<`BigNumberish`\> | The version of which to lookup |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)\>

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:184](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L184)

___

### atVersions

▸ **atVersions**(`versions`, `overrides?`): `Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)[]\>

Retrieves the Oracle Version instances at the specified versions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `versions` | `PromiseOrValue`<`BigNumberish`\>[] | An array of versions for which to retrieve the Oracle Versions. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)[]\>

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:193](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L193)

___

### attach

▸ **attach**(`addressOrName`): [`OracleProvider`](contracts.core.OracleProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`OracleProvider`](contracts.core.OracleProvider.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:100](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L100)

___

### connect

▸ **connect**(`signerOrProvider`): [`OracleProvider`](contracts.core.OracleProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`OracleProvider`](contracts.core.OracleProvider.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:99](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L99)

___

### currentVersion

▸ **currentVersion**(`overrides?`): `Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)\>

Returns the current oracle version

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../modules/IOracleProvider.md#oracleversionstructoutput)\>

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:201](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L201)

___

### deployed

▸ **deployed**(): `Promise`<[`OracleProvider`](contracts.core.OracleProvider.md)\>

#### Returns

`Promise`<[`OracleProvider`](contracts.core.OracleProvider.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:101](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L101)

___

### description

▸ **description**(`overrides?`): `Promise`<`string`\>

Retrieves the description of the Oracle Provider.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:208](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L208)

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

[src/gen/contracts/core/OracleProvider.ts:111](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L111)

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

[src/gen/contracts/core/OracleProvider.ts:114](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L114)

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

[src/gen/contracts/core/OracleProvider.ts:105](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L105)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`OracleProvider`](contracts.core.OracleProvider.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`OracleProvider`](contracts.core.OracleProvider.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:115](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L115)

▸ **removeAllListeners**(`eventName?`): [`OracleProvider`](contracts.core.OracleProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`OracleProvider`](contracts.core.OracleProvider.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:118](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L118)

___

### sync

▸ **sync**(`overrides?`): `Promise`<`ContractTransaction`\>

`sync` is expected to be called soon after a phase update occurs in the underlying proxy.      Phase updates should be detected using off-chain mechanism and should trigger a `sync` call      This is feasible in the short term due to how infrequent phase updates are, but phase update      and roundCount detection should eventually be implemented at the contract level.      Reverts if there is more than 1 phase to update in a single sync because we currently cannot      determine the startingRoundId for the intermediary phase.
Checks for a new price and updates the internal phase annotation state accordingly

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/OracleProvider.ts:214](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/core/OracleProvider.ts#L214)
