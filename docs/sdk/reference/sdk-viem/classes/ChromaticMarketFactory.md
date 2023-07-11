---
id: "ChromaticMarketFactory"
title: "Class: ChromaticMarketFactory"
sidebar_label: "ChromaticMarketFactory"
sidebar_position: 0
custom_edit_url: null
---

Represents the Chromatic Market Factory and provides methods to interact with it.

## Constructors

### constructor

• **new ChromaticMarketFactory**(`_client`)

Creates a new instance of ChromaticMarketFactory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:24](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L24)

## Methods

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Market Factory.

#### Returns

`Object`

An object containing the contract instance of the Market Factory.

| Name | Type |
| :------ | :------ |
| `IERC20Meta` | (`address`: \`0x${string}\`) => [`Contract`](../namespaces/utils.md#contract)<readonly [{ `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"spender"`` = 'spender'; `type`: ``"address"`` = 'address' }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"value"`` = 'value'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"Approval"`` = 'Approval'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"from"`` = 'from'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"to"`` = 'to'; `type`: ``"address"`` = 'address' }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"value"`` = 'value'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"Transfer"`` = 'Transfer'; `type`: ``"event"`` = 'event' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"spender"`` = 'spender'; `type`: ``"address"`` = 'address' }] ; `name`: ``"allowance"`` = 'allowance'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"spender"`` = 'spender'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"approve"`` = 'approve'; `outputs`: readonly [{ `internalType`: ``"bool"`` = 'bool'; `name`: ``""`` = ''; `type`: ``"bool"`` = 'bool' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"account"`` = 'account'; `type`: ``"address"`` = 'address' }] ; `name`: ``"balanceOf"`` = 'balanceOf'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"decimals"`` = 'decimals'; `outputs`: readonly [{ `internalType`: ``"uint8"`` = 'uint8'; `name`: ``""`` = ''; `type`: ``"uint8"`` = 'uint8' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"name"`` = 'name'; `outputs`: readonly [{ `internalType`: ``"string"`` = 'string'; `name`: ``""`` = ''; `type`: ``"string"`` = 'string' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"symbol"`` = 'symbol'; `outputs`: readonly [{ `internalType`: ``"string"`` = 'string'; `name`: ``""`` = ''; `type`: ``"string"`` = 'string' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"totalSupply"`` = 'totalSupply'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"to"`` = 'to'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"transfer"`` = 'transfer'; `outputs`: readonly [{ `internalType`: ``"bool"`` = 'bool'; `name`: ``""`` = ''; `type`: ``"bool"`` = 'bool' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"from"`` = 'from'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"to"`` = 'to'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"transferFrom"`` = 'transferFrom'; `outputs`: readonly [{ `internalType`: ``"bool"`` = 'bool'; `name`: ``""`` = ''; `type`: ``"bool"`` = 'bool' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }]\> |
| `marketFactory` | [`Contract`](../namespaces/utils.md#contract)<readonly [{ `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_marketDiamondCutFacet"`` = '\_marketDiamondCutFacet'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_marketLoupeFacet"`` = '\_marketLoupeFacet'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_marketStateFacet"`` = '\_marketStateFacet'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_marketLiquidityFacet"`` = '\_marketLiquidityFacet'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_marketTradeFacet"`` = '\_marketTradeFacet'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_marketLiquidateFacet"`` = '\_marketLiquidateFacet'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_marketSettleFacet"`` = '\_marketSettleFacet'; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"constructor"`` = 'constructor' }, { `inputs`: readonly [] = []; `name`: ``"AlreadySetKeeperFeePayer"`` = 'AlreadySetKeeperFeePayer'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"AlreadySetLiquidator"`` = 'AlreadySetLiquidator'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"AlreadySetVault"`` = 'AlreadySetVault'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"ExistMarket"`` = 'ExistMarket'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotRegisteredOracleProvider"`` = 'NotRegisteredOracleProvider'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotRegisteredSettlementToken"`` = 'NotRegisteredSettlementToken'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"OnlyAccessableByDao"`` = 'OnlyAccessableByDao'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"WrongTokenAddress"`` = 'WrongTokenAddress'; `type`: ``"error"`` = 'error' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"annualRateBPS"`` = 'annualRateBPS'; `type`: ``"uint256"`` = 'uint256' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"beginTimestamp"`` = 'beginTimestamp'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"InterestRateRecordAppended"`` = 'InterestRateRecordAppended'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"annualRateBPS"`` = 'annualRateBPS'; `type`: ``"uint256"`` = 'uint256' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"beginTimestamp"`` = 'beginTimestamp'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"LastInterestRateRecordRemoved"`` = 'LastInterestRateRecordRemoved'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }] ; `name`: ``"MarketCreated"`` = 'MarketCreated'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `components`: readonly [{ `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minStopLossBPS"`` = 'minStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxStopLossBPS"`` = 'maxStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minTakeProfitBPS"`` = 'minTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxTakeProfitBPS"`` = 'maxTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"leverageLevel"`` = 'leverageLevel'; `type`: ``"uint8"`` = 'uint8' }] ; `indexed`: ``false`` = false; `internalType`: ``"struct IOracleProviderRegistry.OracleProviderProperties"`` = 'struct IOracleProviderRegistry.OracleProviderProperties'; `name`: ``"properties"`` = 'properties'; `type`: ``"tuple"`` = 'tuple' }] ; `name`: ``"OracleProviderRegistered"`` = 'OracleProviderRegistered'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }] ; `name`: ``"OracleProviderUnregistered"`` = 'OracleProviderUnregistered'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"earningDistributionThreshold"`` = 'earningDistributionThreshold'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"SetEarningDistributionThreshold"`` = 'SetEarningDistributionThreshold'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"flashLoanFeeRate"`` = 'flashLoanFeeRate'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"SetFlashLoanFeeRate"`` = 'SetFlashLoanFeeRate'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"keeperFeePayer"`` = 'keeperFeePayer'; `type`: ``"address"`` = 'address' }] ; `name`: ``"SetKeeperFeePayer"`` = 'SetKeeperFeePayer'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"liquidator"`` = 'liquidator'; `type`: ``"address"`` = 'address' }] ; `name`: ``"SetLiquidator"`` = 'SetLiquidator'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"minimumMargin"`` = 'minimumMargin'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"SetMinimumMargin"`` = 'SetMinimumMargin'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint24"`` = 'uint24'; `name`: ``"uniswapFeeTier"`` = 'uniswapFeeTier'; `type`: ``"uint24"`` = 'uint24' }] ; `name`: ``"SetUniswapFeeTier"`` = 'SetUniswapFeeTier'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"vault"`` = 'vault'; `type`: ``"address"`` = 'address' }] ; `name`: ``"SetVault"`` = 'SetVault'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"minimumMargin"`` = 'minimumMargin'; `type`: ``"uint256"`` = 'uint256' }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"interestRate"`` = 'interestRate'; `type`: ``"uint256"`` = 'uint256' }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"flashLoanFeeRate"`` = 'flashLoanFeeRate'; `type`: ``"uint256"`` = 'uint256' }, { `indexed`: ``false`` = false; `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"earningDistributionThreshold"`` = 'earningDistributionThreshold'; `type`: ``"uint256"`` = 'uint256' }, { `indexed`: ``false`` = false; `internalType`: ``"uint24"`` = 'uint24'; `name`: ``"uniswapFeeTier"`` = 'uniswapFeeTier'; `type`: ``"uint24"`` = 'uint24' }] ; `name`: ``"SettlementTokenRegistered"`` = 'SettlementTokenRegistered'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"dao"`` = 'dao'; `type`: ``"address"`` = 'address' }] ; `name`: ``"UpdateDao"`` = 'UpdateDao'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"level"`` = 'level'; `type`: ``"uint8"`` = 'uint8' }] ; `name`: ``"UpdateLeverageLevel"`` = 'UpdateLeverageLevel'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minStopLossBPS"`` = 'minStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `indexed`: ``true`` = true; `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxStopLossBPS"`` = 'maxStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }] ; `name`: ``"UpdateStopLossBPSRange"`` = 'UpdateStopLossBPSRange'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minTakeProfitBPS"`` = 'minTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `indexed`: ``true`` = true; `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxTakeProfitBPS"`` = 'maxTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }] ; `name`: ``"UpdateTakeProfitBPSRange"`` = 'UpdateTakeProfitBPSRange'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"treasury"`` = 'treasury'; `type`: ``"address"`` = 'address' }] ; `name`: ``"UpdateTreasury"`` = 'UpdateTreasury'; `type`: ``"event"`` = 'event' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"annualRateBPS"`` = 'annualRateBPS'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"beginTimestamp"`` = 'beginTimestamp'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"appendInterestRateRecord"`` = 'appendInterestRateRecord'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"from"`` = 'from'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"to"`` = 'to'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"calculateInterest"`` = 'calculateInterest'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }] ; `name`: ``"createMarket"`` = 'createMarket'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"currentInterestRate"`` = 'currentInterestRate'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"annualRateBPS"`` = 'annualRateBPS'; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"dao"`` = 'dao'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getEarningDistributionThreshold"`` = 'getEarningDistributionThreshold'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getFlashLoanFeeRate"`` = 'getFlashLoanFeeRate'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getInterestRateRecords"`` = 'getInterestRateRecords'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"annualRateBPS"`` = 'annualRateBPS'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"beginTimestamp"`` = 'beginTimestamp'; `type`: ``"uint256"`` = 'uint256' }] ; `internalType`: ``"struct InterestRate.Record[]"`` = 'struct InterestRate.Record[]'; `name`: ``""`` = ''; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getMarket"`` = 'getMarket'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"getMarkets"`` = 'getMarkets'; `outputs`: readonly [{ `internalType`: ``"address[]"`` = 'address[]'; `name`: ``""`` = ''; `type`: ``"address[]"`` = 'address[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getMarketsBySettlmentToken"`` = 'getMarketsBySettlmentToken'; `outputs`: readonly [{ `internalType`: ``"address[]"`` = 'address[]'; `name`: ``""`` = ''; `type`: ``"address[]"`` = 'address[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getMinimumMargin"`` = 'getMinimumMargin'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getOracleProviderProperties"`` = 'getOracleProviderProperties'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minStopLossBPS"`` = 'minStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxStopLossBPS"`` = 'maxStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minTakeProfitBPS"`` = 'minTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxTakeProfitBPS"`` = 'maxTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"leverageLevel"`` = 'leverageLevel'; `type`: ``"uint8"`` = 'uint8' }] ; `internalType`: ``"struct IOracleProviderRegistry.OracleProviderProperties"`` = 'struct IOracleProviderRegistry.OracleProviderProperties'; `name`: ``""`` = ''; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getUniswapFeeTier"`` = 'getUniswapFeeTier'; `outputs`: readonly [{ `internalType`: ``"uint24"`` = 'uint24'; `name`: ``""`` = ''; `type`: ``"uint24"`` = 'uint24' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }] ; `name`: ``"isRegisteredMarket"`` = 'isRegisteredMarket'; `outputs`: readonly [{ `internalType`: ``"bool"`` = 'bool'; `name`: ``""`` = ''; `type`: ``"bool"`` = 'bool' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }] ; `name`: ``"isRegisteredOracleProvider"`` = 'isRegisteredOracleProvider'; `outputs`: readonly [{ `internalType`: ``"bool"`` = 'bool'; `name`: ``""`` = ''; `type`: ``"bool"`` = 'bool' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"isRegisteredSettlementToken"`` = 'isRegisteredSettlementToken'; `outputs`: readonly [{ `internalType`: ``"bool"`` = 'bool'; `name`: ``""`` = ''; `type`: ``"bool"`` = 'bool' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"keeperFeePayer"`` = 'keeperFeePayer'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"liquidator"`` = 'liquidator'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"parameters"`` = 'parameters'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `components`: readonly [{ `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minStopLossBPS"`` = 'minStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxStopLossBPS"`` = 'maxStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minTakeProfitBPS"`` = 'minTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxTakeProfitBPS"`` = 'maxTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"leverageLevel"`` = 'leverageLevel'; `type`: ``"uint8"`` = 'uint8' }] ; `internalType`: ``"struct IOracleProviderRegistry.OracleProviderProperties"`` = 'struct IOracleProviderRegistry.OracleProviderProperties'; `name`: ``"properties"`` = 'properties'; `type`: ``"tuple"`` = 'tuple' }] ; `name`: ``"registerOracleProvider"`` = 'registerOracleProvider'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"minimumMargin"`` = 'minimumMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"interestRate"`` = 'interestRate'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"flashLoanFeeRate"`` = 'flashLoanFeeRate'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"earningDistributionThreshold"`` = 'earningDistributionThreshold'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint24"`` = 'uint24'; `name`: ``"uniswapFeeTier"`` = 'uniswapFeeTier'; `type`: ``"uint24"`` = 'uint24' }] ; `name`: ``"registerSettlementToken"`` = 'registerSettlementToken'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"registeredOracleProviders"`` = 'registeredOracleProviders'; `outputs`: readonly [{ `internalType`: ``"address[]"`` = 'address[]'; `name`: ``""`` = ''; `type`: ``"address[]"`` = 'address[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"registeredSettlementTokens"`` = 'registeredSettlementTokens'; `outputs`: readonly [{ `internalType`: ``"address[]"`` = 'address[]'; `name`: ``""`` = ''; `type`: ``"address[]"`` = 'address[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"removeLastInterestRateRecord"`` = 'removeLastInterestRateRecord'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"earningDistributionThreshold"`` = 'earningDistributionThreshold'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"setEarningDistributionThreshold"`` = 'setEarningDistributionThreshold'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"flashLoanFeeRate"`` = 'flashLoanFeeRate'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"setFlashLoanFeeRate"`` = 'setFlashLoanFeeRate'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_keeperFeePayer"`` = '\_keeperFeePayer'; `type`: ``"address"`` = 'address' }] ; `name`: ``"setKeeperFeePayer"`` = 'setKeeperFeePayer'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_liquidator"`` = '\_liquidator'; `type`: ``"address"`` = 'address' }] ; `name`: ``"setLiquidator"`` = 'setLiquidator'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"minimumMargin"`` = 'minimumMargin'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"setMinimumMargin"`` = 'setMinimumMargin'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint24"`` = 'uint24'; `name`: ``"uniswapFeeTier"`` = 'uniswapFeeTier'; `type`: ``"uint24"`` = 'uint24' }] ; `name`: ``"setUniswapFeeTier"`` = 'setUniswapFeeTier'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_vault"`` = '\_vault'; `type`: ``"address"`` = 'address' }] ; `name`: ``"setVault"`` = 'setVault'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"treasury"`` = 'treasury'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }] ; `name`: ``"unregisterOracleProvider"`` = 'unregisterOracleProvider'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_dao"`` = '\_dao'; `type`: ``"address"`` = 'address' }] ; `name`: ``"updateDao"`` = 'updateDao'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"level"`` = 'level'; `type`: ``"uint8"`` = 'uint8' }] ; `name`: ``"updateLeverageLevel"`` = 'updateLeverageLevel'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minStopLossBPS"`` = 'minStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxStopLossBPS"`` = 'maxStopLossBPS'; `type`: ``"uint32"`` = 'uint32' }] ; `name`: ``"updateStopLossBPSRange"`` = 'updateStopLossBPSRange'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"oracleProvider"`` = 'oracleProvider'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"minTakeProfitBPS"`` = 'minTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"maxTakeProfitBPS"`` = 'maxTakeProfitBPS'; `type`: ``"uint32"`` = 'uint32' }] ; `name`: ``"updateTakeProfitBPSRange"`` = 'updateTakeProfitBPSRange'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_treasury"`` = '\_treasury'; `type`: ``"address"`` = 'address' }] ; `name`: ``"updateTreasury"`` = 'updateTreasury'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"vault"`` = 'vault'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }]\> |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:47](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L47)

___

### currentInterestRate

▸ **currentInterestRate**(`settlementToken`): `Promise`<`bigint`\>

Retrieves the current interest rate for a specific settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | \`0x${string}\` | The address of the settlement token. |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the current interest rate.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:86](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L86)

___

### getMarkets

▸ **getMarkets**(`settlementToken`): `Promise`<{ `address`: \`0x${string}\` ; `description`: `string` ; `oracleValue`: { `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  } = value }[]\>

Retrieves the markets associated with a specific settlement token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settlementToken` | \`0x${string}\` | The address of the settlement token. |

#### Returns

`Promise`<{ `address`: \`0x${string}\` ; `description`: `string` ; `oracleValue`: { `price`: `bigint` ; `timestamp`: `bigint` ; `version`: `bigint`  } = value }[]\>

A promise that resolves to an array of market information.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:97](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L97)

___

### registeredSettlementTokens

▸ **registeredSettlementTokens**(): `Promise`<{ `address`: \`0x${string}\` ; `decimals`: `number` ; `name`: `string`  }[]\>

Retrieves the registered settlement tokens.

#### Returns

`Promise`<{ `address`: \`0x${string}\` ; `decimals`: `number` ; `name`: `string`  }[]\>

A promise that resolves to an array of settlement tokens.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticMarketFactory.ts:64](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticMarketFactory.ts#L64)