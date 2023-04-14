import btcTokenIcon from "./assets/icons/bitcoin-token.svg";
import ethTokenIcon from "./assets/icons/eth-token.svg";
import cstTokenIcon from "./assets/icons/casper-token.svg";
import usdtTokenIcon from "./assets/icons/tether-token.svg";
import usdcTokenIcon from "./assets/icons/usdc-token.svg";
import wethCsprPairTokenIcon from "./assets/icons/eth-cspr-pair.svg";

export const TOKEN_LIST_DATA_CREATE_POOL = [
  { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000', tokenImg: cstTokenIcon },
  { id: 'd3r4rfgj7j7', name: 'WBTC', fullName: 'Wrapped Bitcoin', amount: '10000', tokenImg: btcTokenIcon },
  { id: '9j90fjgf8he', name: 'USDT', fullName: 'Teather', amount: '10000', tokenImg: usdtTokenIcon },
  { id: '1jkjaasm2k1', name: 'USDC', fullName: 'USD Coin', amount: '10000', tokenImg: usdcTokenIcon },
  { id: 'dd333d3es2s', name: 'WETH', fullName: 'Wrapped Ether', amount: '1000000', tokenImg: ethTokenIcon }
]

export const POPULAR_TOKEN_LIST_DATA_CREATE_POOL = [
  { id: '3d3dfimfw33', name: 'CST', fullName: 'CasperSwap', amount: '1000000', tokenImg: cstTokenIcon },
  { id: 'd3r4rfgj7j7', name: 'WBTC', fullName: 'Wrapped Bitcoin', amount: '10000', tokenImg: btcTokenIcon },
  { id: '9j90fjgf8he', name: 'USDT', fullName: 'Teather', amount: '10000', tokenImg: usdtTokenIcon },
  { id: '1jkjaasm2k1', name: 'USDC', fullName: 'USD Coin', amount: '10000', tokenImg: usdcTokenIcon },
  { id: 'dd333d3es2s', name: 'WETH', fullName: 'Wrapped Ether', amount: '1000000', tokenImg: ethTokenIcon }
]

export const REMOVE_LIQUIDITY_DATA = [
  { id: 'd3jd92d', tokenNames: ['Wrapper Ether', 'Wrapper Casper'], tokenNameSymbols: ['WETH', 'CSPR'], amount: '0,3', tokenImg: wethCsprPairTokenIcon },
  { id: 'c9c843b', tokenNames: ['Wrapper Ether'], tokenNameSymbols: ['WETH'], amount: '0,3', tokenImg: ethTokenIcon },
  { id: '1qwski4', tokenNames: ['Wrapper Casper'], tokenNameSymbols: ['CSPR'], amount: '0,3', tokenImg: cstTokenIcon }
]
