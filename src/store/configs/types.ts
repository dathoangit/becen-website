export interface IChainConfigs {
  rpcUrl: string;
  urls: string[];
  name?: string;
  currency?: string;
  explorer: string;
  logo: string;
  scanName: string;
  tokens: {
    rabbitToken: string;
  };
  contracts: {
    bnA: string;
    pair: string;
    airdrop: string;
  };
  nativeToken: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

export interface IConfigs {
  language: 'uk' | 'vn' | 'cn' | 'es' | 'hk' | 'in' | 'jp' | 'kr' | 'pt' | 'ru';
  chainId: number;
  chainConfigs: IChainConfigs;
  initialledConfig: boolean;
}


export interface State {
  configs: IConfigs;
}
