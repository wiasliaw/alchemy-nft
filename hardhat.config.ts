import path from 'path';
import { HardhatUserConfig } from 'hardhat/config';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-gas-reporter';
import 'hardhat-typechain';

const config: HardhatUserConfig = {
  // default network
  defaultNetwork: 'hardhat',

  // network config
  networks: {
    hardhat: {
      hardfork: 'istanbul',
      blockGasLimit: 12450000,
      gas: 12450000,
      gasPrice: 8000000000,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true
    }
  },

  // solidity config
  solidity: {
    compilers: [
      {
        version: '0.7.5',
        settings: {
          optimizer: { enabled: true, runs: 200 },
          evmVersion: 'istanbul'
        }
      }
    ]
  },

  // repository config
  paths: {
    sources: path.resolve(__dirname, 'contracts'),
    tests: path.resolve(__dirname, 'tests'),
    cache: path.resolve(__dirname, '_caches'),
    artifacts: path.resolve(__dirname, '_artifacts')
  },

  // mocha
  mocha: {
    timeout: 0
  },

  // type chain
  typechain: {
    outDir: '_types',
    target: 'ethers-v5'
  },
};

export default config;
