import { useEffect, useState } from 'react';
import {
    stakeTokens,
    withdrawStake,
    getUserStakeInfo
} from '../context/staking';
import {
    approveToken,
    getTokenBalance
} from '../context/mytoken';

import WalletInfo from '../components/WalletInfo';
import RewardCard from '../components/RewardCard';
import MintToken from '../components/MintToken';

import { ethers } from 'ethers';
import mytokenAbi from '../context/mytoken.json';
import { MYTOKEN_ADDRESS, STAKING_ADDRESS } from '../utils/constants';

export default function Staking() {
    const [signer, setSigner] = useState(null);
    const [walletAddress, setWalletAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [stakeInfo, setStakeInfo] = useState(null);
    const [balance, setBalance] = useState('0');
    const [loading, setLoading] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        const loadWallet = async () => {
            const address = localStorage.getItem('wallet');
            if (address && window.ethereum) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const userAddress = await signer.getAddress();

                setSigner(signer);
                setWalletAddress(userAddress);

                const tokenContract = new ethers.Contract(MYTOKEN_ADDRESS, mytokenAbi.abi, signer);
                const owner = await tokenContract.owner();
                setIsOwner(owner.toLowerCase() === userAddress.toLowerCase());
            }
        };
        loadWallet();
    }, []);

    const handleApprove = async () => {
        setLoading(true);
        try {
            await approveToken(signer, STAKING_ADDRESS, amount);
            alert('Token approved!');
        } catch (err) {
            console.error(err);
            alert('Approval failed');
        }
        setLoading(false);
    };

    const handleStake = async () => {
        setLoading(true);
        try {
            await stakeTokens(signer, amount);
            alert('Stake successful!');
            fetchStakeInfo();
        } catch (err) {
            console.error(err);
            alert('Stake failed');
        }
        setLoading(false);
    };

    const handleWithdraw = async () => {
        setLoading(true);
        try {
            await withdrawStake(signer);
            alert('Withdraw successful!');
            fetchStakeInfo();
        } catch (err) {
            console.error(err);
            alert('Withdraw failed');
        }
        setLoading(false);
    };

    const fetchStakeInfo = async () => {
        if (!signer || !walletAddress) return;
        const info = await getUserStakeInfo(signer, walletAddress);
        const bal = await getTokenBalance(signer, walletAddress);
        setStakeInfo(info);
        setBalance(bal);
    };

    useEffect(() => {
        if (signer) fetchStakeInfo();
    }, [signer]);

    const calculateReward = (balance, stakedAt) => {
        const now = Math.floor(Date.now() / 1000);
        const stakedTime = now - stakedAt;
        const annualRate = 10;
        const reward = (parseFloat(balance) * annualRate * stakedTime) / (365 * 24 * 60 * 60 * 100);
        return reward.toFixed(4);
    };

    const getStakeProgress = (stakedAt) => {
        const now = Math.floor(Date.now() / 1000);
        const elapsed = now - stakedAt;
        const total = 365 * 24 * 60 * 60;
        const percent = Math.min((elapsed / total) * 100, 100);
        return percent.toFixed(2);
    };

    if (!walletAddress) {
        return (
            <div className="min-h-screen pt-32 px-6">
                <h1 className="text-3xl font-bold mb-6">🚀 Staking Dashboard</h1>
                <p className="text-red-500">❗ Wallet belum terhubung</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 px-6 pb-16">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">🚀 Staking Dashboard</h1>

            <div className="max-w-2xl mx-auto flex flex-col gap-8">
                <WalletInfo address={walletAddress} balance={balance} />

                {/* <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <input
            type="number"
            placeholder="Amount to stake"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleApprove}
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition"
          >
            Approve Token
          </button>
          <button
            onClick={handleStake}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
          >
            Stake
          </button>
          <button
            onClick={handleWithdraw}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
          >
            Withdraw
          </button>
        </div> */}

                <div className="bg-white rounded-xl shadow-md p-20 space-y-8 border border-gray-200 ">
                    {/* Label + Input */}
                    <div className="space-y-4 text-center">
                        <label className="block font-bold text-gray-700">💸 Amount to Stake</label>
                        <input
                            type="number"
                            placeholder="e.g. 100"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Buttons */}
                    <button
                        onClick={handleApprove}
                        disabled={loading}
                        className=" text-left cursor-pointer w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition font-semibold"
                    >
                        🔐 Approve Token
                    </button>

                    <button
                        onClick={handleStake}
                        disabled={loading}
                        className=" text-left cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition font-semibold"
                    >
                        📥 Stake Now
                    </button>

                    <button
                        onClick={handleWithdraw}
                        disabled={loading}
                        className=" text-left cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition font-semibold"
                    >
                        💸 Withdraw Stake
                    </button>
                </div>


                {stakeInfo && parseFloat(stakeInfo.balance) > 0 && (
                    <RewardCard
                        balance={stakeInfo.balance}
                        stakedAt={stakeInfo.stakedAt}
                        reward={calculateReward(stakeInfo.balance, stakeInfo.stakedAt)}
                        progress={getStakeProgress(stakeInfo.stakedAt)}
                    />
                )}

                {isOwner && <MintToken signer={signer} />}
            </div>
        </div>
    );
}
