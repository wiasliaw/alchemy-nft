import hre from 'hardhat';
import { HelloWorld } from '../_types';

const hello_world_address = '0x8752513e834E2ee8742d754E3ff3B0D406a6677f';

(async () => {
  const hello_world = await hre.ethers.getContractAt(
    'HelloWorld',
    hello_world_address
  ) as HelloWorld;

  console.log("Message in Contract:", await hello_world.message());
})();
