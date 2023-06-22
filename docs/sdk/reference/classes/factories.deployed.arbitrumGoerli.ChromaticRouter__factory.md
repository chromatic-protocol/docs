---
id: "factories.deployed.arbitrumGoerli.ChromaticRouter__factory"
title: "Class: ChromaticRouter__factory"
sidebar_label: "ChromaticRouter__factory"
custom_edit_url: null
---

[deployed](../namespaces/factories.deployed.md).[arbitrumGoerli](../namespaces/factories.deployed.arbitrumGoerli.md).ChromaticRouter__factory

## Hierarchy

- `ContractFactory`

  ↳ **`ChromaticRouter__factory`**

## Constructors

### constructor

• **new ChromaticRouter__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ChromaticRouterConstructorParams` |

#### Overrides

ContractFactory.constructor

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts:749](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts#L749)

## Methods

### attach

▸ **attach**(`address`): [`ChromaticRouter`](../interfaces/deployed.arbitrumGoerli.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ChromaticRouter`](../interfaces/deployed.arbitrumGoerli.ChromaticRouter.md)

#### Overrides

ContractFactory.attach

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts:772](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts#L772)

___

### connect

▸ **connect**(`signer`): [`ChromaticRouter__factory`](factories.deployed.arbitrumGoerli.ChromaticRouter__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ChromaticRouter__factory`](factories.deployed.arbitrumGoerli.ChromaticRouter__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts:775](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts#L775)

___

### deploy

▸ **deploy**(`_marketFactory`, `overrides?`): `Promise`<[`ChromaticRouter`](../interfaces/deployed.arbitrumGoerli.ChromaticRouter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_marketFactory` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<[`ChromaticRouter`](../interfaces/deployed.arbitrumGoerli.ChromaticRouter.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts:757](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts#L757)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_marketFactory`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_marketFactory` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts:766](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts#L766)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ChromaticRouter`](../interfaces/deployed.arbitrumGoerli.ChromaticRouter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ChromaticRouter`](../interfaces/deployed.arbitrumGoerli.ChromaticRouter.md)

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts:784](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts#L784)

___

### createInterface

▸ `Static` **createInterface**(): `ChromaticRouterInterface`

#### Returns

`ChromaticRouterInterface`

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts:781](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/factories/deployed/arbitrum_goerli/ChromaticRouter__factory.ts#L781)
