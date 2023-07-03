---
id: "ChromaticRouter"
title: "Class: ChromaticRouter"
sidebar_label: "ChromaticRouter"
sidebar_position: 0
custom_edit_url: null
---

Represents the ChromaticRouter, which is used to interact with ChromaticRouter contracts.

## Constructors

### constructor

• **new ChromaticRouter**(`_client`)

Creates an instance of ChromaticRouter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Client instance used to connect to the Chromatic contracts. |

#### Defined in

[entities/ChromaticRouter.ts:43](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L43)

## Methods

### addLiquidities

▸ **addLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`ContractReceipt`\>

Adds multiple liquidity positions to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md)[] | The array of parameters for adding liquidity. |
| `recipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity additions.

#### Defined in

[entities/ChromaticRouter.ts:169](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L169)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `receipient?`): `Promise`<`ContractReceipt`\>

Adds liquidity to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) | The parameters for adding liquidity. |
| `receipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity addition.

#### Defined in

[entities/ChromaticRouter.ts:146](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L146)

___

### approvalClbTokenToRouter

▸ **approvalClbTokenToRouter**(`marketAddress`): `Promise`<`boolean`\>

Approves the CLB token for the ChromaticRouter contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating whether the approval was successful.

#### Defined in

[entities/ChromaticRouter.ts:107](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L107)

___

### approvalSettlementTokenToRouter

▸ **approvalSettlementTokenToRouter**(`marketAddress`): `Promise`<`boolean`\>

Approves the settlement token for the ChromaticRouter contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating whether the approval was successful.

#### Defined in

[entities/ChromaticRouter.ts:125](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L125)

___

### claimLiquidites

▸ **claimLiquidites**(`marketAddress`, `receiptIds`): `Promise`<`ContractReceipt`\>

Claims multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptIds` | `BigNumberish`[] | The array of IDs of the liquidity positions to claim. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity positions claiming.

#### Defined in

[entities/ChromaticRouter.ts:278](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L278)

___

### claimLiquidity

▸ **claimLiquidity**(`marketAddress`, `receiptId`): `Promise`<`ContractReceipt`\>

Claims a liquidity position from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptId` | `BigNumberish` | The ID of the liquidity position to claim. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity position claiming.

#### Defined in

[entities/ChromaticRouter.ts:259](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L259)

___

### claimPosition

▸ **claimPosition**(`marketAdress`, `positionId`): `Promise`<`ContractReceipt`\>

Claims a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAdress` | `string` | The address of the Chromatic Market contract. |
| `positionId` | `BigNumberish` | The ID of the position to claim. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the position claiming.

#### Defined in

[entities/ChromaticRouter.ts:97](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L97)

___

### closePosition

▸ **closePosition**(`marketAddress`, `positionId`): `Promise`<`ContractReceipt`\>

Closes an existing position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `positionId` | `BigNumberish` | The ID of the position to close. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the position closing.

#### Defined in

[entities/ChromaticRouter.ts:86](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L86)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticRouter contract instance.

#### Returns

`Object`

A contract instance for the ChromaticRouter.

| Name | Type |
| :------ | :------ |
| `router` | (`signerOrProvider?`: `Signer` \| `Provider`) => `ChromaticRouter` |

#### Defined in

[entities/ChromaticRouter.ts:49](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L49)

___

### openPosition

▸ **openPosition**(`marketAddress`, `param`): `Promise`<`ContractReceipt`\>

Opens a new position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterOpenPositionParam`](../interfaces/RouterOpenPositionParam.md) | The parameters for opening the position. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the position opening.

#### Defined in

[entities/ChromaticRouter.ts:66](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L66)

___

### removeLiquidities

▸ **removeLiquidities**(`marketAddress`, `params`, `receipient?`): `Promise`<`ContractReceipt`\>

Removes multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md)[] | The array of parameters for removing liquidity. |
| `receipient?` | `string` | - |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removals.

#### Defined in

[entities/ChromaticRouter.ts:221](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L221)

___

### removeLiquidity

▸ **removeLiquidity**(`marketAddress`, `param`): `Promise`<`ContractReceipt`\>

Removes liquidity from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md) | The parameters for removing liquidity. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removal.

#### Defined in

[entities/ChromaticRouter.ts:198](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L198)

___

### withdrawLiquidities

▸ **withdrawLiquidities**(`marketAddress`, `receiptIds`): `Promise`<`ContractReceipt`\>

Withdraws multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptIds` | `BigNumberish`[] | The array of IDs of the liquidity positions to withdraw. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity positions withdrawal.

#### Defined in

[entities/ChromaticRouter.ts:302](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L302)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`marketAddress`, `receiptId`): `Promise`<`ContractReceipt`\>

Withdraws a liquidity position from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptId` | `any` | The ID of the liquidity position to withdraw. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity position withdrawal.

#### Defined in

[entities/ChromaticRouter.ts:289](https://github.com/chromatic-protocol/sdk/blob/e183082/src/entities/ChromaticRouter.ts#L289)
