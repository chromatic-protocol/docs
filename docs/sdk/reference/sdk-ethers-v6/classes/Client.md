---
id: "Client"
title: "Class: Client"
sidebar_label: "Client"
sidebar_position: 0
custom_edit_url: null
---

A client for interacting with the Chromatic protocol on a specific chain.

## Constructors

### constructor

• **new Client**(`chainName`, `signerOrProvider`)

Creates a new instance of the Client class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainName` | `string` | The name of the chain. |
| `signerOrProvider` | `Provider` \| `Signer` | The signer or provider object. |

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:23](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L23)

## Properties

### chainName

• **chainName**: `string`

The name of the chain.

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:23](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L23)

## Accessors

### provider

• `get` **provider**(): `Provider`

The provider associated with the client.

#### Returns

`Provider`

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:37](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L37)

___

### signer

• `get` **signer**(): `Signer`

The signer associated with the client.

#### Returns

`Signer`

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:30](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L30)

## Methods

### account

▸ **account**(): [`ChromaticAccount`](ChromaticAccount.md)

Creates a new instance of the ChromaticAccount class.

#### Returns

[`ChromaticAccount`](ChromaticAccount.md)

An instance of the ChromaticAccount class.

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:99](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L99)

___

### lens

▸ **lens**(): [`ChromaticLens`](ChromaticLens.md)

Creates a new instance of the ChromaticLens class.

#### Returns

[`ChromaticLens`](ChromaticLens.md)

An instance of the ChromaticLens class.

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:59](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L59)

___

### market

▸ **market**(): [`ChromaticMarket`](ChromaticMarket.md)

Creates a new instance of the ChromaticMarket class.

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

An instance of the ChromaticMarket class.

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:75](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L75)

___

### marketFactory

▸ **marketFactory**(): [`ChromaticMarketFactory`](ChromaticMarketFactory.md)

Creates a new instance of the ChromaticMarketFactory class.

#### Returns

[`ChromaticMarketFactory`](ChromaticMarketFactory.md)

An instance of the ChromaticMarketFactory class.

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:67](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L67)

___

### position

▸ **position**(): [`ChromaticPosition`](ChromaticPosition.md)

Creates a new instance of the ChromaticPosition class.

#### Returns

[`ChromaticPosition`](ChromaticPosition.md)

An instance of the ChromaticPosition class.

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:83](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L83)

___

### router

▸ **router**(): [`ChromaticRouter`](ChromaticRouter.md)

Creates a new instance of the ChromaticRouter class.

#### Returns

[`ChromaticRouter`](ChromaticRouter.md)

An instance of the ChromaticRouter class.

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:91](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L91)

___

### setSignerOrProvider

▸ **setSignerOrProvider**(`signerOrProvider`): `void`

Sets the signer or provider for the client.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signerOrProvider` | `Provider` \| `Signer` | The signer or provider object. |

#### Returns

`void`

#### Defined in

[packages/sdk-ethers-v6/src/Client.ts:45](https://github.com/chromatic-protocol/sdk/blob/ebf2a16/packages/sdk-ethers-v6/src/Client.ts#L45)
