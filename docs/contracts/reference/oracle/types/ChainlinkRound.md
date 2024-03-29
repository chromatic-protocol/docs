---
id: ChainlinkRound
title: ChainlinkRound.sol
---
# [ChainlinkRound.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/types/ChainlinkRound.sol)

## ChainlinkRound

```solidity
struct ChainlinkRound {
  uint256 timestamp;
  int256 answer;
  uint256 roundId;
}
```

_ChainlinkRound type_

## ChainlinkRoundLib

Library that manages Chainlink round parsing.

### phaseId

```solidity
function phaseId(struct ChainlinkRound self) internal pure returns (uint16)
```

Computes the chainlink phase ID from a round

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct ChainlinkRound | Round to compute from |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint16 | Chainlink phase ID |

