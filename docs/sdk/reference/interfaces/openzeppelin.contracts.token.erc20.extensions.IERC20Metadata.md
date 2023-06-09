[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [openzeppelin](../modules/openzeppelin.md) / [contracts](../modules/openzeppelin.contracts.md) / [token](../modules/openzeppelin.contracts.token.md) / [erc20](../modules/openzeppelin.contracts.token.erc20.md) / [extensions](../modules/openzeppelin.contracts.token.erc20.extensions.md) / IERC20Metadata

# Interface: IERC20Metadata

[erc20](../modules/openzeppelin.contracts.token.erc20.md).[extensions](../modules/openzeppelin.contracts.token.erc20.extensions.md).IERC20Metadata

## Hierarchy

- `BaseContract`

  ↳ **`IERC20Metadata`**

## Table of contents

### Properties

- [\_deployedPromise](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#_deployedpromise)
- [\_runningEvents](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#_runningevents)
- [\_wrappedEmits](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#_wrappedemits)
- [address](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#address)
- [callStatic](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#callstatic)
- [deployTransaction](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#deploytransaction)
- [estimateGas](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#estimategas)
- [filters](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#filters)
- [functions](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#functions)
- [interface](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#interface)
- [off](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#off)
- [on](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#on)
- [once](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#once)
- [populateTransaction](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#populatetransaction)
- [provider](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#provider)
- [removeListener](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#removelistener)
- [resolvedAddress](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#resolvedaddress)
- [signer](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#signer)

### Methods

- [\_checkRunningEvents](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#_checkrunningevents)
- [\_deployed](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#_deployed)
- [\_wrapEvent](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#_wrapevent)
- [allowance](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#allowance)
- [approve](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#approve)
- [attach](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#attach)
- [balanceOf](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#balanceof)
- [connect](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#connect)
- [decimals](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#decimals)
- [deployed](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#deployed)
- [emit](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#emit)
- [fallback](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#fallback)
- [listenerCount](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#listenercount)
- [listeners](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#listeners)
- [name](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#name)
- [queryFilter](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#queryfilter)
- [removeAllListeners](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#removealllisteners)
- [symbol](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#symbol)
- [totalSupply](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#totalsupply)
- [transfer](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#transfer)
- [transferFrom](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md#transferfrom)

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
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:295](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L295)

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
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:386](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L386)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:362](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L362)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:163](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L163)

___

### interface

• **interface**: `IERC20MetadataInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:142](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L142)

___

### off

• **off**: `OnEvent`<[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:158](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L158)

___

### on

• **on**: `OnEvent`<[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:159](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L159)

___

### once

• **once**: `OnEvent`<[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:160](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L160)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `PromiseOrValue`<`string`\>, `spender`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `symbol` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:453](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L453)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:161](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L161)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:233](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L233)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:242](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L242)

___

### attach

▸ **attach**(`addressOrName`): [`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:139](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L139)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:251](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L251)

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:138](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L138)

___

### decimals

▸ **decimals**(`overrides?`): `Promise`<`number`\>

Returns the decimals places of the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:259](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L259)

___

### deployed

▸ **deployed**(): `Promise`<[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)\>

#### Returns

`Promise`<[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:140](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L140)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:150](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L150)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:153](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L153)

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

Returns the name of the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:264](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L264)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:144](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L144)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:154](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L154)

▸ **removeAllListeners**(`eventName?`): [`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC20Metadata`](openzeppelin.contracts.token.erc20.extensions.IERC20Metadata.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:157](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L157)

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

Returns the symbol of the token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:269](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L269)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:274](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L274)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:279](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L279)

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

[src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts:288](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.ts#L288)
