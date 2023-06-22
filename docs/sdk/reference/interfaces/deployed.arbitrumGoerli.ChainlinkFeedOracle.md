---
id: "deployed.arbitrumGoerli.ChainlinkFeedOracle"
title: "Interface: ChainlinkFeedOracle"
sidebar_label: "ChainlinkFeedOracle"
custom_edit_url: null
---

[deployed](../namespaces/deployed.md).[arbitrumGoerli](../namespaces/deployed.arbitrumGoerli.md).ChainlinkFeedOracle

## Hierarchy

- `BaseContract`

  ↳ **`ChainlinkFeedOracle`**

## Methods

### aggregator

▸ **aggregator**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:158](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L158)

___

### atVersion

▸ **atVersion**(`version`, `overrides?`): `Promise`<`OracleVersionStructOutput`\>

Returns the current oracle version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `PromiseOrValue`<`BigNumberish`\> | The version of which to lookup |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`OracleVersionStructOutput`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:164](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L164)

___

### attach

▸ **attach**(`addressOrName`): [`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:93](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L93)

___

### connect

▸ **connect**(`signerOrProvider`): [`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:92](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L92)

___

### currentVersion

▸ **currentVersion**(`overrides?`): `Promise`<`OracleVersionStructOutput`\>

Returns the current oracle version

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`OracleVersionStructOutput`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:172](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L172)

___

### deployed

▸ **deployed**(): `Promise`<[`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)\>

#### Returns

`Promise`<[`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:94](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L94)

___

### description

▸ **description**(`overrides?`): `Promise`<`string`\>

Retrieves the description of the Oracle Provider.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:179](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L179)

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:104](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L104)

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:107](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L107)

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:98](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L98)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:108](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L108)

▸ **removeAllListeners**(`eventName?`): [`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ChainlinkFeedOracle`](deployed.arbitrumGoerli.ChainlinkFeedOracle.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:111](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L111)

___

### sync

▸ **sync**(`overrides?`): `Promise`<`ContractTransaction`\>

`sync` is expected to be called soon after a phase update occurs in the underlying proxy.      Phase updates should be detected using off-chain mechanism and should trigger a `sync` call      This is feasible in the short term due to how infrequent phase updates are, but phase update      and roundCount detection should eventually be implemented at the contract level.      Reverts if there is more than 1 phase to update in a single sync because we currently cannot      determine the startingRoundId for the intermediary phase.
Checks for a new price and updates the internal phase annotation state accordingly

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts:185](https://github.com/chromatic-protocol/sdk/blob/f81a674/src/gen/deployed/arbitrum_goerli/ChainlinkFeedOracle.ts#L185)
