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

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"contract IChromaticRouter"`` = "contract IChromaticRouter"; `name`: ``"_router"`` = "\_router"; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"constructor"`` = "constructor" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"int16"`` = "int16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"int16"`` = "int16" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_oracleVersion"`` = "\_oracleVersion"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"claimableLiquidity"`` = "claimableLiquidity"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"mintingTokenAmountRequested"`` = "mintingTokenAmountRequested"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"mintingCLBTokenAmount"`` = "mintingCLBTokenAmount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"burningCLBTokenAmountRequested"`` = "burningCLBTokenAmountRequested"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"burningCLBTokenAmount"`` = "burningCLBTokenAmount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"burningTokenAmount"`` = "burningTokenAmount"; `type`: ``"uint256"`` = "uint256" }] ; `internalType`: ``"struct ILiquidity.ClaimableLiquidity"`` = "struct ILiquidity.ClaimableLiquidity"; `name`: ``""`` = ""; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }] ; `name`: ``"clbBalanceOf"`` = "clbBalanceOf"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenId"`` = "tokenId"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"balance"`` = "balance"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"totalSupply"`` = "totalSupply"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"binValue"`` = "binValue"; `type`: ``"uint256"`` = "uint256" }] ; `internalType`: ``"struct ChromaticLens.CLBBalance[]"`` = "struct ChromaticLens.CLBBalance[]"; `name`: ``""`` = ""; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }] ; `name`: ``"liquidityBinStatuses"`` = "liquidityBinStatuses"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"liquidity"`` = "liquidity"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"freeLiquidity"`` = "freeLiquidity"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"binValue"`` = "binValue"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"int16"`` = "int16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"int16"`` = "int16" }] ; `internalType`: ``"struct ILiquidity.LiquidityBinStatus[]"`` = "struct ILiquidity.LiquidityBinStatus[]"; `name`: ``""`` = ""; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }] ; `name`: ``"lpReceipts"`` = "lpReceipts"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"oracleVersion"`` = "oracleVersion"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"address"`` = "address"; `name`: ``"recipient"`` = "recipient"; `type`: ``"address"`` = "address" }, { `internalType`: ``"enum LpAction"`` = "enum LpAction"; `name`: ``"action"`` = "action"; `type`: ``"uint8"`` = "uint8" }, { `internalType`: ``"int16"`` = "int16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"int16"`` = "int16" }] ; `internalType`: ``"struct LpReceipt[]"`` = "struct LpReceipt[]"; `name`: ``"result"`` = "result"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"bytes[]"`` = "bytes[]"; `name`: ``"data"`` = "data"; `type`: ``"bytes[]"`` = "bytes[]" }] ; `name`: ``"multicall"`` = "multicall"; `outputs`: readonly [{ `internalType`: ``"bytes[]"`` = "bytes[]"; `name`: ``"results"`` = "results"; `type`: ``"bytes[]"`` = "bytes[]" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"contract IChromaticMarket"`` = "contract IChromaticMarket"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"oracleVersion"`` = "oracleVersion"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"version"`` = "version"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"timestamp"`` = "timestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"Fixed18"`` = "Fixed18"; `name`: ``"price"`` = "price"; `type`: ``"int256"`` = "int256" }] ; `internalType`: ``"struct IOracleProvider.OracleVersion"`` = "struct IOracleProvider.OracleVersion"; `name`: ``""`` = ""; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/periphery/ChromaticLens__factory.ts:286](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/periphery/ChromaticLens__factory.ts#L286)

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

[src/gen/factories/contracts/periphery/ChromaticLens__factory.ts:290](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/periphery/ChromaticLens__factory.ts#L290)

___

### createInterface

▸ `Static` **createInterface**(): `ChromaticLensInterface`

#### Returns

`ChromaticLensInterface`

#### Defined in

[src/gen/factories/contracts/periphery/ChromaticLens__factory.ts:287](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/factories/contracts/periphery/ChromaticLens__factory.ts#L287)
