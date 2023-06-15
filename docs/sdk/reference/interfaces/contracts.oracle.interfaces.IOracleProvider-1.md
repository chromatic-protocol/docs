[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [oracle](../modules/contracts.oracle.md) / [interfaces](../modules/contracts.oracle.interfaces.md) / IOracleProvider

# Interface: IOracleProvider

[oracle](../modules/contracts.oracle.md).[interfaces](../modules/contracts.oracle.interfaces.md).IOracleProvider

## Hierarchy

- `BaseContract`

  ↳ **`IOracleProvider`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.oracle.interfaces.IOracleProvider-1.md#_deployedpromise)
- [\_runningEvents](contracts.oracle.interfaces.IOracleProvider-1.md#_runningevents)
- [\_wrappedEmits](contracts.oracle.interfaces.IOracleProvider-1.md#_wrappedemits)
- [address](contracts.oracle.interfaces.IOracleProvider-1.md#address)
- [callStatic](contracts.oracle.interfaces.IOracleProvider-1.md#callstatic)
- [deployTransaction](contracts.oracle.interfaces.IOracleProvider-1.md#deploytransaction)
- [estimateGas](contracts.oracle.interfaces.IOracleProvider-1.md#estimategas)
- [filters](contracts.oracle.interfaces.IOracleProvider-1.md#filters)
- [functions](contracts.oracle.interfaces.IOracleProvider-1.md#functions)
- [interface](contracts.oracle.interfaces.IOracleProvider-1.md#interface)
- [off](contracts.oracle.interfaces.IOracleProvider-1.md#off)
- [on](contracts.oracle.interfaces.IOracleProvider-1.md#on)
- [once](contracts.oracle.interfaces.IOracleProvider-1.md#once)
- [populateTransaction](contracts.oracle.interfaces.IOracleProvider-1.md#populatetransaction)
- [provider](contracts.oracle.interfaces.IOracleProvider-1.md#provider)
- [removeListener](contracts.oracle.interfaces.IOracleProvider-1.md#removelistener)
- [resolvedAddress](contracts.oracle.interfaces.IOracleProvider-1.md#resolvedaddress)
- [signer](contracts.oracle.interfaces.IOracleProvider-1.md#signer)

### Methods

- [\_checkRunningEvents](contracts.oracle.interfaces.IOracleProvider-1.md#_checkrunningevents)
- [\_deployed](contracts.oracle.interfaces.IOracleProvider-1.md#_deployed)
- [\_wrapEvent](contracts.oracle.interfaces.IOracleProvider-1.md#_wrapevent)
- [atVersion](contracts.oracle.interfaces.IOracleProvider-1.md#atversion)
- [atVersions](contracts.oracle.interfaces.IOracleProvider-1.md#atversions)
- [attach](contracts.oracle.interfaces.IOracleProvider-1.md#attach)
- [connect](contracts.oracle.interfaces.IOracleProvider-1.md#connect)
- [currentVersion](contracts.oracle.interfaces.IOracleProvider-1.md#currentversion)
- [deployed](contracts.oracle.interfaces.IOracleProvider-1.md#deployed)
- [description](contracts.oracle.interfaces.IOracleProvider-1.md#description)
- [emit](contracts.oracle.interfaces.IOracleProvider-1.md#emit)
- [fallback](contracts.oracle.interfaces.IOracleProvider-1.md#fallback)
- [listenerCount](contracts.oracle.interfaces.IOracleProvider-1.md#listenercount)
- [listeners](contracts.oracle.interfaces.IOracleProvider-1.md#listeners)
- [queryFilter](contracts.oracle.interfaces.IOracleProvider-1.md#queryfilter)
- [removeAllListeners](contracts.oracle.interfaces.IOracleProvider-1.md#removealllisteners)
- [sync](contracts.oracle.interfaces.IOracleProvider-1.md#sync)

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
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)[]\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `sync` | (`overrides?`: `CallOverrides`) => `Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:195](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L195)

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
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:237](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L237)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:235](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L235)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)]\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)[]]\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<[[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)]\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:117](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L117)

___

### interface

• **interface**: [`IOracleProviderInterface`](IOracleProviderInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:96](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L96)

___

### off

• **off**: `OnEvent`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:112](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L112)

___

### on

• **on**: `OnEvent`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:113](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L113)

___

### once

• **once**: `OnEvent`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:114](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L114)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `atVersion` | (`version`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `atVersions` | (`versions`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `currentVersion` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `sync` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:275](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L275)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:115](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L115)

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

### atVersion

▸ **atVersion**(`version`, `overrides?`): `Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

Returns the current oracle version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `PromiseOrValue`<`BigNumberish`\> | The version of which to lookup |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:161](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L161)

___

### atVersions

▸ **atVersions**(`versions`, `overrides?`): `Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)[]\>

Retrieves the Oracle Version instances at the specified versions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `versions` | `PromiseOrValue`<`BigNumberish`\>[] | An array of versions for which to retrieve the Oracle Versions. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)[]\>

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:170](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L170)

___

### attach

▸ **attach**(`addressOrName`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:93](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L93)

___

### connect

▸ **connect**(`signerOrProvider`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:92](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L92)

___

### currentVersion

▸ **currentVersion**(`overrides?`): `Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

Returns the current oracle version

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../modules/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:178](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L178)

___

### deployed

▸ **deployed**(): `Promise`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Returns

`Promise`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:94](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L94)

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

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:185](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L185)

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

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:104](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L104)

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

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:107](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L107)

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

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:98](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L98)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:108](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L108)

▸ **removeAllListeners**(`eventName?`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:111](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L111)

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

[src/gen/contracts/oracle/interfaces/IOracleProvider.ts:191](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L191)
