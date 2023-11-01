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

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:51](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L51)

___

### \_feeProtocol

• **\_feeProtocol**: `number`

The denominator of the protocol's % share of the fees

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:53](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L53)

___

### claimTimestamp

• `Optional` **claimTimestamp**: `BigNumber`

The timestamp when the position was claimed

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:61](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L61)

___

### closePrice

• **closePrice**: `BigNumber`

The price of the underlying asset when position was closed.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:57](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L57)

___

### closeTimestamp

• **closeTimestamp**: `BigNumber`

The timestamp when the position was closed

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:45](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L45)

___

### closeVersion

• **closeVersion**: `BigNumber`

The version of the oracle when the position was closed

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:39](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L39)

___

### id

• **id**: `BigNumber`

The position identifier

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:35](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L35)

___

### makerMargin

• **makerMargin**: `BigNumber`

The amount of maker's margin

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:55](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L55)

___

### openPrice

• **openPrice**: `BigNumber`

The price of the underlying asset when position was opened.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:59](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L59)

___

### openTimestamp

• **openTimestamp**: `BigNumber`

The timestamp when the position was opened

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:43](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L43)

___

### openVersion

• **openVersion**: `BigNumber`

The version of the oracle when the position was opened

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:37](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L37)

___

### owner

• **owner**: `string`

The owner of the position, usually it is the account address of trader

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:49](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L49)

___

### qty

• **qty**: `BigNumber`

The quantity of the position

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:41](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L41)

___

### takerMargin

• **takerMargin**: `BigNumber`

The amount of collateral that a trader must provide

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts:47](https://github.com/chromatic-protocol/sdk/blob/5521523/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L47)
