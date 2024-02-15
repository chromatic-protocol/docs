---
id: MarketDiamondCutFacet
title: MarketDiamondCutFacet.sol
---
# [MarketDiamondCutFacet.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/facets/market/MarketDiamondCutFacet.sol)

## MarketDiamondCutFacet

### onlyFactoryOrDao

```solidity
modifier onlyFactoryOrDao()
```

_Modifier to restrict access to only the factory or the DAO.
     Throws an `OnlyAccessableByFactoryOrDao` error if the caller is nether the chormatic factory contract nor the DAO._

### diamondCut

```solidity
function diamondCut(struct IDiamondCut.FacetCut[] _cut, address _init, bytes _calldata) external
```

Add/replace/remove any number of functions and optionally execute
        a function with delegatecall

_This function can only be called by the Chromatic factory contract or the DAO._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | _cut | struct IDiamondCut.FacetCut[] | Contains the facet addresses and function selectors |
  | _init | address | The address of the contract or facet to execute _calldata |
  | _calldata | bytes | A function call, including function selector and arguments                  _calldata is executed with delegatecall on _init |

