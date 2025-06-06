'use client';
import { useState } from 'react';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message);
    if (res.ok) setForm({ name: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-2"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Sign Up
        </button>

        {message && <p className="text-center text-sm text-green-600">{message}</p>}
      </form>
    </div>
  );
}
