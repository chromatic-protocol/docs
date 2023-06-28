---
id: "ChromaticRouter"
title: "Class: ChromaticRouter"
sidebar_label: "ChromaticRouter"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new ChromaticRouter**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |

#### Defined in

[entities/ChromaticRouter.ts:31](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L31)

## Methods

### addLiquidities

▸ **addLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `params` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md)[] |
| `recipient?` | `string` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:109](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L109)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `receipient?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) |
| `receipient?` | `string` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[entities/ChromaticRouter.ts:94](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L94)

___

### approvalClbTokenToRouter

▸ **approvalClbTokenToRouter**(`marketAddress`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[entities/ChromaticRouter.ts:67](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L67)

___

### approvalSettlementTokenToRouter

▸ **approvalSettlementTokenToRouter**(`marketAddress`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[entities/ChromaticRouter.ts:80](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L80)

___

### claimLiquidites

▸ **claimLiquidites**(`marketAddress`, `receiptIds`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `receiptIds` | `BigNumberish`[] |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:193](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L193)

___

### claimLiquidity

▸ **claimLiquidity**(`marketAddress`, `receiptId`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `receiptId` | `BigNumberish` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:180](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L180)

___

### closePosition

▸ **closePosition**(`marketAddress`, `param`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `param` | [`RouterClosePositionParam`](../interfaces/RouterClosePositionParam.md) |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:60](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L60)

___

### contracts

▸ **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `router` | (`signerOrProvider?`: `Signer` \| `Provider`) => `ChromaticRouter` |

#### Defined in

[entities/ChromaticRouter.ts:35](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L35)

___

### openPosition

▸ **openPosition**(`marketAddress`, `param`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `param` | [`RouterOpenPositionParam`](../interfaces/RouterOpenPositionParam.md) |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:46](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L46)

___

### removeLiquidities

▸ **removeLiquidities**(`marketAddress`, `params`, `receipient?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `params` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md)[] |
| `receipient?` | `string` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:148](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L148)

___

### removeLiquidity

▸ **removeLiquidity**(`marketAddress`, `param`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `param` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md) |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:132](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L132)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`marketAddress`, `receiptId`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `receiptId` | `any` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:198](https://github.com/chromatic-protocol/sdk/blob/6709577/src/entities/ChromaticRouter.ts#L198)
