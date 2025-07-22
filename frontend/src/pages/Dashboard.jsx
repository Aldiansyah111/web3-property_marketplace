import { useEffect, useState } from 'react';
import { connectWallet } from '../context/wallet';
import { getTokenBalance } from '../context/mytoken';
import { getUserStakeInfo } from '../context/staking';

export default function Dashboard() {
  const [signer, setSigner] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0');
  const [stakeInfo, setStakeInfo] = useState({ balance: '0', stakedAt: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const wallet = await connectWallet();
      const { signer, address } = wallet;
      setSigner(signer);
      setWalletAddress(address);

      const bal = await getTokenBalance(signer, address);
      setBalance(bal);

      const stake = await getUserStakeInfo(signer, address);
      setStakeInfo(stake);
    };

    fetchData();
  }, []);

  const calculateReward = (balance, stakedAt) => {
    const now = Math.floor(Date.now() / 1000);
    const stakedTime = now - stakedAt;
    const annualRate = 10;
    const reward = (parseFloat(balance) * annualRate * stakedTime) / (365 * 24 * 60 * 60 * 100);
    return reward.toFixed(4);
  };

  const isStaking = parseFloat(stakeInfo.balance) > 0;
  const rewardEstimate = isStaking ? calculateReward(stakeInfo.balance, stakeInfo.stakedAt) : '0';

  return (
    <div className="min-h-screen pt-32 px-6 md:px-20 pb-20 bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900">📊 Dashboard Overview</h1>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <InfoCard title="🪪 Wallet Address">
          <p className="font-mono break-all text-sm text-gray-700">{walletAddress}</p>
        </InfoCard>

        <InfoCard title="💰 ALD Token Balance">
          <p className="text-2xl font-bold text-green-600">{balance}</p>
        </InfoCard>

        <InfoCard title="📦 Total Staked">
          <p className="text-2xl font-bold text-blue-600">{stakeInfo.balance}</p>
        </InfoCard>

        <InfoCard title="🎁 Estimated Rewards">
          <p className="text-2xl font-bold text-purple-600">{rewardEstimate} ALD</p>
        </InfoCard>

        <InfoCard title="🔒 Staking Status">
          <p className={`text-xl font-bold ${isStaking ? 'text-green-600' : 'text-red-500'}`}>
            {isStaking ? 'Active ✅' : 'Inactive ❌'}
          </p>
        </InfoCard>
      </div>
    </div>
  );
}

// Komponen reusable untuk kartu informasi
function InfoCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
      {children}
    </div>
  );
}
