---
id: IOracleProvider
title: IOracleProvider.sol
---
# [IOracleProvider.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/interfaces/IOracleProvider.sol)

## IOracleProvider

### InvalidOracleRound

```solidity
error InvalidOracleRound()
```

_Error for invalid oracle round_

### OracleVersion

```solidity
struct OracleVersion {
  uint256 version;
  uint256 timestamp;
  int256 price;
}
```

_A singular oracle version with its corresponding data_

| Name | Type | Description |
| ---- | ---- | ----------- |
| version | uint256 | The iterative version |
| timestamp | uint256 | the timestamp of the oracle update |
| price | int256 | The oracle price of the corresponding version |

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
function currentVersion() external view returns (struct IOracleProvider.OracleVersion)
```

Returns the current oracle version

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProvider.OracleVersion | oracleVersion Current oracle version |

### atVersion

```solidity
function atVersion(uint256 version) external view returns (struct IOracleProvider.OracleVersion)
```

Returns the current oracle version

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | version | uint256 | The version of which to lookup |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | struct IOracleProvider.OracleVersion | oracleVersion Oracle version at version `version` |

### description

```solidity
function description() external view returns (string)
```

Retrieves the description of the Oracle Provider.

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | A string representing the description of the Oracle Provider. |

