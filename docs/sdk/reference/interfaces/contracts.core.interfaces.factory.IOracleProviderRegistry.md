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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:112](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L112)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:111](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L111)

___

### deployed

▸ **deployed**(): `Promise`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Returns

`Promise`<[`IOracleProviderRegistry`](contracts.core.interfaces.factory.IOracleProviderRegistry.md)\>

#### Overrides

BaseContract.deployed

#### Defined in

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:113](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L113)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:174](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L174)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:123](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L123)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:126](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L126)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:117](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L117)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:183](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L183)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:191](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L191)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:127](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L127)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:130](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L130)

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

[gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts:197](https://github.com/chromatic-protocol/sdk/blob/83d4e3f/src/gen/contracts/core/interfaces/factory/IOracleProviderRegistry.ts#L197)
