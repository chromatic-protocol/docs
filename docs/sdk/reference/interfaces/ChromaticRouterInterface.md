[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / ChromaticRouterInterface

# Interface: ChromaticRouterInterface

## Hierarchy

- `Interface`

  ↳ **`ChromaticRouterInterface`**

## Table of contents

### Properties

- [\_abiCoder](ChromaticRouterInterface.md#_abicoder)
- [\_isInterface](ChromaticRouterInterface.md#_isinterface)
- [deploy](ChromaticRouterInterface.md#deploy)
- [errors](ChromaticRouterInterface.md#errors)
- [events](ChromaticRouterInterface.md#events)
- [fragments](ChromaticRouterInterface.md#fragments)
- [functions](ChromaticRouterInterface.md#functions)
- [structs](ChromaticRouterInterface.md#structs)

### Methods

- [\_decodeParams](ChromaticRouterInterface.md#_decodeparams)
- [\_encodeParams](ChromaticRouterInterface.md#_encodeparams)
- [decodeErrorResult](ChromaticRouterInterface.md#decodeerrorresult)
- [decodeEventLog](ChromaticRouterInterface.md#decodeeventlog)
- [decodeFunctionData](ChromaticRouterInterface.md#decodefunctiondata)
- [decodeFunctionResult](ChromaticRouterInterface.md#decodefunctionresult)
- [encodeDeploy](ChromaticRouterInterface.md#encodedeploy)
- [encodeErrorResult](ChromaticRouterInterface.md#encodeerrorresult)
- [encodeEventLog](ChromaticRouterInterface.md#encodeeventlog)
- [encodeFilterTopics](ChromaticRouterInterface.md#encodefiltertopics)
- [encodeFunctionData](ChromaticRouterInterface.md#encodefunctiondata)
- [encodeFunctionResult](ChromaticRouterInterface.md#encodefunctionresult)
- [format](ChromaticRouterInterface.md#format)
- [getError](ChromaticRouterInterface.md#geterror)
- [getEvent](ChromaticRouterInterface.md#getevent)
- [getEventTopic](ChromaticRouterInterface.md#geteventtopic)
- [getFunction](ChromaticRouterInterface.md#getfunction)
- [getSighash](ChromaticRouterInterface.md#getsighash)
- [parseError](ChromaticRouterInterface.md#parseerror)
- [parseLog](ChromaticRouterInterface.md#parselog)
- [parseTransaction](ChromaticRouterInterface.md#parsetransaction)

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
| `OwnershipTransferred(address,address)` | `EventFragment` |

#### Overrides

utils.Interface.events

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:383](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L383)

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
| `addLiquidity(address,int16,uint256,address)` | `FunctionFragment` |
| `addLiquidityBatch(address,int16[],uint256[],address[])` | `FunctionFragment` |
| `addLiquidityCallback(address,address,bytes)` | `FunctionFragment` |
| `calculateCLBTokenMintingBatch(address,int16[],uint256[])` | `FunctionFragment` |
| `calculateCLBTokenValueBatch(address,int16[],uint256[])` | `FunctionFragment` |
| `claimLiquidity(address,uint256)` | `FunctionFragment` |
| `claimLiquidityBatch(address,uint256[])` | `FunctionFragment` |
| `claimLiquidityCallback(uint256,bytes)` | `FunctionFragment` |
| `claimPosition(address,uint256)` | `FunctionFragment` |
| `closePosition(address,uint256)` | `FunctionFragment` |
| `getAccount()` | `FunctionFragment` |
| `getLpReceiptIds(address)` | `FunctionFragment` |
| `initialize(address,address)` | `FunctionFragment` |
| `openPosition(address,int224,uint32,uint256,uint256,uint256)` | `FunctionFragment` |
| `owner()` | `FunctionFragment` |
| `removeLiquidity(address,int16,uint256,address)` | `FunctionFragment` |
| `removeLiquidityBatch(address,int16[],uint256[],address[])` | `FunctionFragment` |
| `removeLiquidityCallback(address,uint256,bytes)` | `FunctionFragment` |
| `renounceOwnership()` | `FunctionFragment` |
| `totalSupplies(address,int16[])` | `FunctionFragment` |
| `transferOwnership(address)` | `FunctionFragment` |
| `withdrawLiquidity(address,uint256)` | `FunctionFragment` |
| `withdrawLiquidityBatch(address,uint256[])` | `FunctionFragment` |
| `withdrawLiquidityCallback(uint256,bytes)` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:103](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L103)

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
| `functionFragment` | ``"addLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:295](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L295)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addLiquidityBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:299](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L299)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addLiquidityCallback"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:303](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L303)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenMintingBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:307](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L307)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenValueBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:311](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L311)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:315](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L315)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimLiquidityBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:319](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L319)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimLiquidityCallback"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:323](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L323)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPosition"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:327](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L327)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"closePosition"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:331](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L331)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getAccount"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:335](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L335)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLpReceiptIds"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:336](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L336)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:340](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L340)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"openPosition"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:341](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L341)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"owner"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:345](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L345)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:346](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L346)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLiquidityBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:350](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L350)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLiquidityCallback"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:354](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L354)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"renounceOwnership"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:358](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L358)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupplies"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:362](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L362)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferOwnership"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:366](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L366)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:370](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L370)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidityBatch"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:374](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L374)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidityCallback"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:378](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L378)

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
| `functionFragment` | ``"addLiquidity"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:158](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L158)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addLiquidityBatch"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`string`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:167](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L167)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"addLiquidityCallback"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:176](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L176)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenMintingBatch"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:184](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L184)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenValueBatch"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:192](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L192)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimLiquidity"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:200](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L200)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimLiquidityBatch"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:204](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L204)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimLiquidityCallback"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:208](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L208)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPosition"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:212](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L212)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"closePosition"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:216](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L216)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getAccount"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:220](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L220)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLpReceiptIds"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:224](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L224)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:228](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L228)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"openPosition"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:232](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L232)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"owner"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:243](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L243)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLiquidity"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:244](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L244)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLiquidityBatch"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`string`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:253](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L253)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLiquidityCallback"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:262](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L262)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"renounceOwnership"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:270](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L270)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupplies"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:274](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L274)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferOwnership"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:278](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L278)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidity"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:282](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L282)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidityBatch"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:286](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L286)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidityCallback"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:290](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L290)

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
| `nameOrSignatureOrTopic` | ``"OwnershipTransferred"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:387](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L387)

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
| `nameOrSignatureOrTopic` | ``"addLiquidity"`` \| ``"claimLiquidity"`` \| ``"closePosition"`` \| ``"openPosition"`` \| ``"removeLiquidity"`` \| ``"withdrawLiquidity"`` \| ``"claimPosition"`` \| ``"initialize"`` \| ``"addLiquidityBatch"`` \| ``"addLiquidityCallback"`` \| ``"calculateCLBTokenMintingBatch"`` \| ``"calculateCLBTokenValueBatch"`` \| ``"claimLiquidityBatch"`` \| ``"claimLiquidityCallback"`` \| ``"getAccount"`` \| ``"getLpReceiptIds"`` \| ``"owner"`` \| ``"removeLiquidityBatch"`` \| ``"removeLiquidityCallback"`` \| ``"renounceOwnership"`` \| ``"totalSupplies"`` \| ``"transferOwnership"`` \| ``"withdrawLiquidityBatch"`` \| ``"withdrawLiquidityCallback"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/periphery/ChromaticRouter.ts:130](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/periphery/ChromaticRouter.ts#L130)

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
