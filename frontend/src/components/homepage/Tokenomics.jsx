// src/components/Tokenomics.jsx
import TokenomicsImage from "../../assets/5.png";

export default function Tokenomics() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-20 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tokenomics
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here's how the total supply of <span className="text-purple-600 font-semibold">1,000,000 ALD Tokens</span> will be distributed across our ecosystem.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Kiri: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={TokenomicsImage}
              alt="Tokenomics Chart"
              className="w-full h-auto max-w-md "
            />
          </div>

          {/* Kanan: Card Allocation */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
              <h3 className="font-semibold text-xl text-gray-800 mb-1">🔐 Staking Rewards</h3>
              <p className="text-gray-600">50% of the total supply is allocated for rewarding stakers in the ecosystem.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
              <h3 className="font-semibold text-xl text-gray-800 mb-1">💧 Liquidity</h3>
              <p className="text-gray-600">20% will be used to provide liquidity and support market stability.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
              <h3 className="font-semibold text-xl text-gray-800 mb-1">👨‍💻 Team & Development</h3>
              <p className="text-gray-600">15% reserved to support project development, team growth, and innovation.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
              <h3 className="font-semibold text-xl text-gray-800 mb-1">🌐 Community & Airdrop</h3>
              <p className="text-gray-600">10% will be distributed to the community via airdrops and engagement campaigns.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
              <h3 className="font-semibold text-xl text-gray-800 mb-1">📊 Reserve</h3>
              <p className="text-gray-600">5% held in reserve for strategic future use and unexpected needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
