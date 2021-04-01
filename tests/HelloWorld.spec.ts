import {use, expect} from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers } from 'hardhat';

import { HelloWorld, HelloWorldFactory } from '../_types';

use(solidity);

describe('HelloWorld',() => {
  let hello_world_factory: HelloWorldFactory;
  let hello_world: HelloWorld;
  const initString = 'Hello the test';

  before(async () => {
    hello_world_factory = await ethers.getContractFactory('HelloWorld') as HelloWorldFactory;
    hello_world = await hello_world_factory.deploy(initString) as HelloWorld;
  });

  it('should be the init string', async () => {
    expect(await hello_world.message()).to.be.eq(initString);
  });

  it('should be the updated value', async () => {
    const updatedString = 'Hello the updated';
    await hello_world.update(updatedString);
    expect(await hello_world.message()).to.be.eq(updatedString);
  });
});
