[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [chainlink](../modules/chainlink.md) / [contracts](../modules/chainlink.contracts.md) / [src](../modules/chainlink.contracts.src.md) / [v08](../modules/chainlink.contracts.src.v08.md) / [interfaces](../modules/chainlink.contracts.src.v08.interfaces.md) / AggregatorV3Interface

# Interface: AggregatorV3Interface

[v08](../modules/chainlink.contracts.src.v08.md).[interfaces](../modules/chainlink.contracts.src.v08.interfaces.md).AggregatorV3Interface

## Hierarchy

- `BaseContract`

  ↳ **`AggregatorV3Interface`**

## Table of contents

### Properties

- [\_deployedPromise](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#_deployedpromise)
- [\_runningEvents](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#_runningevents)
- [\_wrappedEmits](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#_wrappedemits)
- [address](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#address)
- [callStatic](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#callstatic)
- [deployTransaction](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#deploytransaction)
- [estimateGas](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#estimategas)
- [filters](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#filters)
- [functions](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#functions)
- [interface](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#interface)
- [off](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#off)
- [on](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#on)
- [once](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#once)
- [populateTransaction](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#populatetransaction)
- [provider](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#provider)
- [removeListener](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#removelistener)
- [resolvedAddress](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#resolvedaddress)
- [signer](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#signer)

### Methods

- [\_checkRunningEvents](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#_checkrunningevents)
- [\_deployed](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#_deployed)
- [\_wrapEvent](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#_wrapevent)
- [attach](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#attach)
- [connect](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#connect)
- [decimals](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#decimals)
- [deployed](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#deployed)
- [description](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#description)
- [emit](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#emit)
- [fallback](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#fallback)
- [getRoundData](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#getrounddata)
- [latestRoundData](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#latestrounddata)
- [listenerCount](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#listenercount)
- [listeners](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#listeners)
- [queryFilter](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#queryfilter)
- [removeAllListeners](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#removealllisteners)
- [version](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md#version)

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
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getRoundData` | (`_roundId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:165](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L165)

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
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRoundData` | (`_roundId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:200](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L200)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:198](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L198)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `getRoundData` | (`_roundId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:101](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L101)

___

### interface

• **interface**: `AggregatorV3InterfaceInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:80](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L80)

___

### off

• **off**: `OnEvent`<[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:96](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L96)

___

### on

• **on**: `OnEvent`<[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:97](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L97)

___

### once

• **once**: `OnEvent`<[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:98](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L98)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRoundData` | (`_roundId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `latestRoundData` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `version` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:215](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L215)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:99](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L99)

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

▸ **attach**(`addressOrName`): [`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:77](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L77)

___

### connect

▸ **connect**(`signerOrProvider`): [`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:76](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L76)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:134](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L134)

___

### deployed

▸ **deployed**(): `Promise`<[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)\>

#### Returns

`Promise`<[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:78](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L78)

___

### description

▸ **description**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:136](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L136)

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

### getRoundData

▸ **getRoundData**(`_roundId`, `overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_roundId` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:138](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L138)

___

### latestRoundData

▸ **latestRoundData**(`overrides?`): `Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `answer`: `BigNumber` ; `answeredInRound`: `BigNumber` ; `roundId`: `BigNumber` ; `startedAt`: `BigNumber` ; `updatedAt`: `BigNumber`  }\>

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:151](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L151)

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

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:88](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L88)

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

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:91](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L91)

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

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:82](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L82)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:92](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L92)

▸ **removeAllListeners**(`eventName?`): [`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`AggregatorV3Interface`](chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:95](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L95)

___

### version

▸ **version**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts:163](https://github.com/chromatic-protocol/sdk/blob/11a9f76/src/gen/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.ts#L163)
