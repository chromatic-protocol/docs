---
id: "Client"
title: "Class: Client"
sidebar_label: "Client"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Client**(`«destructured»?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `publicClient?` | ``null`` \| { `account`: `undefined` ; `batch?`: { `multicall?`: `boolean` \| { batchSize?: number \| undefined; wait?: number \| undefined; }  } ; `call`: (`parameters`: `CallParameters`<`undefined` \| `Chain`\>) => `Promise`<`CallReturnType`\> ; `chain`: `undefined` \| `Chain` ; `createBlockFilter`: () => `Promise`<{ `id`: \`0x${string}\` ; `request`: `EIP1193RequestFn`<readonly [{ `Method`: ``"eth_getFilterChanges"`` ; `Parameters`: [filterId: \`0x${string}\`] ; `ReturnType`: \`0x${string}\`[] \| `RpcLog`[]  }, { `Method`: ``"eth_getFilterLogs"`` ; `Parameters`: [filterId: \`0x${string}\`] ; `ReturnType`: `RpcLog`[]  }, { `Method`: ``"eth_uninstallFilter"`` ; `Parameters`: [filterId: \`0x${string}\`] ; `ReturnType`: `boolean`  }]\> ; `type`: ``"block"``  }\> ; `createContractEventFilter`: <TAbi, TEventName, TArgs, TStrict\>(`args`: `CreateContractEventFilterParameters`<`TAbi`, `TEventName`, `TArgs`, `TStrict`\>) => `Promise`<`CreateContractEventFilterReturnType`<`TAbi`, `TEventName`, `TArgs`, `TStrict`\>\> ; `createEventFilter`: <TAbiEvent, TStrict, _Abi, _EventName, _Args\>(`args?`: `CreateEventFilterParameters`<`TAbiEvent`, `TStrict`, `_Abi`, `_EventName`, `_Args`\>) => `Promise`<{ [K in keyof Filter<"event", \_Abi, \_EventName, \_Args, TStrict\>]: Filter<"event", \_Abi, \_EventName, \_Args, TStrict\>[K]; }\> ; `createPendingTransactionFilter`: () => `Promise`<{ `id`: \`0x${string}\` ; `request`: `EIP1193RequestFn`<readonly [{ `Method`: ``"eth_getFilterChanges"`` ; `Parameters`: [filterId: \`0x${string}\`] ; `ReturnType`: \`0x${string}\`[] \| `RpcLog`[]  }, { `Method`: ``"eth_getFilterLogs"`` ; `Parameters`: [filterId: \`0x${string}\`] ; `ReturnType`: `RpcLog`[]  }, { `Method`: ``"eth_uninstallFilter"`` ; `Parameters`: [filterId: \`0x${string}\`] ; `ReturnType`: `boolean`  }]\> ; `type`: ``"transaction"``  }\> ; `estimateContractGas`: <TChain, TAbi, TFunctionName\>(`args`: `EstimateContractGasParameters`<`TAbi`, `TFunctionName`, `TChain`, `undefined` \| `Account`\>) => `Promise`<`bigint`\> ; `estimateGas`: (`args`: `EstimateGasParameters`<`undefined` \| `Chain`, `undefined` \| `Account`\>) => `Promise`<`bigint`\> ; `extend`: <client\>(`fn`: (`client`: { account: undefined; batch?: { multicall?: boolean \| { batchSize?: number \| undefined; wait?: number \| undefined; } \| undefined; } \| undefined; chain: Chain \| undefined; key: string; ... 46 more ...; watchPendingTransactions: (args: WatchPendingTransactionsParameters<...\>) =\> WatchPendingTransactionsReturnType; }) => `client`) => { [K in keyof { [K in keyof ({ account: undefined; batch?: { multicall?: boolean \| { batchSize?: number \| undefined; wait?: number \| undefined; } \| undefined; } \| undefined; chain: Chain \| undefined; key: string; ... 5 more ...; uid: string; } & { ...; } & ({ [K in keyof client]: client[K]; } & PublicActions<...\> ex... ; `getBalance`: (`args`: `GetBalanceParameters`) => `Promise`<`bigint`\> ; `getBlock`: (`args?`: `GetBlockParameters`) => `Promise`<`Block`\> ; `getBlockNumber`: (`args?`: `GetBlockNumberParameters`) => `Promise`<`bigint`\> ; `getBlockTransactionCount`: (`args?`: `GetBlockTransactionCountParameters`) => `Promise`<`number`\> ; `getBytecode`: (`args`: `GetBytecodeParameters`) => `Promise`<`GetBytecodeReturnType`\> ; `getChainId`: () => `Promise`<`number`\> ; `getEnsAddress`: (`args`: { blockNumber?: bigint \| undefined; blockTag?: BlockTag \| undefined; name: string; universalResolverAddress?: \`0x${string}\` \| undefined; }) => `Promise`<`GetEnsAddressReturnType`\> ; `getEnsAvatar`: (`args`: { name: string; blockNumber?: bigint \| undefined; blockTag?: BlockTag \| undefined; universalResolverAddress?: \`0x${string}\` \| undefined; gatewayUrls?: AssetGatewayUrls \| undefined; }) => `Promise`<`GetEnsAvatarReturnType`\> ; `getEnsName`: (`args`: { blockNumber?: bigint \| undefined; blockTag?: BlockTag \| undefined; address: \`0x${string}\`; universalResolverAddress?: \`0x${string}\` \| undefined; }) => `Promise`<`GetEnsNameReturnType`\> ; `getEnsResolver`: (`args`: { blockNumber?: bigint \| undefined; blockTag?: BlockTag \| undefined; name: string; universalResolverAddress?: \`0x${string}\` \| undefined; }) => `Promise`<\`0x${string}\`\> ; `getEnsText`: (`args`: { blockNumber?: bigint \| undefined; blockTag?: BlockTag \| undefined; name: string; key: string; universalResolverAddress?: \`0x${string}\` \| undefined; }) => `Promise`<`GetEnsTextReturnType`\> ; `getFeeHistory`: (`args`: `GetFeeHistoryParameters`) => `Promise`<`GetFeeHistoryReturnType`\> ; `getFilterChanges`: <TFilterType, TAbi, TEventName, TStrict\>(`args`: `GetFilterChangesParameters`<`TFilterType`, `TAbi`, `TEventName`, `TStrict`\>) => `Promise`<`GetFilterChangesReturnType`<`TFilterType`, `TAbi`, `TEventName`, `TStrict`\>\> ; `getFilterLogs`: <TAbi, TEventName, TStrict\>(`args`: `GetFilterLogsParameters`<`TAbi`, `TEventName`, `TStrict`\>) => `Promise`<`GetFilterLogsReturnType`<`TAbi`, `TEventName`, `TStrict`\>\> ; `getGasPrice`: () => `Promise`<`bigint`\> ; `getLogs`: <TAbiEvent, TStrict\>(`args?`: `GetLogsParameters`<`TAbiEvent`, `TStrict`\>) => `Promise`<`GetLogsReturnType`<`TAbiEvent`, `TStrict`\>\> ; `getStorageAt`: (`args`: `GetStorageAtParameters`) => `Promise`<`GetStorageAtReturnType`\> ; `getTransaction`: (`args`: `GetTransactionParameters`) => `Promise`<`Transaction`\> ; `getTransactionConfirmations`: (`args`: `GetTransactionConfirmationsParameters`<`undefined` \| `Chain`\>) => `Promise`<`bigint`\> ; `getTransactionCount`: (`args`: `GetTransactionCountParameters`) => `Promise`<`number`\> ; `getTransactionReceipt`: (`args`: `GetTransactionReceiptParameters`) => `Promise`<`TransactionReceipt`\> ; `key`: `string` ; `multicall`: <TContracts, TAllowFailure\>(`args`: `MulticallParameters`<`TContracts`, `TAllowFailure`\>) => `Promise`<`MulticallReturnType`<`TContracts`, `TAllowFailure`\>\> ; `name`: `string` ; `pollingInterval`: `number` ; `readContract`: <TAbi, TFunctionName\>(`args`: `ReadContractParameters`<`TAbi`, `TFunctionName`\>) => `Promise`<`ReadContractReturnType`<`TAbi`, `TFunctionName`\>\> ; `request`: `EIP1193RequestFn`<`PublicRpcSchema`\> ; `simulateContract`: <TAbi, TFunctionName, TChainOverride\>(`args`: `SimulateContractParameters`<`TAbi`, `TFunctionName`, `undefined` \| `Chain`, `TChainOverride`\>) => `Promise`<`SimulateContractReturnType`<`TAbi`, `TFunctionName`, `undefined` \| `Chain`, `TChainOverride`\>\> ; `transport`: `TransportConfig`<`string`, `EIP1193RequestFn`\> & `Record`<`string`, `any`\> ; `type`: `string` ; `uid`: `string` ; `uninstallFilter`: (`args`: `UninstallFilterParameters`) => `Promise`<`boolean`\> ; `verifyMessage`: (`args`: `VerifyMessageParameters`) => `Promise`<`boolean`\> ; `verifyTypedData`: (`args`: `VerifyTypedDataParameters`) => `Promise`<`boolean`\> ; `waitForTransactionReceipt`: (`args`: `WaitForTransactionReceiptParameters`<`undefined` \| `Chain`\>) => `Promise`<`TransactionReceipt`\> ; `watchBlockNumber`: (`args`: `WatchBlockNumberParameters`) => `WatchBlockNumberReturnType` ; `watchBlocks`: (`args`: `WatchBlocksParameters`<`Transport`, `undefined` \| `Chain`\>) => `WatchBlocksReturnType` ; `watchContractEvent`: <TAbi, TEventName, TStrict\>(`args`: `WatchContractEventParameters`<`TAbi`, `TEventName`, `TStrict`\>) => `WatchContractEventReturnType` ; `watchEvent`: <TAbiEvent, TStrict\>(`args`: `WatchEventParameters`<`TAbiEvent`, `TStrict`\>) => `WatchEventReturnType` ; `watchPendingTransactions`: (`args`: `WatchPendingTransactionsParameters`<`Transport`\>) => `WatchPendingTransactionsReturnType`  } |
| › `walletClient?` | ``null`` \| { `account`: `undefined` \| `Account` ; `addChain`: (`args`: `AddChainParameters`) => `Promise`<`void`\> ; `batch?`: { `multicall?`: `boolean` \| { batchSize?: number \| undefined; wait?: number \| undefined; }  } ; `chain`: `undefined` \| `Chain` ; `deployContract`: <TAbi, TChainOverride\>(`args`: `DeployContractParameters`<`TAbi`, `undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`\>) => `Promise`<\`0x${string}\`\> ; `extend`: <client\>(`fn`: (`client`: { account: Account \| undefined; batch?: { multicall?: boolean \| { batchSize?: number \| undefined; wait?: number \| undefined; } \| undefined; } \| undefined; chain: Chain \| undefined; ... 20 more ...; writeContract: <TAbi extends Abi \| readonly unknown[], TFunctionName extends string, TChainOverride extends Chain \| und...) => `client`) => { [K in keyof { [K in keyof ({ account: Account \| undefined; batch?: { multicall?: boolean \| { batchSize?: number \| undefined; wait?: number \| undefined; } \| undefined; } \| undefined; chain: Chain \| undefined; ... 6 more ...; uid: string; } & { ...; } & ({ [K in keyof client]: client[K]; } & WalletActions<...\> exten... ; `getAddresses`: () => `Promise`<`GetAddressesReturnType`\> ; `getChainId`: () => `Promise`<`number`\> ; `getPermissions`: () => `Promise`<`GetPermissionsReturnType`\> ; `key`: `string` ; `name`: `string` ; `pollingInterval`: `number` ; `request`: `EIP1193RequestFn`<`WalletRpcSchema`\> ; `requestAddresses`: () => `Promise`<`RequestAddressesReturnType`\> ; `requestPermissions`: (`args`: { [x: string]: Record<string, any\>; eth\_accounts: Record<string, any\>; }) => `Promise`<`RequestPermissionsReturnType`\> ; `sendTransaction`: <TChainOverride\>(`args`: `SendTransactionParameters`<`undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`\>) => `Promise`<\`0x${string}\`\> ; `signMessage`: (`args`: `SignMessageParameters`<`undefined` \| `Account`\>) => `Promise`<\`0x${string}\`\> ; `signTypedData`: <TTypedData, TPrimaryType\>(`args`: `SignTypedDataParameters`<`TTypedData`, `TPrimaryType`, `undefined` \| `Account`\>) => `Promise`<\`0x${string}\`\> ; `switchChain`: (`args`: `SwitchChainParameters`) => `Promise`<`void`\> ; `transport`: `TransportConfig`<`string`, `EIP1193RequestFn`\> & `Record`<`string`, `any`\> ; `type`: `string` ; `uid`: `string` ; `watchAsset`: (`args`: `WatchAssetParams`) => `Promise`<`boolean`\> ; `writeContract`: <TAbi, TFunctionName, TChainOverride\>(`args`: `WriteContractParameters`<`TAbi`, `TFunctionName`, `undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`\>) => `Promise`<\`0x${string}\`\>  } |

#### Defined in

[packages/sdk-viem/src/Client.ts:14](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L14)

## Accessors

### chainName

• `get` **chainName**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk-viem/src/Client.ts:25](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L25)

## Methods

### account

▸ **account**(): [`ChromaticAccount`](ChromaticAccount.md)

#### Returns

[`ChromaticAccount`](ChromaticAccount.md)

#### Defined in

[packages/sdk-viem/src/Client.ts:49](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L49)

___

### lens

▸ **lens**(): [`ChromaticLens`](ChromaticLens.md)

#### Returns

[`ChromaticLens`](ChromaticLens.md)

#### Defined in

[packages/sdk-viem/src/Client.ts:29](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L29)

___

### market

▸ **market**(): [`ChromaticMarket`](ChromaticMarket.md)

#### Returns

[`ChromaticMarket`](ChromaticMarket.md)

#### Defined in

[packages/sdk-viem/src/Client.ts:37](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L37)

___

### marketFactory

▸ **marketFactory**(): [`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Returns

[`ChromaticMarketFactory`](ChromaticMarketFactory.md)

#### Defined in

[packages/sdk-viem/src/Client.ts:33](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L33)

___

### position

▸ **position**(): [`ChromaticPosition`](ChromaticPosition.md)

#### Returns

[`ChromaticPosition`](ChromaticPosition.md)

#### Defined in

[packages/sdk-viem/src/Client.ts:41](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L41)

___

### router

▸ **router**(): [`ChromaticRouter`](ChromaticRouter.md)

#### Returns

[`ChromaticRouter`](ChromaticRouter.md)

#### Defined in

[packages/sdk-viem/src/Client.ts:45](https://github.com/chromatic-protocol/sdk/blob/16851ea/packages/sdk-viem/src/Client.ts#L45)
