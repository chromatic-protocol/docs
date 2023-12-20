---
id: "LiquidityBinResult"
title: "Interface: LiquidityBinResult"
sidebar_label: "LiquidityBinResult"
sidebar_position: 0
custom_edit_url: null
---

Represents the result of a liquidity bin.

## Properties

### clbValue

• **clbValue**: `BigNumber`

The current value per one CLB token, which includes decimal points.
The unrealized profit or loss of the position and adds it to the total value.
Additionally, it includes the pending bin share from the market's vault

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:17](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L17)

___

### freeLiquidity

• **freeLiquidity**: `BigNumber`

The available (free) liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:21](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L21)

___

### liquidity

• **liquidity**: `BigNumber`

The total liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:19](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L19)

___

### tradingFeeRate

• **tradingFeeRate**: `number`

The trading fee rate for the liquidity bin

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticLens.ts:11](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-ethers-v5/src/entities/ChromaticLens.ts#L11)
