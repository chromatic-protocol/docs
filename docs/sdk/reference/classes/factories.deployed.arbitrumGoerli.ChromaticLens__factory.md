---
id: "factories.deployed.arbitrumGoerli.ChromaticLens__factory"
title: "Class: ChromaticLens__factory"
sidebar_label: "ChromaticLens__factory"
custom_edit_url: null
---

[deployed](../namespaces/factories.deployed.md).[arbitrumGoerli](../namespaces/factories.deployed.arbitrumGoerli.md).ChromaticLens__factory

## Hierarchy

- `ContractFactory`

  ↳ **`ChromaticLens__factory`**

## Constructors

### constructor

• **new ChromaticLens__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ChromaticLensConstructorParams` |

#### Overrides

ContractFactory.constructor

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts:297](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts#L297)

## Methods

### attach

▸ **attach**(`address`): [`ChromaticLens`](../interfaces/deployed.arbitrumGoerli.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ChromaticLens`](../interfaces/deployed.arbitrumGoerli.ChromaticLens-1.md)

#### Overrides

ContractFactory.attach

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts:317](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts#L317)

___

### connect

▸ **connect**(`signer`): [`ChromaticLens__factory`](factories.deployed.arbitrumGoerli.ChromaticLens__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ChromaticLens__factory`](factories.deployed.arbitrumGoerli.ChromaticLens__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts:320](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts#L320)

___

### deploy

▸ **deploy**(`_router`, `overrides?`): `Promise`<[`ChromaticLens`](../interfaces/deployed.arbitrumGoerli.ChromaticLens-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_router` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<[`ChromaticLens`](../interfaces/deployed.arbitrumGoerli.ChromaticLens-1.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts:305](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts#L305)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_router`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_router` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts:311](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts#L311)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ChromaticLens`](../interfaces/deployed.arbitrumGoerli.ChromaticLens-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ChromaticLens`](../interfaces/deployed.arbitrumGoerli.ChromaticLens-1.md)

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts:329](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts#L329)

___

### createInterface

▸ `Static` **createInterface**(): `ChromaticLensInterface`

#### Returns

`ChromaticLensInterface`

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts:326](https://github.com/chromatic-protocol/sdk/blob/32da7ee/src/gen/factories/deployed/arbitrum_goerli/ChromaticLens__factory.ts#L326)
