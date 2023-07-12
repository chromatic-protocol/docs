---
id: "ChromaticAccount"
title: "Class: ChromaticAccount"
sidebar_label: "ChromaticAccount"
sidebar_position: 0
custom_edit_url: null
---

Represents a Chromatic Account and provides methods to interact with it.

## Constructors

### constructor

• **new ChromaticAccount**(`_client`)

Creates a new instance of ChromaticAccount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:21](https://github.com/chromatic-protocol/sdk/blob/05bf75d/packages/sdk-viem/src/entities/ChromaticAccount.ts#L21)

## Methods

### balance

▸ **balance**(`token`, `accountAddress?`): `Promise`<`bigint`\>

Retrieves the balance of a specific token in the Chromatic Account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | \`0x${string}\` | The address of the token. |
| `accountAddress?` | \`0x${string}\` | The address of the account (optional). |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the balance of the token.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:88](https://github.com/chromatic-protocol/sdk/blob/05bf75d/packages/sdk-viem/src/entities/ChromaticAccount.ts#L88)

___

### balances

▸ **balances**(`tokens`, `accountAddress?`): `Promise`<{ `balance`: `bigint` ; `token`: \`0x${string}\`  }[]\>

Retrieves the balances of multiple tokens in the Chromatic Account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokens` | \`0x${string}\`[] | An array of token addresses. |
| `accountAddress?` | \`0x${string}\` | The address of the account (optional). |

#### Returns

`Promise`<{ `balance`: `bigint` ; `token`: \`0x${string}\`  }[]\>

A promise that resolves to an array of TokenBalancesResult objects.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:103](https://github.com/chromatic-protocol/sdk/blob/05bf75d/packages/sdk-viem/src/entities/ChromaticAccount.ts#L103)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Account.

#### Returns

`Object`

An object containing the contract instances.

| Name | Type |
| :------ | :------ |
| `account` | (`address`: \`0x${string}\`) => [`Contract`](../namespaces/utils.md#contract)<readonly [{ `inputs`: readonly [] = []; `name`: ``"AlreadyInitialized"`` = 'AlreadyInitialized'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotEnoughBalance"`` = 'NotEnoughBalance'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotExistPosition"`` = 'NotExistPosition'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotMarket"`` = 'NotMarket'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotOwner"`` = 'NotOwner'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotRouter"`` = 'NotRouter'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }] ; `name`: ``"balance"`` = 'balance'; `outputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``""`` = ''; `type`: ``"uint256"`` = 'uint256' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"marketAddress"`` = 'marketAddress'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"positionId"`` = 'positionId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"claimPosition"`` = 'claimPosition'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"positionId"`` = 'positionId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``""`` = ''; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"claimPositionCallback"`` = 'claimPositionCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"marketAddress"`` = 'marketAddress'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"positionId"`` = 'positionId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"closePosition"`` = 'closePosition'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getPositionIds"`` = 'getPositionIds'; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``""`` = ''; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"hasPositionId"`` = 'hasPositionId'; `outputs`: readonly [{ `internalType`: ``"bool"`` = 'bool'; `name`: ``""`` = ''; `type`: ``"bool"`` = 'bool' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_owner"`` = '\_owner'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_router"`` = '\_router'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"_marketFactory"`` = '\_marketFactory'; `type`: ``"address"`` = 'address' }] ; `name`: ``"initialize"`` = 'initialize'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"marketAddress"`` = 'marketAddress'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int224"`` = 'int224'; `name`: ``"qty"`` = 'qty'; `type`: ``"int224"`` = 'int224' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"leverage"`` = 'leverage'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"takerMargin"`` = 'takerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"makerMargin"`` = 'makerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"maxAllowableTradingFee"`` = 'maxAllowableTradingFee'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"openPosition"`` = 'openPosition'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"openVersion"`` = 'openVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"closeVersion"`` = 'closeVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"int224"`` = 'int224'; `name`: ``"qty"`` = 'qty'; `type`: ``"int224"`` = 'int224' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"leverage"`` = 'leverage'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"openTimestamp"`` = 'openTimestamp'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"closeTimestamp"`` = 'closeTimestamp'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"takerMargin"`` = 'takerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }, { `components`: readonly [{ `internalType`: ``"uint16"`` = 'uint16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"uint16"`` = 'uint16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }] ; `internalType`: ``"struct BinMargin[]"`` = 'struct BinMargin[]'; `name`: ``"_binMargins"`` = '\_binMargins'; `type`: ``"tuple[]"`` = 'tuple[]' }, { `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"_feeProtocol"`` = '\_feeProtocol'; `type`: ``"uint8"`` = 'uint8' }] ; `internalType`: ``"struct Position"`` = 'struct Position'; `name`: ``"position"`` = 'position'; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"vault"`` = 'vault'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"marginRequired"`` = 'marginRequired'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``""`` = ''; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"openPositionCallback"`` = 'openPositionCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"token"`` = 'token'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"withdraw"`` = 'withdraw'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }]\> |
| `router` | () => [`Contract`](../namespaces/utils.md#contract)<readonly [{ `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"_marketFactory"`` = '\_marketFactory'; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"constructor"`` = 'constructor' }, { `inputs`: readonly [] = []; `name`: ``"NotExistLpReceipt"`` = 'NotExistLpReceipt'; `type`: ``"error"`` = 'error' }, { `inputs`: readonly [] = []; `name`: ``"NotMarket"`` = 'NotMarket'; `type`: ``"error"`` = 'error' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"account"`` = 'account'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"AccountCreated"`` = 'AccountCreated'; `type`: ``"event"`` = 'event' }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"previousOwner"`` = 'previousOwner'; `type`: ``"address"`` = 'address' }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = 'address'; `name`: ``"newOwner"`` = 'newOwner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"OwnershipTransferred"`` = 'OwnershipTransferred'; `type`: ``"event"`` = 'event' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"feeRate"`` = 'feeRate'; `type`: ``"int16"`` = 'int16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }] ; `name`: ``"addLiquidity"`` = 'addLiquidity'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt"`` = 'struct LpReceipt'; `name`: ``"receipt"`` = 'receipt'; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16[]"`` = 'int16[]'; `name`: ``"feeRates"`` = 'feeRates'; `type`: ``"int16[]"`` = 'int16[]' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"amounts"`` = 'amounts'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"addLiquidityBatch"`` = 'addLiquidityBatch'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt[]"`` = 'struct LpReceipt[]'; `name`: ``"lpReceipts"`` = 'lpReceipts'; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"vault"`` = 'vault'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"addLiquidityBatchCallback"`` = 'addLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"settlementToken"`` = 'settlementToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"vault"`` = 'vault'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"addLiquidityCallback"`` = 'addLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"claimLiquidity"`` = 'claimLiquidity'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"claimLiquidityBatch"`` = 'claimLiquidityBatch'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"claimLiquidityBatchCallback"`` = 'claimLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"claimLiquidityCallback"`` = 'claimLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"positionId"`` = 'positionId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"claimPosition"`` = 'claimPosition'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"positionId"`` = 'positionId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"closePosition"`` = 'closePosition'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"createAccount"`` = 'createAccount'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"getAccount"`` = 'getAccount'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getLpReceiptIds"`` = 'getLpReceiptIds'; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``""`` = ''; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }] ; `name`: ``"getLpReceiptIds"`` = 'getLpReceiptIds'; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``""`` = ''; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int224"`` = 'int224'; `name`: ``"qty"`` = 'qty'; `type`: ``"int224"`` = 'int224' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"leverage"`` = 'leverage'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"takerMargin"`` = 'takerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"makerMargin"`` = 'makerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"maxAllowableTradingFee"`` = 'maxAllowableTradingFee'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"openPosition"`` = 'openPosition'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"openVersion"`` = 'openVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"closeVersion"`` = 'closeVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"int224"`` = 'int224'; `name`: ``"qty"`` = 'qty'; `type`: ``"int224"`` = 'int224' }, { `internalType`: ``"uint32"`` = 'uint32'; `name`: ``"leverage"`` = 'leverage'; `type`: ``"uint32"`` = 'uint32' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"openTimestamp"`` = 'openTimestamp'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"closeTimestamp"`` = 'closeTimestamp'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"takerMargin"`` = 'takerMargin'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"owner"`` = 'owner'; `type`: ``"address"`` = 'address' }, { `components`: readonly [{ `internalType`: ``"uint16"`` = 'uint16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"uint16"`` = 'uint16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }] ; `internalType`: ``"struct BinMargin[]"`` = 'struct BinMargin[]'; `name`: ``"_binMargins"`` = '\_binMargins'; `type`: ``"tuple[]"`` = 'tuple[]' }, { `internalType`: ``"uint8"`` = 'uint8'; `name`: ``"_feeProtocol"`` = '\_feeProtocol'; `type`: ``"uint8"`` = 'uint8' }] ; `internalType`: ``"struct Position"`` = 'struct Position'; `name`: ``""`` = ''; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"owner"`` = 'owner'; `outputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``""`` = ''; `type`: ``"address"`` = 'address' }] ; `stateMutability`: ``"view"`` = 'view'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"feeRate"`` = 'feeRate'; `type`: ``"int16"`` = 'int16' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"clbTokenAmount"`` = 'clbTokenAmount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }] ; `name`: ``"removeLiquidity"`` = 'removeLiquidity'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt"`` = 'struct LpReceipt'; `name`: ``"receipt"`` = 'receipt'; `type`: ``"tuple"`` = 'tuple' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"int16[]"`` = 'int16[]'; `name`: ``"feeRates"`` = 'feeRates'; `type`: ``"int16[]"`` = 'int16[]' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"clbTokenAmounts"`` = 'clbTokenAmounts'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"removeLiquidityBatch"`` = 'removeLiquidityBatch'; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"id"`` = 'id'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"oracleVersion"`` = 'oracleVersion'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"amount"`` = 'amount'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"address"`` = 'address'; `name`: ``"recipient"`` = 'recipient'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"enum LpAction"`` = 'enum LpAction'; `name`: ``"action"`` = 'action'; `type`: ``"uint8"`` = 'uint8' }, { `internalType`: ``"int16"`` = 'int16'; `name`: ``"tradingFeeRate"`` = 'tradingFeeRate'; `type`: ``"int16"`` = 'int16' }] ; `internalType`: ``"struct LpReceipt[]"`` = 'struct LpReceipt[]'; `name`: ``"lpReceipts"`` = 'lpReceipts'; `type`: ``"tuple[]"`` = 'tuple[]' }] ; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"clbToken"`` = 'clbToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"clbTokenIds"`` = 'clbTokenIds'; `type`: ``"uint256[]"`` = 'uint256[]' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"removeLiquidityBatchCallback"`` = 'removeLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"clbToken"`` = 'clbToken'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"clbTokenId"`` = 'clbTokenId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"removeLiquidityCallback"`` = 'removeLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [] = []; `name`: ``"renounceOwnership"`` = 'renounceOwnership'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"newOwner"`` = 'newOwner'; `type`: ``"address"`` = 'address' }] ; `name`: ``"transferOwnership"`` = 'transferOwnership'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }] ; `name`: ``"withdrawLiquidity"`` = 'withdrawLiquidity'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"address"`` = 'address'; `name`: ``"market"`` = 'market'; `type`: ``"address"`` = 'address' }, { `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }] ; `name`: ``"withdrawLiquidityBatch"`` = 'withdrawLiquidityBatch'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256[]"`` = 'uint256[]'; `name`: ``"_receiptIds"`` = '\_receiptIds'; `type`: ``"uint256[]"`` = 'uint256[]' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"withdrawLiquidityBatchCallback"`` = 'withdrawLiquidityBatchCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = 'uint256'; `name`: ``"receiptId"`` = 'receiptId'; `type`: ``"uint256"`` = 'uint256' }, { `internalType`: ``"bytes"`` = 'bytes'; `name`: ``"data"`` = 'data'; `type`: ``"bytes"`` = 'bytes' }] ; `name`: ``"withdrawLiquidityCallback"`` = 'withdrawLiquidityCallback'; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = 'nonpayable'; `type`: ``"function"`` = 'function' }]\> |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:27](https://github.com/chromatic-protocol/sdk/blob/05bf75d/packages/sdk-viem/src/entities/ChromaticAccount.ts#L27)

___

### createAccount

▸ **createAccount**(): `Promise`<`TransactionReceipt`\>

Creates a new Chromatic Account.

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the account creation.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:45](https://github.com/chromatic-protocol/sdk/blob/05bf75d/packages/sdk-viem/src/entities/ChromaticAccount.ts#L45)

___

### getAccount

▸ **getAccount**(): `Promise`<\`0x${string}\`\>

Retrieves the current Chromatic Account.

#### Returns

`Promise`<\`0x${string}\`\>

A promise that resolves to the Chromatic Account details.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:58](https://github.com/chromatic-protocol/sdk/blob/05bf75d/packages/sdk-viem/src/entities/ChromaticAccount.ts#L58)

___

### getPositionIds

▸ **getPositionIds**(`marketAddress`, `accountAddress?`): `Promise`<readonly `bigint`[]\>

Retrieves the position IDs associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | \`0x${string}\` | The address of the market. |
| `accountAddress?` | \`0x${string}\` | The address of the account (optional). |

#### Returns

`Promise`<readonly `bigint`[]\>

A promise that resolves to an array of position IDs.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:72](https://github.com/chromatic-protocol/sdk/blob/05bf75d/packages/sdk-viem/src/entities/ChromaticAccount.ts#L72)
