[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / ILiquidity

# Namespace: ILiquidity

## Table of contents

### Type Aliases

- [ClaimableLiquidityStruct](ILiquidity.md#claimableliquiditystruct)
- [ClaimableLiquidityStructOutput](ILiquidity.md#claimableliquiditystructoutput)
- [LiquidityBinStatusStruct](ILiquidity.md#liquiditybinstatusstruct)
- [LiquidityBinStatusStructOutput](ILiquidity.md#liquiditybinstatusstructoutput)

## Type Aliases

### ClaimableLiquidityStruct

Ƭ **ClaimableLiquidityStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burningCLBTokenAmount` | `PromiseOrValue`<`BigNumberish`\> |
| `burningCLBTokenAmountRequested` | `PromiseOrValue`<`BigNumberish`\> |
| `burningTokenAmount` | `PromiseOrValue`<`BigNumberish`\> |
| `mintingCLBTokenAmount` | `PromiseOrValue`<`BigNumberish`\> |
| `mintingTokenAmountRequested` | `PromiseOrValue`<`BigNumberish`\> |

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:103](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L103)

___

### ClaimableLiquidityStructOutput

Ƭ **ClaimableLiquidityStructOutput**: [`BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `burningCLBTokenAmount`: `BigNumber` ; `burningCLBTokenAmountRequested`: `BigNumber` ; `burningTokenAmount`: `BigNumber` ; `mintingCLBTokenAmount`: `BigNumber` ; `mintingTokenAmountRequested`: `BigNumber`  }

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:111](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L111)

___

### LiquidityBinStatusStruct

Ƭ **LiquidityBinStatusStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `binValue` | `PromiseOrValue`<`BigNumberish`\> |
| `freeLiquidity` | `PromiseOrValue`<`BigNumberish`\> |
| `liquidity` | `PromiseOrValue`<`BigNumberish`\> |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> |

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:125](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L125)

___

### LiquidityBinStatusStructOutput

Ƭ **LiquidityBinStatusStructOutput**: [`BigNumber`, `BigNumber`, `BigNumber`, `number`] & { `binValue`: `BigNumber` ; `freeLiquidity`: `BigNumber` ; `liquidity`: `BigNumber` ; `tradingFeeRate`: `number`  }

#### Defined in

[src/gen/contracts/core/ChromaticMarket.ts:132](https://github.com/chromatic-protocol/sdk/blob/e3e1a39/src/gen/contracts/core/ChromaticMarket.ts#L132)
