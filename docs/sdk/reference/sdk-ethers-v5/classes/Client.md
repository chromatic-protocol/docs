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
| `signerOrProvider` | `Signer` \| `Provider` | The signer or provider object. |

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:24](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L24)

## Properties

### chainName

• **chainName**: `string`

The name of the chain.

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:24](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L24)

## Accessors

### provider

• `get` **provider**(): `Provider`

The provider associated with the client.

#### Returns

`Provider`

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:38](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L38)

___

### signer

• `get` **signer**(): `Signer`

The signer associated with the client.

#### Returns

`Signer`

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:31](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L31)

## Methods

### account

▸ **account**(): [`ChromaticAccount`](ChromaticAccount.md)

Creates a new instance of the ChromaticAccount class.

#### Returns

[`ChromaticAccount`](ChromaticAccount.md)

An instance of the ChromaticAccount class.

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:101](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L101)

___

### lens

▸ **lens**(): [`ChromaticLens`](ChromaticLens.md)

Creates a new instance of the ChromaticLens class.

#### Returns

[`ChromaticLens`](ChromaticLens.md)

An instance of the ChromaticLens class.

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:61](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L61)

___

### market

▸ **market**(): [`ChromaticMarket`](ChromaticMarket.md)

Creates a new instance of the ChromaticMarket class.

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

An instance of the ChromaticMarket class.

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:77](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L77)

___

### marketFactory

▸ **marketFactory**(): [`ChromaticMarketFactory`](ChromaticMarketFactory.md)

Creates a new instance of the ChromaticMarketFactory class.

#### Returns

[`ChromaticMarketFactory`](ChromaticMarketFactory.md)

An instance of the ChromaticMarketFactory class.

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:69](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L69)

___

### position

▸ **position**(): [`ChromaticPosition`](ChromaticPosition.md)

Creates a new instance of the ChromaticPosition class.

#### Returns

[`ChromaticPosition`](ChromaticPosition.md)

An instance of the ChromaticPosition class.

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:85](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L85)

___

### router

▸ **router**(): [`ChromaticRouter`](ChromaticRouter.md)

Creates a new instance of the ChromaticRouter class.

#### Returns

[`ChromaticRouter`](ChromaticRouter.md)

An instance of the ChromaticRouter class.

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:93](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L93)

___

### setSignerOrProvider

▸ **setSignerOrProvider**(`signerOrProvider`): `void`

Sets the signer or provider for the client.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signerOrProvider` | `Signer` \| `Provider` | The signer or provider object. |

#### Returns

`void`

#### Defined in

[packages/sdk-ethers-v5/src/Client.ts:46](https://github.com/chromatic-protocol/sdk/blob/4d74715/packages/sdk-ethers-v5/src/Client.ts#L46)
