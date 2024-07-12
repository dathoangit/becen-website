
import { IChainConfigs } from 'src/store/configs/types';

export const CHAIN_ID = {
  BSC: 56,
  BSC_TEST: 97,
};

export const DEFAULT_CHAIN = process.env.IS_DEV
  ? CHAIN_ID.BSC_TEST
  : CHAIN_ID.BSC;

export const SUPPORTED_CHAINS = process.env.IS_DEV
  ? [CHAIN_ID.BSC_TEST, CHAIN_ID.BSC]
  : [CHAIN_ID.BSC];

const CONFIG_BSC: IChainConfigs = {
  rpcUrl: 'https://bsc-dataseed.binance.org',
  urls: ['https://bsc-dataseed.binance.org'],
  name: 'BSC',
  currency: 'BNB',
  explorer: 'https://bscscan.com/',
  logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  scanName: 'BscScan',
  nativeToken: {
    name: 'BNB chain',
    symbol: 'BNB',
    decimals: 18,
  },
  tokens: {
    rabbitToken: '',
  },
  contracts: {
    bnA: '',
    pair: '',
    airdrop: ''
  },
};

const CONFIG_BSC_TEST: IChainConfigs = {
  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  urls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
  name: 'BSC Test',
  currency: 'tBNB',
  explorer: 'https://testnet.bscscan.com/',
  logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  scanName: 'Bnb Test Scan',
  nativeToken: {
    name: 'BSC Test',
    symbol: 'BNBt',
    decimals: 18,
  },
  tokens: {
    rabbitToken: '0x432753BAa3d2Df067d8Bdf667B8e80D68c931FaB',
  },
  contracts: {
    bnA: '',
    pair: '',
    airdrop: '0xb1C8cdBE40C17F2CBb500750570F0C15Ca7543f4'
  },
};
export const CONFIG_CHAINS: { [key: number]: IChainConfigs } = {
  [CHAIN_ID.BSC]: CONFIG_BSC,
  [CHAIN_ID.BSC_TEST]: CONFIG_BSC_TEST,
};

export const CHAINS: { [key: number]: IChainConfigs } = {
  ...CONFIG_CHAINS,
};

export const URLS: { [chainId: number]: string[] } = Object.keys(
  CHAINS,
).reduce<{ [chainId: number]: string[] }>((accumulator, chainId) => {
  const validURLs: string[] = CHAINS[Number(chainId)].urls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});
