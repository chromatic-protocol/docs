# Solidity API

## IMarketDeployer

A contract that constructs a market must implement this to pass arguments to the market

_This is used to avoid having constructor arguments in the market contract, which results in the init code hash
of the market being constant allowing the CREATE2 address of the market to be cheaply computed on-chain_

### parameters

```solidity
function parameters() external view returns (address oracleProvider, address settlementToken)
```

Get the parameters to be used in constructing the market, set transiently during market creation.

_Called by the market constructor to fetch the parameters of the market
Returns underlyingAsset The underlying asset of the market
Returns settlementToken The settlement token of the market
Returns vPoolCapacity Capacity of virtual future pool
Returns vPoolA Amplification coefficient of virtual future pool, precise value_
