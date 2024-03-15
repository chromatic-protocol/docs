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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:60](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L60)

## Methods

### addLiquidities

▸ **addLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`ContractTransactionReceipt`\>

Adds multiple liquidity positions to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md)[] | The array of parameters for adding liquidity. |
| `recipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity additions.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:221](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L221)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `recipient?`): `Promise`<`ContractTransactionReceipt`\>

Adds liquidity to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) | The parameters for adding liquidity. |
| `recipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity addition.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:191](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L191)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:145](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L145)

___

### approvalSettlementTokenToRouter

▸ **approvalSettlementTokenToRouter**(`marketAddress`, `amount`): `Promise`<`boolean`\>

Approves the settlement token for the ChromaticRouter contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `amount` | `bigint` | The allowance of Chromatic Router over the caller's tokens |

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating whether the approval was successful.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:168](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L168)

___

### claimLiquidites

▸ **claimLiquidites**(`marketAddress`, `receiptIds`): `Promise`<`ContractTransactionReceipt`\>

Claims multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptIds` | `BigNumberish`[] | The array of IDs of the liquidity positions to claim. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity positions claiming.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:359](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L359)

___

### claimLiquidity

▸ **claimLiquidity**(`marketAddress`, `receiptId`): `Promise`<`ContractTransactionReceipt`\>

Claims a liquidity position from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptId` | `BigNumberish` | The ID of the liquidity position to claim. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity position claiming.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:338](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L338)

___

### claimPosition

▸ **claimPosition**(`marketAddress`, `positionId`): `Promise`<`ContractTransactionReceipt`\>

Claims a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | - |
| `positionId` | `BigNumberish` | The ID of the position to claim. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the position claiming.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:127](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L127)

___

### closePosition

▸ **closePosition**(`marketAddress`, `positionId`): `Promise`<`ContractTransactionReceipt`\>

Closes an existing position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `positionId` | `BigNumberish` | The ID of the position to close. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the position closing.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:108](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L108)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticRouter contract instance.

#### Returns

`Object`

A contract instance for the ChromaticRouter.

| Name | Type |
| :------ | :------ |
| `router` | (`signerOrProvider?`: `Provider` \| `Signer`) => `ChromaticRouter` |

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:66](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L66)

___

### openPosition

▸ **openPosition**(`marketAddress`, `param`): `Promise`<`ContractTransactionReceipt`\>

Opens a new position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterOpenPositionParam`](../interfaces/RouterOpenPositionParam.md) | The parameters for opening the position. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the position opening.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:83](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L83)

___

### removeLiquidities

▸ **removeLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`ContractTransactionReceipt`\>

Removes multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md)[] | The array of parameters for removing liquidity. |
| `recipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removals.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:291](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L291)

___

### removeLiquidity

▸ **removeLiquidity**(`marketAddress`, `param`): `Promise`<`ContractTransactionReceipt`\>

Removes liquidity from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md) | The parameters for removing liquidity. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removal.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:260](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L260)

___

### withdrawLiquidities

▸ **withdrawLiquidities**(`marketAddress`, `receiptIds`): `Promise`<`ContractTransactionReceipt`\>

Withdraws multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptIds` | `BigNumberish`[] | The array of IDs of the liquidity positions to withdraw. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity positions withdrawal.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:401](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L401)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`marketAddress`, `receiptId`): `Promise`<`ContractTransactionReceipt`\>

Withdraws a liquidity position from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptId` | `BigNumberish` | The ID of the liquidity position to withdraw. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity position withdrawal.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:380](https://github.com/chromatic-protocol/sdk/blob/e269c27/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L380)
