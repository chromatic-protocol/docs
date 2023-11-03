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

• **binValue**: `bigint`

The current value of the bin for the specified trading fee rate.
The unrealized profit or loss of the position and adds it to the total value.
Additionally, it includes the pending bin share from the market's vault

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:68](https://github.com/chromatic-protocol/sdk/blob/ef8569b/packages/sdk-viem/src/entities/ChromaticLens.ts#L68)

___

### clbBalance

• **clbBalance**: `bigint`

The balance of CLB tokens owned by the owner for the specified trading fee rate

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:54](https://github.com/chromatic-protocol/sdk/blob/ef8569b/packages/sdk-viem/src/entities/ChromaticLens.ts#L54)

___

### clbTotalSupply

• **clbTotalSupply**: `bigint`

The total supply of CLB tokens for the specified trading fee rate

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:56](https://github.com/chromatic-protocol/sdk/blob/ef8569b/packages/sdk-viem/src/entities/ChromaticLens.ts#L56)

___

### clbValue

• **clbValue**: `bigint`

The current value per one CLB token, which includes decimal points.
The unrealized profit or loss of the position and adds it to the total value.
Additionally, it includes the pending bin share from the market's vault

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:62](https://github.com/chromatic-protocol/sdk/blob/ef8569b/packages/sdk-viem/src/entities/ChromaticLens.ts#L62)

___

### freeLiquidity

• **freeLiquidity**: `bigint`

The available (free) liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:52](https://github.com/chromatic-protocol/sdk/blob/ef8569b/packages/sdk-viem/src/entities/ChromaticLens.ts#L52)

___

### liquidity

• **liquidity**: `bigint`

The total liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:50](https://github.com/chromatic-protocol/sdk/blob/ef8569b/packages/sdk-viem/src/entities/ChromaticLens.ts#L50)

___

### tradingFeeRate

• **tradingFeeRate**: `number`

The trading fee rate for the liquidity bin

#### Defined in

[packages/sdk-viem/src/entities/ChromaticLens.ts:48](https://github.com/chromatic-protocol/sdk/blob/ef8569b/packages/sdk-viem/src/entities/ChromaticLens.ts#L48)
