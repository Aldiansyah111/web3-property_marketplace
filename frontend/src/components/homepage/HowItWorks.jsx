// src/components/HowItWorks.jsx
import { Wallet, Lock, DollarSign } from 'lucide-react';
import HowImage from "../../assets/4.png";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start earning passive income in just a few steps. Here’s how staking with <span className="text-purple-600 font-semibold">Web3Stake</span> works:
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Kiri: Steps */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Step 1 */}
            <div className="bg-[#f8f5ff] p-6 rounded-xl shadow hover:shadow-md transition-all">
              <Wallet className="text-purple-500 w-10 h-10 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800 mb-2">1. Connect Your Wallet</h3>
              <p className="text-gray-600">
                Use MetaMask or any Web3-compatible wallet to get started securely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f5faff] p-6 rounded-xl shadow hover:shadow-md transition-all">
              <Lock className="text-sky-500 w-10 h-10 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800 mb-2">2. Stake Your Tokens</h3>
              <p className="text-gray-600">
                Choose how many tokens to stake and lock them into our secure smart contract.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f6fff8] p-6 rounded-xl shadow hover:shadow-md transition-all">
              <DollarSign className="text-emerald-500 w-10 h-10 mb-4" />
              <h3 className="font-semibold text-xl text-gray-800 mb-2">3. Earn Rewards</h3>
              <p className="text-gray-600">
                Sit back and watch your ALD Tokens grow as you earn rewards automatically.
              </p>
            </div>
          </div>

          {/* Kanan: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={HowImage}
              alt="How it works illustration"
              className="max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
