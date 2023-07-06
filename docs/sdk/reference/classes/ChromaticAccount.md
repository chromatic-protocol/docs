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

| Name      | Type                  | Description                    |
| :-------- | :-------------------- | :----------------------------- |
| `_client` | [`Client`](Client.md) | The Chromatic Client instance. |

#### Defined in

[entities/ChromaticAccount.ts:21](https://github.com/chromatic-protocol/sdk/blob/e278534/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L21)

## Methods

### balance

▸ **balance**(`token`, `accountAddress?`): `Promise`<`BigNumber`\>

Retrieves the balance of a specific token in the Chromatic Account.

#### Parameters

| Name              | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `token`           | `string` | The address of the token.              |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<`BigNumber`\>

A promise that resolves to the balance of the token.

#### Defined in

[entities/ChromaticAccount.ts:76](https://github.com/chromatic-protocol/sdk/blob/e278534/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L76)

___

### balances

▸ **balances**(`tokens`, `accountAddress?`): `Promise`<[`TokenBalancesResult`](../interfaces/TokenBalancesResult.md)[]\>

Retrieves the balances of multiple tokens in the Chromatic Account.

#### Parameters

| Name              | Type       | Description                            |
| :---------------- | :--------- | :------------------------------------- |
| `tokens`          | `string`[] | An array of token addresses.           |
| `accountAddress?` | `string`   | The address of the account (optional). |

#### Returns

`Promise`<[`TokenBalancesResult`](../interfaces/TokenBalancesResult.md)[]\>

A promise that resolves to an array of TokenBalancesResult objects.

#### Defined in

[entities/ChromaticAccount.ts:91](https://github.com/chromatic-protocol/sdk/blob/e278534/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L91)

___

### contracts

▸ **contracts**(): `Object`

Retrieves the contract instances associated with the Chromatic Account.

#### Returns

`Object`

An object containing the contract instances.

| Name      | Type                                                               |
| :-------- | :----------------------------------------------------------------- |
| `account` | (`address?`: `string`) => `ChromaticAccount`                       |
| `router`  | (`signerOrProvider?`: `Signer` \| `Provider`) => `ChromaticRouter` |

#### Defined in

[entities/ChromaticAccount.ts:27](https://github.com/chromatic-protocol/sdk/blob/e278534/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L27)

___

### createAccount

▸ **createAccount**(): `Promise`<`ContractReceipt`\>

Creates a new Chromatic Account.

#### Returns

`Promise`<`ContractReceipt`\>

A promise that resolves to the transaction receipt of the account creation.

#### Defined in

[entities/ChromaticAccount.ts:39](https://github.com/chromatic-protocol/sdk/blob/e278534/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L39)

___

### getAccount

▸ **getAccount**(): `Promise`<`string`\>

Retrieves the current Chromatic Account.

#### Returns

`Promise`<`string`\>

A promise that resolves to the Chromatic Account details.

#### Defined in

[entities/ChromaticAccount.ts:50](https://github.com/chromatic-protocol/sdk/blob/e278534/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L50)

___

### getPositionIds

▸ **getPositionIds**(`marketAddress`, `accountAddress?`): `Promise`<`BigNumber`[]\>

Retrieves the position IDs associated with a specific market.

#### Parameters

| Name              | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `marketAddress`   | `string` | The address of the market.             |
| `accountAddress?` | `string` | The address of the account (optional). |

#### Returns

`Promise`<`BigNumber`[]\>

A promise that resolves to an array of position IDs.

#### Defined in

[entities/ChromaticAccount.ts:62](https://github.com/chromatic-protocol/sdk/blob/e278534/packages/sdk-ethers-v5/src/entities/ChromaticAccount.ts#L62)
