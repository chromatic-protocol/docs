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

[src/gen/contracts/core/ChromaticMarket.ts:474](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L474)

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
| `checkClaimPosition(uint256)` | `FunctionFragment` |
| `checkLiquidation(uint256)` | `FunctionFragment` |
| `claimLiquidity(uint256,bytes)` | `FunctionFragment` |
| `claimPosition(uint256,address,bytes)` | `FunctionFragment` |
| `claimPosition(uint256,address,uint256)` | `FunctionFragment` |
| `claimableLiquidity(int16,uint256)` | `FunctionFragment` |
| `clbToken()` | `FunctionFragment` |
| `closePosition(uint256)` | `FunctionFragment` |
| `distributeEarningToBins(uint256,uint256)` | `FunctionFragment` |
| `factory()` | `FunctionFragment` |
| `getBinFreeLiquidity(int16)` | `FunctionFragment` |
| `getBinLiquidity(int16)` | `FunctionFragment` |
| `getBinValues(int16[])` | `FunctionFragment` |
| `getLpReceipt(uint256)` | `FunctionFragment` |
| `getPositions(uint256[])` | `FunctionFragment` |
| `getProtocolFee(uint256)` | `FunctionFragment` |
| `keeperFeePayer()` | `FunctionFragment` |
| `liquidate(uint256,address,uint256)` | `FunctionFragment` |
| `liquidator()` | `FunctionFragment` |
| `liquidityBinStatuses()` | `FunctionFragment` |
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

[src/gen/contracts/core/ChromaticMarket.ts:146](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L146)

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

[src/gen/contracts/core/ChromaticMarket.ts:367](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L367)

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

[src/gen/contracts/core/ChromaticMarket.ts:371](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L371)

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

[src/gen/contracts/core/ChromaticMarket.ts:375](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L375)

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

[src/gen/contracts/core/ChromaticMarket.ts:379](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L379)

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

[src/gen/contracts/core/ChromaticMarket.ts:383](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L383)

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

[src/gen/contracts/core/ChromaticMarket.ts:387](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L387)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimableLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:391](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L391)

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

[src/gen/contracts/core/ChromaticMarket.ts:395](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L395)

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

[src/gen/contracts/core/ChromaticMarket.ts:396](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L396)

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

[src/gen/contracts/core/ChromaticMarket.ts:400](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L400)

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

[src/gen/contracts/core/ChromaticMarket.ts:404](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L404)

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

[src/gen/contracts/core/ChromaticMarket.ts:405](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L405)

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

[src/gen/contracts/core/ChromaticMarket.ts:409](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L409)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinValues"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:413](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L413)

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

[src/gen/contracts/core/ChromaticMarket.ts:417](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L417)

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

[src/gen/contracts/core/ChromaticMarket.ts:421](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L421)

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

[src/gen/contracts/core/ChromaticMarket.ts:425](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L425)

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

[src/gen/contracts/core/ChromaticMarket.ts:429](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L429)

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

[src/gen/contracts/core/ChromaticMarket.ts:433](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L433)

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

[src/gen/contracts/core/ChromaticMarket.ts:434](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L434)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidityBinStatuses"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:435](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L435)

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

[src/gen/contracts/core/ChromaticMarket.ts:439](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L439)

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

[src/gen/contracts/core/ChromaticMarket.ts:443](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L443)

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

[src/gen/contracts/core/ChromaticMarket.ts:447](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L447)

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

[src/gen/contracts/core/ChromaticMarket.ts:451](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L451)

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

[src/gen/contracts/core/ChromaticMarket.ts:455](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L455)

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

[src/gen/contracts/core/ChromaticMarket.ts:459](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L459)

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

[src/gen/contracts/core/ChromaticMarket.ts:460](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L460)

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

[src/gen/contracts/core/ChromaticMarket.ts:464](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L464)

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

[src/gen/contracts/core/ChromaticMarket.ts:468](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L468)

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

[src/gen/contracts/core/ChromaticMarket.ts:469](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L469)

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

[src/gen/contracts/core/ChromaticMarket.ts:215](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L215)

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

[src/gen/contracts/core/ChromaticMarket.ts:223](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L223)

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

[src/gen/contracts/core/ChromaticMarket.ts:227](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L227)

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

