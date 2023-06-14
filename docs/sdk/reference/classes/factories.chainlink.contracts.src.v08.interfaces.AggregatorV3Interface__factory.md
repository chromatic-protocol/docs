[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [chainlink](../modules/factories.chainlink.md) / [contracts](../modules/factories.chainlink.contracts.md) / [src](../modules/factories.chainlink.contracts.src.md) / [v08](../modules/factories.chainlink.contracts.src.v08.md) / [interfaces](../modules/factories.chainlink.contracts.src.v08.interfaces.md) / AggregatorV3Interface\_\_factory

# Class: AggregatorV3Interface\_\_factory

[v08](../modules/factories.chainlink.contracts.src.v08.md).[interfaces](../modules/factories.chainlink.contracts.src.v08.interfaces.md).AggregatorV3Interface__factory

## Table of contents

### Constructors

- [constructor](factories.chainlink.contracts.src.v08.interfaces.AggregatorV3Interface__factory.md#constructor)

### Properties

- [abi](factories.chainlink.contracts.src.v08.interfaces.AggregatorV3Interface__factory.md#abi)

### Methods

- [connect](factories.chainlink.contracts.src.v08.interfaces.AggregatorV3Interface__factory.md#connect)
- [createInterface](factories.chainlink.contracts.src.v08.interfaces.AggregatorV3Interface__factory.md#createinterface)

## Constructors

### constructor

• **new AggregatorV3Interface__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [] = []; `name`: ``"decimals"`` = "decimals"; `outputs`: readonly [{ `internalType`: ``"uint8"`` = "uint8"; `name`: ``""`` = ""; `type`: ``"uint8"`` = "uint8" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"description"`` = "description"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint80"`` = "uint80"; `name`: ``"_roundId"`` = "\_roundId"; `type`: ``"uint80"`` = "uint80" }] ; `name`: ``"getRoundData"`` = "getRoundData"; `outputs`: readonly [{ `internalType`: ``"uint80"`` = "uint80"; `name`: ``"roundId"`` = "roundId"; `type`: ``"uint80"`` = "uint80" }, { `internalType`: ``"int256"`` = "int256"; `name`: ``"answer"`` = "answer"; `type`: ``"int256"`` = "int256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"startedAt"`` = "startedAt"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"updatedAt"`` = "updatedAt"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint80"`` = "uint80"; `name`: ``"answeredInRound"`` = "answeredInRound"; `type`: ``"uint80"`` = "uint80" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"latestRoundData"`` = "latestRoundData"; `outputs`: readonly [{ `internalType`: ``"uint80"`` = "uint80"; `name`: ``"roundId"`` = "roundId"; `type`: ``"uint80"`` = "uint80" }, { `internalType`: ``"int256"`` = "int256"; `name`: ``"answer"`` = "answer"; `type`: ``"int256"`` = "int256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"startedAt"`` = "startedAt"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"updatedAt"`` = "updatedAt"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint80"`` = "uint80"; `name`: ``"answeredInRound"`` = "answeredInRound"; `type`: ``"uint80"`` = "uint80" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"version"`` = "version"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface__factory.ts:127](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/factories/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface__factory.ts#L127)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`AggregatorV3Interface`](../interfaces/chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`AggregatorV3Interface`](../interfaces/chainlink.contracts.src.v08.interfaces.AggregatorV3Interface.md)

#### Defined in

[src/gen/factories/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface__factory.ts:131](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/factories/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface__factory.ts#L131)

___

### createInterface

▸ `Static` **createInterface**(): `AggregatorV3InterfaceInterface`

#### Returns

`AggregatorV3InterfaceInterface`

#### Defined in

[src/gen/factories/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface__factory.ts:128](https://github.com/chromatic-protocol/sdk/blob/ded0de0/src/gen/factories/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface__factory.ts#L128)
