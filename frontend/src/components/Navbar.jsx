import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connectWallet } from '../context/wallet';
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

    const handleConnect = async () => {
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
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white px-6 py-8 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-blue-400">Web3Stake</Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center">
                {navLinks}

                {!address ? (
                    <button
                        onClick={handleConnect}
                        className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-500"
                    >
                        Connect Wallet
                    </button>
                ) : (
                    <div className="flex items-center gap-2">
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

            {/* Hamburger Icon */}
            <button
                className="md:hidden text-white focus:outline-none z-50"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-start gap-4 p-6 md:hidden z-40">
                    {navLinks}

                    {!address ? (
                        <button
                            onClick={handleConnect}
                            className="bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-500 mx-auto cursor-pointer"
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <div className="flex justify-between items-center w-full px-50">
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
