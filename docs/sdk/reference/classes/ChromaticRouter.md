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

[entities/ChromaticRouter.ts:30](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L30)

## Accessors

### contracts

• `get` **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `router` | `ChromaticRouter` |

#### Defined in

[entities/ChromaticRouter.ts:34](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L34)

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

[entities/ChromaticRouter.ts:97](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L97)

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

[entities/ChromaticRouter.ts:84](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L84)

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

[entities/ChromaticRouter.ts:57](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L57)

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

[entities/ChromaticRouter.ts:70](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L70)

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

[entities/ChromaticRouter.ts:173](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L173)

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

[entities/ChromaticRouter.ts:162](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L162)

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

[entities/ChromaticRouter.ts:52](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L52)

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

[entities/ChromaticRouter.ts:40](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L40)

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

[entities/ChromaticRouter.ts:132](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L132)

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

[entities/ChromaticRouter.ts:118](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L118)

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

[entities/ChromaticRouter.ts:178](https://github.com/chromatic-protocol/sdk/blob/b3e228c/src/entities/ChromaticRouter.ts#L178)
