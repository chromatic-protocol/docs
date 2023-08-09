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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:50](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L50)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:185](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L185)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:159](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L159)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:119](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L119)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:138](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L138)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:298](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L298)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:285](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L285)

___

### claimPosition

▸ **claimPosition**(`marketAdress`, `positionId`): `Promise`<`ContractTransactionReceipt`\>

Claims a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAdress` | `string` | The address of the Chromatic Market contract. |
| `positionId` | `BigNumberish` | The ID of the position to claim. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the position claiming.

#### Defined in

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:107](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L107)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:94](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L94)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:56](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L56)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:73](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L73)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:244](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L244)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:218](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L218)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:326](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L326)

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

[packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts:311](https://github.com/chromatic-protocol/sdk/blob/6618d30/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L311)
