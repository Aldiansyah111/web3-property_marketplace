export default function Home() {
  return (
    <section className="min-h-screen pt-32 px-6 md:px-20 pb-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Kiri: Tulisan */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">ALD Web3 dApp</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Stake your tokens, track your dashboard, and connect your wallet — all in one place.
        </p>
        <a
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>

      {/* Kanan: Gambar */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/image/2.png"
          alt="Web3 Illustration"
          className="w-full max-w-md md:max-w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
