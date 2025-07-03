import { ethers } from 'ethers';

// ✅ Fungsi untuk konek wallet
export const connectWallet = async () => {
  if (!window.ethereum) {
    alert("🦊 MetaMask belum terpasang!");
    return null;
  }

  try {
    // Minta akses akun
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.BrowserProvider(window.ethereum); // v6 style
    const signer = await provider.getSigner();
    
    // ❗ Gunakan langsung dari MetaMask, bukan getAddress() untuk hindari ENS
    const address = accounts[0]; 
    
    const network = await provider.getNetwork();

    // ✅ Return lengkap
    return {
      provider,
      signer,
      address,
      chainId: Number(network.chainId),
    };
  } catch (err) {
    console.error("❌ Gagal connect wallet:", err);
    return null;
  }
};

// ✅ Ambil akun wallet yang sudah connect
export const getCurrentWalletConnected = async () => {
  if (!window.ethereum) return null;

  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    return accounts.length > 0 ? accounts[0] : null;
  } catch (err) {
    console.error("❌ Error getCurrentWallet:", err);
    return null;
  }
};
