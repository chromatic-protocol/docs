---
id: "modules"
title: "@chromatic-protocol/sdk-ethers-v6"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [utils](namespaces/utils.md)

## Classes

- [ChromaticAccount](classes/ChromaticAccount.md)
- [ChromaticLens](classes/ChromaticLens.md)
- [ChromaticMarket](classes/ChromaticMarket.md)
- [ChromaticMarketFactory](classes/ChromaticMarketFactory.md)
- [ChromaticPosition](classes/ChromaticPosition.md)
- [ChromaticRouter](classes/ChromaticRouter.md)
- [Client](classes/Client.md)

## Interfaces

- [ClaimableLiquidityResult](interfaces/ClaimableLiquidityResult.md)
- [IPosition](interfaces/IPosition.md)
- [LiquidityBinResult](interfaces/LiquidityBinResult.md)
- [OwnedLiquidityBinResult](interfaces/OwnedLiquidityBinResult.md)
- [PendingLiquidityResult](interfaces/PendingLiquidityResult.md)
- [PositionParam](interfaces/PositionParam.md)
- [RouterAddLiquidityParam](interfaces/RouterAddLiquidityParam.md)
- [RouterOpenPositionParam](interfaces/RouterOpenPositionParam.md)
- [RouterRemoveLiquidityParam](interfaces/RouterRemoveLiquidityParam.md)

## Variables

### MIN\_GAS\_LIMIT\_SETTLE\_ALL

• `Const` **MIN\_GAS\_LIMIT\_SETTLE\_ALL**: `bigint`

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:42](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L42)

___

### MIN\_GAS\_LIMIT\_SETTLE\_HALF

• `Const` **MIN\_GAS\_LIMIT\_SETTLE\_HALF**: `bigint`

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:43](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L43)

___

### deployedAddress

• `Const` **deployedAddress**: `DeployedAddress`

Deployed Address of contracts
mapping of "chainName" to collection of contract name to deployed address

**`Remarks`**

use with helper functions using this constant object

getDeployedAddress
getDeployedContract
getAllDeployedContracts
getDeployedContractNames
getChainNames

#### Defined in

[packages/sdk-ethers-v6/src/gen/deployedAddress.ts:23](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/gen/deployedAddress.ts#L23)

## Functions

### adjustMakerGasLimit

▸ **adjustMakerGasLimit**(`gas`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gas` | `bigint` |

#### Returns

`bigint`

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:48](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L48)

___

### adjustTakerGasLimit

▸ **adjustTakerGasLimit**(`gas`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gas` | `bigint` |

#### Returns

`bigint`

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:45](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L45)
