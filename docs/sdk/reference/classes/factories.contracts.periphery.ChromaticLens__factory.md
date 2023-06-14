[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / [periphery](../modules/factories.contracts.periphery.md) / ChromaticLens\_\_factory

# Class: ChromaticLens\_\_factory

[contracts](../modules/factories.contracts.md).[periphery](../modules/factories.contracts.periphery.md).ChromaticLens__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.periphery.ChromaticLens__factory.md#constructor)

### Properties

- [abi](factories.contracts.periphery.ChromaticLens__factory.md#abi)

### Methods

- [connect](factories.contracts.periphery.ChromaticLens__factory.md#connect)
- [createInterface](factories.contracts.periphery.ChromaticLens__factory.md#createinterface)

## Constructors

### constructor

• **new ChromaticLens__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"int16[]"`` = "int16[]"; `name`: ``"tradingFeeRates"`` = "tradingFeeRates"; `type`: ``"int16[]"`` = "int16[]" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"amounts"`` = "amounts"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"calculateCLBTokenMintingBatch"`` = "calculateCLBTokenMintingBatch"; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"results"`` = "results"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"int16[]"`` = "int16[]"; `name`: ``"tradingFeeRates"`` = "tradingFeeRates"; `type`: ``"int16[]"`` = "int16[]" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"clbTokenAmounts"`` = "clbTokenAmounts"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"calculateCLBTokenValueBatch"`` = "calculateCLBTokenValueBatch"; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"results"`` = "results"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"int16[]"`` = "int16[]"; `name`: ``"tradingFeeRates"`` = "tradingFeeRates"; `type`: ``"int16[]"`` = "int16[]" }] ; `name`: ``"liquidityBinValue"`` = "liquidityBinValue"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"int16"`` = "int16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"int16"`` = "int16" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"value"`` = "value"; `type`: ``"uint256"`` = "uint256" }] ; `internalType`: ``"struct ChromaticLens.LiquidityBinValue[]"`` = "struct ChromaticLens.LiquidityBinValue[]"; `name`: ``"results"`` = "results"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `components`: readonly [{ `internalType`: ``"int16"`` = "int16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"int16"`` = "int16" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"oracleVersion"`` = "oracleVersion"; `type`: ``"uint256"`` = "uint256" }] ; `internalType`: ``"struct ChromaticLens.LiquidityBinsParam[]"`` = "struct ChromaticLens.LiquidityBinsParam[]"; `name`: ``"params"`` = "params"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `name`: ``"liquidityBins"`` = "liquidityBins"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"int16"`` = "int16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"int16"`` = "int16" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"liquidity"`` = "liquidity"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"freeLiquidity"`` = "freeLiquidity"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"clbTokenAmount"`` = "clbTokenAmount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"burningAmount"`` = "burningAmount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenAmount"`` = "tokenAmount"; `type`: ``"uint256"`` = "uint256" }] ; `internalType`: ``"struct ChromaticLens.LiquidityBin[]"`` = "struct ChromaticLens.LiquidityBin[]"; `name`: ``"results"`` = "results"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"receiptIds"`` = "receiptIds"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"lpReceipts"`` = "lpReceipts"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"oracleVersion"`` = "oracleVersion"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"address"`` = "address"; `name`: ``"recipient"`` = "recipient"; `type`: ``"address"`` = "address" }, { `internalType`: ``"enum LpAction"`` = "enum LpAction"; `name`: ``"action"`` = "action"; `type`: ``"uint8"`` = "uint8" }, { `internalType`: ``"int16"`` = "int16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"int16"`` = "int16" }] ; `internalType`: ``"struct LpReceipt[]"`` = "struct LpReceipt[]"; `name`: ``"result"`` = "result"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"oracleVersions"`` = "oracleVersions"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `name`: ``"oracleAtVersions"`` = "oracleAtVersions"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion[]"`` = "struct IOracleProvider.OracleVersion[]"; `name`: ``"results"`` = "results"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"int16[]"`` = "int16[]"; `name`: ``"tradingFeeRates"`` = "tradingFeeRates"; `type`: ``"int16[]"`` = "int16[]" }] ; `name`: ``"totalSupplies"`` = "totalSupplies"; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``"supplies"`` = "supplies"; `type`: ``"uint256[]"`` = "uint256[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/periphery/ChromaticLens__factory.ts:299](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/factories/contracts/periphery/ChromaticLens__factory.ts#L299)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ChromaticLens`](../interfaces/contracts.periphery.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ChromaticLens`](../interfaces/contracts.periphery.ChromaticLens-1.md)

#### Defined in

[src/gen/factories/contracts/periphery/ChromaticLens__factory.ts:303](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/factories/contracts/periphery/ChromaticLens__factory.ts#L303)

___

### createInterface

▸ `Static` **createInterface**(): `ChromaticLensInterface`

#### Returns

`ChromaticLensInterface`

#### Defined in

[src/gen/factories/contracts/periphery/ChromaticLens__factory.ts:300](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/factories/contracts/periphery/ChromaticLens__factory.ts#L300)
