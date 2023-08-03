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

[packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts:22](https://github.com/chromatic-protocol/sdk/blob/91849c1/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L22)

## Methods

### balance

▸ **balance**(`token`, `accountAddress?`): `Promise`<`BigNumber`\>

Retrieves the balance of a specific token in the Chromatic Account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The address of the token. |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the balance of the token.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts:81](https://github.com/chromatic-protocol/sdk/blob/91849c1/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L81)

___

### balances

▸ **balances**(`tokens`, `accountAddress?`): `Promise`<`TokenBalancesResult`[]\>

Retrieves the balances of multiple tokens in the Chromatic Account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokens` | `string`[] | An array of token addresses. |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<`TokenBalancesResult`[]\>

A promise that resolves to an array of TokenBalancesResult objects.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts:98](https://github.com/chromatic-protocol/sdk/blob/91849c1/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L98)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Account.

#### Returns

`Object`

An object containing the contract instances.

| Name | Type |
| :------ | :------ |
| `account` | (`address?`: `string`) => `ChromaticAccount` |
| `router` | (`signerOrProvider?`: `Signer` \| `Provider`) => `ChromaticRouter` |

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts:28](https://github.com/chromatic-protocol/sdk/blob/91849c1/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L28)

___

### createAccount

▸ **createAccount**(): `Promise`<`ContractReceipt`\>

Creates a new Chromatic Account.

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the account creation.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts:40](https://github.com/chromatic-protocol/sdk/blob/91849c1/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L40)

___

### getAccount

▸ **getAccount**(): `Promise`<`string`\>

Retrieves the current Chromatic Account.

#### Returns

`Promise`<`string`\>

A promise that resolves to the Chromatic Account details.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts:51](https://github.com/chromatic-protocol/sdk/blob/91849c1/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L51)

___

### getPositionIds

▸ **getPositionIds**(`marketAddress`, `accountAddress?`): `Promise`<`BigNumber`[]\>

Retrieves the position IDs associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<`BigNumber`[]\>

A promise that resolves to an array of position IDs.

#### Defined in

[packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts:63](https://github.com/chromatic-protocol/sdk/blob/91849c1/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L63)
