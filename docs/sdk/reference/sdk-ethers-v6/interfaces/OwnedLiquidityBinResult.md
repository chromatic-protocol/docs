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

[entities/ChromaticLens.ts:49](https://github.com/chromatic-protocol/sdk/blob/52142a9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L49)

___

### clbBalance

• **clbBalance**: `bigint`

The balance of CLB tokens owned by the owner for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:35](https://github.com/chromatic-protocol/sdk/blob/52142a9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L35)

___

### clbTotalSupply

• **clbTotalSupply**: `bigint`

The total supply of CLB tokens for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:37](https://github.com/chromatic-protocol/sdk/blob/52142a9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L37)

___

### clbValue

• **clbValue**: `bigint`

The current value per one CLB token, which includes decimal points.
The unrealized profit or loss of the position and adds it to the total value.
Additionally, it includes the pending bin share from the market's vault

#### Defined in

[entities/ChromaticLens.ts:43](https://github.com/chromatic-protocol/sdk/blob/52142a9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L43)

___

### freeLiquidity

• **freeLiquidity**: `bigint`

The available (free) liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:33](https://github.com/chromatic-protocol/sdk/blob/52142a9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L33)

___

### liquidity

• **liquidity**: `bigint`

The total liquidity amount (settlement token) for the specified trading fee rate

#### Defined in

[entities/ChromaticLens.ts:31](https://github.com/chromatic-protocol/sdk/blob/52142a9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L31)

___

### tradingFeeRate

• **tradingFeeRate**: `number`

The trading fee rate for the liquidity bin

#### Defined in

[entities/ChromaticLens.ts:29](https://github.com/chromatic-protocol/sdk/blob/52142a9/packages/sdk-ethers-v6/src/entities/ChromaticLens.ts#L29)
