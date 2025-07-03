const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(1000000, 18); // supply, decimals
  await token.deployed();

  console.log("✅ Token deployed at:", token.address);
}

main().catch((error) => {
  console.error("💥 Error deploying:", error);
  process.exitCode = 1;
});
