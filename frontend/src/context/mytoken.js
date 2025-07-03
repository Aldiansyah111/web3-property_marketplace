import { ethers, formatEther, parseEther, isAddress } from 'ethers';
import mytokenAbi from './mytoken.json';
import { MYTOKEN_ADDRESS } from '../utils/constants';

// ✅ Pastikan ABI-nya memang .abi (jika import dari Remix, seringkali json perlu .abi)
export const getMyTokenContract = (signerOrProvider) => {
  return new ethers.Contract(MYTOKEN_ADDRESS, mytokenAbi.abi, signerOrProvider);
};

export const getTokenBalance = async (signer, address) => {
  if (!signer || !isAddress(address)) throw new Error("Invalid signer or address");
  const contract = getMyTokenContract(signer);
  const balance = await contract.balanceOf(address);
  return formatEther(balance);
};

export const mintToken = async (signer, to, amount) => {
  if (!signer || !isAddress(to)) throw new Error("Invalid signer or recipient");
  const contract = getMyTokenContract(signer);
  const tx = await contract.mint(to, parseEther(amount));
  await tx.wait();
  return tx;
};

export const approveToken = async (signer, spender, amount) => {
  if (!signer) throw new Error("Signer required");
  if (!isAddress(spender)) throw new Error("Invalid spender address");
  if (!amount || parseFloat(amount) <= 0) throw new Error("Invalid approve amount");

  const contract = getMyTokenContract(signer);
  const tx = await contract.approve(spender, parseEther(amount));
  await tx.wait();
  return tx;
};
