# Solidity API

## ICLBToken

_Interface for CLBToken contract, which represents Liquidity Bin tokens._

### totalSupply

```solidity
function totalSupply(uint256 id) external view returns (uint256)
```

_Retrieves the total supply of tokens for a given token ID._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The token ID for which to retrieve the total supply. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The total supply of tokens for the given token ID. |

### mint

```solidity
function mint(address to, uint256 id, uint256 amount, bytes data) external
```

_Mints new tokens and assigns them to the specified address._

#### Parameters

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

_Burns tokens from a specified address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | The address from which to burn tokens. |
| id | uint256 | The token ID to burn. |
| amount | uint256 | The amount of tokens to burn. |

### decimals

```solidity
function decimals() external view returns (uint8)
```

_Retrieves the number of decimals used for token amounts._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint8 | The number of decimals used for token amounts. |

### name

```solidity
function name(uint256 id) external view returns (string)
```

_Retrieves the name of a token._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The token ID for which to retrieve the name. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The name of the token. |

### description

```solidity
function description(uint256 id) external view returns (string)
```

_Retrieves the description of a token._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The token ID for which to retrieve the description. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The description of the token. |

### image

```solidity
function image(uint256 id) external view returns (string)
```

_Retrieves the image URI of a token._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | uint256 | The token ID for which to retrieve the image URI. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The image URI of the token. |

