---
id: ChromaticVault
title: ChromaticVault.sol
---
# [ChromaticVault.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/ChromaticVault.sol)

## ChromaticVault

_A contract that implements the ChromaticVault interface
     and provides functionality for managing positions, liquidity, and fees in Chromatic markets._

### factory

```solidity
contract IChromaticMarketFactory factory
```

### keeperFeePayer

```solidity
contract IKeeperFeePayer keeperFeePayer
```

### makerBalances

```solidity
mapping(address => uint256) makerBalances
```

### takerBalances

```solidity
mapping(address => uint256) takerBalances
```

### makerMarketBalances

```solidity
mapping(address => uint256) makerMarketBalances
```

### takerMarketBalances

```solidity
mapping(address => uint256) takerMarketBalances
```

### pendingMakerEarnings

```solidity
mapping(address => uint256) pendingMakerEarnings
```

### pendingMarketEarnings

```solidity
mapping(address => uint256) pendingMarketEarnings
```

### pendingDeposits

```solidity
mapping(address => uint256) pendingDeposits
```

### pendingWithdrawals

```solidity
mapping(address => uint256) pendingWithdrawals
```

### makerEarningDistributionTaskIds

```solidity
mapping(address => bytes32) makerEarningDistributionTaskIds
```

### marketEarningDistributionTaskIds

```solidity
mapping(address => bytes32) marketEarningDistributionTaskIds
```

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

### NotEnoughFeePaid

```solidity
error NotEnoughFeePaid()
```

### ExistMarketEarningDistributionTask

```solidity
error ExistMarketEarningDistributionTask()
```

### onlyFactoryOrDao

```solidity
modifier onlyFactoryOrDao()
```

_Modifier to restrict access to only the factory or the DAO._

### onlyMarket

```solidity
modifier onlyMarket()
```

