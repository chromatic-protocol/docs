# Solidity API

## BinLiquidity

```solidity
struct BinLiquidity {
  uint256 total;
  struct _PendingLiquidity _pending;
  mapping(uint256 => struct _ClaimMinting) _claimMintings;
  mapping(uint256 => struct _ClaimBurning) _claimBurnings;
  struct DoubleEndedQueue.Bytes32Deque _burningVersions;
}
```

