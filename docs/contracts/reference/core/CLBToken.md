---
id: CLBToken
title: CLBToken.sol
---
# [CLBToken.sol](https://github.com/chromatic-protocol/contracts/tree/main/contracts/core/CLBToken.sol)

## CLBToken

_CLBToken is an ERC1155 token contract that represents Liquidity Bin tokens.
     CLBToken allows minting and burning of tokens by the Chromatic Market contract._

### market

```solidity
contract IChromaticMarket market
```

### OnlyAccessableByMarket

```solidity
error OnlyAccessableByMarket()
```

_Throws an error indicating that the caller is not a registered market._

### onlyMarket

```solidity
modifier onlyMarket()
```

_Modifier to restrict access to the Chromatic Market contract.
     Only the market contract is allowed to call functions with this modifier.
     Reverts with an error if the caller is not the market contract._

### constructor

```solidity
constructor() public
```

_Initializes the CLBToken contract.
     The constructor sets the market contract address as the caller._

### decimals

```solidity
function decimals() public view returns (uint8)
```

_Retrieves the number of decimals used for token amounts._

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint8 | The number of decimals used for token amounts. |

### totalSupply

```solidity
function totalSupply(uint256 id) public view virtual returns (uint256)
```

_Total amount of tokens in with a given id._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | id | uint256 | The token ID for which to retrieve the total supply. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256 | The total supply of tokens for the given token ID. |

### totalSupplyBatch

```solidity
function totalSupplyBatch(uint256[] ids) public view virtual returns (uint256[])
```

_Total amounts of tokens in with the given ids._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | ids | uint256[] | The token IDs for which to retrieve the total supply. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | uint256[] | The total supples of tokens for the given token IDs. |

### mint

```solidity
function mint(address to, uint256 id, uint256 amount, bytes data) external
```

_This function can only be called by the Chromatic Market contract._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | to | address | The address to which the minted tokens will be assigned. |
  | id | uint256 | The token ID to mint. |
  | amount | uint256 | The amount of tokens to mint. |
  | data | bytes | Additional data to pass during the minting process. |

### burn

```solidity
function burn(address from, uint256 id, uint256 amount) external
```

_This function can only be called by the Chromatic Market contract._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | from | address | The address from which to burn tokens. |
  | id | uint256 | The token ID to burn. |
  | amount | uint256 | The amount of tokens to burn. |

### name

```solidity
function name(uint256 id) public view returns (string)
```

_Retrieves the name of a token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | id | uint256 | The token ID for which to retrieve the name. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | The name of the token. |

### description

```solidity
function description(uint256 id) public view returns (string)
```

_Retrieves the description of a token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | id | uint256 | The token ID for which to retrieve the description. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | The description of the token. |

### image

```solidity
function image(uint256 id) public view returns (string)
```

_Retrieves the image URI of a token._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | id | uint256 | The token ID for which to retrieve the image URI. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | [0] | string | The image URI of the token. |

### uri

```solidity
function uri(uint256 id) public view returns (string)
```

_Returns the URI for token type `id`.

If the `\{id\}` substring is present in the URI, it must be replaced by
clients with the actual token type ID._

### decodeId

```solidity
function decodeId(uint256 id) internal pure returns (int16 tradingFeeRate)
```

_Decodes a token ID into a trading fee rate._

- Parameters:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | id | uint256 | The token ID to decode. |

- Return Values:

  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | tradingFeeRate | int16 | The decoded trading fee rate. |

