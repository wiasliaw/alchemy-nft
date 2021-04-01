import hre, { ethers } from 'hardhat';

(async () => {
  const accounts = await hre.ethers.provider.listAccounts();
  const signersWithAddress = await ethers.getSigner(accounts[0]);

  console.log("Address: ",signersWithAddress.address);
  console.log("Balance: ",(await signersWithAddress.getBalance()).toString());
})();
