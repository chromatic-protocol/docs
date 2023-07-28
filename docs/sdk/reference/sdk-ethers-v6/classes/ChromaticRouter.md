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

[entities/ChromaticRouter.ts:52](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L52)

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

[entities/ChromaticRouter.ts:188](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L188)

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

[entities/ChromaticRouter.ts:162](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L162)

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

[entities/ChromaticRouter.ts:122](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L122)

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

[entities/ChromaticRouter.ts:141](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L141)

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

[entities/ChromaticRouter.ts:301](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L301)

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

[entities/ChromaticRouter.ts:288](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L288)

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

[entities/ChromaticRouter.ts:110](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L110)

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

[entities/ChromaticRouter.ts:97](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L97)

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

[entities/ChromaticRouter.ts:58](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L58)

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

[entities/ChromaticRouter.ts:75](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L75)

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

[entities/ChromaticRouter.ts:247](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L247)

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

[entities/ChromaticRouter.ts:221](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L221)

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

[entities/ChromaticRouter.ts:329](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L329)

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

[entities/ChromaticRouter.ts:314](https://github.com/chromatic-protocol/sdk/blob/01a7cba/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L314)
