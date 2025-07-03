
import ProgressBar from './ProgressBar';

export default function RewardCard({ balance, stakedAt, reward, progress }) {
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Not Staked';
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="mt-10 bg-white border border-gray-200 rounded-xl shadow p-6 max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Staking Summary</h2>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Staked Amount</p>
          <p className="text-lg font-semibold text-blue-600">{balance} ALD</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Staked Since</p>
          <p className="text-lg font-semibold text-gray-700">{formatDate(stakedAt)}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-sm text-gray-500">🎁 Estimated Reward</p>
        <p className="text-xl font-bold text-green-600">{reward} ALD</p>

        <ProgressBar percent={progress} />

        <p className="text-sm text-gray-500 text-right">{progress}% toward 1-year staking</p>
      </div>
    </div>
  );
}

