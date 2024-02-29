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

[packages/sdk-viem/src/entities/ChromaticAccount.ts:23](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticAccount.ts#L23)

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

[packages/sdk-viem/src/entities/ChromaticAccount.ts:96](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticAccount.ts#L96)

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

[packages/sdk-viem/src/entities/ChromaticAccount.ts:113](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticAccount.ts#L113)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Account.

#### Returns

`Object`

An object containing the contract instances.

| Name | Type |
| :------ | :------ |
| `account` | (`address`: \`0x${string}\`) => `ContractChromaticAccount` |
| `router` | () => `ContractChromaticRouter` |

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:29](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticAccount.ts#L29)

___

### createAccount

▸ **createAccount**(): `Promise`<`TransactionReceipt`\>

Creates a new Chromatic Account.

#### Returns

`Promise`<`TransactionReceipt`\>

A promise that resolves to the transaction receipt of the account creation.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:47](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticAccount.ts#L47)

___

### getAccount

▸ **getAccount**(): `Promise`<\`0x${string}\`\>

Retrieves the current Chromatic Account.

#### Returns

`Promise`<\`0x${string}\`\>

A promise that resolves to the Chromatic Account details.

#### Defined in

[packages/sdk-viem/src/entities/ChromaticAccount.ts:62](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticAccount.ts#L62)

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

[packages/sdk-viem/src/entities/ChromaticAccount.ts:76](https://github.com/chromatic-protocol/sdk/blob/ba212bd/packages/sdk-viem/src/entities/ChromaticAccount.ts#L76)
