const dotenv = require('dotenv');
const { HardhatUserConfig } = require('hardhat/config');
require('@nomicfoundation/hardhat-toolbox-viem');
require('hardhat-chai-matchers-viem');
require("@nomicfoundation/hardhat-verify");

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
      gas: 'auto', // gas limit
      gasPrice: 'auto', // 3 gwei = 3000000000
    },
    bscTestnet: {
      url: 'https://bsc-testnet.public.blastapi.io',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
      gas: 'auto', // gas limit
      gasPrice: 'auto', // 3 gwei = 3000000000
    },
    opSepolia: {
      url: 'https://sepolia.optimism.io',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
      gas: 'auto', // gas limit
      gasPrice: 'auto', // 3 gwei = 3000000000 
    },

    mamoz: {
      url: 'https://rpc.mamoz.xyz',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined,
      gas: 'auto', // gas limit
      gasPrice: 'auto', // 3 gwei = 3000000000
    },

  },
  ignition: {
    requiredConfirmations: 1,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY || "default_api_key",
    // apiKey: {
    //   // Is not required by blockscout. Can be any non-empty string
    //   'opSepolia': "string" // 'network', "default_api_key"
    // },
    customChains: [
      {
        network: 'fraxtal',
        chainId: 252,
        urls: {
          apiURL: 'https://api.fraxscan.com/api',
          browserURL: 'https://fraxscan.com',
        },
      },
      {
        network: 'opSepolia',
        chainId: 11155420,
        urls: {
          apiURL: 'https://optimism-sepolia.blockscout.com/api',
          browserURL: 'https://optimism-sepolia.blockscout.com',
        },
      },

      {
        network: 'mamoz',
        chainId: 7077,
        urls: {
          apiURL: 'https://exp.mamoz.xyz/api',
          browserURL: 'https://exp.mamoz.xyz',
        },
      },
    ],
  },
  sourcify: {
    enabled: false
  }
};

module.exports = config;
