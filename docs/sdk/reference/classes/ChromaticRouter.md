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

[entities/ChromaticRouter.ts:27](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L27)

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

[entities/ChromaticRouter.ts:109](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L109)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `receipient?`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) |
| `receipient?` | `string` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:93](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L93)

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

[entities/ChromaticRouter.ts:66](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L66)

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

[entities/ChromaticRouter.ts:79](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L79)

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

[entities/ChromaticRouter.ts:193](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L193)

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

[entities/ChromaticRouter.ts:180](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L180)

___

### claimPosition

▸ **claimPosition**(`marketAdress`, `positionId`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAdress` | `string` |
| `positionId` | `BigNumberish` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:61](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L61)

___

### closePosition

▸ **closePosition**(`marketAddress`, `positionId`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `positionId` | `BigNumberish` |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:56](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L56)

___

### contracts

▸ **contracts**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `router` | (`signerOrProvider?`: `Signer` \| `Provider`) => `ChromaticRouter` |

#### Defined in

[entities/ChromaticRouter.ts:31](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L31)

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

[entities/ChromaticRouter.ts:42](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L42)

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

[entities/ChromaticRouter.ts:148](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L148)

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

[entities/ChromaticRouter.ts:132](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L132)

___

### withdrawLiquidities

▸ **withdrawLiquidities**(`marketAddress`, `receiptIds`): `Promise`<`ContractReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketAddress` | `string` |
| `receiptIds` | `BigNumberish`[] |

#### Returns

`Promise`<`ContractReceipt`\>

#### Defined in

[entities/ChromaticRouter.ts:205](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L205)

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

[entities/ChromaticRouter.ts:198](https://github.com/chromatic-protocol/sdk/blob/692619a/src/entities/ChromaticRouter.ts#L198)
