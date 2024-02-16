---
id: "IPosition"
title: "Interface: IPosition"
sidebar_label: "IPosition"
sidebar_position: 0
custom_edit_url: null
---

Represents a Chromatic position.

## Properties

### \_binMargins

• **\_binMargins**: `BinMarginStructOutput`[]

The bin margins for the position, it represents the amount of collateral for each bin

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:51](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L51)

___

### \_protocolFeeRate

• **\_protocolFeeRate**: `bigint`

The protocol fee rate for the market

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:53](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L53)

___

### claimTimestamp

• `Optional` **claimTimestamp**: `bigint`

The timestamp when the position was claimed

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:61](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L61)

___

### closePrice

• **closePrice**: `bigint`

The price of the underlying asset when position was closed.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:57](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L57)

___

### closeTimestamp

• **closeTimestamp**: `bigint`

The timestamp when the position was closed

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:45](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L45)

___

### closeVersion

• **closeVersion**: `bigint`

The version of the oracle when the position was closed

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:39](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L39)

___

### id

• **id**: `bigint`

The position identifier

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:35](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L35)

___

### makerMargin

• **makerMargin**: `bigint`

The amount of maker's margin

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:55](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L55)

___

### openPrice

• **openPrice**: `bigint`

The price of the underlying asset when position was opened.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:59](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L59)

___

### openTimestamp

• **openTimestamp**: `bigint`

The timestamp when the position was opened

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:43](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L43)

___

### openVersion

• **openVersion**: `bigint`

The version of the oracle when the position was opened

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:37](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L37)

___

### owner

• **owner**: `string`

The owner of the position, usually it is the account address of trader

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:49](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L49)

___

### qty

• **qty**: `bigint`

The quantity of the position

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:41](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L41)

___

### takerMargin

• **takerMargin**: `bigint`

The amount of collateral that a trader must provide

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts:47](https://github.com/chromatic-protocol/sdk/blob/28b8987/packages/sdk-ethers-v6/src/entities/ChromaticPosition.ts#L47)
