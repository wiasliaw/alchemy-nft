import { use, expect } from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers } from 'hardhat';

import { SimpleStorage } from '../_types';

use(solidity);

describe('SimpleStorage', async () => {
  const Factory = await ethers.getContractFactory('SimpleStorage');
  const SimpleStorage = await Factory.deploy();

  it('should get initial value 0', async () => {
    expect(await (SimpleStorage as SimpleStorage).get()).to.eq(0);
  });

  it('should get setup value 255', async () => {
    await (SimpleStorage as SimpleStorage).set(255);
    expect(await (SimpleStorage as SimpleStorage).get()).to.eq(255);
  });
});
