[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / [core](../modules/contracts.core.md) / CLBToken

# Interface: CLBToken

[contracts](../modules/contracts.md).[core](../modules/contracts.core.md).CLBToken

## Hierarchy

- `BaseContract`

  ↳ **`CLBToken`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.core.CLBToken.md#_deployedpromise)
- [\_runningEvents](contracts.core.CLBToken.md#_runningevents)
- [\_wrappedEmits](contracts.core.CLBToken.md#_wrappedemits)
- [address](contracts.core.CLBToken.md#address)
- [callStatic](contracts.core.CLBToken.md#callstatic)
- [deployTransaction](contracts.core.CLBToken.md#deploytransaction)
- [estimateGas](contracts.core.CLBToken.md#estimategas)
- [filters](contracts.core.CLBToken.md#filters)
- [functions](contracts.core.CLBToken.md#functions)
- [interface](contracts.core.CLBToken.md#interface)
- [off](contracts.core.CLBToken.md#off)
- [on](contracts.core.CLBToken.md#on)
- [once](contracts.core.CLBToken.md#once)
- [populateTransaction](contracts.core.CLBToken.md#populatetransaction)
- [provider](contracts.core.CLBToken.md#provider)
- [removeListener](contracts.core.CLBToken.md#removelistener)
- [resolvedAddress](contracts.core.CLBToken.md#resolvedaddress)
- [signer](contracts.core.CLBToken.md#signer)

### Methods

- [\_checkRunningEvents](contracts.core.CLBToken.md#_checkrunningevents)
- [\_deployed](contracts.core.CLBToken.md#_deployed)
- [\_wrapEvent](contracts.core.CLBToken.md#_wrapevent)
- [attach](contracts.core.CLBToken.md#attach)
- [balanceOf](contracts.core.CLBToken.md#balanceof)
- [balanceOfBatch](contracts.core.CLBToken.md#balanceofbatch)
- [burn](contracts.core.CLBToken.md#burn)
- [connect](contracts.core.CLBToken.md#connect)
- [decimals](contracts.core.CLBToken.md#decimals)
- [deployed](contracts.core.CLBToken.md#deployed)
- [description](contracts.core.CLBToken.md#description)
- [emit](contracts.core.CLBToken.md#emit)
- [exists](contracts.core.CLBToken.md#exists)
- [fallback](contracts.core.CLBToken.md#fallback)
- [image](contracts.core.CLBToken.md#image)
- [isApprovedForAll](contracts.core.CLBToken.md#isapprovedforall)
- [listenerCount](contracts.core.CLBToken.md#listenercount)
- [listeners](contracts.core.CLBToken.md#listeners)
- [market](contracts.core.CLBToken.md#market)
- [mint](contracts.core.CLBToken.md#mint)
- [name](contracts.core.CLBToken.md#name)
- [queryFilter](contracts.core.CLBToken.md#queryfilter)
- [removeAllListeners](contracts.core.CLBToken.md#removealllisteners)
- [safeBatchTransferFrom](contracts.core.CLBToken.md#safebatchtransferfrom)
- [safeTransferFrom](contracts.core.CLBToken.md#safetransferfrom)
- [setApprovalForAll](contracts.core.CLBToken.md#setapprovalforall)
- [supportsInterface](contracts.core.CLBToken.md#supportsinterface)
- [totalSupply](contracts.core.CLBToken.md#totalsupply)
- [uri](contracts.core.CLBToken.md#uri)

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
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch` | (`accounts`: `PromiseOrValue`<`string`\>[], `ids`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`[]\> |
| `burn` | (`from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`number`\> |
| `description` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `exists` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `image` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `market` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `mint` | (`to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `name` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `totalSupply` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uri` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/contracts/core/CLBToken.ts:591](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L591)

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
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `balanceOfBatch` | (`accounts`: `PromiseOrValue`<`string`\>[], `ids`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `burn` | (`from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `description` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `exists` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `image` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `market` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `mint` | (`to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `name` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `uri` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/contracts/core/CLBToken.ts:794](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L794)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ApprovalForAll` | (`account?`: `PromiseOrValue`<`string`\>, `operator?`: `PromiseOrValue`<`string`\>, `approved?`: ``null``) => [`ApprovalForAllEventFilter`](../modules.md#approvalforalleventfilter) |
| `ApprovalForAll(address,address,bool)` | (`account?`: `PromiseOrValue`<`string`\>, `operator?`: `PromiseOrValue`<`string`\>, `approved?`: ``null``) => [`ApprovalForAllEventFilter`](../modules.md#approvalforalleventfilter) |
| `TransferBatch` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `ids?`: ``null``, `values?`: ``null``) => [`TransferBatchEventFilter`](../modules.md#transferbatcheventfilter) |
| `TransferBatch(address,address,address,uint256[],uint256[])` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `ids?`: ``null``, `values?`: ``null``) => [`TransferBatchEventFilter`](../modules.md#transferbatcheventfilter) |
| `TransferSingle` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `id?`: ``null``, `value?`: ``null``) => [`TransferSingleEventFilter`](../modules.md#transfersingleeventfilter) |
| `TransferSingle(address,address,address,uint256,uint256)` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `id?`: ``null``, `value?`: ``null``) => [`TransferSingleEventFilter`](../modules.md#transfersingleeventfilter) |
| `URI` | (`value?`: ``null``, `id?`: `PromiseOrValue`<`BigNumberish`\>) => [`URIEventFilter`](../modules.md#urieventfilter) |
| `URI(string,uint256)` | (`value?`: ``null``, `id?`: `PromiseOrValue`<`BigNumberish`\>) => [`URIEventFilter`](../modules.md#urieventfilter) |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/contracts/core/CLBToken.ts:745](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L745)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOfBatch` | (`accounts`: `PromiseOrValue`<`string`\>[], `ids`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `burn` | (`from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<[`number`]\> |
| `description` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `exists` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `image` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `market` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `mint` | (`to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `name` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `totalSupply` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `uri` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/contracts/core/CLBToken.ts:285](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L285)

___

### interface

• **interface**: [`CLBTokenInterface`](CLBTokenInterface.md)

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/contracts/core/CLBToken.ts:264](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L264)

___

### off

• **off**: `OnEvent`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/contracts/core/CLBToken.ts:280](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L280)

___

### on

• **on**: `OnEvent`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/contracts/core/CLBToken.ts:281](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L281)

___

### once

• **once**: `OnEvent`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/contracts/core/CLBToken.ts:282](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L282)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfBatch` | (`accounts`: `PromiseOrValue`<`string`\>[], `ids`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `burn` | (`from`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `decimals` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `description` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `exists` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `image` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `market` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `mint` | (`to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `name` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `uri` | (`id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/contracts/core/CLBToken.ts:948](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L948)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/contracts/core/CLBToken.ts:283](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L283)

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

▸ **attach**(`addressOrName`): [`CLBToken`](contracts.core.CLBToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/contracts/core/CLBToken.ts:261](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L261)

___

### balanceOf

▸ **balanceOf**(`account`, `id`, `overrides?`): `Promise`<`BigNumber`\>

See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:442](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L442)

___

### balanceOfBatch

▸ **balanceOfBatch**(`accounts`, `ids`, `overrides?`): `Promise`<`BigNumber`[]\>

See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `PromiseOrValue`<`string`\>[] |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:451](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L451)

___

### burn

▸ **burn**(`from`, `id`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the Chromatic Market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> | The address from which to burn tokens. |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID to burn. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens to burn. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:463](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L463)

___

### connect

▸ **connect**(`signerOrProvider`): [`CLBToken`](contracts.core.CLBToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/contracts/core/CLBToken.ts:260](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L260)

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

[src/gen/contracts/core/CLBToken.ts:470](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L470)

___

### deployed

▸ **deployed**(): `Promise`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Returns

`Promise`<[`CLBToken`](contracts.core.CLBToken.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/contracts/core/CLBToken.ts:262](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L262)

___

### description

▸ **description**(`id`, `overrides?`): `Promise`<`string`\>

Retrieves the description of a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the description. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:476](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L476)

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

### exists

▸ **exists**(`id`, `overrides?`): `Promise`<`boolean`\>

Indicates whether any token exist with a given id, or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:484](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L484)

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

### image

▸ **image**(`id`, `overrides?`): `Promise`<`string`\>

Retrieves the image URI of a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the image URI. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:493](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L493)

___

### isApprovedForAll

▸ **isApprovedForAll**(`account`, `operator`, `overrides?`): `Promise`<`boolean`\>

See {IERC1155-isApprovedForAll}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `operator` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:501](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L501)

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

[src/gen/contracts/core/CLBToken.ts:272](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L272)

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

[src/gen/contracts/core/CLBToken.ts:275](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L275)

___

### market

▸ **market**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:507](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L507)

___

### mint

▸ **mint**(`to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

This function can only be called by the Chromatic Market contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `PromiseOrValue`<`string`\> | The address to which the minted tokens will be assigned. |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID to mint. |
| `amount` | `PromiseOrValue`<`BigNumberish`\> | The amount of tokens to mint. |
| `data` | `PromiseOrValue`<`BytesLike`\> | Additional data to pass during the minting process. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:516](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L516)

___

### name

▸ **name**(`id`, `overrides?`): `Promise`<`string`\>

Retrieves the name of a token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the name. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:528](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L528)

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

[src/gen/contracts/core/CLBToken.ts:266](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L266)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CLBToken`](contracts.core.CLBToken.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/CLBToken.ts:276](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L276)

▸ **removeAllListeners**(`eventName?`): [`CLBToken`](contracts.core.CLBToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CLBToken`](contracts.core.CLBToken.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/contracts/core/CLBToken.ts:279](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L279)

___

### safeBatchTransferFrom

▸ **safeBatchTransferFrom**(`from`, `to`, `ids`, `amounts`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

See {IERC1155-safeBatchTransferFrom}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> |
| `to` | `PromiseOrValue`<`string`\> |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] |
| `amounts` | `PromiseOrValue`<`BigNumberish`\>[] |
| `data` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:536](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L536)

___

### safeTransferFrom

▸ **safeTransferFrom**(`from`, `to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

See {IERC1155-safeTransferFrom}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `PromiseOrValue`<`string`\> |
| `to` | `PromiseOrValue`<`string`\> |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `amount` | `PromiseOrValue`<`BigNumberish`\> |
| `data` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:548](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L548)

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

See {IERC1155-setApprovalForAll}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `PromiseOrValue`<`string`\> |
| `approved` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:560](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L560)

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

See {IERC165-supportsInterface}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:569](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L569)

___

### totalSupply

▸ **totalSupply**(`id`, `overrides?`): `Promise`<`BigNumber`\>

Retrieves the total supply of tokens for a given token ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> | The token ID for which to retrieve the total supply. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:578](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L578)

___

### uri

▸ **uri**(`id`, `overrides?`): `Promise`<`string`\>

Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/gen/contracts/core/CLBToken.ts:586](https://github.com/chromatic-protocol/sdk/blob/27c8c90/src/gen/contracts/core/CLBToken.ts#L586)
