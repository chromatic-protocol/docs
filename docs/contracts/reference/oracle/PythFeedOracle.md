---
id: PythFeedOracle
title: PythFeedOracle.sol
---
# [PythFeedOracle.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/PythFeedOracle.sol)

## PythFeedOracle

### PriceFeedNotExist

```solidity
error PriceFeedNotExist()
```

### pyth

```solidity
contract AbstractPyth pyth
```

_Pyth address (https://docs.pyth.network/documentation/pythnet-price-feeds/evm)_

### priceFeedId

```solidity
bytes32 priceFeedId
```

_The id of pyth price feed (https://pyth.network/developers/price-feed-ids#pyth-evm-mainnet)_

### constructor

```solidity
constructor(contract AbstractPyth pyth_, bytes32 priceFeedId_, string description_) public
```

Initializes the contract state

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | pyth_ | contract AbstractPyth | Pyth address (https://docs.pyth.network/documentation/pythnet-price-feeds/evm) |
  | priceFeedId_ | bytes32 | The id of pyth price feed (https://pyth.network/developers/price-feed-ids#pyth-evm-mainnet) |
  | description_ | string | The description of the Oracle Provider('ETH/USD', 'BTC/USD'...) |

### sync

```solidity
function sync() public returns (struct IOracleProvider.OracleVersion)
```

Checks for a new price and updates the internal phase annotation state accordingly

_`sync` is expected to be called soon after a phase update occurs in the underlying proxy.
     Phase updates should be detected using off-chain mechanism and should trigger a `sync` call
     This is feasible in the short term due to how infrequent phase updates are, but phase update
     and roundCount detection should eventually be implemented at the contract level.
     Reverts if there is more than 1 phase to update in a single sync because we currently cannot
     determine the startingRoundId for the intermediary phase._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProvider.OracleVersion | The current oracle version after sync |

### currentVersion

```solidity
function currentVersion() public view returns (struct IOracleProvider.OracleVersion oracleVersion)
```

Returns the current oracle version

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleVersion | struct IOracleProvider.OracleVersion | oracleVersion Current oracle version |

### atVersion

```solidity
function atVersion(uint256 version) public view returns (struct IOracleProvider.OracleVersion oracleVersion)
```

Returns the current oracle version

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | version | uint256 | The version of which to lookup |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | oracleVersion | struct IOracleProvider.OracleVersion | oracleVersion Oracle version at version `version` |

### description

```solidity
function description() external view returns (string)
```

Retrieves the description of the Oracle Provider.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | A string representing the description of the Oracle Provider. |

### oracleProviderName

```solidity
function oracleProviderName() external pure returns (string)
```

Retrieves the name of the Oracle Provider.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | A string representing the name of the Oracle Provider. |

