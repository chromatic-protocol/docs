[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [openzeppelin](../modules/openzeppelin.md) / [contracts](../modules/openzeppelin.contracts.md) / [token](../modules/openzeppelin.contracts.token.md) / [erc1155](../modules/openzeppelin.contracts.token.erc1155.md) / IERC1155

# Interface: IERC1155

[token](../modules/openzeppelin.contracts.token.md).[erc1155](../modules/openzeppelin.contracts.token.erc1155.md).IERC1155

## Hierarchy

- `BaseContract`

  ↳ **`IERC1155`**

## Table of contents

### Properties

- [\_deployedPromise](openzeppelin.contracts.token.erc1155.IERC1155.md#_deployedpromise)
- [\_runningEvents](openzeppelin.contracts.token.erc1155.IERC1155.md#_runningevents)
- [\_wrappedEmits](openzeppelin.contracts.token.erc1155.IERC1155.md#_wrappedemits)
- [address](openzeppelin.contracts.token.erc1155.IERC1155.md#address)
- [callStatic](openzeppelin.contracts.token.erc1155.IERC1155.md#callstatic)
- [deployTransaction](openzeppelin.contracts.token.erc1155.IERC1155.md#deploytransaction)
- [estimateGas](openzeppelin.contracts.token.erc1155.IERC1155.md#estimategas)
- [filters](openzeppelin.contracts.token.erc1155.IERC1155.md#filters)
- [functions](openzeppelin.contracts.token.erc1155.IERC1155.md#functions)
- [interface](openzeppelin.contracts.token.erc1155.IERC1155.md#interface)
- [off](openzeppelin.contracts.token.erc1155.IERC1155.md#off)
- [on](openzeppelin.contracts.token.erc1155.IERC1155.md#on)
- [once](openzeppelin.contracts.token.erc1155.IERC1155.md#once)
- [populateTransaction](openzeppelin.contracts.token.erc1155.IERC1155.md#populatetransaction)
- [provider](openzeppelin.contracts.token.erc1155.IERC1155.md#provider)
- [removeListener](openzeppelin.contracts.token.erc1155.IERC1155.md#removelistener)
- [resolvedAddress](openzeppelin.contracts.token.erc1155.IERC1155.md#resolvedaddress)
- [signer](openzeppelin.contracts.token.erc1155.IERC1155.md#signer)

### Methods

- [\_checkRunningEvents](openzeppelin.contracts.token.erc1155.IERC1155.md#_checkrunningevents)
- [\_deployed](openzeppelin.contracts.token.erc1155.IERC1155.md#_deployed)
- [\_wrapEvent](openzeppelin.contracts.token.erc1155.IERC1155.md#_wrapevent)
- [attach](openzeppelin.contracts.token.erc1155.IERC1155.md#attach)
- [balanceOf](openzeppelin.contracts.token.erc1155.IERC1155.md#balanceof)
- [balanceOfBatch](openzeppelin.contracts.token.erc1155.IERC1155.md#balanceofbatch)
- [connect](openzeppelin.contracts.token.erc1155.IERC1155.md#connect)
- [deployed](openzeppelin.contracts.token.erc1155.IERC1155.md#deployed)
- [emit](openzeppelin.contracts.token.erc1155.IERC1155.md#emit)
- [fallback](openzeppelin.contracts.token.erc1155.IERC1155.md#fallback)
- [isApprovedForAll](openzeppelin.contracts.token.erc1155.IERC1155.md#isapprovedforall)
- [listenerCount](openzeppelin.contracts.token.erc1155.IERC1155.md#listenercount)
- [listeners](openzeppelin.contracts.token.erc1155.IERC1155.md#listeners)
- [queryFilter](openzeppelin.contracts.token.erc1155.IERC1155.md#queryfilter)
- [removeAllListeners](openzeppelin.contracts.token.erc1155.IERC1155.md#removealllisteners)
- [safeBatchTransferFrom](openzeppelin.contracts.token.erc1155.IERC1155.md#safebatchtransferfrom)
- [safeTransferFrom](openzeppelin.contracts.token.erc1155.IERC1155.md#safetransferfrom)
- [setApprovalForAll](openzeppelin.contracts.token.erc1155.IERC1155.md#setapprovalforall)
- [supportsInterface](openzeppelin.contracts.token.erc1155.IERC1155.md#supportsinterface)

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
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:344](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L344)

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
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:463](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L463)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ApprovalForAll` | (`account?`: `PromiseOrValue`<`string`\>, `operator?`: `PromiseOrValue`<`string`\>, `approved?`: ``null``) => `ApprovalForAllEventFilter` |
| `ApprovalForAll(address,address,bool)` | (`account?`: `PromiseOrValue`<`string`\>, `operator?`: `PromiseOrValue`<`string`\>, `approved?`: ``null``) => `ApprovalForAllEventFilter` |
| `TransferBatch` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `ids?`: ``null``, `values?`: ``null``) => `TransferBatchEventFilter` |
| `TransferBatch(address,address,address,uint256[],uint256[])` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `ids?`: ``null``, `values?`: ``null``) => `TransferBatchEventFilter` |
| `TransferSingle` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `id?`: ``null``, `value?`: ``null``) => `TransferSingleEventFilter` |
| `TransferSingle(address,address,address,uint256,uint256)` | (`operator?`: `PromiseOrValue`<`string`\>, `from?`: `PromiseOrValue`<`string`\>, `to?`: `PromiseOrValue`<`string`\>, `id?`: ``null``, `value?`: ``null``) => `TransferSingleEventFilter` |
| `URI` | (`value?`: ``null``, `id?`: `PromiseOrValue`<`BigNumberish`\>) => `URIEventFilter` |
| `URI(string,uint256)` | (`value?`: ``null``, `id?`: `PromiseOrValue`<`BigNumberish`\>) => `URIEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:414](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L414)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `balanceOfBatch` | (`accounts`: `PromiseOrValue`<`string`\>[], `ids`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`[]]\> |
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:206](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L206)

___

### interface

• **interface**: `IERC1155Interface`

#### Overrides

BaseContract.interface

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:185](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L185)

___

### off

• **off**: `OnEvent`<[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:201](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L201)

___

### on

• **on**: `OnEvent`<[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:202](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L202)

___

### once

• **once**: `OnEvent`<[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:203](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L203)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf` | (`account`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `balanceOfBatch` | (`accounts`: `PromiseOrValue`<`string`\>[], `ids`: `PromiseOrValue`<`BigNumberish`\>[], `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll` | (`account`: `PromiseOrValue`<`string`\>, `operator`: `PromiseOrValue`<`string`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `safeBatchTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `ids`: `PromiseOrValue`<`BigNumberish`\>[], `amounts`: `PromiseOrValue`<`BigNumberish`\>[], `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom` | (`from`: `PromiseOrValue`<`string`\>, `to`: `PromiseOrValue`<`string`\>, `id`: `PromiseOrValue`<`BigNumberish`\>, `amount`: `PromiseOrValue`<`BigNumberish`\>, `data`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll` | (`operator`: `PromiseOrValue`<`string`\>, `approved`: `PromiseOrValue`<`boolean`\>, `overrides?`: `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `PromiseOrValue`<`BytesLike`\>, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:533](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L533)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:204](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L204)

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

▸ **attach**(`addressOrName`): [`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Overrides

BaseContract.attach

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:182](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L182)

___

### balanceOf

▸ **balanceOf**(`account`, `id`, `overrides?`): `Promise`<`BigNumber`\>

Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `id` | `PromiseOrValue`<`BigNumberish`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:279](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L279)

___

### balanceOfBatch

▸ **balanceOfBatch**(`accounts`, `ids`, `overrides?`): `Promise`<`BigNumber`[]\>

xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `PromiseOrValue`<`string`\>[] |
| `ids` | `PromiseOrValue`<`BigNumberish`\>[] |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`[]\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:288](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L288)

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Overrides

BaseContract.connect

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:181](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L181)

___

### deployed

▸ **deployed**(): `Promise`<[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)\>

#### Returns

`Promise`<[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:183](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L183)

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

### isApprovedForAll

▸ **isApprovedForAll**(`account`, `operator`, `overrides?`): `Promise`<`boolean`\>

Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `PromiseOrValue`<`string`\> |
| `operator` | `PromiseOrValue`<`string`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:297](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L297)

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

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:193](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L193)

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

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:196](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L196)

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

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:187](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L187)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:197](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L197)

▸ **removeAllListeners**(`eventName?`): [`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC1155`](openzeppelin.contracts.token.erc1155.IERC1155.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:200](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L200)

___

### safeBatchTransferFrom

▸ **safeBatchTransferFrom**(`from`, `to`, `ids`, `amounts`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.

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

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:306](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L306)

___

### safeTransferFrom

▸ **safeTransferFrom**(`from`, `to`, `id`, `amount`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.

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

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:318](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L318)

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<`ContractTransaction`\>

Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller.

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `PromiseOrValue`<`string`\> |
| `approved` | `PromiseOrValue`<`boolean`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:330](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L330)

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `PromiseOrValue`<`BytesLike`\> |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts:339](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/@openzeppelin/contracts/token/ERC1155/IERC1155.ts#L339)
