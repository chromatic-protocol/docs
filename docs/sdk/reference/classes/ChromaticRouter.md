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

[entities/ChromaticRouter.ts:30](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L30)

## Accessors

### routerContract

• `get` **routerContract**(): `ChromaticRouter`

#### Returns

`ChromaticRouter`

#### Defined in

[entities/ChromaticRouter.ts:34](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L34)

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

[entities/ChromaticRouter.ts:95](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L95)

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

[entities/ChromaticRouter.ts:82](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L82)

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

[entities/ChromaticRouter.ts:55](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L55)

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

[entities/ChromaticRouter.ts:68](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L68)

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

[entities/ChromaticRouter.ts:176](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L176)

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

[entities/ChromaticRouter.ts:165](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L165)

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

[entities/ChromaticRouter.ts:50](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L50)

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

[entities/ChromaticRouter.ts:38](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L38)

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

[entities/ChromaticRouter.ts:135](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L135)

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

[entities/ChromaticRouter.ts:121](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L121)

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

[entities/ChromaticRouter.ts:181](https://github.com/chromatic-protocol/sdk/blob/fef9ef9/src/entities/ChromaticRouter.ts#L181)
