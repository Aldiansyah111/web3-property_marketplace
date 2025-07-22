import { useState } from 'react';
import { mintToken } from '../context/mytoken';

export default function MintToken({ signer }) {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleMint = async () => {
    try {
      await mintToken(signer, toAddress, amount);
      alert(`✅ Minted ${amount} tokens to ${toAddress}`);
    } catch (err) {
      console.error(err);
      alert('❌ Gagal mint token');
    }
  };

  return (
    <div className="mt-10 bg-white border border-gray-200 rounded-xl shadow p-6 max-w-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">🔨 Mint Token (Owner Only)</h2>

      <div className="space-y-4">
        {/* Input Address */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">📮 Address Tujuan</label>
          <input
            type="text"
            placeholder="0x123..."
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Input Amount */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">💰 Jumlah Token</label>
          <input
            type="number"
            placeholder="e.g. 1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Mint Button */}
        <button
          onClick={handleMint}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition font-semibold"
        >
          🚀 Mint Token
        </button>
      </div>
    </div>
  );
}