[src/gen/contracts/core/ChromaticMarket.ts:231](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L231)

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

[src/gen/contracts/core/ChromaticMarket.ts:235](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L235)

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

[src/gen/contracts/core/ChromaticMarket.ts:243](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L243)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimableLiquidity"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:251](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L251)

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

[src/gen/contracts/core/ChromaticMarket.ts:255](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L255)

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

[src/gen/contracts/core/ChromaticMarket.ts:256](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L256)

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

[src/gen/contracts/core/ChromaticMarket.ts:260](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L260)

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

[src/gen/contracts/core/ChromaticMarket.ts:264](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L264)

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

[src/gen/contracts/core/ChromaticMarket.ts:265](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L265)

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

[src/gen/contracts/core/ChromaticMarket.ts:269](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L269)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getBinValues"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:273](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L273)

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

[src/gen/contracts/core/ChromaticMarket.ts:277](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L277)

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

[src/gen/contracts/core/ChromaticMarket.ts:281](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L281)

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

[src/gen/contracts/core/ChromaticMarket.ts:285](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L285)

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

[src/gen/contracts/core/ChromaticMarket.ts:289](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L289)

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

[src/gen/contracts/core/ChromaticMarket.ts:293](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L293)

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

[src/gen/contracts/core/ChromaticMarket.ts:301](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L301)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"liquidityBinStatuses"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:305](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L305)

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

[src/gen/contracts/core/ChromaticMarket.ts:309](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L309)

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

[src/gen/contracts/core/ChromaticMarket.ts:319](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L319)

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

[src/gen/contracts/core/ChromaticMarket.ts:329](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L329)

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

[src/gen/contracts/core/ChromaticMarket.ts:340](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L340)

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

[src/gen/contracts/core/ChromaticMarket.ts:344](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L344)

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

[src/gen/contracts/core/ChromaticMarket.ts:352](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L352)

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

[src/gen/contracts/core/ChromaticMarket.ts:353](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L353)

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

[src/gen/contracts/core/ChromaticMarket.ts:357](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L357)

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

[src/gen/contracts/core/ChromaticMarket.ts:361](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L361)

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

[src/gen/contracts/core/ChromaticMarket.ts:362](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L362)

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

[src/gen/contracts/core/ChromaticMarket.ts:486](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L486)

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

[src/gen/contracts/core/ChromaticMarket.ts:487](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L487)

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

[src/gen/contracts/core/ChromaticMarket.ts:488](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L488)

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

[src/gen/contracts/core/ChromaticMarket.ts:489](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L489)

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

[src/gen/contracts/core/ChromaticMarket.ts:490](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L490)

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

[src/gen/contracts/core/ChromaticMarket.ts:491](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L491)

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

[src/gen/contracts/core/ChromaticMarket.ts:492](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L492)

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

[src/gen/contracts/core/ChromaticMarket.ts:493](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L493)

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

[src/gen/contracts/core/ChromaticMarket.ts:494](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L494)

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
| `nameOrSignatureOrTopic` | ``"supportsInterface"`` \| ``"claimPosition(uint256,address,bytes)"`` \| ``"claimPosition(uint256,address,uint256)"`` \| ``"addLiquidity"`` \| ``"checkClaimPosition"`` \| ``"checkLiquidation"`` \| ``"claimLiquidity"`` \| ``"claimableLiquidity"`` \| ``"clbToken"`` \| ``"closePosition"`` \| ``"distributeEarningToBins"`` \| ``"factory"`` \| ``"getBinFreeLiquidity"`` \| ``"getBinLiquidity"`` \| ``"getBinValues"`` \| ``"getLpReceipt"`` \| ``"getPositions"`` \| ``"getProtocolFee"`` \| ``"keeperFeePayer"`` \| ``"liquidate"`` \| ``"liquidator"`` \| ``"liquidityBinStatuses"`` \| ``"onERC1155BatchReceived"`` \| ``"onERC1155Received"`` \| ``"openPosition"`` \| ``"oracleProvider"`` \| ``"removeLiquidity"`` \| ``"settle"`` \| ``"settlementToken"`` \| ``"vault"`` \| ``"withdrawLiquidity"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:180](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L180)

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
