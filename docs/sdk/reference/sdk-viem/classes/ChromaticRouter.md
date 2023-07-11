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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:45](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L45)

## Methods

### addLiquidities

▸ **addLiquidities**(`marketAddress`, `params`, `recipient?`): `Promise`<`undefined` \| `TransactionReceipt`\>

Adds multiple liquidity positions to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `params` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md)[] | The array of parameters for adding liquidity. |
| `recipient?` | \`0x${string}\` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`undefined` \| `TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity additions.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:236](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L236)

___

### addLiquidity

▸ **addLiquidity**(`marketAddress`, `param`, `receipient?`): `Promise`<`undefined` \| `TransactionReceipt`\>

Adds liquidity to the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `param` | [`RouterAddLiquidityParam`](../interfaces/RouterAddLiquidityParam.md) | The parameters for adding liquidity. |
| `receipient?` | \`0x${string}\` | The recipient address for the liquidity tokens. |

#### Returns

`Promise`<`undefined` \| `TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity addition.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:205](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L205)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:148](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L148)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:177](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L177)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:382](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L382)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:362](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L362)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:125](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L125)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:105](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L105)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the ChromaticRouter contract instance.

#### Returns

`Object`

A contract instance for the ChromaticRouter.

| Name | Type |
| :------ | :------ |
| `router` | () => [`Contract`](../namespaces/utils.md#contract)<readonly [{ `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_marketFactory"`` = '\_marketFactory'; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"constructor"`` = 'constructor' }, { `inputs`: readonly [] = []; `name`: ``"NotExistLpReceipt"`` = 'NotExistLpReceipt'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotMarket"`` = 'NotMarket'; `type`: ``"error"`` = 'error' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"account"`` = 'account'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"AccountCreated"`` = 'AccountCreated'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"previousOwner"`` = 'previousOwner'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"newOwner"`` = 'newOwner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"OwnershipTransferred"`` = 'OwnershipTransferred'; `type`: ``"event"`` = 'event' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"feeRate"`` = 'feeRate'; `type`: ``"int16"`` = 'int16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }] ; `name`: ``"addLiquidity"`` = 'addLiquidity'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt"`` = 'struct LpReceipt'; `name`: ``"receipt"`` = 'receipt'; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16[]"`` = 'int16[]'; `name`: ``"feeRates"`` = 'feeRates'; `type`: ``"int16[]"`` = 'int16[]' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"amounts"`` = 'amounts'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"addLiquidityBatch"`` = 'addLiquidityBatch'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt[]"`` = 'struct LpReceipt[]'; `name`: ``"lpReceipts"`` = 'lpReceipts'; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"vault"`` = 'vault'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"addLiquidityBatchCallback"`` = 'addLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"vault"`` = 'vault'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"addLiquidityCallback"`` = 'addLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"claimLiquidity"`` = 'claimLiquidity'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"claimLiquidityBatch"`` = 'claimLiquidityBatch'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"claimLiquidityBatchCallback"`` = 'claimLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"claimLiquidityCallback"`` = 'claimLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"positionId"`` = 'positionId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"claimPosition"`` = 'claimPosition'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"positionId"`` = 'positionId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"closePosition"`` = 'closePosition'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"createAccount"`` = 'createAccount'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"getAccount"`` = 'getAccount'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getLpReceiptIds"`` = 'getLpReceiptIds'; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``""`` = ''; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getLpReceiptIds"`` = 'getLpReceiptIds'; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``""`` = ''; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int224"`` = 'int224'; `name`: ``"qty"`` = 'qty'; `type`: ``"int224"`` = 'int224' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"leverage"`` = 'leverage'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"takerMargin"`` = 'takerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"makerMargin"`` = 'makerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"maxAllowableTradingFee"`` = 'maxAllowableTradingFee'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"openPosition"`` = 'openPosition'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"openVersion"`` = 'openVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"closeVersion"`` = 'closeVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"int224"`` = 'int224'; `name`: ``"qty"`` = 'qty'; `type`: ``"int224"`` = 'int224' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"leverage"`` = 'leverage'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"openTimestamp"`` = 'openTimestamp'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"closeTimestamp"`` = 'closeTimestamp'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"takerMargin"`` = 'takerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }, { `components`: readonly [{ `internalType`: ``"uint16"`` = 'uint16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"uint16"`` = 'uint16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }] ; `internalType`: ``"struct BinMargin[]"`` = 'struct BinMargin[]'; `name`: ``"_binMargins"`` = '\_binMargins'; `type`: ``"tuple[]"`` = 'tuple[]' }, { `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"_feeProtocol"`` = '\_feeProtocol'; `type`: ``"uint8"`` = 'uint8' }] ; `internalType`: ``"struct Position"`` = 'struct Position'; `name`: ``""`` = ''; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"owner"`` = 'owner'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"feeRate"`` = 'feeRate'; `type`: ``"int16"`` = 'int16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"clbTokenAmount"`` = 'clbTokenAmount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }] ; `name`: ``"removeLiquidity"`` = 'removeLiquidity'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt"`` = 'struct LpReceipt'; `name`: ``"receipt"`` = 'receipt'; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16[]"`` = 'int16[]'; `name`: ``"feeRates"`` = 'feeRates'; `type`: ``"int16[]"`` = 'int16[]' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"clbTokenAmounts"`` = 'clbTokenAmounts'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"removeLiquidityBatch"`` = 'removeLiquidityBatch'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt[]"`` = 'struct LpReceipt[]'; `name`: ``"lpReceipts"`` = 'lpReceipts'; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"clbToken"`` = 'clbToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"clbTokenIds"`` = 'clbTokenIds'; `type`: ``"uint256[]"`` = 'uint256[]' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"removeLiquidityBatchCallback"`` = 'removeLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"clbToken"`` = 'clbToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"clbTokenId"`` = 'clbTokenId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"removeLiquidityCallback"`` = 'removeLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"renounceOwnership"`` = 'renounceOwnership'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"newOwner"`` = 'newOwner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"transferOwnership"`` = 'transferOwnership'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"withdrawLiquidity"`` = 'withdrawLiquidity'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"withdrawLiquidityBatch"`` = 'withdrawLiquidityBatch'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"withdrawLiquidityBatchCallback"`` = 'withdrawLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"withdrawLiquidityCallback"`` = 'withdrawLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }]\> |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:51](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L51)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:72](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L72)

___

### removeLiquidities

▸ **removeLiquidities**(`marketAddress`, `params`, `receipient?`): `Promise`<`undefined` \| `TransactionReceipt`\>

Removes multiple liquidity positions from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `params` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md)[] | The array of parameters for removing liquidity. |
| `receipient?` | \`0x${string}\` | - |

#### Returns

`Promise`<`undefined` \| `TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removals.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:317](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L317)

___

### removeLiquidity

▸ **removeLiquidity**(`marketAddress`, `param`): `Promise`<`undefined` \| `TransactionReceipt`\>

Removes liquidity from the specified market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the Chromatic Market contract. |
| `param` | [`RouterRemoveLiquidityParam`](../interfaces/RouterRemoveLiquidityParam.md) | The parameters for removing liquidity. |

#### Returns

`Promise`<`undefined` \| `TransactionReceipt`\>

A promise that resolves to the transaction receipt of the liquidity removal.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticRouter.ts:279](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L279)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:422](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L422)

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

[packages/sdk-viem/src/entities/ChromaticRouter.ts:402](https://github.com/chromatic-protocol/sdk/blob/510f056/packages/sdk-viem/src/entities/ChromaticRouter.ts#L402)
