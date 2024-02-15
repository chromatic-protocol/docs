---
id: MarketDeployer
title: MarketDeployer.sol
---
# [MarketDeployer.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/libraries/deployer/MarketDeployer.sol)

## MarketDeployer

```solidity
struct MarketDeployer {
  struct Parameters parameters;
}
```

_Storage struct for deploying a ChromaticMarket contract_

## Parameters

```solidity
struct Parameters {
  address oracleProvider;
  address settlementToken;
  uint16 protocolFeeRate;
}
```

_Struct for storing deployment parameters_

## DeployArgs

```solidity
struct DeployArgs {
  address oracleProvider;
  address settlementToken;
  address marketDiamondCutFacet;
  address marketLoupeFacet;
  address marketStateFacet;
  address marketAddLiquidityFacet;
  address marketRemoveLiquidityFacet;
  address marketLensFacet;
  address marketTradeOpenPositionFacet;
  address marketTradeClosePositionFacet;
  address marketLiquidateFacet;
  address marketSettleFacet;
  uint16 protocolFeeRate;
}
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracleProvider | address | The address of the oracle provider |
| settlementToken | address | The address of the settlement token |
| marketDiamondCutFacet | address | The market diamond cut facet address. |
| marketLoupeFacet | address | The market loupe facet address. |
| marketStateFacet | address | The market state facet address. |
| marketAddLiquidityFacet | address | The market liquidity facet address for adding and claiming. |
| marketRemoveLiquidityFacet | address | The market liquidity facet address for removing and withdrawing. |
| marketLensFacet | address | The market liquidity lens facet address. |
| marketTradeOpenPositionFacet | address | The market trade facet address for opending positions. |
| marketTradeClosePositionFacet | address | The market trade facet address for closing and claiming positions. |
| marketLiquidateFacet | address | The market liquidate facet address. |
| marketSettleFacet | address | The market settle facet address. |
| protocolFeeRate | uint16 | The protocol fee rate for the market. |

## MarketDeployerLib

Library for deploying a ChromaticMarket contract

### deploy

```solidity
function deploy(struct MarketDeployer self, struct DeployArgs args) external returns (address market)
```

Deploys a ChromaticMarket contract

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | self | struct MarketDeployer | The MarketDeployer storage |
  | args | struct DeployArgs | The arguments for deploy |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | market | address | The address of the deployed ChromaticMarket contract |

