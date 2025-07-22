import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connectWallet, switchNetworkToHolesky } from '../context/wallet';
import { Menu, X } from 'lucide-react'; // pastikan lucide-react sudah diinstall

export default function Navbar() {
    const [address, setAddress] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem('wallet');
        if (stored) setAddress(stored);

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                const newAddress = accounts[0] || '';
                setAddress(newAddress);
                if (newAddress) {
                    localStorage.setItem('wallet', newAddress);
                } else {
                    localStorage.removeItem('wallet');
                }
            });
        }

        return () => {
            window.ethereum?.removeListener?.('accountsChanged', () => { });
        };
    }, []);

    // const handleConnect = async () => {
    //     const wallet = await connectWallet();
    //     if (!wallet) return;

    //     localStorage.setItem('wallet', wallet.address);
    //     setAddress(wallet.address);
    //     navigate('/dashboard');
    // };

    const handleConnect = async () => {
        await switchNetworkToHolesky(); // ✅ switch ke Holesky dulu
        const wallet = await connectWallet();
        if (!wallet) return;

        localStorage.setItem('wallet', wallet.address);
        setAddress(wallet.address);
        navigate('/dashboard');
    };


    const handleDisconnect = () => {
        localStorage.removeItem('wallet');
        setAddress('');
        navigate('/');
    };

    const navLinks = (
        <>
            <Link to="/" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/staking" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Staking</Link>
            <Link to="/dashboard" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link to="/login" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Register</Link>
        </>
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white px-6 py-6 flex justify-between items-center shadow-md">
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-purple-400">WEB3STAKE</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/staking" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>Staking</Link>
                    <Link to="/dashboard" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                    <Link to="/login" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>Login</Link>
                    <Link to="/register" className="hover:text-purple-300" onClick={() => setMenuOpen(false)}>Register</Link>

                    {!address ? (
                        <button
                            onClick={handleConnect}
                            className="bg-purple-600 px-4 py-1 rounded hover:bg-purple-500 transition-all"
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-mono text-green-300">
                                {address.slice(0, 6)}...{address.slice(-4)}
                            </span>
                            <button
                                onClick={handleDisconnect}
                                className="text-red-400 text-sm hover:underline"
                            >
                                Disconnect
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Hamburger Icon */}
            <button
                className="md:hidden text-white focus:outline-none z-50"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-start gap-4 p-6 md:hidden z-40">
                    {navLinks}

                    {!address ? (
                        <button
                            onClick={handleConnect}
                            className="bg-purple-600 px-5 py-2 rounded-xl hover:bg-purple-500 mx-auto cursor-pointer"
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <div className="flex justify-between items-center w-full">
                            <span className="text-xs font-mono text-green-300">
                                {address.slice(0, 6)}...{address.slice(-4)}
                            </span>
                            <button
                                onClick={handleDisconnect}
                                className="text-red-400 text-sm hover:underline cursor-pointer"
                            >
                                Disconnect
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>

    );
}




