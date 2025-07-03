// components/MintToken.jsx
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
    <div className="border border-green-300 p-4 rounded mt-6">
      <h2 className="font-semibold mb-2">🔨 Mint Token (Owner Only)</h2>
      <input
        type="text"
        placeholder="Address tujuan"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Jumlah token"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-2"
      />
      <button
        onClick={handleMint}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Mint Token
      </button>
    </div>
  );
}
