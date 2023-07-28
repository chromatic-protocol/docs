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

[entities/ChromaticPosition.ts:56](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L56)

___

### \_feeProtocol

• **\_feeProtocol**: `number`

The denominator of the protocol's % share of the fees

#### Defined in

[entities/ChromaticPosition.ts:58](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L58)

___

### claimTimestamp

• `Optional` **claimTimestamp**: `BigNumber`

The timestamp when the position was claimed

#### Defined in

[entities/ChromaticPosition.ts:66](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L66)

___

### closePrice

• **closePrice**: `BigNumber`

The price of the underlying asset when position was closed.

#### Defined in

[entities/ChromaticPosition.ts:62](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L62)

___

### closeTimestamp

• **closeTimestamp**: `BigNumber`

The timestamp when the position was closed

#### Defined in

[entities/ChromaticPosition.ts:50](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L50)

___

### closeVersion

• **closeVersion**: `BigNumber`

The version of the oracle when the position was closed

#### Defined in

[entities/ChromaticPosition.ts:42](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L42)

___

### id

• **id**: `BigNumber`

The position identifier

#### Defined in

[entities/ChromaticPosition.ts:38](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L38)

___

### leverage

• **leverage**: `number`

The leverage BPS applied to the position

#### Defined in

[entities/ChromaticPosition.ts:46](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L46)

___

### makerMargin

• **makerMargin**: `BigNumber`

The amount of maker's margin

#### Defined in

[entities/ChromaticPosition.ts:60](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L60)

___

### openPrice

• **openPrice**: `BigNumber`

The price of the underlying asset when position was opened.

#### Defined in

[entities/ChromaticPosition.ts:64](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L64)

___

### openTimestamp

• **openTimestamp**: `BigNumber`

The timestamp when the position was opened

#### Defined in

[entities/ChromaticPosition.ts:48](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L48)

___

### openVersion

• **openVersion**: `BigNumber`

The version of the oracle when the position was opened

#### Defined in

[entities/ChromaticPosition.ts:40](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L40)

___

### owner

• **owner**: `string`

The owner of the position, usually it is the account address of trader

#### Defined in

[entities/ChromaticPosition.ts:54](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L54)

___

### qty

• **qty**: `BigNumber`

The quantity of the position, with 4 decimal places

#### Defined in

[entities/ChromaticPosition.ts:44](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L44)

___

### takerMargin

• **takerMargin**: `BigNumber`

The amount of collateral that a trader must provide

#### Defined in

[entities/ChromaticPosition.ts:52](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticPosition.ts#L52)
