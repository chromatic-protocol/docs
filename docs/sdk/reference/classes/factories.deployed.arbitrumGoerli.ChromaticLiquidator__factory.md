---
id: "factories.deployed.arbitrumGoerli.ChromaticLiquidator__factory"
title: "Class: ChromaticLiquidator__factory"
sidebar_label: "ChromaticLiquidator__factory"
custom_edit_url: null
---

[deployed](../namespaces/factories.deployed.md).[arbitrumGoerli](../namespaces/factories.deployed.arbitrumGoerli.md).ChromaticLiquidator__factory

## Hierarchy

- `ContractFactory`

  ↳ **`ChromaticLiquidator__factory`**

## Constructors

### constructor

• **new ChromaticLiquidator__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ChromaticLiquidatorConstructorParams` |

#### Overrides

ContractFactory.constructor

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts:225](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts#L225)

## Methods

### attach

▸ **attach**(`address`): [`ChromaticLiquidator`](../interfaces/deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ChromaticLiquidator`](../interfaces/deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Overrides

ContractFactory.attach

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts:259](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts#L259)

___

### connect

▸ **connect**(`signer`): [`ChromaticLiquidator__factory`](factories.deployed.arbitrumGoerli.ChromaticLiquidator__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ChromaticLiquidator__factory`](factories.deployed.arbitrumGoerli.ChromaticLiquidator__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts:262](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts#L262)

___

### deploy

▸ **deploy**(`_factory`, `_automate`, `opsProxyFactory`, `overrides?`): `Promise`<[`ChromaticLiquidator`](../interfaces/deployed.arbitrumGoerli.ChromaticLiquidator.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_factory` | `PromiseOrValue`<`string`\> |
| `_automate` | `PromiseOrValue`<`string`\> |
| `opsProxyFactory` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<[`ChromaticLiquidator`](../interfaces/deployed.arbitrumGoerli.ChromaticLiquidator.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts:233](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts#L233)

___

### getDeployTransaction

▸ **getDeployTransaction**(`_factory`, `_automate`, `opsProxyFactory`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_factory` | `PromiseOrValue`<`string`\> |
| `_automate` | `PromiseOrValue`<`string`\> |
| `opsProxyFactory` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts:246](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts#L246)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ChromaticLiquidator`](../interfaces/deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ChromaticLiquidator`](../interfaces/deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts:271](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts#L271)

___

### createInterface

▸ `Static` **createInterface**(): `ChromaticLiquidatorInterface`

#### Returns

`ChromaticLiquidatorInterface`

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts:268](https://github.com/chromatic-protocol/sdk/blob/27a986d/src/gen/factories/deployed/arbitrum_goerli/ChromaticLiquidator__factory.ts#L268)
