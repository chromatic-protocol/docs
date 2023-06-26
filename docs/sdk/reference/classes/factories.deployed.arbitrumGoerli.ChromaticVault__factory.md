---
id: "factories.deployed.arbitrumGoerli.ChromaticVault__factory"
title: "Class: ChromaticVault__factory"
sidebar_label: "ChromaticVault__factory"
custom_edit_url: null
---

[deployed](../namespaces/factories.deployed.md).[arbitrumGoerli](../namespaces/factories.deployed.arbitrumGoerli.md).ChromaticVault__factory

## Hierarchy

- `ContractFactory`

  ↳ **`ChromaticVault__factory`**

## Constructors

### constructor

• **new ChromaticVault__factory**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ChromaticVaultConstructorParams` |

#### Overrides

ContractFactory.constructor

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts:931](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts#L931)

## Methods

### attach

▸ **attach**(`address`): [`ChromaticVault`](../interfaces/deployed.arbitrumGoerli.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ChromaticVault`](../interfaces/deployed.arbitrumGoerli.ChromaticVault.md)

#### Overrides

ContractFactory.attach

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts:965](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts#L965)

___

### connect

▸ **connect**(`signer`): [`ChromaticVault__factory`](factories.deployed.arbitrumGoerli.ChromaticVault__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ChromaticVault__factory`](factories.deployed.arbitrumGoerli.ChromaticVault__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts:968](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts#L968)

___

### deploy

▸ **deploy**(`_factory`, `_automate`, `opsProxyFactory`, `overrides?`): `Promise`<[`ChromaticVault`](../interfaces/deployed.arbitrumGoerli.ChromaticVault.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_factory` | `PromiseOrValue`<`string`\> |
| `_automate` | `PromiseOrValue`<`string`\> |
| `opsProxyFactory` | `PromiseOrValue`<`string`\> |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<[`ChromaticVault`](../interfaces/deployed.arbitrumGoerli.ChromaticVault.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts:939](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts#L939)

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

[gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts:952](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts#L952)

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ChromaticVault`](../interfaces/deployed.arbitrumGoerli.ChromaticVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ChromaticVault`](../interfaces/deployed.arbitrumGoerli.ChromaticVault.md)

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts:977](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts#L977)

___

### createInterface

▸ `Static` **createInterface**(): `ChromaticVaultInterface`

#### Returns

`ChromaticVaultInterface`

#### Defined in

[gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts:974](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/factories/deployed/arbitrum_goerli/ChromaticVault__factory.ts#L974)
