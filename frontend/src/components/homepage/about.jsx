// src/components/About.jsx
// import { Trophy, Coins, ShieldCheck } from 'lucide-react';

// export default function About() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-white  px-2 md:px-30 pt-2 flex items-center justify-center">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//           About ALD Token Launch & Staking
//         </h2>
//         <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
//           We are excited to launch <span className="font-semibold text-blue-600">1,000,000 ALD Tokens</span> 
//           to empower our decentralized community. By staking your tokens, you not only help secure the network 
//           but also earn passive income.
//         </p>

//         <div className="grid md:grid-cols-3 gap-10 text-left">
//           <div className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition-all">
//             <Trophy className="text-blue-600 w-10 h-10 mb-4" />
//             <h3 className="font-semibold text-xl text-gray-800 mb-2">Early Rewards</h3>
//             <p className="text-gray-600">
//               Be among the first stakers and enjoy exclusive reward multipliers from the genesis pool.
//             </p>
//           </div>

//           <div className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition-all">
//             <Coins className="text-yellow-500 w-10 h-10 mb-4" />
//             <h3 className="font-semibold text-xl text-gray-800 mb-2">Passive Earnings</h3>
//             <p className="text-gray-600">
//               Earn ALD Tokens just by locking your assets — no active trading or complex tasks.
//             </p>
//           </div>

//           <div className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition-all">
//             <ShieldCheck className="text-green-600 w-10 h-10 mb-4" />
//             <h3 className="font-semibold text-xl text-gray-800 mb-2">Secure & Decentralized</h3>
//             <p className="text-gray-600">
//               All staking is handled by smart contracts — fully transparent and trustless.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// src/components/About.jsx
import { Trophy, Coins, ShieldCheck } from 'lucide-react';
import AboutImage from "../../assets/3.png"; // Ganti sesuai gambar yang lo mau

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-slate-100 px-6 md:px-20 pt-20 pb-24 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gambar di atas */}
        <img
          src={AboutImage}
          alt="About Web3"
          className="mx-auto mb-12 w-full max-w-xs"
        />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About ALD Token Launch & Staking
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          We are excited to launch <span className="font-semibold text-blue-600">1,000,000 ALD Tokens</span> 
          to empower our decentralized community. By staking your tokens, you not only help secure the network 
          but also earn passive income.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
            <Trophy className="text-blue-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Early Rewards</h3>
            <p className="text-gray-600">
              Be among the first stakers and enjoy exclusive reward multipliers from the genesis pool.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
            <Coins className="text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Passive Earnings</h3>
            <p className="text-gray-600">
              Earn ALD Tokens just by locking your assets — no active trading or complex tasks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all">
            <ShieldCheck className="text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Secure & Decentralized</h3>
            <p className="text-gray-600">
              All staking is handled by smart contracts — fully transparent and trustless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
