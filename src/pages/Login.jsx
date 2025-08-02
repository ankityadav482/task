import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser?.email === email && savedUser?.password === password) {
      alert('Login successful!');
      navigate('/home');  // 👈 Make sure this route exists
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center text-sm mt-4 text-blue-600">
          If not registered, please <Link to="/register" className="text-blue-600 underline">Register!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
