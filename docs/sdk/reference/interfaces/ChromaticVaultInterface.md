[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / ChromaticVaultInterface

# Interface: ChromaticVaultInterface

## Hierarchy

- `Interface`

  ↳ **`ChromaticVaultInterface`**

## Table of contents

### Properties

- [\_abiCoder](ChromaticVaultInterface.md#_abicoder)
- [\_isInterface](ChromaticVaultInterface.md#_isinterface)
- [deploy](ChromaticVaultInterface.md#deploy)
- [errors](ChromaticVaultInterface.md#errors)
- [events](ChromaticVaultInterface.md#events)
- [fragments](ChromaticVaultInterface.md#fragments)
- [functions](ChromaticVaultInterface.md#functions)
- [structs](ChromaticVaultInterface.md#structs)

### Methods

- [\_decodeParams](ChromaticVaultInterface.md#_decodeparams)
- [\_encodeParams](ChromaticVaultInterface.md#_encodeparams)
- [decodeErrorResult](ChromaticVaultInterface.md#decodeerrorresult)
- [decodeEventLog](ChromaticVaultInterface.md#decodeeventlog)
- [decodeFunctionData](ChromaticVaultInterface.md#decodefunctiondata)
- [decodeFunctionResult](ChromaticVaultInterface.md#decodefunctionresult)
- [encodeDeploy](ChromaticVaultInterface.md#encodedeploy)
- [encodeErrorResult](ChromaticVaultInterface.md#encodeerrorresult)
- [encodeEventLog](ChromaticVaultInterface.md#encodeeventlog)
- [encodeFilterTopics](ChromaticVaultInterface.md#encodefiltertopics)
- [encodeFunctionData](ChromaticVaultInterface.md#encodefunctiondata)
- [encodeFunctionResult](ChromaticVaultInterface.md#encodefunctionresult)
- [format](ChromaticVaultInterface.md#format)
- [getError](ChromaticVaultInterface.md#geterror)
- [getEvent](ChromaticVaultInterface.md#getevent)
- [getEventTopic](ChromaticVaultInterface.md#geteventtopic)
- [getFunction](ChromaticVaultInterface.md#getfunction)
- [getSighash](ChromaticVaultInterface.md#getsighash)
- [parseError](ChromaticVaultInterface.md#parseerror)
- [parseLog](ChromaticVaultInterface.md#parselog)
- [parseTransaction](ChromaticVaultInterface.md#parsetransaction)

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
| `FlashLoan(address,address,uint256,uint256,uint256,uint256)` | `EventFragment` |
| `MakerEarningDistributed(address,uint256,uint256)` | `EventFragment` |
| `MarketEarningAccumulated(address,uint256)` | `EventFragment` |
| `MarketEarningDistributed(address,uint256,uint256,uint256)` | `EventFragment` |
| `OnAddLiquidity(address,uint256)` | `EventFragment` |
| `OnClaimPosition(address,uint256,address,uint256,uint256)` | `EventFragment` |
| `OnOpenPosition(address,uint256,uint256,uint256,uint256)` | `EventFragment` |
| `OnSettlePendingLiquidity(address,uint256,uint256)` | `EventFragment` |
| `OnWithdrawLiquidity(address,uint256,address)` | `EventFragment` |
| `TransferKeeperFee(address,uint256,uint256)` | `EventFragment` |
| `TransferKeeperFee(uint256,uint256)` | `EventFragment` |
| `TransferProtocolFee(address,uint256,uint256)` | `EventFragment` |

#### Overrides

utils.Interface.events

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:330](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L330)

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
| `automate()` | `FunctionFragment` |
| `cancelMakerEarningDistributionTask(address)` | `FunctionFragment` |
| `cancelMarketEarningDistributionTask(address)` | `FunctionFragment` |
| `createMakerEarningDistributionTask(address)` | `FunctionFragment` |
| `createMarketEarningDistributionTask(address)` | `FunctionFragment` |
| `dedicatedMsgSender()` | `FunctionFragment` |
| `distributeMakerEarning(address)` | `FunctionFragment` |
| `distributeMarketEarning(address)` | `FunctionFragment` |
| `flashLoan(address,uint256,address,bytes)` | `FunctionFragment` |
| `getPendingBinShare(address,uint256)` | `FunctionFragment` |
| `makerBalances(address)` | `FunctionFragment` |
| `makerEarningDistributionTaskIds(address)` | `FunctionFragment` |
| `makerMarketBalances(address)` | `FunctionFragment` |
| `marketEarningDistributionTaskIds(address)` | `FunctionFragment` |
| `onAddLiquidity(uint256)` | `FunctionFragment` |
| `onClaimPosition(uint256,address,uint256,uint256)` | `FunctionFragment` |
| `onOpenPosition(uint256,uint256,uint256,uint256)` | `FunctionFragment` |
| `onSettlePendingLiquidity(uint256,uint256)` | `FunctionFragment` |
| `onWithdrawLiquidity(address,uint256)` | `FunctionFragment` |
| `pendingDeposits(address)` | `FunctionFragment` |
| `pendingMakerEarnings(address)` | `FunctionFragment` |
| `pendingMarketEarnings(address)` | `FunctionFragment` |
| `pendingWithdrawals(address)` | `FunctionFragment` |
| `resolveMakerEarningDistribution(address)` | `FunctionFragment` |
| `resolveMarketEarningDistribution(address)` | `FunctionFragment` |
| `takerBalances(address)` | `FunctionFragment` |
| `takerMarketBalances(address)` | `FunctionFragment` |
| `transferKeeperFee(address,uint256,uint256)` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:31](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L31)

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
| `functionFragment` | ``"automate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:223](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L223)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelMakerEarningDistributionTask"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:224](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L224)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelMarketEarningDistributionTask"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:228](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L228)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createMakerEarningDistributionTask"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:232](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L232)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createMarketEarningDistributionTask"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:236](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L236)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"dedicatedMsgSender"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:240](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L240)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"distributeMakerEarning"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:244](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L244)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"distributeMarketEarning"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:248](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L248)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"flashLoan"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:252](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L252)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPendingBinShare"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:253](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L253)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"makerBalances"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:257](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L257)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"makerEarningDistributionTaskIds"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:261](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L261)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"makerMarketBalances"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:265](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L265)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"marketEarningDistributionTaskIds"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:269](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L269)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onAddLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:273](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L273)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onClaimPosition"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:277](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L277)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onOpenPosition"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:281](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L281)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onSettlePendingLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:285](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L285)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onWithdrawLiquidity"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:289](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L289)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingDeposits"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:293](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L293)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingMakerEarnings"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:297](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L297)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingMarketEarnings"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:301](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L301)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingWithdrawals"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:305](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L305)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"resolveMakerEarningDistribution"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:309](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L309)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"resolveMarketEarningDistribution"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:313](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L313)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"takerBalances"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:317](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L317)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"takerMarketBalances"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:321](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L321)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferKeeperFee"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:325](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L325)

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

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"automate"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:94](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L94)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelMakerEarningDistributionTask"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:95](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L95)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cancelMarketEarningDistributionTask"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:99](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L99)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createMakerEarningDistributionTask"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:103](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L103)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createMarketEarningDistributionTask"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:107](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L107)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"dedicatedMsgSender"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:111](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L111)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"distributeMakerEarning"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:115](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L115)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"distributeMarketEarning"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:119](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L119)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"flashLoan"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BytesLike`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:123](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L123)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getPendingBinShare"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:132](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L132)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"makerBalances"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:136](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L136)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"makerEarningDistributionTaskIds"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:140](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L140)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"makerMarketBalances"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:144](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L144)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"marketEarningDistributionTaskIds"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:148](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L148)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onAddLiquidity"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:152](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L152)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onClaimPosition"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:156](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L156)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onOpenPosition"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:165](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L165)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onSettlePendingLiquidity"`` |
| `values` | [`PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:174](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L174)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"onWithdrawLiquidity"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:178](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L178)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingDeposits"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:182](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L182)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingMakerEarnings"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:186](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L186)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingMarketEarnings"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:190](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L190)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"pendingWithdrawals"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:194](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L194)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"resolveMakerEarningDistribution"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:198](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L198)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"resolveMarketEarningDistribution"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:202](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L202)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"takerBalances"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:206](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L206)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"takerMarketBalances"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:210](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L210)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferKeeperFee"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:214](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L214)

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
| `nameOrSignatureOrTopic` | ``"FlashLoan"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:345](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L345)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MakerEarningDistributed"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:346](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L346)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MarketEarningAccumulated"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:347](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L347)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MarketEarningDistributed"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:348](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L348)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OnAddLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:349](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L349)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OnClaimPosition"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:350](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L350)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OnOpenPosition"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:351](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L351)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OnSettlePendingLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:352](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L352)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OnWithdrawLiquidity"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:353](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L353)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferKeeperFee(uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:354](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L354)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"TransferKeeperFee(address,uint256,uint256)"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:357](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L357)

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

