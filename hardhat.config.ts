const dotenv = require('dotenv');
const { HardhatUserConfig } = require('hardhat/config');
require('@nomicfoundation/hardhat-toolbox-viem');
require('hardhat-chai-matchers-viem');

dotenv.config();

const config = {
  solidity: {
    compilers: [
      {
        version: '0.8.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: 'https://rpc.frax.com',
      },
    },
    fraxtal: {
      url: 'https://rpc.mainnet.frax.com/',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
    },
    fraxtalVirtual: {
      url: 'https://virtual.fraxtal.rpc.tenderly.co/e3156da7-ba03-40d3-b8cb-d8da12a27239',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
    },

    sepolia: {
      url: 'https://eth-sepolia.public.blastapi.io',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
    },
    bscTestnet: {
      url: 'https://bsc-testnet.public.blastapi.io',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
    },

    mamoz: {
      url: 'https://rpc.mamoz.xyz',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
    },

  },
  ignition: {
    requiredConfirmations: 1,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
    customChains: [
      {
        network: 'fraxtal',
        chainId: 252,
        urls: {
          apiURL: 'https://api.fraxscan.com/api',
          browserURL: 'https://fraxscan.com',
        },
      },
    ],
  },
};

module.exports = config;