_Modifier to restrict access to only the Market contract._

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, address _automate, address opsProxyFactory) public
```

_Constructs a new ChromaticVault instance._

| Name | Type | Description |
| ---- | ---- | ----------- |
| _factory | contract IChromaticMarketFactory | The address of the Chromatic Market Factory contract. |
| _automate | address | The address of the Gelato Automate contract. |
| opsProxyFactory | address | The address of the OpsProxyFactory contract. |

### onOpenPosition

```solidity
function onOpenPosition(address settlementToken, uint256 positionId, uint256 takerMargin, uint256 tradingFee, uint256 protocolFee) external
```

Called when a position is opened by a market contract.

_This function can only be called by a market contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The settlement token address. |
| positionId | uint256 | The ID of the opened position. |
| takerMargin | uint256 | The margin amount provided by the taker for the position. |
| tradingFee | uint256 | The trading fee associated with the position. |
| protocolFee | uint256 | The protocol fee associated with the position. |

### onClaimPosition

```solidity
function onClaimPosition(address settlementToken, uint256 positionId, address recipient, uint256 takerMargin, uint256 settlementAmount) external
```

Called when a position is claimed by a market contract.

_This function can only be called by a market contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The settlement token address. |
| positionId | uint256 | The ID of the claimed position. |
| recipient | address | The address that will receive the settlement amount. |
| takerMargin | uint256 | The margin amount provided by the taker for the position. |
| settlementAmount | uint256 | The amount to be settled for the position. |

### onAddLiquidity

```solidity
function onAddLiquidity(address settlementToken, uint256 amount) external
```

Called when liquidity is added to the vault by a market contract.

_This function can only be called by a market contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The settlement token address. |
| amount | uint256 | The amount of liquidity being added. |

### onSettlePendingLiquidity

```solidity
function onSettlePendingLiquidity(address settlementToken, uint256 pendingDeposit, uint256 pendingWithdrawal) external
```

Called when pending liquidity is settled in the vault by a market contract.

_This function can only be called by a market contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The settlement token address. |
| pendingDeposit | uint256 | The amount of pending deposits being settled. |
| pendingWithdrawal | uint256 | The amount of pending withdrawals being settled. |

### onWithdrawLiquidity

```solidity
function onWithdrawLiquidity(address settlementToken, address recipient, uint256 amount) external
```

Called when liquidity is withdrawn from the vault by a market contract.

_This function can only be called by a market contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The settlement token address. |
| recipient | address | The address that will receive the withdrawn liquidity. |
| amount | uint256 | The amount of liquidity to be withdrawn. |

### transferKeeperFee

```solidity
function transferKeeperFee(address settlementToken, address keeper, uint256 fee, uint256 margin) external returns (uint256 usedFee)
```

Transfers the keeper fee from the market to the specified keeper.

_This function can only be called by a market contract._

| Name | Type | Description |
| ---- | ---- | ----------- |
| settlementToken | address | The settlement token address. |
| keeper | address | The address of the keeper to receive the fee. |
| fee | uint256 | The amount of the fee to transfer as native token. |
| margin | uint256 | The margin amount used for the fee payment. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| usedFee | uint256 | The actual settlement token amount of fee used for the transfer. |

### _transferKeeperFee

```solidity
function _transferKeeperFee(address token, address keeper, uint256 fee, uint256 margin) internal returns (uint256 usedFee)
```

Internal function to transfer the keeper fee.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |
| keeper | address | The address of the keeper to receive the fee. |
| fee | uint256 | The amount of the fee to transfer as native token. |
| margin | uint256 | The margin amount used for the fee payment. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| usedFee | uint256 | The actual settlement token amount of fee used for the transfer. |

### transferProtocolFee

```solidity
function transferProtocolFee(address market, address settlementToken, uint256 positionId, uint256 amount) internal
```

Transfers the protocol fee to the DAO treasury address.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market contract. |
| settlementToken | address | The address of the settlement token. |
| positionId | uint256 | The ID of the position. |
| amount | uint256 | The amount of the protocol fee to transfer. |

### flashLoan

```solidity
function flashLoan(address token, uint256 amount, address recipient, bytes data) external
```

_Executes a flash loan._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the token for the flash loan. |
| amount | uint256 | The amount of the flash loan. |
| recipient | address | The address to receive the flash loan. |
| data | bytes | Additional data for the flash loan. |

### getPendingBinShare

```solidity
function getPendingBinShare(address market, address settlementToken, uint256 binBalance) external view returns (uint256)
```

Retrieves the pending share of earnings for a specific bin (subset) of funds in a market.

_The pending share of earnings is calculated based on the bin balance, maker balances, and market balances._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| settlementToken | address | The settlement token address. |
| binBalance | uint256 | The balance of funds in the bin. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The pending share of earnings for the specified bin. |

### resolveMakerEarningDistribution

```solidity
function resolveMakerEarningDistribution(address token) external view returns (bool canExec, bytes execPayload)
```

Resolves the maker earning distribution for a specific token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| canExec | bool | True if the distribution can be executed, otherwise False. |
| execPayload | bytes | The payload for executing the distribution. |

### distributeMakerEarning

```solidity
function distributeMakerEarning(address token) external
```

Distributes the maker earning for a token to the each markets.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

### createMakerEarningDistributionTask

```solidity
function createMakerEarningDistributionTask(address token) external virtual
```

Creates a maker earning distribution task for a token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

### cancelMakerEarningDistributionTask

```solidity
function cancelMakerEarningDistributionTask(address token) external virtual
```

Cancels a maker earning distribution task for a token.

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |

### _distributeMakerEarning

```solidity
function _distributeMakerEarning(address token, uint256 fee) internal
```

_Internal function to distribute the maker earning for a token to the each markets._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | The address of the settlement token. |
| fee | uint256 | The keeper fee amount. |

### resolveMarketEarningDistribution

```solidity
function resolveMarketEarningDistribution(address market) external view returns (bool canExec, bytes execPayload)
```

Resolves the market earning distribution for a market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| canExec | bool | True if the distribution can be executed. |
| execPayload | bytes | The payload for executing the distribution. |

### distributeMarketEarning

```solidity
function distributeMarketEarning(address market) external
```

Distributes the market earning for a market to the each bins.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

### createMarketEarningDistributionTask

```solidity
function createMarketEarningDistributionTask(address market) external virtual
```

Creates a market earning distribution task for a market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

### cancelMarketEarningDistributionTask

```solidity
function cancelMarketEarningDistributionTask(address market) external virtual
```

Cancels a market earning distribution task for a market.

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |

### _distributeMarketEarning

```solidity
function _distributeMarketEarning(address market, uint256 fee) internal
```

_Internal function to distribute the market earning for a market to the each bins._

| Name | Type | Description |
| ---- | ---- | ----------- |
| market | address | The address of the market. |
| fee | uint256 | The fee amount. |

### _resolverModuleArg

```solidity
function _resolverModuleArg(bytes _resolverData) internal view returns (bytes)
```

### _timeModuleArg

```solidity
function _timeModuleArg(uint256 _startTime, uint256 _interval) internal pure returns (bytes)
```

### _proxyModuleArg

```solidity
function _proxyModuleArg() internal pure returns (bytes)
```

