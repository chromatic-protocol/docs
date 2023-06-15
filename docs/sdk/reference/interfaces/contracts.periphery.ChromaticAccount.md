[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [periphery](../modules/contracts.periphery.md) / ChromaticAccount

# Interface: ChromaticAccount

[contracts](../modules/contracts.md).[periphery](../modules/contracts.periphery.md).ChromaticAccount

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticAccount`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.periphery.ChromaticAccount.md#_deployedpromise)
- [\_runningEvents](contracts.periphery.ChromaticAccount.md#_runningevents)
- [\_wrappedEmits](contracts.periphery.ChromaticAccount.md#_wrappedemits)
- [address](contracts.periphery.ChromaticAccount.md#address)
- [callStatic](contracts.periphery.ChromaticAccount.md#callstatic)
- [deployTransaction](contracts.periphery.ChromaticAccount.md#deploytransaction)
- [estimateGas](contracts.periphery.ChromaticAccount.md#estimategas)
- [filters](contracts.periphery.ChromaticAccount.md#filters)
- [functions](contracts.periphery.ChromaticAccount.md#functions)
- [interface](contracts.periphery.ChromaticAccount.md#interface)
- [off](contracts.periphery.ChromaticAccount.md#off)
- [on](contracts.periphery.ChromaticAccount.md#on)
- [once](contracts.periphery.ChromaticAccount.md#once)
- [populateTransaction](contracts.periphery.ChromaticAccount.md#populatetransaction)
- [provider](contracts.periphery.ChromaticAccount.md#provider)
- [removeListener](contracts.periphery.ChromaticAccount.md#removelistener)
- [resolvedAddress](contracts.periphery.ChromaticAccount.md#resolvedaddress)
- [signer](contracts.periphery.ChromaticAccount.md#signer)

### Methods

- [\_checkRunningEvents](contracts.periphery.ChromaticAccount.md#_checkrunningevents)
- [\_deployed](contracts.periphery.ChromaticAccount.md#_deployed)
- [\_wrapEvent](contracts.periphery.ChromaticAccount.md#_wrapevent)
- [attach](contracts.periphery.ChromaticAccount.md#attach)
- [balance](contracts.periphery.ChromaticAccount.md#balance)
- [claimPosition](contracts.periphery.ChromaticAccount.md#claimposition)
- [claimPositionCallback](contracts.periphery.ChromaticAccount.md#claimpositioncallback)
- [closePosition](contracts.periphery.ChromaticAccount.md#closeposition)
- [connect](contracts.periphery.ChromaticAccount.md#connect)
- [deployed](contracts.periphery.ChromaticAccount.md#deployed)
- [emit](contracts.periphery.ChromaticAccount.md#emit)
- [fallback](contracts.periphery.ChromaticAccount.md#fallback)
- [getPositionIds](contracts.periphery.ChromaticAccount.md#getpositionids)
- [hasPositionId](contracts.periphery.ChromaticAccount.md#haspositionid)
- [initialize](contracts.periphery.ChromaticAccount.md#initialize)
- [listenerCount](contracts.periphery.ChromaticAccount.md#listenercount)
- [listeners](contracts.periphery.ChromaticAccount.md#listeners)
- [openPosition](contracts.periphery.ChromaticAccount.md#openposition)
- [openPositionCallback](contracts.periphery.ChromaticAccount.md#openpositioncallback)
- [queryFilter](contracts.periphery.ChromaticAccount.md#queryfilter)
- [removeAllListeners](contracts.periphery.ChromaticAccount.md#removealllisteners)
- [withdraw](contracts.periphery.ChromaticAccount.md#withdraw)

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
| `balance` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `claimPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `claimPositionCallback` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `closePosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getPositionIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `hasPositionId` | (`market`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `initialize` | (`_owner`: `PromiseOrValue`<`string`\>, `_router`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `openPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PositionStructOutput`\> |
| `openPositionCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `marginRequired`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:461](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L461)

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
| `balance` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `claimPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `claimPositionCallback` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `closePosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getPositionIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `hasPositionId` | (`market`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `initialize` | (`_owner`: `PromiseOrValue`<`string`\>, `_router`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `openPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `openPositionCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `marginRequired`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:585](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L585)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:583](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L583)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balance` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `claimPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `claimPositionCallback` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `closePosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getPositionIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `hasPositionId` | (`market`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `initialize` | (`_owner`: `PromiseOrValue`<`string`\>, `_router`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `openPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `openPositionCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `marginRequired`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:219](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L219)

___

### interface

• **interface**: `ChromaticAccountInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:198](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L198)

___

### off

• **off**: `OnEvent`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:214](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L214)

___

### on

• **on**: `OnEvent`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:215](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L215)

