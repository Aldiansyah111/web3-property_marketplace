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
    <div className="min-h-screen pt-32 px-6 pb-16">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">📊 Ringkasan Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <InfoCard title="🪪 Wallet Address">
          <p className="font-mono break-all text-sm text-gray-700">{walletAddress}</p>
        </InfoCard>

        <InfoCard title="💰 Token Balance (ALD)">
          <p className="text-2xl font-bold text-green-600">{balance}</p>
        </InfoCard>

        <InfoCard title="📦 Staked Amount">
          <p className="text-2xl font-bold text-blue-600">{stakeInfo.balance}</p>
        </InfoCard>

        <InfoCard title="🎁 Estimasi Reward">
          <p className="text-2xl font-bold text-purple-600">{rewardEstimate} ALD</p>
        </InfoCard>

        <InfoCard title="🔒 Status Staking">
          <p className={`text-xl font-bold ${isStaking ? 'text-green-600' : 'text-red-600'}`}>
            {isStaking ? 'Aktif' : 'Tidak Aktif'}
          </p>
        </InfoCard>
      </div>
    </div>
  );
}

// 💡 Komponen kartu info reusable biar rapi
function InfoCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
      {children}
    </div>
  );
}
