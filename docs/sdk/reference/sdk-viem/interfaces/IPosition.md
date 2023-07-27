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

• **\_binMargins**: `IBinMargin`[]

The bin margins for the position, it represents the amount of collateral for each bin

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:61](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L61)

___

### \_feeProtocol

• **\_feeProtocol**: `number`

The denominator of the protocol's % share of the fees

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:63](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L63)

___

### claimTimestamp

• `Optional` **claimTimestamp**: `bigint`

The timestamp when the position was claimed

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:71](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L71)

___

### closePrice

• **closePrice**: `undefined` \| `bigint`

The price of the underlying asset when position was closed.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:67](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L67)

___

### closeTimestamp

• **closeTimestamp**: `bigint`

The timestamp when the position was closed

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:55](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L55)

___

### closeVersion

• **closeVersion**: `bigint`

The version of the oracle when the position was closed

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:47](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L47)

___

### id

• **id**: `bigint`

The position identifier

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:43](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L43)

___

### leverage

• **leverage**: `number`

The leverage BPS applied to the position

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:51](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L51)

___

### makerMargin

• **makerMargin**: `bigint`

The amount of maker's margin

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:65](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L65)

___

### openPrice

• **openPrice**: `undefined` \| `bigint`

The price of the underlying asset when position was opened.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:69](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L69)

___

### openTimestamp

• **openTimestamp**: `bigint`

The timestamp when the position was opened

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:53](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L53)

___

### openVersion

• **openVersion**: `bigint`

The version of the oracle when the position was opened

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:45](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L45)

___

### owner

• **owner**: `string`

The owner of the position, usually it is the account address of trader

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:59](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L59)

___

### qty

• **qty**: `bigint`

The quantity of the position, with 4 decimal places

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:49](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L49)

___

### takerMargin

• **takerMargin**: `bigint`

The amount of collateral that a trader must provide

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:57](https://github.com/chromatic-protocol/sdk/blob/ebdbe33/packages/sdk-viem/src/entities/ChromaticPosition.ts#L57)
