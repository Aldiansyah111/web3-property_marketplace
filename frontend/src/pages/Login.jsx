import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const { email, password } = form;

    if (!email || !password) {
      alert('⚠️ Email dan password wajib diisi!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem('email', email);
        localStorage.setItem('username', result.user.username);
        alert('✅ Login berhasil!');
        window.location.href = '/dashboard';
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('🚨 Gagal login.');
    }
  };

  return (
    <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">🔐 Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
