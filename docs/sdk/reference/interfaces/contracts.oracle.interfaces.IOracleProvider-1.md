---
id: "contracts.oracle.interfaces.IOracleProvider-1"
title: "Interface: IOracleProvider"
sidebar_label: "IOracleProvider"
custom_edit_url: null
---

[oracle](../namespaces/contracts.oracle.md).[interfaces](../namespaces/contracts.oracle.interfaces.md).IOracleProvider

## Hierarchy

- `BaseContract`

  ↳ **`IOracleProvider`**

## Methods

### atVersion

▸ **atVersion**(`version`, `overrides?`): `Promise`<[`OracleVersionStructOutput`](../namespaces/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

Returns the current oracle version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `PromiseOrValue`<`BigNumberish`\> | The version of which to lookup |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../namespaces/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

#### Defined in

[gen/contracts/oracle/interfaces/IOracleProvider.ts:145](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L145)

___

### attach

▸ **attach**(`addressOrName`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/oracle/interfaces/IOracleProvider.ts:86](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L86)

___

### connect

▸ **connect**(`signerOrProvider`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/oracle/interfaces/IOracleProvider.ts:85](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L85)

___

### currentVersion

▸ **currentVersion**(`overrides?`): `Promise`<[`OracleVersionStructOutput`](../namespaces/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

Returns the current oracle version

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<[`OracleVersionStructOutput`](../namespaces/contracts.oracle.interfaces.IOracleProvider.md#oracleversionstructoutput)\>

#### Defined in

[gen/contracts/oracle/interfaces/IOracleProvider.ts:153](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L153)

___

### deployed

▸ **deployed**(): `Promise`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Returns

`Promise`<[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/oracle/interfaces/IOracleProvider.ts:87](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L87)

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

[gen/contracts/oracle/interfaces/IOracleProvider.ts:160](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L160)

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

[gen/contracts/oracle/interfaces/IOracleProvider.ts:97](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L97)

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

[gen/contracts/oracle/interfaces/IOracleProvider.ts:100](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L100)

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

[gen/contracts/oracle/interfaces/IOracleProvider.ts:91](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L91)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/oracle/interfaces/IOracleProvider.ts:101](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L101)

▸ **removeAllListeners**(`eventName?`): [`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IOracleProvider`](contracts.oracle.interfaces.IOracleProvider-1.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/oracle/interfaces/IOracleProvider.ts:104](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L104)

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

[gen/contracts/oracle/interfaces/IOracleProvider.ts:166](https://github.com/chromatic-protocol/sdk/blob/933dfc6/src/gen/contracts/oracle/interfaces/IOracleProvider.ts#L166)
