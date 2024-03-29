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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:59](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L59)

## Methods

### addLiquidities

▸ **addLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`TransactionReceipt`\>

Adds multiple liquidity positions to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `params` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md)[] | The array of parameters for adding liquidity. |
| `recipient?` | \`0x${string}\` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity additions.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:273](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L273)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `recipient?`): `Promise`<`TransactionReceipt`\>

Adds liquidity to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) | The parameters for adding liquidity. |
| `recipient?` | \`0x${string}\` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity addition.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:240](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L240)

___

### approvalClbTokenToRouter

▸ **approvalClbTokenToRouter**(`marketAddress`): `Promise`<`boolean`\>

Approves the CLB token for the ChromaticRouter contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating whether the approval was successful.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:177](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L177)

___

### approvalSettlementTokenToRouter

▸ **approvalSettlementTokenToRouter**(`marketAddress`, `amount`): `Promise`<`boolean`\>

Approves the settlement token for the ChromaticRouter contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `amount` | `bigint` | The allowance of Chromatic Router over the caller's tokens |

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating whether the approval was successful.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:208](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L208)

___

### claimLiquidites

▸ **claimLiquidites**(`marketAddress`, `receiptIds`): `Promise`<`TransactionReceipt`\>

Claims multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `receiptIds` | `bigint`[] | The array of IDs of the liquidity positions to claim. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity positions claiming.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:439](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L439)

___

### claimLiquidity

▸ **claimLiquidity**(`marketAddress`, `receiptId`): `Promise`<`TransactionReceipt`\>

Claims a liquidity position from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `receiptId` | `bigint` | The ID of the liquidity position to claim. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity position claiming.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:413](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L413)

___

### claimPosition

▸ **claimPosition**(`marketAdress`, `positionId`): `Promise`<`TransactionReceipt`\>

Claims a position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAdress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `positionId` | `bigint` | The ID of the position to claim. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the position claiming.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:148](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L148)

___

### closePosition

▸ **closePosition**(`marketAddress`, `positionId`): `Promise`<`TransactionReceipt`\>

Closes an existing position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `positionId` | `bigint` | The ID of the position to close. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the position closing.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:122](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L122)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticRouter contract instance.

#### Returns

`Object`

A contract instance for the ChromaticRouter.

| Name | Type |
| :------ | :------ |
| `router` | () => `ContractChromaticRouter` |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:65](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L65)

___

### openPosition

▸ **openPosition**(`marketAddress`, `param`): `Promise`<`TransactionReceipt`\>

Opens a new position in the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `param` | [`RouterOpenPositionParam`](../interfaces/RouterOpenPositionParam.md) | The parameters for opening the position. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the position opening.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:86](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L86)

___

### removeLiquidities

▸ **removeLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`TransactionReceipt`\>

Removes multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `params` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md)[] | The array of parameters for removing liquidity. |
| `recipient?` | \`0x${string}\` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removals.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:359](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L359)

___

### removeLiquidity

▸ **removeLiquidity**(`marketAddress`, `param`): `Promise`<`TransactionReceipt`\>

Removes liquidity from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `param` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md) | The parameters for removing liquidity. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removal.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:320](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L320)

___

### withdrawLiquidities

▸ **withdrawLiquidities**(`marketAddress`, `receiptIds`): `Promise`<`TransactionReceipt`\>

Withdraws multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `receiptIds` | `bigint`[] | The array of IDs of the liquidity positions to withdraw. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity positions withdrawal.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:494](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L494)

___

### withdrawLiquidity

▸ **withdrawLiquidity**(`marketAddress`, `receiptId`): `Promise`<`TransactionReceipt`\>

Withdraws a liquidity position from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `receiptId` | `bigint` | The ID of the liquidity position to withdraw. |

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity position withdrawal.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:468](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticRouter.ts#L468)
