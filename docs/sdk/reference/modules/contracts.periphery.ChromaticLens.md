[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [contracts](contracts.md) / [periphery](contracts.periphery.md) / ChromaticLens

# Namespace: ChromaticLens

[contracts](contracts.md).[periphery](contracts.periphery.md).ChromaticLens

## Table of contents

### Type Aliases

- [LiquidityBinStruct](contracts.periphery.ChromaticLens.md#liquiditybinstruct)
- [LiquidityBinStructOutput](contracts.periphery.ChromaticLens.md#liquiditybinstructoutput)
- [LiquidityBinValueStruct](contracts.periphery.ChromaticLens.md#liquiditybinvaluestruct)
- [LiquidityBinValueStructOutput](contracts.periphery.ChromaticLens.md#liquiditybinvaluestructoutput)
- [LiquidityBinsParamStruct](contracts.periphery.ChromaticLens.md#liquiditybinsparamstruct)
- [LiquidityBinsParamStructOutput](contracts.periphery.ChromaticLens.md#liquiditybinsparamstructoutput)

## Type Aliases

### LiquidityBinStruct

Ƭ **LiquidityBinStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `burningAmount` | `PromiseOrValue`<`BigNumberish`\> |
| `clbTokenAmount` | `PromiseOrValue`<`BigNumberish`\> |
| `freeLiquidity` | `PromiseOrValue`<`BigNumberish`\> |
| `liquidity` | `PromiseOrValue`<`BigNumberish`\> |
| `tokenAmount` | `PromiseOrValue`<`BigNumberish`\> |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> |

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:70](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/contracts/periphery/ChromaticLens.ts#L70)

___

### LiquidityBinStructOutput

Ƭ **LiquidityBinStructOutput**: [`number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`] & { `burningAmount`: `BigNumber` ; `clbTokenAmount`: `BigNumber` ; `freeLiquidity`: `BigNumber` ; `liquidity`: `BigNumber` ; `tokenAmount`: `BigNumber` ; `tradingFeeRate`: `number`  }

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:79](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/contracts/periphery/ChromaticLens.ts#L79)

___

### LiquidityBinValueStruct

Ƭ **LiquidityBinValueStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> |
| `value` | `PromiseOrValue`<`BigNumberish`\> |

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:50](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/contracts/periphery/ChromaticLens.ts#L50)

___

### LiquidityBinValueStructOutput

Ƭ **LiquidityBinValueStructOutput**: [`number`, `BigNumber`] & { `tradingFeeRate`: `number` ; `value`: `BigNumber`  }

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:55](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/contracts/periphery/ChromaticLens.ts#L55)

___

### LiquidityBinsParamStruct

Ƭ **LiquidityBinsParamStruct**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `oracleVersion` | `PromiseOrValue`<`BigNumberish`\> |
| `tradingFeeRate` | `PromiseOrValue`<`BigNumberish`\> |

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:60](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/contracts/periphery/ChromaticLens.ts#L60)

___

### LiquidityBinsParamStructOutput

Ƭ **LiquidityBinsParamStructOutput**: [`number`, `BigNumber`] & { `oracleVersion`: `BigNumber` ; `tradingFeeRate`: `number`  }

#### Defined in

[src/gen/contracts/periphery/ChromaticLens.ts:65](https://github.com/chromatic-protocol/sdk/blob/7230d6e/src/gen/contracts/periphery/ChromaticLens.ts#L65)
