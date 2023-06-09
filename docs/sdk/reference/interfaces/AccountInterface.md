[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / AccountInterface

# Interface: AccountInterface

## Hierarchy

- `Interface`

  ↳ **`AccountInterface`**

## Table of contents

### Properties

- [\_abiCoder](AccountInterface.md#_abicoder)
- [\_isInterface](AccountInterface.md#_isinterface)
- [deploy](AccountInterface.md#deploy)
- [errors](AccountInterface.md#errors)
- [events](AccountInterface.md#events)
- [fragments](AccountInterface.md#fragments)
- [functions](AccountInterface.md#functions)
- [structs](AccountInterface.md#structs)

### Methods

- [\_decodeParams](AccountInterface.md#_decodeparams)
- [\_encodeParams](AccountInterface.md#_encodeparams)
- [decodeErrorResult](AccountInterface.md#decodeerrorresult)
- [decodeEventLog](AccountInterface.md#decodeeventlog)
- [decodeFunctionData](AccountInterface.md#decodefunctiondata)
- [decodeFunctionResult](AccountInterface.md#decodefunctionresult)
- [encodeDeploy](AccountInterface.md#encodedeploy)
- [encodeErrorResult](AccountInterface.md#encodeerrorresult)
- [encodeEventLog](AccountInterface.md#encodeeventlog)
- [encodeFilterTopics](AccountInterface.md#encodefiltertopics)
- [encodeFunctionData](AccountInterface.md#encodefunctiondata)
- [encodeFunctionResult](AccountInterface.md#encodefunctionresult)
- [format](AccountInterface.md#format)
- [getError](AccountInterface.md#geterror)
- [getEvent](AccountInterface.md#getevent)
- [getEventTopic](AccountInterface.md#geteventtopic)
- [getFunction](AccountInterface.md#getfunction)
- [getSighash](AccountInterface.md#getsighash)
- [parseError](AccountInterface.md#parseerror)
- [parseLog](AccountInterface.md#parselog)
- [parseTransaction](AccountInterface.md#parsetransaction)

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

#### Overrides

utils.Interface.events

#### Defined in

[src/gen/contracts/periphery/Account.ts:190](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L190)

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
| `balance(address)` | `FunctionFragment` |
| `claimPosition(address,uint256)` | `FunctionFragment` |
| `claimPositionCallback(uint256,bytes)` | `FunctionFragment` |
| `closePosition(address,uint256)` | `FunctionFragment` |
| `getPositionIds(address)` | `FunctionFragment` |
| `hasPositionId(address,uint256)` | `FunctionFragment` |
| `initialize(address,address,address)` | `FunctionFragment` |
| `openPosition(address,int224,uint32,uint256,uint256,uint256)` | `FunctionFragment` |
| `openPositionCallback(address,address,uint256,bytes)` | `FunctionFragment` |
| `withdraw(address,uint256)` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/gen/contracts/periphery/Account.ts:74](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L74)

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
| `functionFragment` | ``"balance"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/Account.ts:158](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L158)

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

[src/gen/contracts/periphery/Account.ts:159](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L159)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPositionCallback"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/Account.ts:163](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L163)

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

[src/gen/contracts/periphery/Account.ts:167](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L167)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPositionIds"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/Account.ts:171](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L171)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"hasPositionId"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/Account.ts:175](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L175)

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

[src/gen/contracts/periphery/Account.ts:179](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L179)

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

[src/gen/contracts/periphery/Account.ts:180](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L180)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"openPositionCallback"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/Account.ts:184](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L184)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdraw"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/periphery/Account.ts:188](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L188)

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
| `functionFragment` | ``"balance"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/Account.ts:101](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L101)

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

[src/gen/contracts/periphery/Account.ts:105](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L105)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"claimPositionCallback"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/Account.ts:109](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L109)

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

[src/gen/contracts/periphery/Account.ts:113](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L113)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPositionIds"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/Account.ts:117](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L117)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"hasPositionId"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/Account.ts:121](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L121)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"initialize"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/Account.ts:125](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L125)

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

[src/gen/contracts/periphery/Account.ts:133](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L133)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"openPositionCallback"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/Account.ts:144](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L144)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdraw"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/periphery/Account.ts:153](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L153)

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
| `nameOrSignatureOrTopic` | `string` |

#### Returns

`EventFragment`

#### Inherited from

utils.Interface.getEvent

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:59

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
| `nameOrSignatureOrTopic` | ``"closePosition"`` \| ``"openPosition"`` \| ``"balance"`` \| ``"claimPosition"`` \| ``"claimPositionCallback"`` \| ``"getPositionIds"`` \| ``"hasPositionId"`` \| ``"initialize"`` \| ``"openPositionCallback"`` \| ``"withdraw"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/periphery/Account.ts:87](https://github.com/chromatic-protocol/sdk/blob/5e51723/src/gen/contracts/periphery/Account.ts#L87)

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
