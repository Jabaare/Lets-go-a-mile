import Layout from '../components/Layout';
import { useState } from 'react';
export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    alert('Thank you for registering!');
  };
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Join Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="country" placeholder="Country" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-primary text-cream px-4 py-2 rounded hover:bg-light-blue transition">
          Register
        </button>
      </form>
    </Layout>
  );
}
