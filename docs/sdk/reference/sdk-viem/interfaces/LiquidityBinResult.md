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

• **clbValue**: `bigint`

The current value per one CLB token, which includes decimal points.
The unrealized profit or loss of the position and adds it to the total value.
Additionally, it includes the pending bin share from the market's vault

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:23](https://github.com/chromatic-protocol/sdk/blob/3b475c4/packages/sdk-viem/src/entities/ChromaticLens.ts#L23)

___

### freeLiquidity

• **freeLiquidity**: `bigint`

The available (free) liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:27](https://github.com/chromatic-protocol/sdk/blob/3b475c4/packages/sdk-viem/src/entities/ChromaticLens.ts#L27)

___

### liquidity

• **liquidity**: `bigint`

The total liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:25](https://github.com/chromatic-protocol/sdk/blob/3b475c4/packages/sdk-viem/src/entities/ChromaticLens.ts#L25)

___

### tradingFeeRate

• **tradingFeeRate**: `number`

The trading fee rate for the liquidity bin

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:17](https://github.com/chromatic-protocol/sdk/blob/3b475c4/packages/sdk-viem/src/entities/ChromaticLens.ts#L17)
