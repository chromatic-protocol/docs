---
id: "OwnedLiquidityBinResult"
title: "Interface: OwnedLiquidityBinResult"
sidebar_label: "OwnedLiquidityBinResult"
sidebar_position: 0
custom_edit_url: null
---

Represents the result of an owned liquidity bin.

## Properties

### binValue

• **binValue**: `BigNumber`

The current value of the bin for the specified trading fee rate.
The unrealized profit or loss of the position and adds it to the total value.
Additionally, it includes the pending bin share from the market's vault

#### Defined in

[entities/ChromaticLens.ts:50](https://github.com/chromatic-protocol/sdk/blob/a7c6459/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L50)

___

### clbBalance

• **clbBalance**: `BigNumber`

The balance of CLB tokens owned by the owner for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:36](https://github.com/chromatic-protocol/sdk/blob/a7c6459/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L36)

___

### clbTotalSupply

• **clbTotalSupply**: `BigNumber`

The total supply of CLB tokens for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:38](https://github.com/chromatic-protocol/sdk/blob/a7c6459/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L38)

___

### clbValue

• **clbValue**: `BigNumber`

The current value per one CLB token, which includes decimal points.
The unrealized profit or loss of the position and adds it to the total value.
Additionally, it includes the pending bin share from the market's vault

#### Defined in

[entities/ChromaticLens.ts:44](https://github.com/chromatic-protocol/sdk/blob/a7c6459/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L44)

___

### freeLiquidity

• **freeLiquidity**: `BigNumber`

The available (free) liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:34](https://github.com/chromatic-protocol/sdk/blob/a7c6459/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L34)

___

### liquidity

• **liquidity**: `BigNumber`

The total liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:32](https://github.com/chromatic-protocol/sdk/blob/a7c6459/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L32)

___

### tradingFeeRate

• **tradingFeeRate**: `number`

The trading fee rate for the liquidity bin

#### Defined in

[entities/ChromaticLens.ts:30](https://github.com/chromatic-protocol/sdk/blob/a7c6459/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L30)