[src/gen/contracts/core/ChromaticVault.ts:360](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L360)

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
| `nameOrSignatureOrTopic` | ``"cancelMakerEarningDistributionTask"`` \| ``"cancelMarketEarningDistributionTask"`` \| ``"createMakerEarningDistributionTask"`` \| ``"createMarketEarningDistributionTask"`` \| ``"automate"`` \| ``"dedicatedMsgSender"`` \| ``"distributeMakerEarning"`` \| ``"distributeMarketEarning"`` \| ``"flashLoan"`` \| ``"getPendingBinShare"`` \| ``"makerBalances"`` \| ``"makerEarningDistributionTaskIds"`` \| ``"makerMarketBalances"`` \| ``"marketEarningDistributionTaskIds"`` \| ``"onAddLiquidity"`` \| ``"onClaimPosition"`` \| ``"onOpenPosition"`` \| ``"onSettlePendingLiquidity"`` \| ``"onWithdrawLiquidity"`` \| ``"pendingDeposits"`` \| ``"pendingMakerEarnings"`` \| ``"pendingMarketEarnings"`` \| ``"pendingWithdrawals"`` \| ``"resolveMakerEarningDistribution"`` \| ``"resolveMarketEarningDistribution"`` \| ``"takerBalances"`` \| ``"takerMarketBalances"`` \| ``"transferKeeperFee"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/core/ChromaticVault.ts:62](https://github.com/chromatic-protocol/sdk/blob/30fc1f3/src/gen/contracts/core/ChromaticVault.ts#L62)

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