___

### once

• **once**: `OnEvent`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:216](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L216)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balance` | (`token`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `claimPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `claimPositionCallback` | (`positionId`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `closePosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `positionId`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getPositionIds` | (`market`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `hasPositionId` | (`market`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `initialize` | (`_owner`: `PromiseOrValue`<`string`\>, `_router`: `PromiseOrValue`<`string`\>, `_marketFactory`: `PromiseOrValue`<`string`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `openPosition` | (`marketAddress`: `PromiseOrValue`<`string`\>, `qty`: `PromiseOrValue`<`BigNumberish`\>, `leverage`: `PromiseOrValue`<`BigNumberish`\>, `takerMargin`: `PromiseOrValue`<`BigNumberish`\>, `makerMargin`: `PromiseOrValue`<`BigNumberish`\>, `maxAllowableTradingFee`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `openPositionCallback` | (`settlementToken`: `PromiseOrValue`<`string`\>, `vault`: `PromiseOrValue`<`string`\>, `marginRequired`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`token`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:707](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L707)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:217](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L217)

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

▸ **attach**(`addressOrName`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:195](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L195)

___

### balance

▸ **balance**(`token`, `overrides?`): `Promise`<`BigNumber`\>

Returns the balance of the specified token for the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:345](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L345)

___

### claimPosition

▸ **claimPosition**(`marketAddress`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Claims the specified position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `PromiseOrValue`<`string`\> | The address of the market. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to claim. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:355](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L355)

___

### claimPositionCallback

▸ **claimPositionCallback**(`positionId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Callback function called after claiming a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the claimed position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data related to the callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:366](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L366)

___

### closePosition

▸ **closePosition**(`marketAddress`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Closes the specified position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `PromiseOrValue`<`string`\> | The address of the market. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to close. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:377](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L377)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:194](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L194)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Returns

`Promise`<[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:196](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L196)

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

### getPositionIds

▸ **getPositionIds**(`market`, `overrides?`): `Promise`<`BigNumber`[]\>

Retrieves an array of position IDs owned by this account for the specified market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:387](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L387)

___

### hasPositionId

▸ **hasPositionId**(`market`, `id`, `overrides?`): `Promise`<`boolean`\>

Checks if the specified market has the specified position ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:397](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L397)

___

### initialize

▸ **initialize**(`_owner`, `_router`, `_marketFactory`, `overrides?`): `Promise`<`ContractTransaction`\>

Initializes the account with the specified owner, router, and market factory addresses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_owner` | `PromiseOrValue`<`string`\> | The address of the account owner. |
| `_router` | `PromiseOrValue`<`string`\> | The address of the router contract. |
| `_marketFactory` | `PromiseOrValue`<`string`\> | The address of the market factory contract. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:409](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L409)

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

[src/gen/contracts/periphery/ChromaticAccount.ts:206](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L206)

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

[src/gen/contracts/periphery/ChromaticAccount.ts:209](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L209)

___

### openPosition

▸ **openPosition**(`marketAddress`, `qty`, `leverage`, `takerMargin`, `makerMargin`, `maxAllowableTradingFee`, `overrides?`): `Promise`<`ContractTransaction`\>

Opens a new position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `PromiseOrValue`<`string`\> | The address of the market. |
| `qty` | `PromiseOrValue`<`BigNumberish`\> | The quantity of the position. |
| `leverage` | `PromiseOrValue`<`BigNumberish`\> | The leverage of the position. |
| `takerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin required for the taker. |
| `makerMargin` | `PromiseOrValue`<`BigNumberish`\> | The margin required for the maker. |
| `maxAllowableTradingFee` | `PromiseOrValue`<`BigNumberish`\> | The maximum allowable trading fee. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:425](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L425)

___

### openPositionCallback

▸ **openPositionCallback**(`settlementToken`, `vault`, `marginRequired`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Callback function called after opening a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | `PromiseOrValue`<`string`\> | The address of the settlement token used in the position. |
| `vault` | `PromiseOrValue`<`string`\> | The address of the vault contract. |
| `marginRequired` | `PromiseOrValue`<`BigNumberish`\> | The amount of margin required for the position. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data related to the callback. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:442](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L442)

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

[src/gen/contracts/periphery/ChromaticAccount.ts:200](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L200)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:210](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L210)

▸ **removeAllListeners**(`eventName?`): [`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticAccount`](contracts.periphery.ChromaticAccount.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:213](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L213)

___

### withdraw

▸ **withdraw**(`token`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws the specified amount of tokens from the account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `PromiseOrValue`<`string`\> | The address of the token to withdraw. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens to withdraw. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/periphery/ChromaticAccount.ts:455](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/periphery/ChromaticAccount.ts#L455)
