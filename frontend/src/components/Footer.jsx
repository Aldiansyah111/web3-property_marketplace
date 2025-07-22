// src/components/Footer.jsx
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-gray-300 pt-12 pb-6 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-2">Web3Stake</h3>
          <p className="text-gray-400">
            Decentralized staking platform built for the new era of DeFi. Stake, earn, and grow with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
            <li><Link to="/staking" className="hover:text-purple-300">Staking</Link></li>
            <li><Link to="/dashboard" className="hover:text-purple-300">Dashboard</Link></li>
            <li><Link to="/register" className="hover:text-purple-300">Register</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-base font-semibold text-white mb-2">Connect</h4>
          <div className="flex gap-4 text-purple-300">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-white transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-white transition" />
            </a>
            <a href="mailto:youremail@example.com">
              <Mail className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-purple-800 pt-4">
        © {new Date().getFullYear()} Web3Stake — Built with ❤️ for Aldiansyah.
      </div>
    </footer>
  );
}
