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

[entities/ChromaticRouter.ts:53](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L53)

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

[entities/ChromaticRouter.ts:189](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L189)

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

[entities/ChromaticRouter.ts:163](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L163)

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

[entities/ChromaticRouter.ts:123](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L123)

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

[entities/ChromaticRouter.ts:142](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L142)

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

[entities/ChromaticRouter.ts:304](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L304)

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

[entities/ChromaticRouter.ts:289](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L289)

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

[entities/ChromaticRouter.ts:111](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L111)

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

[entities/ChromaticRouter.ts:98](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L98)

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

[entities/ChromaticRouter.ts:59](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L59)

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

[entities/ChromaticRouter.ts:76](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L76)

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

[entities/ChromaticRouter.ts:248](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L248)

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

[entities/ChromaticRouter.ts:222](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L222)

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

[entities/ChromaticRouter.ts:332](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L332)

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

[entities/ChromaticRouter.ts:317](https://github.com/chromatic-protocol/sdk/blob/9e0eb84/packages/sdk-ethers-v5/src/entities/ChromaticRouter.ts#L317)
