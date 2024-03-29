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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:61](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L61)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:231](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L231)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `recipient?`): `Promise`<`ContractReceipt`\>

Adds liquidity to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) | The parameters for adding liquidity. |
| `recipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity addition.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:201](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L201)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:151](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L151)

___

### approvalSettlementTokenToRouter

▸ **approvalSettlementTokenToRouter**(`marketAddress`, `amount`): `Promise`<`boolean`\>

Approves the settlement token for the ChromaticRouter contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `amount` | `BigNumberish` | The allowance of Chromatic Router over the caller's tokens |

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating whether the approval was successful.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:174](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L174)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:365](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L365)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:345](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L345)

___

### claimPosition

▸ **claimPosition**(`marketAddress`, `positionId`): `Promise`<`ContractReceipt`\>

Claims a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | - |
| `positionId` | `BigNumberish` | The ID of the position to claim. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the position claiming.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:132](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L132)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:112](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L112)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:67](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L67)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:84](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L84)

___

### removeLiquidities

▸ **removeLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`ContractReceipt`\>

Removes multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `params` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md)[] | The array of parameters for removing liquidity. |
| `recipient?` | `string` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removals.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:299](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L299)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:269](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L269)

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

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:405](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L405)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`marketAddress`, `receiptId`): `Promise`<`ContractReceipt`\>

Withdraws a liquidity position from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the Chromatic Market contract. |
| `receiptId` | `BigNumberish` | The ID of the liquidity position to withdraw. |

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the liquidity position withdrawal.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts:385](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L385)
