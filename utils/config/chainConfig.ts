import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  mainnet: {
    displayName: "Ethereum Mainnet",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x1",
    rpcTarget: `https://mainnet.infura.io/v3/cf8a5d95c63d455b92265f8b63c9db70`,
    blockExplorer: "https://etherscan.io/",
    ticker: "ETH",
    tickerName: "Ethereum",
  } as CustomChainConfig,
  polygon: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com/",
    chainId: "0x89",
    displayName: "Polygon Mainnet",
    ticker: "matic",
    tickerName: "Matic",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
