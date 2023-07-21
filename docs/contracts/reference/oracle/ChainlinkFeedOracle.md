---
id: ChainlinkFeedOracle
title: ChainlinkFeedOracle.sol
---
# [ChainlinkFeedOracle.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/ChainlinkFeedOracle.sol)

## ChainlinkFeedOracle

Chainlink implementation of the IOracle interface.

_One instance per Chainlink price feed should be deployed. Multiple products may use the same
     ChainlinkOracle instance if their payoff functions are based on the same underlying oracle.
     This implementation only support non-negative prices._

### UnableToSyncError

```solidity
error UnableToSyncError()
```

### aggregator

```solidity
ChainlinkAggregator aggregator
```

_Chainlink feed aggregator address_

### Phase

```solidity
struct Phase {
  uint128 startingVersion;
  uint128 startingRoundId;
}
```

### constructor

```solidity
constructor(ChainlinkAggregator aggregator_) public
```

Initializes the contract state

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | aggregator_ | ChainlinkAggregator | Chainlink price feed aggregator |

### sync

```solidity
function sync() external returns (struct IOracleProvider.OracleVersion)
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

