[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [periphery](../modules/contracts.periphery.md) / AccountFactory

# Interface: AccountFactory

[contracts](../modules/contracts.md).[periphery](../modules/contracts.periphery.md).AccountFactory

## Hierarchy

- `BaseContract`

  ↳ **`AccountFactory`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.periphery.AccountFactory.md#_deployedpromise)
- [\_runningEvents](contracts.periphery.AccountFactory.md#_runningevents)
- [\_wrappedEmits](contracts.periphery.AccountFactory.md#_wrappedemits)
- [address](contracts.periphery.AccountFactory.md#address)
- [callStatic](contracts.periphery.AccountFactory.md#callstatic)
- [deployTransaction](contracts.periphery.AccountFactory.md#deploytransaction)
- [estimateGas](contracts.periphery.AccountFactory.md#estimategas)
- [filters](contracts.periphery.AccountFactory.md#filters)
- [functions](contracts.periphery.AccountFactory.md#functions)
- [interface](contracts.periphery.AccountFactory.md#interface)
- [off](contracts.periphery.AccountFactory.md#off)
- [on](contracts.periphery.AccountFactory.md#on)
- [once](contracts.periphery.AccountFactory.md#once)
- [populateTransaction](contracts.periphery.AccountFactory.md#populatetransaction)
- [provider](contracts.periphery.AccountFactory.md#provider)
- [removeListener](contracts.periphery.AccountFactory.md#removelistener)
- [resolvedAddress](contracts.periphery.AccountFactory.md#resolvedaddress)
- [signer](contracts.periphery.AccountFactory.md#signer)

### Methods

- [\_checkRunningEvents](contracts.periphery.AccountFactory.md#_checkrunningevents)
- [\_deployed](contracts.periphery.AccountFactory.md#_deployed)
- [\_wrapEvent](contracts.periphery.AccountFactory.md#_wrapevent)
- [attach](contracts.periphery.AccountFactory.md#attach)
- [connect](contracts.periphery.AccountFactory.md#connect)
- [createAccount](contracts.periphery.AccountFactory.md#createaccount)
- [deployed](contracts.periphery.AccountFactory.md#deployed)
- [emit](contracts.periphery.AccountFactory.md#emit)
- [fallback](contracts.periphery.AccountFactory.md#fallback)
- [getAccount()](contracts.periphery.AccountFactory.md#getaccount())
- [getAccount(address)](contracts.periphery.AccountFactory.md#getaccount(address))
- [listenerCount](contracts.periphery.AccountFactory.md#listenercount)
- [listeners](contracts.periphery.AccountFactory.md#listeners)
- [queryFilter](contracts.periphery.AccountFactory.md#queryfilter)
- [removeAllListeners](contracts.periphery.AccountFactory.md#removealllisteners)

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
| `createAccount` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getAccount(address)` | (`accountAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:159](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L159)

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
| `createAccount` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getAccount(address)` | (`accountAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:192](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L192)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AccountCreated` | (`account?`: `PromiseOrValue`<`string`\>, `owner?`: `PromiseOrValue`<`string`\>) => `AccountCreatedEventFilter` |
| `AccountCreated(address,address)` | (`account?`: `PromiseOrValue`<`string`\>, `owner?`: `PromiseOrValue`<`string`\>) => `AccountCreatedEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:181](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L181)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createAccount` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getAccount(address)` | (`accountAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:113](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L113)

___

### interface

• **interface**: `AccountFactoryInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:92](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L92)

___

### off

• **off**: `OnEvent`<[`AccountFactory`](contracts.periphery.AccountFactory.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:108](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L108)

___

### on

• **on**: `OnEvent`<[`AccountFactory`](contracts.periphery.AccountFactory.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:109](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L109)

___

### once

• **once**: `OnEvent`<[`AccountFactory`](contracts.periphery.AccountFactory.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:110](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L110)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createAccount` | (`overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getAccount()` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getAccount(address)` | (`accountAddress`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:216](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L216)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`AccountFactory`](contracts.periphery.AccountFactory.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:111](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L111)

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

▸ **attach**(`addressOrName`): [`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:89](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L89)

___

### connect

▸ **connect**(`signerOrProvider`): [`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:88](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L88)

___

### createAccount

▸ **createAccount**(`overrides?`): `Promise`<`ContractTransaction`\>

Only one account can be created per user.      Emits an `AccountCreated` event upon successful creation.
Creates a new user account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:141](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L141)

___

### deployed

▸ **deployed**(): `Promise`<[`AccountFactory`](contracts.periphery.AccountFactory.md)\>

#### Returns

`Promise`<[`AccountFactory`](contracts.periphery.AccountFactory.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:90](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L90)

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

### getAccount()

▸ **getAccount()**(`overrides?`): `Promise`<`string`\>

Retrieves the address of the caller's account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:148](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L148)

___

### getAccount(address)

▸ **getAccount(address)**(`accountAddress`, `overrides?`): `Promise`<`string`\>

Retrieves the address of a user's account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountAddress` | `PromiseOrValue`<`string`\> | The address of the user's account. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:154](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L154)

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

[src/gen/contracts/periphery/AccountFactory.ts:100](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L100)

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

[src/gen/contracts/periphery/AccountFactory.ts:103](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L103)

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

[src/gen/contracts/periphery/AccountFactory.ts:94](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L94)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:104](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L104)

▸ **removeAllListeners**(`eventName?`): [`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`AccountFactory`](contracts.periphery.AccountFactory.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/AccountFactory.ts:107](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/periphery/AccountFactory.ts#L107)
