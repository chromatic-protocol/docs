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

### earningDistributor

```solidity
contract IVaultEarningDistributor earningDistributor
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

### _tradingLockOwner

```solidity
address _tradingLockOwner
```

### OnlyAccessableByDao

```solidity
error OnlyAccessableByDao()
```

_Throws an error indicating that the caller is not the DAO._

### OnlyAccessableByFactoryOrDao

```solidity
error OnlyAccessableByFactoryOrDao()
```

_Throws an error indicating that the caller is nether the chormatic factory contract nor the DAO._

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

_Throws an error indicating that the caller is not a registered market._

### OnlyAccessableByEarningDistributor

```solidity
error OnlyAccessableByEarningDistributor()
```

_Throws an error indicating that the caller is not the Vault earning distribute contract._

### NotEnoughBalance

```solidity
error NotEnoughBalance()
```

_Throws an error indicating that the flash loan amount exceeds the available balance in the vault._

### NotEnoughFeePaid

```solidity
error NotEnoughFeePaid()
```

_Throws an error indicating that the recipient has not paid the sufficient flash loan fee._

### TradingLockAlreadyAcquired

```solidity
error TradingLockAlreadyAcquired()
```

### NotTradingLockOwner

```solidity
error NotTradingLockOwner()
```

### onlyDao

```solidity
modifier onlyDao()
```

_Modifier to restrict access to only the DAO.
     Throws an `OnlyAccessableByDao` error if the caller is not the DAO._

### onlyFactoryOrDao

```solidity
modifier onlyFactoryOrDao()
```

_Modifier to restrict access to only the factory or the DAO.
     Throws an `OnlyAccessableByFactoryOrDao` error if the caller is nether the chormatic factory contract nor the DAO._

### onlyEarningDistributor

```solidity
modifier onlyEarningDistributor()
```

_Modifier to restrict access to only the Vault earning distribute contract.
     Throws an `OnlyAccessableByEarningDistributor` error if the caller is not the Vault earning distribute contract._

### requireUnacquiredTradingLock

```solidity
modifier requireUnacquiredTradingLock()
```

### requireTradingLock

```solidity
modifier requireTradingLock()
```

### constructor

```solidity
constructor(contract IChromaticMarketFactory _factory, contract IVaultEarningDistributor _earningDistributor) public
```

_Constructs a new ChromaticVault instance._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _factory | contract IChromaticMarketFactory | The address of the Chromatic Market Factory contract. |
  | _earningDistributor | contract IVaultEarningDistributor | The address of the Vault earning distribute contract. |

### onOpenPosition

```solidity
function onOpenPosition(address settlementToken, uint256 positionId, uint256 takerMargin, uint256 tradingFee, uint256 protocolFee) external
```

Called when a position is opened by a market contract.

_This function can only be called by a market contract._

- Parameters:

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

- Parameters:

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

- Parameters:

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

- Parameters:

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

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | settlementToken | address | The settlement token address. |
  | keeper | address | The address of the keeper to receive the fee. |
  | fee | uint256 | The amount of the fee to transfer as native token. |
  | margin | uint256 | The margin amount used for the fee payment. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | usedFee | uint256 | The actual settlement token amount of fee used for the transfer. |

### _transferKeeperFee

```solidity
function _transferKeeperFee(address token, address keeper, uint256 fee, uint256 margin) internal returns (uint256 usedFee)
```

Internal function to transfer the keeper fee.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | keeper | address | The address of the keeper to receive the fee. |
  | fee | uint256 | The amount of the fee to transfer as native token. |
  | margin | uint256 | The margin amount used for the fee payment. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | usedFee | uint256 | The actual settlement token amount of fee used for the transfer. |

### transferProtocolFee

```solidity
function transferProtocolFee(address market, address settlementToken, uint256 positionId, uint256 amount) internal
```

Transfers the protocol fee to the DAO treasury address.

- Parameters:

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

Executes a flash loan.

_Throws a `NotEnoughBalance` error if the loan amount exceeds the available balance.
     Throws a `NotEnoughFeePaid` error if the fee has not been paid by the recipient.

Requirements:
- The loan amount must not exceed the available balance after considering pending deposits and withdrawals.
- The fee for the flash loan must be paid by the recipient.
- The total amount paid must be distributed between the taker pool and maker pool according to their balances.
- The amount paid to the taker pool must be transferred to the DAO treasury address.
- The amount paid to the maker pool must be added to the pending maker earnings.

Emits a `FlashLoan` event with details of the flash loan execution._

- Parameters:

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

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |
  | settlementToken | address | The settlement token address. |
  | binBalance | uint256 | The balance of funds in the bin. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The pending share of earnings for the specified bin. |

### migrateEarningDistributionTasks

```solidity
function migrateEarningDistributionTasks(contract IVaultEarningDistributor oldEarningDistributor) external
```

### setVaultEarningDistributor

```solidity
function setVaultEarningDistributor(address _earningDistributor) external
```

_This function can only be called by the DAO address._

### createMakerEarningDistributionTask

```solidity
function createMakerEarningDistributionTask(address token) external virtual
```

Creates a maker earning distribution task for a token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### cancelMakerEarningDistributionTask

```solidity
function cancelMakerEarningDistributionTask(address token) external
```

Cancels a maker earning distribution task for a token.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |

### distributeMakerEarning

```solidity
function distributeMakerEarning(address token, uint256 fee, address keeper) external
```

Distributes the maker earning for a token to the each markets.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | token | address | The address of the settlement token. |
  | fee | uint256 | The keeper fee amount. |
  | keeper | address | The keeper address to receive fee. |

### createMarketEarningDistributionTask

```solidity
function createMarketEarningDistributionTask(address market) external virtual
```

Creates a market earning distribution task for a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

### cancelMarketEarningDistributionTask

```solidity
function cancelMarketEarningDistributionTask(address market) external
```

Cancels a market earning distribution task for a market.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |

### distributeMarketEarning

```solidity
function distributeMarketEarning(address market, uint256 fee, address keeper) external
```

Distributes the market earning for a market to the each bins.

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the market. |
  | fee | uint256 | The fee amount. |
  | keeper | address | The keeper address to receive fee. |

### acquireTradingLock

```solidity
function acquireTradingLock() external
```

### releaseTradingLock

```solidity
function releaseTradingLock() external
```

### _requireUnacquiredTradingLock

```solidity
function _requireUnacquiredTradingLock() internal view
```

### _requireTradingLock

```solidity
function _requireTradingLock() internal view
```

### _checkMarket

```solidity
function _checkMarket() internal view
```

