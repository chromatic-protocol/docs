[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [openzeppelin](../modules/openzeppelin.md) / [contracts](../modules/openzeppelin.contracts.md) / [token](../modules/openzeppelin.contracts.token.md) / [erc20](../modules/openzeppelin.contracts.token.erc20.md) / IERC20

# Interface: IERC20

[token](../modules/openzeppelin.contracts.token.md).[erc20](../modules/openzeppelin.contracts.token.erc20.md).IERC20

## Hierarchy

- `BaseContract`

  ↳ **`IERC20`**

## Table of contents

### Properties

- [\_deployedPromise](openzeppelin.contracts.token.erc20.IERC20.md#_deployedpromise)
- [\_runningEvents](openzeppelin.contracts.token.erc20.IERC20.md#_runningevents)
- [\_wrappedEmits](openzeppelin.contracts.token.erc20.IERC20.md#_wrappedemits)
- [address](openzeppelin.contracts.token.erc20.IERC20.md#address)
- [callStatic](openzeppelin.contracts.token.erc20.IERC20.md#callstatic)
- [deployTransaction](openzeppelin.contracts.token.erc20.IERC20.md#deploytransaction)
- [estimateGas](openzeppelin.contracts.token.erc20.IERC20.md#estimategas)
- [filters](openzeppelin.contracts.token.erc20.IERC20.md#filters)
- [functions](openzeppelin.contracts.token.erc20.IERC20.md#functions)
- [interface](openzeppelin.contracts.token.erc20.IERC20.md#interface)
- [off](openzeppelin.contracts.token.erc20.IERC20.md#off)
- [on](openzeppelin.contracts.token.erc20.IERC20.md#on)
- [once](openzeppelin.contracts.token.erc20.IERC20.md#once)
- [populateTransaction](openzeppelin.contracts.token.erc20.IERC20.md#populatetransaction)
- [provider](openzeppelin.contracts.token.erc20.IERC20.md#provider)
- [removeListener](openzeppelin.contracts.token.erc20.IERC20.md#removelistener)
- [resolvedAddress](openzeppelin.contracts.token.erc20.IERC20.md#resolvedaddress)
- [signer](openzeppelin.contracts.token.erc20.IERC20.md#signer)

### Methods

- [\_checkRunningEvents](openzeppelin.contracts.token.erc20.IERC20.md#_checkrunningevents)
- [\_deployed](openzeppelin.contracts.token.erc20.IERC20.md#_deployed)
- [\_wrapEvent](openzeppelin.contracts.token.erc20.IERC20.md#_wrapevent)
- [allowance](openzeppelin.contracts.token.erc20.IERC20.md#allowance)
- [approve](openzeppelin.contracts.token.erc20.IERC20.md#approve)
- [attach](openzeppelin.contracts.token.erc20.IERC20.md#attach)
- [balanceOf](openzeppelin.contracts.token.erc20.IERC20.md#balanceof)
- [connect](openzeppelin.contracts.token.erc20.IERC20.md#connect)
- [deployed](openzeppelin.contracts.token.erc20.IERC20.md#deployed)
- [emit](openzeppelin.contracts.token.erc20.IERC20.md#emit)
- [fallback](openzeppelin.contracts.token.erc20.IERC20.md#fallback)
- [listenerCount](openzeppelin.contracts.token.erc20.IERC20.md#listenercount)
- [listeners](openzeppelin.contracts.token.erc20.IERC20.md#listeners)
- [queryFilter](openzeppelin.contracts.token.erc20.IERC20.md#queryfilter)
- [removeAllListeners](openzeppelin.contracts.token.erc20.IERC20.md#removealllisteners)
- [totalSupply](openzeppelin.contracts.token.erc20.IERC20.md#totalsupply)
- [transfer](openzeppelin.contracts.token.erc20.IERC20.md#transfer)
- [transferFrom](openzeppelin.contracts.token.erc20.IERC20.md#transferfrom)

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
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:253](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L253)

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
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:329](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L329)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: `PromiseOrValue`<`string`\>, `spender?`: `PromiseOrValue`<`string`\>, `value?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: `PromiseOrValue`<`string`\>, `spender?`: `PromiseOrValue`<`string`\>, `value?`: ``null``) => `ApprovalEventFilter` |
| `Transfer` | (`from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `value?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `value?`: ``null``) => `TransferEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:305](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L305)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:151](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L151)

___

### interface

• **interface**: `IERC20Interface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:130](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L130)

___

### off

• **off**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:146](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L146)

___

### on

• **on**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:147](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L147)

___

### once

• **once**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:148](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L148)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:381](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L381)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:149](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L149)

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

### allowance

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `PromiseOrValue`<`string`\> |
| `spender` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:206](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L206)

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `PromiseOrValue`<`string`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:215](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L215)

___

### attach

▸ **attach**(`addressOrName`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:127](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L127)

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

Returns the amount of tokens owned by `account`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:224](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L224)

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:126](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L126)

___

### deployed

▸ **deployed**(): `Promise`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Returns

`Promise`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:128](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L128)

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

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:138](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L138)

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

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:141](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L141)

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

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:132](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L132)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:142](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L142)

▸ **removeAllListeners**(`eventName?`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:145](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L145)

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

Returns the amount of tokens in existence.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:232](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L232)

___

### transfer

▸ **transfer**(`to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Moves `amount` tokens from the caller's account to `to`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `PromiseOrValue`<`string`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:237](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L237)

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

Moves `amount` tokens from `from` to `to` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> |
| `to` | `PromiseOrValue`<`string`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts:246](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/@openzeppelin/contracts/token/ERC20/IERC20.ts#L246)
