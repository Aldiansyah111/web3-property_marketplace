// import { ethers } from 'ethers';

// // ✅ Fungsi untuk konek wallet
// export const connectWallet = async () => {
//   if (!window.ethereum) {
//     alert("🦊 MetaMask belum terpasang!");
//     return null;
//   }

//   try {
//     // Minta akses akun
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });

//     const provider = new ethers.BrowserProvider(window.ethereum); // v6 style
//     const signer = await provider.getSigner();
    
//     // ❗ Gunakan langsung dari MetaMask, bukan getAddress() untuk hindari ENS
//     const address = accounts[0]; 
    
//     const network = await provider.getNetwork();

//     // ✅ Return lengkap
//     return {
//       provider,
//       signer,
//       address,
//       chainId: Number(network.chainId),
//     };
//   } catch (err) {
//     console.error("❌ Gagal connect wallet:", err);
//     return null;
//   }
// };

// // ✅ Ambil akun wallet yang sudah connect
// export const getCurrentWalletConnected = async () => {
//   if (!window.ethereum) return null;

//   try {
//     const accounts = await window.ethereum.request({
//       method: "eth_accounts",
//     });

//     return accounts.length > 0 ? accounts[0] : null;
//   } catch (err) {
//     console.error("❌ Error getCurrentWallet:", err);
//     return null;
//   }
// };



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

    const provider = new ethers.BrowserProvider(window.ethereum); // v6
    const signer = await provider.getSigner();
    const address = accounts[0]; 
    const network = await provider.getNetwork();

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

// ✅ Fungsi untuk switch ke jaringan Holesky (Ethereum testnet)
export const switchNetworkToHolesky = async () => {
  const holeskyChainId = '0x4268'; // 17000 dalam hex

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: holeskyChainId }],
    });
    console.log("✅ Switched to Holesky Network");
  } catch (switchError) {
    // Kalau jaringan belum ditambahkan ke MetaMask
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: holeskyChainId,
              chainName: 'Ethereum Holesky Testnet',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.holesky.ethpandaops.io'], // Bisa diganti jika punya RPC lain
              blockExplorerUrls: ['https://holesky.etherscan.io'],
            },
          ],
        });
        console.log("✅ Holesky network added");
      } catch (addError) {
        console.error("❌ Gagal menambahkan Holesky network:", addError);
      }
    } else {
      console.error("❌ Gagal switch ke Holesky:", switchError);
    }
  }
};
