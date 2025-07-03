import { useState } from 'react';

export default function Login() {
  const [address, setAddress] = useState('');

  const handleLogin = () => {
    if (!address || address.trim() === '') {
      alert('⚠️ Wallet address tidak boleh kosong!');
      return;
    }

    localStorage.setItem('wallet', address.trim());
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">🔐 Login Wallet</h1>

        <input
          type="text"
          placeholder="Enter your wallet address"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Connect & Login
        </button>
      </div>
    </div>
  );
}
