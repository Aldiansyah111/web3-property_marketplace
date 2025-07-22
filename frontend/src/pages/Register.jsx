import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    const { username, email, password } = form;

    if (!username || !email || !password) {
      alert('⚠️ Semua field wajib diisi!');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        alert('✅ Register berhasil!');
        window.location.href = '/login';
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (err) {
      console.error('Register error:', err);
      alert('🚨 Gagal register.');
    }
  };

  return (
    <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">📝 Register Account</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
