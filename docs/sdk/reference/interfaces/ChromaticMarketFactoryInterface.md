[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / ChromaticMarketFactoryInterface

# Interface: ChromaticMarketFactoryInterface

## Hierarchy

- `Interface`

  ↳ **`ChromaticMarketFactoryInterface`**

## Table of contents

### Properties

- [\_abiCoder](ChromaticMarketFactoryInterface.md#_abicoder)
- [\_isInterface](ChromaticMarketFactoryInterface.md#_isinterface)
- [deploy](ChromaticMarketFactoryInterface.md#deploy)
- [errors](ChromaticMarketFactoryInterface.md#errors)
- [events](ChromaticMarketFactoryInterface.md#events)
- [fragments](ChromaticMarketFactoryInterface.md#fragments)
- [functions](ChromaticMarketFactoryInterface.md#functions)
- [structs](ChromaticMarketFactoryInterface.md#structs)

### Methods

- [\_decodeParams](ChromaticMarketFactoryInterface.md#_decodeparams)
- [\_encodeParams](ChromaticMarketFactoryInterface.md#_encodeparams)
- [decodeErrorResult](ChromaticMarketFactoryInterface.md#decodeerrorresult)
- [decodeEventLog](ChromaticMarketFactoryInterface.md#decodeeventlog)
- [decodeFunctionData](ChromaticMarketFactoryInterface.md#decodefunctiondata)
- [decodeFunctionResult](ChromaticMarketFactoryInterface.md#decodefunctionresult)
- [encodeDeploy](ChromaticMarketFactoryInterface.md#encodedeploy)
- [encodeErrorResult](ChromaticMarketFactoryInterface.md#encodeerrorresult)
- [encodeEventLog](ChromaticMarketFactoryInterface.md#encodeeventlog)
- [encodeFilterTopics](ChromaticMarketFactoryInterface.md#encodefiltertopics)
- [encodeFunctionData](ChromaticMarketFactoryInterface.md#encodefunctiondata)
- [encodeFunctionResult](ChromaticMarketFactoryInterface.md#encodefunctionresult)
- [format](ChromaticMarketFactoryInterface.md#format)
- [getError](ChromaticMarketFactoryInterface.md#geterror)
- [getEvent](ChromaticMarketFactoryInterface.md#getevent)
- [getEventTopic](ChromaticMarketFactoryInterface.md#geteventtopic)
- [getFunction](ChromaticMarketFactoryInterface.md#getfunction)
- [getSighash](ChromaticMarketFactoryInterface.md#getsighash)
- [parseError](ChromaticMarketFactoryInterface.md#parseerror)
- [parseLog](ChromaticMarketFactoryInterface.md#parselog)
- [parseTransaction](ChromaticMarketFactoryInterface.md#parsetransaction)

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
| `InterestRateRecordAppended(address,uint256,uint256)` | `EventFragment` |
| `LastInterestRateRecordRemoved(address,uint256,uint256)` | `EventFragment` |
| `MarketCreated(address,address,address)` | `EventFragment` |
| `OracleProviderRegistered(address)` | `EventFragment` |
| `OracleProviderUnregistered(address)` | `EventFragment` |
| `SetEarningDistributionThreshold(address,uint256)` | `EventFragment` |
| `SetFlashLoanFeeRate(address,uint256)` | `EventFragment` |
| `SetKeeperFeePayer(address)` | `EventFragment` |
| `SetLiquidator(address)` | `EventFragment` |
| `SetMinimumMargin(address,uint256)` | `EventFragment` |
| `SetUniswapFeeTier(address,uint24)` | `EventFragment` |
| `SetVault(address)` | `EventFragment` |
| `SettlementTokenRegistered(address,uint256,uint256,uint256,uint256,uint24)` | `EventFragment` |
| `UpdateDao(address)` | `EventFragment` |
| `UpdateTreasury(address)` | `EventFragment` |

#### Overrides

utils.Interface.events

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:432](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L432)

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
| `appendInterestRateRecord(address,uint256,uint256)` | `FunctionFragment` |
| `calculateInterest(address,uint256,uint256,uint256)` | `FunctionFragment` |
| `cancelMakerEarningDistributionTask(address)` | `FunctionFragment` |
| `cancelMarketEarningDistributionTask(address)` | `FunctionFragment` |
| `createMakerEarningDistributionTask(address)` | `FunctionFragment` |
| `createMarket(address,address)` | `FunctionFragment` |
| `createMarketEarningDistributionTask(address)` | `FunctionFragment` |
| `currentInterestRate(address)` | `FunctionFragment` |
| `dao()` | `FunctionFragment` |
| `getEarningDistributionThreshold(address)` | `FunctionFragment` |
| `getFlashLoanFeeRate(address)` | `FunctionFragment` |
| `getInterestRateRecords(address)` | `FunctionFragment` |
| `getMarket(address,address)` | `FunctionFragment` |
| `getMarkets()` | `FunctionFragment` |
| `getMarketsBySettlmentToken(address)` | `FunctionFragment` |
| `getMinimumMargin(address)` | `FunctionFragment` |
| `getUniswapFeeTier(address)` | `FunctionFragment` |
| `isRegisteredMarket(address)` | `FunctionFragment` |
| `isRegisteredOracleProvider(address)` | `FunctionFragment` |
| `isRegisteredSettlementToken(address)` | `FunctionFragment` |
| `keeperFeePayer()` | `FunctionFragment` |
| `liquidator()` | `FunctionFragment` |
| `parameters()` | `FunctionFragment` |
| `registerOracleProvider(address)` | `FunctionFragment` |
| `registerSettlementToken(address,uint256,uint256,uint256,uint256,uint24)` | `FunctionFragment` |
| `registeredOracleProviders()` | `FunctionFragment` |
| `registeredSettlementTokens()` | `FunctionFragment` |
| `removeLastInterestRateRecord(address)` | `FunctionFragment` |
| `setEarningDistributionThreshold(address,uint256)` | `FunctionFragment` |
| `setFlashLoanFeeRate(address,uint256)` | `FunctionFragment` |
| `setKeeperFeePayer(address)` | `FunctionFragment` |
| `setLiquidator(address)` | `FunctionFragment` |
| `setMinimumMargin(address,uint256)` | `FunctionFragment` |
| `setUniswapFeeTier(address,uint24)` | `FunctionFragment` |
| `setVault(address)` | `FunctionFragment` |
| `treasury()` | `FunctionFragment` |
| `unregisterOracleProvider(address)` | `FunctionFragment` |
| `updateDao(address)` | `FunctionFragment` |
| `updateTreasury(address)` | `FunctionFragment` |
| `vault()` | `FunctionFragment` |

#### Overrides

utils.Interface.functions

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:43](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L43)

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
| `functionFragment` | ``"appendInterestRateRecord"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:298](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L298)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateInterest"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:302](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L302)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:306](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L306)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:310](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L310)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:314](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L314)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createMarket"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:318](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L318)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:322](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L322)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"currentInterestRate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:326](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L326)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"dao"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:330](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L330)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEarningDistributionThreshold"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:331](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L331)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getFlashLoanFeeRate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:335](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L335)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestRateRecords"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:339](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L339)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarket"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:343](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L343)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarkets"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:344](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L344)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarketsBySettlmentToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:345](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L345)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMinimumMargin"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:349](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L349)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getUniswapFeeTier"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:353](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L353)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isRegisteredMarket"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:357](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L357)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isRegisteredOracleProvider"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:361](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L361)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isRegisteredSettlementToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:365](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L365)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:369](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L369)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:373](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L373)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"parameters"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:374](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L374)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerOracleProvider"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:375](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L375)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerSettlementToken"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:379](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L379)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registeredOracleProviders"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:383](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L383)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registeredSettlementTokens"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:387](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L387)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLastInterestRateRecord"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:391](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L391)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setEarningDistributionThreshold"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:395](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L395)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setFlashLoanFeeRate"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:399](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L399)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setKeeperFeePayer"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:403](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L403)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setLiquidator"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:407](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L407)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setMinimumMargin"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:411](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L411)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setUniswapFeeTier"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:415](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L415)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setVault"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:419](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L419)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"treasury"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:420](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L420)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterOracleProvider"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:421](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L421)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateDao"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:425](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L425)

▸ **decodeFunctionResult**(`functionFragment`, `data`): `Result`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateTreasury"`` |
| `data` | `BytesLike` |

#### Returns

`Result`

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:426](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L426)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:430](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L430)

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
| `functionFragment` | ``"appendInterestRateRecord"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:130](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L130)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"calculateInterest"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:138](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L138)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:147](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L147)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:151](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L151)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:155](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L155)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"createMarket"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:159](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L159)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:163](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L163)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"currentInterestRate"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:167](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L167)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"dao"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:171](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L171)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getEarningDistributionThreshold"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:172](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L172)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getFlashLoanFeeRate"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:176](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L176)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getInterestRateRecords"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:180](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L180)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarket"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:184](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L184)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarkets"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:188](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L188)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMarketsBySettlmentToken"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:192](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L192)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getMinimumMargin"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:196](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L196)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getUniswapFeeTier"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:200](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L200)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isRegisteredMarket"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:204](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L204)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isRegisteredOracleProvider"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:208](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L208)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isRegisteredSettlementToken"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:212](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L212)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:216](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L216)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:220](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L220)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"parameters"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:224](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L224)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerOracleProvider"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:228](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L228)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registerSettlementToken"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:232](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L232)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registeredOracleProviders"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:243](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L243)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"registeredSettlementTokens"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:247](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L247)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"removeLastInterestRateRecord"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:251](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L251)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setEarningDistributionThreshold"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:255](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L255)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setFlashLoanFeeRate"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:259](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L259)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setKeeperFeePayer"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:263](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L263)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setLiquidator"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:267](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L267)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setMinimumMargin"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:271](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L271)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setUniswapFeeTier"`` |
| `values` | [`PromiseOrValue`<`string`\>, `PromiseOrValue`<`BigNumberish`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:275](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L275)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setVault"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:279](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L279)

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"treasury"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:283](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L283)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"unregisterOracleProvider"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:284](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L284)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateDao"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:288](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L288)

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"updateTreasury"`` |
| `values` | [`PromiseOrValue`<`string`\>] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:292](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L292)

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

