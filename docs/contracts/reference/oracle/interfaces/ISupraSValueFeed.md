---
id: ISupraSValueFeed
title: ISupraSValueFeed.sol
---
# [ISupraSValueFeed.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/oracle/interfaces/ISupraSValueFeed.sol)

## ISupraSValueFeed

### getSvalue

```solidity
function getSvalue(uint64 _pairIndex) external view returns (bytes32, bool)
```

### getSvalues

```solidity
function getSvalues(uint64[] _pairIndexes) external view returns (bytes32[], bool[])
```

