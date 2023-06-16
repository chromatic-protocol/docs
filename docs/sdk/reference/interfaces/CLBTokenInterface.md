[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / CLBTokenInterface

# Interface: CLBTokenInterface

## Hierarchy

- `Interface`

  ↳ **`CLBTokenInterface`**

## Table of contents

### Properties

- [\_abiCoder](CLBTokenInterface.md#_abicoder)
- [\_isInterface](CLBTokenInterface.md#_isinterface)
- [deploy](CLBTokenInterface.md#deploy)
- [errors](CLBTokenInterface.md#errors)
- [events](CLBTokenInterface.md#events)
- [fragments](CLBTokenInterface.md#fragments)
- [functions](CLBTokenInterface.md#functions)
- [structs](CLBTokenInterface.md#structs)

### Methods

- [\_decodeParams](CLBTokenInterface.md#_decodeparams)
- [\_encodeParams](CLBTokenInterface.md#_encodeparams)
- [decodeErrorResult](CLBTokenInterface.md#decodeerrorresult)
- [decodeEventLog](CLBTokenInterface.md#decodeeventlog)
- [decodeFunctionData](CLBTokenInterface.md#decodefunctiondata)
- [decodeFunctionResult](CLBTokenInterface.md#decodefunctionresult)
- [encodeDeploy](CLBTokenInterface.md#encodedeploy)
- [encodeErrorResult](CLBTokenInterface.md#encodeerrorresult)
- [encodeEventLog](CLBTokenInterface.md#encodeeventlog)
- [encodeFilterTopics](CLBTokenInterface.md#encodefiltertopics)
- [encodeFunctionData](CLBTokenInterface.md#encodefunctiondata)
- [encodeFunctionResult](CLBTokenInterface.md#encodefunctionresult)
- [format](CLBTokenInterface.md#format)
- [getError](CLBTokenInterface.md#geterror)
- [getEvent](CLBTokenInterface.md#getevent)
- [getEventTopic](CLBTokenInterface.md#geteventtopic)
- [getFunction](CLBTokenInterface.md#getfunction)
- [getSighash](CLBTokenInterface.md#getsighash)
- [parseError](CLBTokenInterface.md#parseerror)
- [parseLog](CLBTokenInterface.md#parselog)
- [parseTransaction](CLBTokenInterface.md#parsetransaction)

## Properties

### \_abiCoder

• `Readonly` **\_abiCoder**: `AbiCoder`

#### Inherited from

utils.Interface.\_abiCoder

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:50

___

### \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Inherited from

utils.Interface.\_isInterface

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:51

___

### deploy

• `Readonly` **deploy**: `ConstructorFragment`

#### Inherited from

utils.Interface.deploy

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:49

___

### errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: `ErrorFragment`

#### Inherited from

utils.Interface.errors

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:37

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ApprovalForAll(address,address,bool)` | `EventFragment` |
| `TransferBatch(address,address,address,uint256[],uint256[])` | `EventFragment` |
| `TransferSingle(address,address,address,uint256,uint256)` | `EventFragment` |
| `URI(string,uint256)` | `EventFragment` |

#### Overrides

utils.Interface.events

#### Defined in

[src/gen/contracts/core/CLBToken.ts:208](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L208)

___

### fragments

• `Readonly` **fragments**: readonly `Fragment`[]

#### Inherited from

utils.Interface.fragments

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:36

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `balanceOf(address,uint256)` | `FunctionFragment` |
| `balanceOfBatch(address[],uint256[])` | `FunctionFragment` |
| `burn(address,uint256,uint256)` | `FunctionFragment` |
| `decimals()` | `FunctionFragment` |
| `description(uint256)` | `FunctionFragment` |
| `exists(uint256)` | `FunctionFragment` |
| `image(uint256)` | `FunctionFragment` |
| `isApprovedForAll(address,address)` | `FunctionFragment` |
| `market()` | `FunctionFragment` |
| `mint(address,uint256,uint256,bytes)` | `FunctionFragment` |
| `name(uint256)` | `FunctionFragment` |
| `safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)` | `FunctionFragment` |
| `safeTransferFrom(address,address,uint256,uint256,bytes)` | `FunctionFragment` |
| `setApprovalForAll(address,bool)` | `FunctionFragment` |
| `supportsInterface(bytes4)` | `FunctionFragment` |
| `totalSupply(uint256)` | `FunctionFragment` |
| `totalSupplyBatch(uint256[])` | `FunctionFragment` |
| `uri(uint256)` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/gen/contracts/core/CLBToken.ts:31](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L31)

___

### structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

utils.Interface.structs

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### \_decodeParams

▸ **_decodeParams**(`params`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.\_decodeParams

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:63

___

### \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly `ParamType`[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.\_encodeParams

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:64

___

### decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeErrorResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:66

___

### decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `data` | `BytesLike` |
| `topics?` | readonly `string`[] |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeEventLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:77

___

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Inherited from

utils.Interface.decodeFunctionData

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:68

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:162](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L162)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOfBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:163](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L163)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burn"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:167](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L167)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decimals"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:168](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L168)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"description"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:169](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L169)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"exists"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:173](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L173)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"image"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:174](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L174)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:175](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L175)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"market"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:179](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L179)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:180](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L180)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:181](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L181)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeBatchTransferFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:182](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L182)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:186](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L186)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:190](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L190)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:194](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L194)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:198](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L198)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupplyBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:202](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L202)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uri"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/CLBToken.ts:206](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L206)

___

### encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeDeploy

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:65

___

### encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `ErrorFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeErrorResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:67

___

### encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

#### Inherited from

utils.Interface.encodeEventLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:73

___

### encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

#### Inherited from

utils.Interface.encodeFilterTopics

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:72

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:74](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L74)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOfBatch"`` |
| `values` | [`PromiseOrValue`<`string`\>[], `PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:78](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L78)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"burn"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:82](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L82)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"decimals"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:90](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L90)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"description"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:91](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L91)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"exists"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:95](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L95)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"image"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:99](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L99)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:103](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L103)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"market"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:107](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L107)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:108](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L108)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:117](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L117)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeBatchTransferFrom"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:121](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L121)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:131](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L131)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`boolean`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:141](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L141)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `values` | [`PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:145](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L145)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:149](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L149)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupplyBatch"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:153](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L153)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uri"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/CLBToken.ts:157](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L157)

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| `FunctionFragment` |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

utils.Interface.encodeFunctionResult

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:71

___

### format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

#### Inherited from

utils.Interface.format

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:53

___

### getError

▸ **getError**(`nameOrSignatureOrSighash`): `ErrorFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

`ErrorFragment`

#### Inherited from

utils.Interface.getError

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:60

___

### getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ApprovalForAll"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/CLBToken.ts:215](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L215)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferBatch"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/CLBToken.ts:216](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L216)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferSingle"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/CLBToken.ts:217](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L217)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"URI"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/CLBToken.ts:218](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L218)

___

### getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| `EventFragment` |

#### Returns

`string`

#### Inherited from

utils.Interface.getEventTopic

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:62

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrTopic`): `FunctionFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"decimals"`` \| ``"description"`` \| ``"balanceOf"`` \| ``"balanceOfBatch"`` \| ``"isApprovedForAll"`` \| ``"safeBatchTransferFrom"`` \| ``"safeTransferFrom"`` \| ``"setApprovalForAll"`` \| ``"supportsInterface"`` \| ``"name"`` \| ``"totalSupply"`` \| ``"burn"`` \| ``"exists"`` \| ``"image"`` \| ``"market"`` \| ``"mint"`` \| ``"totalSupplyBatch"`` \| ``"uri"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/core/CLBToken.ts:52](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/CLBToken.ts#L52)

___

### getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| `FunctionFragment` \| `ErrorFragment` |

#### Returns

`string`

#### Inherited from

utils.Interface.getSighash

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:61

___

### parseError

▸ **parseError**(`data`): `ErrorDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |

#### Returns

`ErrorDescription`

#### Inherited from

utils.Interface.parseError

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:86

___

### parseLog

▸ **parseLog**(`log`): `LogDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

`LogDescription`

#### Inherited from

utils.Interface.parseLog

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:82

___

### parseTransaction

▸ **parseTransaction**(`tx`): `TransactionDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | `BigNumberish` |

#### Returns

`TransactionDescription`

#### Inherited from

utils.Interface.parseTransaction

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:78
