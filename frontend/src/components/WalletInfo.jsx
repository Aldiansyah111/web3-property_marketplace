export default function WalletInfo({ address, balance }) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-2">
      {/* Card 1: Wallet Address */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        <h3 className="text-sm text-gray-500 mb-1">Wallet Address</h3>
        <p className="font-mono font-sm text-green-600 break-all">{address}</p>
      </div>

      {/* Card 2: ALD Balance */}
      <div className="bg-white rounded-xl shadow p-8 border border-gray-200">
        <h3 className="text-sm text-gray-500 mb-1">Your ALD Balance</h3>
        <p className="text-xl font-bold text-green-600">{balance} $</p>
      </div>
    </div>
  );
}