[src/gen/contracts/core/ChromaticMarketFactory.ts:296](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L296)

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
| `nameOrSignatureOrTopic` | ``"InterestRateRecordAppended"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:450](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L450)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"LastInterestRateRecordRemoved"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:451](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L451)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"MarketCreated"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:454](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L454)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OracleProviderRegistered"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:455](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L455)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OracleProviderUnregistered"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:456](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L456)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetEarningDistributionThreshold"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:457](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L457)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetFlashLoanFeeRate"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:460](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L460)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetKeeperFeePayer"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:461](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L461)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetLiquidator"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:462](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L462)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetMinimumMargin"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:463](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L463)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetUniswapFeeTier"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:464](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L464)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SetVault"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:465](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L465)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"SettlementTokenRegistered"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:466](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L466)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UpdateDao"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:467](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L467)

▸ **getEvent**(`nameOrSignatureOrTopic`): `EventFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"UpdateTreasury"`` |

#### Returns

`EventFragment`

#### Overrides

utils.Interface.getEvent

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:468](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L468)

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
| `nameOrSignatureOrTopic` | ``"keeperFeePayer"`` \| ``"liquidator"`` \| ``"vault"`` \| ``"appendInterestRateRecord"`` \| ``"calculateInterest"`` \| ``"cancelMakerEarningDistributionTask"`` \| ``"cancelMarketEarningDistributionTask"`` \| ``"createMakerEarningDistributionTask"`` \| ``"createMarket"`` \| ``"createMarketEarningDistributionTask"`` \| ``"currentInterestRate"`` \| ``"dao"`` \| ``"getEarningDistributionThreshold"`` \| ``"getFlashLoanFeeRate"`` \| ``"getInterestRateRecords"`` \| ``"getMarket"`` \| ``"getMarkets"`` \| ``"getMarketsBySettlmentToken"`` \| ``"getMinimumMargin"`` \| ``"getUniswapFeeTier"`` \| ``"isRegisteredMarket"`` \| ``"isRegisteredOracleProvider"`` \| ``"isRegisteredSettlementToken"`` \| ``"parameters"`` \| ``"registerOracleProvider"`` \| ``"registerSettlementToken"`` \| ``"registeredOracleProviders"`` \| ``"registeredSettlementTokens"`` \| ``"removeLastInterestRateRecord"`` \| ``"setEarningDistributionThreshold"`` \| ``"setFlashLoanFeeRate"`` \| ``"setKeeperFeePayer"`` \| ``"setLiquidator"`` \| ``"setMinimumMargin"`` \| ``"setUniswapFeeTier"`` \| ``"setVault"`` \| ``"treasury"`` \| ``"unregisterOracleProvider"`` \| ``"updateDao"`` \| ``"updateTreasury"`` |

#### Returns

`FunctionFragment`

#### Overrides

utils.Interface.getFunction

#### Defined in

[src/gen/contracts/core/ChromaticMarketFactory.ts:86](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/contracts/core/ChromaticMarketFactory.ts#L86)

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
