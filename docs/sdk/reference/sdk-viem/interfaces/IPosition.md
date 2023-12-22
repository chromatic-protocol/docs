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

[packages/sdk-viem/src/entities/ChromaticPosition.ts:56](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L56)

___

### \_protocolFeeRate

• **\_protocolFeeRate**: `number`

The protocol fee rate for the market

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:59](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L59)

___

### claimTimestamp

• `Optional` **claimTimestamp**: `bigint`

The timestamp when the position was claimed

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:67](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L67)

___

### closePrice

• **closePrice**: `undefined` \| `bigint`

The price of the underlying asset when position was closed.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:63](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L63)

___

### closeTimestamp

• **closeTimestamp**: `bigint`

The timestamp when the position was closed

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:50](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L50)

___

### closeVersion

• **closeVersion**: `bigint`

The version of the oracle when the position was closed

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:44](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L44)

___

### id

• **id**: `bigint`

The position identifier

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:40](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L40)

___

### makerMargin

• **makerMargin**: `bigint`

The amount of maker's margin

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:61](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L61)

___

### openPrice

• **openPrice**: `undefined` \| `bigint`

The price of the underlying asset when position was opened.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:65](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L65)

___

### openTimestamp

• **openTimestamp**: `bigint`

The timestamp when the position was opened

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:48](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L48)

___

### openVersion

• **openVersion**: `bigint`

The version of the oracle when the position was opened

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:42](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L42)

___

### owner

• **owner**: `string`

The owner of the position, usually it is the account address of trader

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:54](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L54)

___

### qty

• **qty**: `bigint`

The quantity of the position

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:46](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L46)

___

### takerMargin

• **takerMargin**: `bigint`

The amount of collateral that a trader must provide

#### Defined in

[packages/sdk-viem/src/entities/ChromaticPosition.ts:52](https://github.com/chromatic-protocol/sdk/blob/cf510b0/packages/sdk-viem/src/entities/ChromaticPosition.ts#L52)
