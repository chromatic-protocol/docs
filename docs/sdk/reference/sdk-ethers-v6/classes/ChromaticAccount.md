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

[entities/ChromaticAccount.ts:20](https://github.com/chromatic-protocol/sdk/blob/ce17c91/packages/sdk-ethers-v6/src/entities/ChromaticAccount.ts#L20)

## Methods

### balance

▸ **balance**(`token`, `accountAddress?`): `Promise`<`bigint`\>

Retrieves the balance of a specific token in the Chromatic Account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The address of the token. |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<`bigint`\>

A promise that resolves to the balance of the token.

#### Defined in

[entities/ChromaticAccount.ts:75](https://github.com/chromatic-protocol/sdk/blob/ce17c91/packages/sdk-ethers-v6/src/entities/ChromaticAccount.ts#L75)

___

### balances

▸ **balances**(`tokens`, `accountAddress?`): `Promise`<[`TokenBalancesResult`](../interfaces/TokenBalancesResult.md)[]\>

Retrieves the balances of multiple tokens in the Chromatic Account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokens` | `string`[] | An array of token addresses. |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<[`TokenBalancesResult`](../interfaces/TokenBalancesResult.md)[]\>

A promise that resolves to an array of TokenBalancesResult objects.

#### Defined in

[entities/ChromaticAccount.ts:90](https://github.com/chromatic-protocol/sdk/blob/ce17c91/packages/sdk-ethers-v6/src/entities/ChromaticAccount.ts#L90)

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
| `router` | (`signerOrProvider?`: `Provider` \| `Signer`) => `ChromaticRouter` |

#### Defined in

[entities/ChromaticAccount.ts:26](https://github.com/chromatic-protocol/sdk/blob/ce17c91/packages/sdk-ethers-v6/src/entities/ChromaticAccount.ts#L26)

___

### createAccount

▸ **createAccount**(): `Promise`<`ContractTransactionReceipt`\>

Creates a new Chromatic Account.

#### Returns

`Promise`<`ContractTransactionReceipt`\>

A promise that resolves to the transaction receipt of the account creation.

#### Defined in

[entities/ChromaticAccount.ts:38](https://github.com/chromatic-protocol/sdk/blob/ce17c91/packages/sdk-ethers-v6/src/entities/ChromaticAccount.ts#L38)

___

### getAccount

▸ **getAccount**(): `Promise`<`string`\>

Retrieves the current Chromatic Account.

#### Returns

`Promise`<`string`\>

A promise that resolves to the Chromatic Account details.

#### Defined in

[entities/ChromaticAccount.ts:49](https://github.com/chromatic-protocol/sdk/blob/ce17c91/packages/sdk-ethers-v6/src/entities/ChromaticAccount.ts#L49)

___

### getPositionIds

▸ **getPositionIds**(`marketAddress`, `accountAddress?`): `Promise`<`bigint`[]\>

Retrieves the position IDs associated with a specific market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketAddress` | `string` | The address of the market. |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<`bigint`[]\>

A promise that resolves to an array of position IDs.

#### Defined in

[entities/ChromaticAccount.ts:61](https://github.com/chromatic-protocol/sdk/blob/ce17c91/packages/sdk-ethers-v6/src/entities/ChromaticAccount.ts#L61)
