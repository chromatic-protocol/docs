---
id: "contracts.core.interfaces.factory.IOracleProviderRegistry"
title: "Interface: IOracleProviderRegistry"
sidebar_label: "IOracleProviderRegistry"
custom_edit_url: null
---

[interfaces](../namespaces/contracts.core.interfaces.md).[factory](../namespaces/contracts.core.interfaces.factory.md).IOracleProviderRegistry

## Hierarchy

- `BaseContract`

  ↳ **`IOracleProviderRegistry`**

## Methods

### attach

▸ **attach**(`addressOrName`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.attach

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:147](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L147)

___

### connect

▸ **connect**(`signerOrProvider`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.connect

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:146](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L146)

___

### deployed

▸ **deployed**(): `Promise`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Returns

`Promise`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:148](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L148)

___

### getOracleProviderLevel

▸ **getOracleProviderLevel**(`oracleProvider`, `overrides?`): `Promise`<`number`\>

Retrieves the level of an oracle provider in the registry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`number`\>

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:230](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L230)

___

### isRegisteredOracleProvider

▸ **isRegisteredOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`boolean`\>

Checks if an oracle provider is registered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to check. |
| `overrides?` | `CallOverrides` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:239](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L239)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:158](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L158)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:161](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L161)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:152](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L152)

___

### registerOracleProvider

▸ **registerOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`ContractTransaction`\>

Registers an oracle provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to register. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:248](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L248)

___

### registeredOracleProviders

▸ **registeredOracleProviders**(`overrides?`): `Promise`<`string`[]\>

Gets the registered oracle providers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:256](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L256)

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:162](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L162)

▸ **removeAllListeners**(`eventName?`): [`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:165](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L165)

___

### setOracleProviderLevel

▸ **setOracleProviderLevel**(`oracleProvider`, `level`, `overrides?`): `Promise`<`ContractTransaction`\>

The level must be either 0 or 1, and the max leverage must be x10 for level 0 or x20 for level 1.
Sets the level of an oracle provider in the registry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider. |
| `level` | `PromiseOrValue`<`BigNumberish`\> | The new level to be set for the oracle provider. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:264](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L264)

___

### unregisterOracleProvider

▸ **unregisterOracleProvider**(`oracleProvider`, `overrides?`): `Promise`<`ContractTransaction`\>

Unregisters an oracle provider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oracleProvider` | `PromiseOrValue`<`string`\> | The address of the oracle provider to unregister. |
| `overrides?` | `Overrides` & { `from?`: `PromiseOrValue`<`string`\>  } | - |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:274](https://github.com/chromatic-protocol/sdk/blob/beec14f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L274)
