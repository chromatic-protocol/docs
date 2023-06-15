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

[src/gen/contracts/core/ChromaticMarket.ts:441](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L441)

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
| `getBinFreeLiquidity(int16)` | `FunctionFragment` |
| `getBinLiquidity(int16)` | `FunctionFragment` |
| `getBinValue(int16)` | `FunctionFragment` |
| `getClaimBurning(int16,uint256)` | `FunctionFragment` |
| `getLpReceipt(uint256)` | `FunctionFragment` |
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

[src/gen/contracts/core/ChromaticMarket.ts:103](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L103)

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

[src/gen/contracts/core/ChromaticMarket.ts:330](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L330)

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

[src/gen/contracts/core/ChromaticMarket.ts:334](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L334)

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

[src/gen/contracts/core/ChromaticMarket.ts:338](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L338)

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

[src/gen/contracts/core/ChromaticMarket.ts:342](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L342)

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

[src/gen/contracts/core/ChromaticMarket.ts:346](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L346)

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

[src/gen/contracts/core/ChromaticMarket.ts:350](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L350)

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

[src/gen/contracts/core/ChromaticMarket.ts:354](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L354)

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

[src/gen/contracts/core/ChromaticMarket.ts:358](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L358)

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

[src/gen/contracts/core/ChromaticMarket.ts:362](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L362)

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

[src/gen/contracts/core/ChromaticMarket.ts:363](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L363)

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

[src/gen/contracts/core/ChromaticMarket.ts:367](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L367)

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

[src/gen/contracts/core/ChromaticMarket.ts:371](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L371)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinFreeLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:372](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L372)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:376](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L376)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinValue"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:380](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L380)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getClaimBurning"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:384](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L384)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLpReceipt"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:388](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L388)

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

[src/gen/contracts/core/ChromaticMarket.ts:392](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L392)

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

[src/gen/contracts/core/ChromaticMarket.ts:396](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L396)

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

[src/gen/contracts/core/ChromaticMarket.ts:400](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L400)

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

[src/gen/contracts/core/ChromaticMarket.ts:404](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L404)

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

[src/gen/contracts/core/ChromaticMarket.ts:405](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L405)

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

[src/gen/contracts/core/ChromaticMarket.ts:406](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L406)

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

[src/gen/contracts/core/ChromaticMarket.ts:410](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L410)

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

[src/gen/contracts/core/ChromaticMarket.ts:414](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L414)

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

[src/gen/contracts/core/ChromaticMarket.ts:418](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L418)

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

[src/gen/contracts/core/ChromaticMarket.ts:422](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L422)

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

[src/gen/contracts/core/ChromaticMarket.ts:426](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L426)

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

[src/gen/contracts/core/ChromaticMarket.ts:427](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L427)

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

[src/gen/contracts/core/ChromaticMarket.ts:431](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L431)

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

[src/gen/contracts/core/ChromaticMarket.ts:435](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L435)

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

[src/gen/contracts/core/ChromaticMarket.ts:436](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L436)

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

[src/gen/contracts/core/ChromaticMarket.ts:174](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L174)

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

[src/gen/contracts/core/ChromaticMarket.ts:182](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L182)

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

[src/gen/contracts/core/ChromaticMarket.ts:186](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L186)

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

[src/gen/contracts/core/ChromaticMarket.ts:190](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L190)

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

[src/gen/contracts/core/ChromaticMarket.ts:194](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L194)

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

[src/gen/contracts/core/ChromaticMarket.ts:198](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L198)

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

[src/gen/contracts/core/ChromaticMarket.ts:202](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L202)

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

[src/gen/contracts/core/ChromaticMarket.ts:210](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L210)

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

[src/gen/contracts/core/ChromaticMarket.ts:218](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L218)

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

[src/gen/contracts/core/ChromaticMarket.ts:219](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L219)

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

[src/gen/contracts/core/ChromaticMarket.ts:223](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L223)

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

[src/gen/contracts/core/ChromaticMarket.ts:227](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L227)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinFreeLiquidity"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:228](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L228)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinLiquidity"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:232](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L232)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinValue"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:236](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L236)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getClaimBurning"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:240](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L240)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getLpReceipt"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:244](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L244)

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

[src/gen/contracts/core/ChromaticMarket.ts:248](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L248)

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

[src/gen/contracts/core/ChromaticMarket.ts:252](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L252)

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

[src/gen/contracts/core/ChromaticMarket.ts:256](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L256)

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

[src/gen/contracts/core/ChromaticMarket.ts:260](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L260)

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

[src/gen/contracts/core/ChromaticMarket.ts:268](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L268)

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

[src/gen/contracts/core/ChromaticMarket.ts:272](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L272)

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

[src/gen/contracts/core/ChromaticMarket.ts:282](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L282)

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

[src/gen/contracts/core/ChromaticMarket.ts:292](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L292)

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

[src/gen/contracts/core/ChromaticMarket.ts:303](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L303)

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

[src/gen/contracts/core/ChromaticMarket.ts:307](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L307)

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

[src/gen/contracts/core/ChromaticMarket.ts:315](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L315)

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

[src/gen/contracts/core/ChromaticMarket.ts:316](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L316)

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

[src/gen/contracts/core/ChromaticMarket.ts:320](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L320)

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

[src/gen/contracts/core/ChromaticMarket.ts:324](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L324)

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

[src/gen/contracts/core/ChromaticMarket.ts:325](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L325)

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

[src/gen/contracts/core/ChromaticMarket.ts:453](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L453)

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

[src/gen/contracts/core/ChromaticMarket.ts:454](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L454)

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

[src/gen/contracts/core/ChromaticMarket.ts:455](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L455)

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

[src/gen/contracts/core/ChromaticMarket.ts:456](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L456)

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

[src/gen/contracts/core/ChromaticMarket.ts:457](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L457)

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

[src/gen/contracts/core/ChromaticMarket.ts:458](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L458)

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

[src/gen/contracts/core/ChromaticMarket.ts:459](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L459)

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

[src/gen/contracts/core/ChromaticMarket.ts:460](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L460)

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

[src/gen/contracts/core/ChromaticMarket.ts:461](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L461)

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
| `nameOrSignatureOrTopic` | ``"supportsInterface"`` \| ``"claimPosition(uint256,address,bytes)"`` \| ``"claimPosition(uint256,address,uint256)"`` \| ``"addLiquidity"`` \| ``"calculateCLBTokenMinting"`` \| ``"calculateCLBTokenValue"`` \| ``"checkClaimPosition"`` \| ``"checkLiquidation"`` \| ``"claimLiquidity"`` \| ``"clbToken"`` \| ``"closePosition"`` \| ``"distributeEarningToBins"`` \| ``"factory"`` \| ``"getBinFreeLiquidity"`` \| ``"getBinLiquidity"`` \| ``"getBinValue"`` \| ``"getClaimBurning"`` \| ``"getLpReceipt"`` \| ``"getPositions"`` \| ``"getProtocolFee"`` \| ``"keeperFeePayer"`` \| ``"liquidate"`` \| ``"liquidator"`` \| ``"onERC1155BatchReceived"`` \| ``"onERC1155Received"`` \| ``"openPosition"`` \| ``"oracleProvider"`` \| ``"removeLiquidity"`` \| ``"settle"`` \| ``"settlementToken"`` \| ``"vault"`` \| ``"withdrawLiquidity"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:138](https://github.com/chromatic-protocol/sdk/blob/ff89bc3/src/gen/contracts/core/ChromaticMarket.ts#L138)

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
