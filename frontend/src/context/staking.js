import { ethers, parseEther, formatEther, isAddress } from 'ethers';
import stakingAbi from './staking.json';
import { STAKING_ADDRESS } from '../utils/constants';

export const getStakingContract = (signerOrProvider) => {
  return new ethers.Contract(STAKING_ADDRESS.trim(), stakingAbi.abi, signerOrProvider);
};

export const stakeTokens = async (signer, amount) => {
  if (!signer) throw new Error("Signer required");
  if (!amount || parseFloat(amount) <= 0) throw new Error("Invalid stake amount");

  const contract = getStakingContract(signer);
  const tx = await contract.stake(parseEther(amount));
  await tx.wait();
  return tx;
};

export const withdrawStake = async (signer) => {
  if (!signer) throw new Error("Signer required");

  const contract = getStakingContract(signer);
  const tx = await contract.withdraw();
  await tx.wait();
  return tx;
};

export const getUserStakeInfo = async (signer, address) => {
  if (!signer) throw new Error("Signer required");
  if (!isAddress(address)) throw new Error("Invalid address");

  const contract = getStakingContract(signer);
  const balance = await contract.balances(address);
  const timestamp = await contract.stakeTimestamps(address);

  return {
    balance: formatEther(balance),
    stakedAt: Number(timestamp)
  };
};
