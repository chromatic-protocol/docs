---
id: "factories.deployed.arbitrumGoerli.ChainlinkFeedOracle__factory"
title: "Class: ChainlinkFeedOracle__factory"
sidebar_label: "ChainlinkFeedOracle__factory"
custom_edit_url: null
---

[deployed](../namespaces/factories.deployed.md).[arbitrumGoerli](../namespaces/factories.deployed.arbitrumGoerli.md).ChainlinkFeedOracle__factory

## Hierarchy

- `ContractFactory`

  ↳ **`ChainlinkFeedOracle__factory`**

## Constructors

### constructor

• **new ChainlinkFeedOracle__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ChainlinkFeedOracleConstructorParams` |

#### Overrides

ContractFactory.constructor

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts:170](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts#L170)

## Methods

### attach

▸ **attach**(`address`): [`ChainlinkFeedOracle`](../interfaces/deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ChainlinkFeedOracle`](../interfaces/deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Overrides

ContractFactory.attach

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts:193](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts#L193)

___

### connect

▸ **connect**(`signer`): [`ChainlinkFeedOracle__factory`](factories.deployed.arbitrumGoerli.ChainlinkFeedOracle__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ChainlinkFeedOracle__factory`](factories.deployed.arbitrumGoerli.ChainlinkFeedOracle__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts:196](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts#L196)

___

### deploy

▸ **deploy**(`aggregator_`, `overrides?`): `Promise`<[`ChainlinkFeedOracle`](../interfaces/deployed.arbitrumGoerli.ChainlinkFeedOracle.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregator_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<[`ChainlinkFeedOracle`](../interfaces/deployed.arbitrumGoerli.ChainlinkFeedOracle.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts:178](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts#L178)

___

### getDeployTransaction

▸ **getDeployTransaction**(`aggregator_`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aggregator_` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts:187](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts#L187)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ChainlinkFeedOracle`](../interfaces/deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ChainlinkFeedOracle`](../interfaces/deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts:205](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts#L205)

___

### createInterface

▸ `Static` **createInterface**(): `ChainlinkFeedOracleInterface`

#### Returns

`ChainlinkFeedOracleInterface`

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts:202](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChainlinkFeedOracle__factory.ts#L202)
