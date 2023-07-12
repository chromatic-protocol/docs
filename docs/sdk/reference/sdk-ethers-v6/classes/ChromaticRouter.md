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

[entities/ChromaticRouter.ts:42](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L42)

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

[entities/ChromaticRouter.ts:178](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L178)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `receipient?`): `Promise`<`ContractTransactionReceipt`\>

Adds liquidity to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) | The parameters for adding liquidity. |
| `receipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity addition.

#### Defined in

[entities/ChromaticRouter.ts:152](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L152)

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

[entities/ChromaticRouter.ts:112](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L112)

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

[entities/ChromaticRouter.ts:131](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L131)

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

[entities/ChromaticRouter.ts:291](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L291)

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

[entities/ChromaticRouter.ts:278](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L278)

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

[entities/ChromaticRouter.ts:100](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L100)

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

[entities/ChromaticRouter.ts:87](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L87)

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

[entities/ChromaticRouter.ts:48](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L48)

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

[entities/ChromaticRouter.ts:65](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L65)

___

### removeLiquidities

▸ **removeLiquidities**(`marketAddress`, `params`, `receipient?`): `Promise`<`ContractTransactionReceipt`\>

Removes multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md)[] | The array of parameters for removing liquidity. |
| `receipient?` | `string` | - |

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removals.

#### Defined in

[entities/ChromaticRouter.ts:237](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L237)

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

[entities/ChromaticRouter.ts:211](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L211)

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

[entities/ChromaticRouter.ts:319](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L319)

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

[entities/ChromaticRouter.ts:304](https://github.com/chromatic-protocol/sdk/blob/c75917e/packages/sdk-ethers-v6/src/entities/ChromaticRouter.ts#L304)
