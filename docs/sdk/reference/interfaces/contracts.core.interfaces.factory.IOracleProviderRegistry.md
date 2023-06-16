[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [core](../modules/contracts.core.md) / [interfaces](../modules/contracts.core.interfaces.md) / [factory](../modules/contracts.core.interfaces.factory.md) / IOracleProviderRegistry

# Interface: IOracleProviderRegistry

[interfaces](../modules/contracts.core.interfaces.md).[factory](../modules/contracts.core.interfaces.factory.md).IOracleProviderRegistry

## Hierarchy

- `BaseContract`

  ↳ **`IOracleProviderRegistry`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.core.interfaces.factory.IOracleProviderRegistry.md#_deployedpromise)
- [\_runningEvents](contracts.core.interfaces.factory.IOracleProviderRegistry.md#_runningevents)
- [\_wrappedEmits](contracts.core.interfaces.factory.IOracleProviderRegistry.md#_wrappedemits)
- [address](contracts.core.interfaces.factory.IOracleProviderRegistry.md#address)
- [callStatic](contracts.core.interfaces.factory.IOracleProviderRegistry.md#callstatic)
- [deployTransaction](contracts.core.interfaces.factory.IOracleProviderRegistry.md#deploytransaction)
- [estimateGas](contracts.core.interfaces.factory.IOracleProviderRegistry.md#estimategas)
- [filters](contracts.core.interfaces.factory.IOracleProviderRegistry.md#filters)
- [functions](contracts.core.interfaces.factory.IOracleProviderRegistry.md#functions)
- [interface](contracts.core.interfaces.factory.IOracleProviderRegistry.md#interface)
- [off](contracts.core.interfaces.factory.IOracleProviderRegistry.md#off)
- [on](contracts.core.interfaces.factory.IOracleProviderRegistry.md#on)
- [once](contracts.core.interfaces.factory.IOracleProviderRegistry.md#once)
- [populateTransaction](contracts.core.interfaces.factory.IOracleProviderRegistry.md#populatetransaction)
- [provider](contracts.core.interfaces.factory.IOracleProviderRegistry.md#provider)
- [removeListener](contracts.core.interfaces.factory.IOracleProviderRegistry.md#removelistener)
- [resolvedAddress](contracts.core.interfaces.factory.IOracleProviderRegistry.md#resolvedaddress)
- [signer](contracts.core.interfaces.factory.IOracleProviderRegistry.md#signer)

### Methods

- [\_checkRunningEvents](contracts.core.interfaces.factory.IOracleProviderRegistry.md#_checkrunningevents)
- [\_deployed](contracts.core.interfaces.factory.IOracleProviderRegistry.md#_deployed)
- [\_wrapEvent](contracts.core.interfaces.factory.IOracleProviderRegistry.md#_wrapevent)
- [attach](contracts.core.interfaces.factory.IOracleProviderRegistry.md#attach)
- [connect](contracts.core.interfaces.factory.IOracleProviderRegistry.md#connect)
- [deployed](contracts.core.interfaces.factory.IOracleProviderRegistry.md#deployed)
- [emit](contracts.core.interfaces.factory.IOracleProviderRegistry.md#emit)
- [fallback](contracts.core.interfaces.factory.IOracleProviderRegistry.md#fallback)
- [isRegisteredOracleProvider](contracts.core.interfaces.factory.IOracleProviderRegistry.md#isregisteredoracleprovider)
- [listenerCount](contracts.core.interfaces.factory.IOracleProviderRegistry.md#listenercount)
- [listeners](contracts.core.interfaces.factory.IOracleProviderRegistry.md#listeners)
- [queryFilter](contracts.core.interfaces.factory.IOracleProviderRegistry.md#queryfilter)
- [registerOracleProvider](contracts.core.interfaces.factory.IOracleProviderRegistry.md#registeroracleprovider)
- [registeredOracleProviders](contracts.core.interfaces.factory.IOracleProviderRegistry.md#registeredoracleproviders)
- [removeAllListeners](contracts.core.interfaces.factory.IOracleProviderRegistry.md#removealllisteners)
- [unregisterOracleProvider](contracts.core.interfaces.factory.IOracleProviderRegistry.md#unregisteroracleprovider)

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
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<`string`[]\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:202](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L202)

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
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:252](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L252)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `OracleProviderRegistered` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => `OracleProviderRegisteredEventFilter` |
| `OracleProviderRegistered(address)` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => `OracleProviderRegisteredEventFilter` |
| `OracleProviderUnregistered` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => `OracleProviderUnregisteredEventFilter` |
| `OracleProviderUnregistered(address)` | (`oracleProvider?`: `PromiseOrValue`<`string`\>) => `OracleProviderUnregisteredEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:236](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L236)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`[]]\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:136](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L136)

___

### interface

• **interface**: `IOracleProviderRegistryInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:115](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L115)

___

### off

• **off**: `OnEvent`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:131](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L131)

___

### on

• **on**: `OnEvent`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:132](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L132)

___

### once

• **once**: `OnEvent`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:133](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L133)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isRegisteredOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registeredOracleProviders` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `unregisterOracleProvider` | (`oracleProvider`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:286](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L286)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:134](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L134)

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

▸ **attach**(`addressOrName`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:112](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L112)

___

### connect

▸ **connect**(`signerOrProvider`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:111](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L111)

___

### deployed

▸ **deployed**(): `Promise`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Returns

`Promise`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:113](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L113)

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

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:174](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L174)

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

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:123](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L123)

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

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:126](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L126)

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

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:117](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L117)

___

### registerOracleProvider

▸ **registerOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`ContractTransaction`\>

Registers an oracle provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to register. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:183](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L183)

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

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:191](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L191)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:127](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L127)

▸ **removeAllListeners**(`eventName?`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:130](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L130)

___

### unregisterOracleProvider

▸ **unregisterOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`ContractTransaction`\>

Unregisters an oracle provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to unregister. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:197](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L197)
