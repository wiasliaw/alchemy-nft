import { ethers } from 'hardhat';

(async () => {
  const HelloWorldFactory = await ethers.getContractFactory('HelloWorld');
  const hello_world = await HelloWorldFactory.deploy("Hello Alchemy");
  console.log("Contract deployed to address:", hello_world.address);
})();
