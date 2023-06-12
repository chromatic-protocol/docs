[@chromatic-protocol/sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / [periphery](../modules/factories.contracts.periphery.md) / Account\_\_factory

# Class: Account\_\_factory

[contracts](../modules/factories.contracts.md).[periphery](../modules/factories.contracts.periphery.md).Account__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.periphery.Account__factory.md#constructor)

### Properties

- [abi](factories.contracts.periphery.Account__factory.md#abi)

### Methods

- [connect](factories.contracts.periphery.Account__factory.md#connect)
- [createInterface](factories.contracts.periphery.Account__factory.md#createinterface)

## Constructors

### constructor

• **new Account__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: readonly [{ `inputs`: readonly [] = []; `name`: ``"AlreadyInitialized"`` = "AlreadyInitialized"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [] = []; `name`: ``"NotEnoughBalance"`` = "NotEnoughBalance"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [] = []; `name`: ``"NotExistPosition"`` = "NotExistPosition"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [] = []; `name`: ``"NotMarket"`` = "NotMarket"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [] = []; `name`: ``"NotOwner"`` = "NotOwner"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [] = []; `name`: ``"NotRouter"`` = "NotRouter"; `type`: ``"error"`` = "error" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"token"`` = "token"; `type`: ``"address"`` = "address" }] ; `name`: ``"balance"`` = "balance"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"marketAddress"`` = "marketAddress"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"positionId"`` = "positionId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"claimPosition"`` = "claimPosition"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"positionId"`` = "positionId"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"claimPositionCallback"`` = "claimPositionCallback"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"marketAddress"`` = "marketAddress"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"positionId"`` = "positionId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"closePosition"`` = "closePosition"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }] ; `name`: ``"getPositionIds"`` = "getPositionIds"; `outputs`: readonly [{ `internalType`: ``"uint256[]"`` = "uint256[]"; `name`: ``""`` = ""; `type`: ``"uint256[]"`` = "uint256[]" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"market"`` = "market"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"hasPositionId"`` = "hasPositionId"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"_owner"`` = "\_owner"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"_router"`` = "\_router"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"_marketFactory"`` = "\_marketFactory"; `type`: ``"address"`` = "address" }] ; `name`: ``"initialize"`` = "initialize"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"marketAddress"`` = "marketAddress"; `type`: ``"address"`` = "address" }, { `internalType`: ``"int224"`` = "int224"; `name`: ``"qty"`` = "qty"; `type`: ``"int224"`` = "int224" }, { `internalType`: ``"uint32"`` = "uint32"; `name`: ``"leverage"`` = "leverage"; `type`: ``"uint32"`` = "uint32" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"takerMargin"`` = "takerMargin"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"makerMargin"`` = "makerMargin"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"maxAllowableTradingFee"`` = "maxAllowableTradingFee"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"openPosition"`` = "openPosition"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"openVersion"`` = "openVersion"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"closeVersion"`` = "closeVersion"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"int224"`` = "int224"; `name`: ``"qty"`` = "qty"; `type`: ``"int224"`` = "int224" }, { `internalType`: ``"uint32"`` = "uint32"; `name`: ``"leverage"`` = "leverage"; `type`: ``"uint32"`` = "uint32" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"openTimestamp"`` = "openTimestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"closeTimestamp"`` = "closeTimestamp"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"takerMargin"`` = "takerMargin"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, { `components`: readonly [{ `internalType`: ``"uint16"`` = "uint16"; `name`: ``"tradingFeeRate"`` = "tradingFeeRate"; `type`: ``"uint16"`` = "uint16" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `internalType`: ``"struct BinMargin[]"`` = "struct BinMargin[]"; `name`: ``"_binMargins"`` = "\_binMargins"; `type`: ``"tuple[]"`` = "tuple[]" }] ; `internalType`: ``"struct Position"`` = "struct Position"; `name`: ``"position"`` = "position"; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"settlementToken"`` = "settlementToken"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"vault"`` = "vault"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"marginRequired"`` = "marginRequired"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"openPositionCallback"`` = "openPositionCallback"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"token"`` = "token"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"amount"`` = "amount"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"withdraw"`` = "withdraw"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }] = `_abi`

#### Defined in

[src/gen/factories/contracts/periphery/Account__factory.ts:339](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/factories/contracts/periphery/Account__factory.ts#L339)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Account`](../interfaces/contracts.periphery.Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Account`](../interfaces/contracts.periphery.Account.md)

#### Defined in

[src/gen/factories/contracts/periphery/Account__factory.ts:343](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/factories/contracts/periphery/Account__factory.ts#L343)

___

### createInterface

▸ `Static` **createInterface**(): [`AccountInterface`](../interfaces/AccountInterface.md)

#### Returns

[`AccountInterface`](../interfaces/AccountInterface.md)

#### Defined in

[src/gen/factories/contracts/periphery/Account__factory.ts:340](https://github.com/chromatic-protocol/sdk/blob/f027fff/src/gen/factories/contracts/periphery/Account__factory.ts#L340)
