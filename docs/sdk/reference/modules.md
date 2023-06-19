---
id: "modules"
title: "@chromatic-protocol/sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [contracts](namespaces/contracts.md)
- [factories](namespaces/factories.md)

## Variables

### deployedAddress

• `Const` **deployedAddress**: `DeployedAddress`

Deployed Address of contracts
mapping of "chainName" to collection of contract name to deployed address

**`Remarks`**

use with helper functions using this constant object

[getDeployedAddress](modules.md#getdeployedaddress)
[getDeployedContract](modules.md#getdeployedcontract)
[getAllDeployedContracts](modules.md#getalldeployedcontracts)
[getDeployedContractNames](modules.md#getdeployedcontractnames)
[getChainNames](modules.md#getchainnames)

#### Defined in

[gen/deployedAddress.ts:23](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/deployedAddress.ts#L23)

## Functions

### getAllDeployedContracts

▸ **getAllDeployedContracts**(`chainName`): `Contracts`

Returns a map of contractName to deployed contract instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainName` | `string` | deployed network name |

#### Returns

`Contracts`

#### Defined in

[gen/index.ts:62](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/index.ts#L62)

___

### getChainNames

▸ **getChainNames**(): `string`[]

Returns chainNames in deployed addresses

#### Returns

`string`[]

#### Defined in

[gen/index.ts:84](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/index.ts#L84)

___

### getDeployedAddress

▸ **getDeployedAddress**(`contractName`, `chainName`): `string`

Returns the deployed address of given contractName and chainName if exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractName` | `string` | deployed contract name |
| `chainName` | `string` | deployed network name |

#### Returns

`string`

address of deployed contract or undefined

#### Defined in

[gen/index.ts:23](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/index.ts#L23)

___

### getDeployedContract

▸ **getDeployedContract**(`contractName`, `chainName`, `signerOrProvider?`): `BaseContract` \| `undefined`

Returns an instance of contract interface of deployed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractName` | `string` | deployed contract name |
| `chainName` | `string` | deployed network name |
| `signerOrProvider?` | `Signer` \| `Provider` | provider or signer. |

#### Returns

`BaseContract` \| `undefined`

#### Defined in

[gen/index.ts:34](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/index.ts#L34)

___

### getDeployedContractNames

▸ **getDeployedContractNames**(`chainName`): `string`[]

Returns deployed contractNames in chainName

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainName` | `string` | deployed network name |

#### Returns

`string`[]

#### Defined in

[gen/index.ts:75](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/index.ts#L75)
