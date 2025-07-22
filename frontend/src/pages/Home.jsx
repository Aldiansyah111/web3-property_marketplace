// export default function Home() {
//   return (
//     <section className="min-h-screen pt-28 px-6 md:px-20 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-white to-slate-100">
//       {/* Kiri: Tulisan */}
//       <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//           Stake & Earn <span className="text-blue-600">with ALD Web3</span>
//         </h1>
//         <p className="text-gray-600 text-base md:text-lg">
//           Secure your tokens and earn rewards through decentralized staking.
//           Just connect your wallet and start earning ALD Tokens effortlessly.
//         </p>
//         <a
//           href="/dashboard"
//           className="inline-block bg-blue-600 text-white px-7 py-3 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-medium"
//         >
//           🚀 Get Started
//         </a>
//       </div>

//       {/* Kanan: Gambar */}
//       <div className="md:w-1/2 w-full flex justify-center">
//         <img
//           src="/image/2.png"
//           alt="Web3 Illustration"
//           className="w-full max-w-md md:max-w-lg h-auto rounded-2xl shadow-xl"
//         />
//       </div>
//     </section>
//   );
// }


import Hero from "../components/homepage/hero";
import About from "../components/homepage/about";
import HowItWorks from "../components/homepage/HowItWorks";
import Tokenomics from "../components/homepage/Tokenomics";
import FAQ from "../components/homepage/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Tokenomics />
      <FAQ />
    </>
  );
}
