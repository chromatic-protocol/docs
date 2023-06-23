---
id: "deployed.arbitrumGoerli.ChromaticLiquidator"
title: "Interface: ChromaticLiquidator"
sidebar_label: "ChromaticLiquidator"
custom_edit_url: null
---

[deployed](../namespaces/deployed.md).[arbitrumGoerli](../namespaces/deployed.arbitrumGoerli.md).ChromaticLiquidator

## Hierarchy

- `BaseContract`

  ↳ **`ChromaticLiquidator`**

## Methods

### attach

▸ **attach**(`addressOrName`): [`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:132](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L132)

___

### automate

▸ **automate**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:250](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L250)

___

### cancelClaimPositionTask

▸ **cancelClaimPositionTask**(`positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by a registered market.
Cancels a claim position task for a given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position for which to cancel the claim position task. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:257](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L257)

___

### cancelLiquidationTask

▸ **cancelLiquidationTask**(`positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by a registered market.
Cancels a liquidation task for a given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position for which to cancel the liquidation task. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:267](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L267)

___

### claimPosition

▸ **claimPosition**(`market`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the dedicated message sender.
Claims a position in a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market contract. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to be claimed. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:278](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L278)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:131](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L131)

___

### createClaimPositionTask

▸ **createClaimPositionTask**(`positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by a registered market.
Creates a claim position task for a given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to be claimed. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:289](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L289)

___

### createLiquidationTask

▸ **createLiquidationTask**(`positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by a registered market.
Creates a liquidation task for a given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to be liquidated. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:299](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L299)

___

### dedicatedMsgSender

▸ **dedicatedMsgSender**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:304](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L304)

___

### deployed

▸ **deployed**(): `Promise`<[`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)\>

#### Returns

`Promise`<[`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:133](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L133)

___

### liquidate

▸ **liquidate**(`market`, `positionId`, `overrides?`): `Promise`<`ContractTransaction`\>

Can only be called by the dedicated message sender.
Liquidates a position in a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `PromiseOrValue`<`string`\> | The address of the market contract. |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to be liquidated. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:312](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L312)

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:143](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L143)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:146](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L146)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:137](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L137)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:147](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L147)

▸ **removeAllListeners**(`eventName?`): [`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChromaticLiquidator`](deployed.arbitrumGoerli.ChromaticLiquidator.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:150](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L150)

___

### resolveClaimPosition

▸ **resolveClaimPosition**(`_market`, `positionId`, `overrides?`): `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

This function is called by the Gelato automation system.
Resolves the claim of a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_market` | `PromiseOrValue`<`string`\> | - |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to be claimed. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:324](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L324)

___

### resolveLiquidation

▸ **resolveLiquidation**(`_market`, `positionId`, `overrides?`): `Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

This function is called by the Gelato automation system.
Resolves the liquidation of a position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_market` | `PromiseOrValue`<`string`\> | - |
| `positionId` | `PromiseOrValue`<`BigNumberish`\> | The ID of the position to be liquidated. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`boolean`, `string`] & { `canExec`: `boolean` ; `execPayload`: `string`  }\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts:336](https://github.com/chromatic-protocol/sdk/blob/8bcb0f6/src/gen/deployed/arbitrum_goerli/ChromaticLiquidator.ts#L336)
