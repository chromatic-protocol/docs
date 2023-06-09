[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / ChromaticMarketInterface

# Interface: ChromaticMarketInterface

## Hierarchy

- `Interface`

  ↳ **`ChromaticMarketInterface`**

## Table of contents

### Properties

- [\_abiCoder](ChromaticMarketInterface.md#_abicoder)
- [\_isInterface](ChromaticMarketInterface.md#_isinterface)
- [deploy](ChromaticMarketInterface.md#deploy)
- [errors](ChromaticMarketInterface.md#errors)
- [events](ChromaticMarketInterface.md#events)
- [fragments](ChromaticMarketInterface.md#fragments)
- [functions](ChromaticMarketInterface.md#functions)
- [structs](ChromaticMarketInterface.md#structs)

### Methods

- [\_decodeParams](ChromaticMarketInterface.md#_decodeparams)
- [\_encodeParams](ChromaticMarketInterface.md#_encodeparams)
- [decodeErrorResult](ChromaticMarketInterface.md#decodeerrorresult)
- [decodeEventLog](ChromaticMarketInterface.md#decodeeventlog)
- [decodeFunctionData](ChromaticMarketInterface.md#decodefunctiondata)
- [decodeFunctionResult](ChromaticMarketInterface.md#decodefunctionresult)
- [encodeDeploy](ChromaticMarketInterface.md#encodedeploy)
- [encodeErrorResult](ChromaticMarketInterface.md#encodeerrorresult)
- [encodeEventLog](ChromaticMarketInterface.md#encodeeventlog)
- [encodeFilterTopics](ChromaticMarketInterface.md#encodefiltertopics)
- [encodeFunctionData](ChromaticMarketInterface.md#encodefunctiondata)
- [encodeFunctionResult](ChromaticMarketInterface.md#encodefunctionresult)
- [format](ChromaticMarketInterface.md#format)
- [getError](ChromaticMarketInterface.md#geterror)
- [getEvent](ChromaticMarketInterface.md#getevent)
- [getEventTopic](ChromaticMarketInterface.md#geteventtopic)
- [getFunction](ChromaticMarketInterface.md#getfunction)
- [getSighash](ChromaticMarketInterface.md#getsighash)
- [parseError](ChromaticMarketInterface.md#parseerror)
- [parseLog](ChromaticMarketInterface.md#parselog)
- [parseTransaction](ChromaticMarketInterface.md#parsetransaction)

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
| `AddLiquidity(address,tuple)` | `EventFragment` |
| `ClaimLiquidity(address,uint256,tuple)` | `EventFragment` |
| `ClaimPosition(address,int256,uint256,tuple)` | `EventFragment` |
| `ClosePosition(address,tuple)` | `EventFragment` |
| `Liquidate(address,uint256,tuple)` | `EventFragment` |
| `OpenPosition(address,tuple)` | `EventFragment` |
| `RemoveLiquidity(address,tuple)` | `EventFragment` |
| `TransferProtocolFee(uint256,uint256)` | `EventFragment` |
| `WithdrawLiquidity(address,uint256,uint256,tuple)` | `EventFragment` |

#### Overrides

utils.Interface.events

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:411](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L411)

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
| `addLiquidity(address,int16,bytes)` | `FunctionFragment` |
| `calculateCLBTokenMinting(int16,uint256)` | `FunctionFragment` |
| `calculateCLBTokenValue(int16,uint256)` | `FunctionFragment` |
| `checkClaimPosition(uint256)` | `FunctionFragment` |
| `checkLiquidation(uint256)` | `FunctionFragment` |
| `claimLiquidity(uint256,bytes)` | `FunctionFragment` |
| `claimPosition(uint256,address,bytes)` | `FunctionFragment` |
| `claimPosition(uint256,address,uint256)` | `FunctionFragment` |
| `clbToken()` | `FunctionFragment` |
| `closePosition(uint256)` | `FunctionFragment` |
| `distributeEarningToBins(uint256,uint256)` | `FunctionFragment` |
| `factory()` | `FunctionFragment` |
| `getBinFreeLiquidities(int16[])` | `FunctionFragment` |
| `getBinLiquidities(int16[])` | `FunctionFragment` |
| `getPositions(uint256[])` | `FunctionFragment` |
| `getProtocolFee(uint256)` | `FunctionFragment` |
| `keeperFeePayer()` | `FunctionFragment` |
| `liquidate(uint256,address,uint256)` | `FunctionFragment` |
| `liquidator()` | `FunctionFragment` |
| `onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)` | `FunctionFragment` |
| `onERC1155Received(address,address,uint256,uint256,bytes)` | `FunctionFragment` |
| `openPosition(int224,uint32,uint256,uint256,uint256,bytes)` | `FunctionFragment` |
| `oracleProvider()` | `FunctionFragment` |
| `removeLiquidity(address,int16,bytes)` | `FunctionFragment` |
| `settle()` | `FunctionFragment` |
| `settlementToken()` | `FunctionFragment` |
| `supportsInterface(bytes4)` | `FunctionFragment` |
| `vault()` | `FunctionFragment` |
| `withdrawLiquidity(uint256,bytes)` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:103](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L103)

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

[src/gen/contracts/core/ChromaticMarket.ts:312](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L312)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenMinting"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:316](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L316)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenValue"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:320](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L320)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"checkClaimPosition"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:324](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L324)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"checkLiquidation"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:328](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L328)

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

[src/gen/contracts/core/ChromaticMarket.ts:332](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L332)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPosition(uint256,address,bytes)"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:336](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L336)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPosition(uint256,address,uint256)"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:340](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L340)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"clbToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:344](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L344)

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

[src/gen/contracts/core/ChromaticMarket.ts:345](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L345)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"distributeEarningToBins"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:349](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L349)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"factory"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:353](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L353)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinFreeLiquidities"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:354](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L354)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinLiquidities"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:358](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L358)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPositions"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:362](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L362)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getProtocolFee"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:366](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L366)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"keeperFeePayer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:370](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L370)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:374](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L374)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidator"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:375](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L375)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onERC1155BatchReceived"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:376](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L376)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onERC1155Received"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:380](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L380)

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

[src/gen/contracts/core/ChromaticMarket.ts:384](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L384)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"oracleProvider"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:388](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L388)

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

[src/gen/contracts/core/ChromaticMarket.ts:392](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L392)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"settle"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:396](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L396)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"settlementToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:397](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L397)

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

[src/gen/contracts/core/ChromaticMarket.ts:401](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L401)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"vault"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:405](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L405)

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

[src/gen/contracts/core/ChromaticMarket.ts:406](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L406)

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
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:168](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L168)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenMinting"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:176](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L176)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateCLBTokenValue"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:180](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L180)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"checkClaimPosition"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:184](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L184)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"checkLiquidation"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:188](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L188)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimLiquidity"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:192](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L192)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPosition(uint256,address,bytes)"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:196](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L196)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPosition(uint256,address,uint256)"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:204](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L204)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"clbToken"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:212](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L212)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"closePosition"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:213](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L213)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"distributeEarningToBins"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:217](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L217)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"factory"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:221](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L221)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinFreeLiquidities"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:222](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L222)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinLiquidities"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:226](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L226)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPositions"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:230](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L230)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getProtocolFee"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:234](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L234)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"keeperFeePayer"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:238](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L238)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidate"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:242](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L242)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidator"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:250](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L250)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onERC1155BatchReceived"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BigNumberish`\>[], `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:254](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L254)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onERC1155Received"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:264](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L264)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"openPosition"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:274](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L274)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"oracleProvider"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:285](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L285)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLiquidity"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:289](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L289)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"settle"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:297](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L297)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"settlementToken"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:298](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L298)

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

[src/gen/contracts/core/ChromaticMarket.ts:302](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L302)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"vault"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:306](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L306)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdrawLiquidity"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:307](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L307)

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
| `nameOrSignatureOrTopic` | ``"AddLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:423](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L423)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ClaimLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:424](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L424)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ClaimPosition"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:425](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L425)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ClosePosition"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:426](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L426)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Liquidate"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:427](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L427)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OpenPosition"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:428](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L428)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"RemoveLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:429](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L429)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferProtocolFee"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:430](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L430)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"WithdrawLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:431](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L431)

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
| `nameOrSignatureOrTopic` | ``"supportsInterface"`` \| ``"claimPosition(uint256,address,bytes)"`` \| ``"claimPosition(uint256,address,uint256)"`` \| ``"addLiquidity"`` \| ``"calculateCLBTokenMinting"`` \| ``"calculateCLBTokenValue"`` \| ``"checkClaimPosition"`` \| ``"checkLiquidation"`` \| ``"claimLiquidity"`` \| ``"clbToken"`` \| ``"closePosition"`` \| ``"distributeEarningToBins"`` \| ``"factory"`` \| ``"getBinFreeLiquidities"`` \| ``"getBinLiquidities"`` \| ``"getPositions"`` \| ``"getProtocolFee"`` \| ``"keeperFeePayer"`` \| ``"liquidate"`` \| ``"liquidator"`` \| ``"onERC1155BatchReceived"`` \| ``"onERC1155Received"`` \| ``"openPosition"`` \| ``"oracleProvider"`` \| ``"removeLiquidity"`` \| ``"settle"`` \| ``"settlementToken"`` \| ``"vault"`` \| ``"withdrawLiquidity"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:135](https://github.com/chromatic-protocol/sdk/blob/10aa618/src/gen/contracts/core/ChromaticMarket.ts#L135)

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
