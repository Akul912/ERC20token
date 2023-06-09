
const hre = require("hardhat");

async function main() {
  const AKultoken = await hre.ethers.getContractFactory("AKultoken");
  const akulToken = await AKultoken.deploy(100000000, 50);

  await akulToken.deployed();

  console.log("akul Token deployed: ", akulToken.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
