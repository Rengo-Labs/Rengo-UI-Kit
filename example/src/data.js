import btcTokenIcon from "./assets/icons/bitcoin-token.svg";
import ethTokenIcon from "./assets/icons/eth-token.svg";
import cstTokenIcon from "./assets/icons/casper-token.svg";
import usdtTokenIcon from "./assets/icons/tether-token.svg";
import usdcTokenIcon from "./assets/icons/usdc-token.svg";
import wethCsprPairTokenIcon from "./assets/icons/eth-cspr-pair.svg";
import lineBreakIcon from "./assets/icons/linkbreak.svg";
import casperWallet from "./assets/icons/casper-wallet.svg";
import ledgerWallet from "./assets/icons/ledger-wallet.svg";
import torusWallet from "./assets/icons/torus-wallet.svg";

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

export const BALANCE_TABLE_DATA = [
  {
    id: 1,
    crypto: 'Bitcoin',
    cryptoIcon: btcTokenIcon,
    mycrypto: 0.0062,
    '24h': '45.92%',
    '7d': '51.92%',
    '15d': '90.5%',
    '30d': '90.5%'
  },
  {
    id: 2,
    crypto: 'Ethereum',
    cryptoIcon: ethTokenIcon,
    mycrypto: 0.0162,
    '24h': '45.92%',
    '7d': '45.92%',
    '15d': '80.5%',
    '30d': '99.5%'
  },
  {
    id: 3,
    crypto: 'Usdt',
    cryptoIcon: usdtTokenIcon,
    mycrypto: 0.00062,
    '24h': '45.92%',
    '7d': '56.92%',
    '15d': '70.5%',
    '30d': '92.5%'
  }
]


export const WALLET_CONNECTED_OPTIONS = [
  {
    id: 'dmx0031b2b421',
    key: 'account',
    name: 'My Account',
    iconName: 'User',
    type: 'Redirect',
  },
  {
    id: '3d23f23xxx88nf',
    key: 'wallet',
    name: '6c166587-0e23-4d0c-86de-3c3d7a0f0c09',
    iconName: 'Copy',
    type: 'copy',
  },
  {
    id: '1x9x9900jjwoa',
    key: 'transactions',
    name: 'Recent Transactions',
    iconName: 'Clock',
    type: 'redirect',
  },
  {
    id: '0zokxj8h82nndl',
    key: 'disconnect',
    name: 'Disconnect Wallet',
    iconName: '',
    icon: lineBreakIcon,
    type: 'redirect',
  }
]

export const WALLETS_DATA = [
  {
    id: 1,
    name: 'Casper Signer',
    icon: casperWallet,
    onConnect: () => console.log('Casper Signer'),
  },
  {
    id: 2,
    name: 'Casper Wallet',
    icon: casperWallet,
    onConnect: () => console.log('Casper Wallet'),
  },
  {
    id: 3,
    name: 'Ledger',
    icon: ledgerWallet,
    onConnect: () => console.log('Ledger'),
  },
  {
    id: 4,
    name: 'Torus Wallet',
    icon: torusWallet,
    onConnect: () => console.log('Torus Wallet'),
  },
]
