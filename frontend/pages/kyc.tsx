import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const KycPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
  });
  const [idFile, setIdFile] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const AES_SECRET = process.env.NEXT_PUBLIC_AES_SECRET || 'default_rusty_key_2025';
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

  const encrypt = (text: string) => {
    return CryptoJS.AES.encrypt(text, AES_SECRET).toString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0] || null;
    if (type === 'id') setIdFile(file);
    if (type === 'selfie') setSelfie(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!idFile || !selfie) {
      setStatus('⚠️ Please upload both ID and selfie.');
      return;
    }

    try {
      setStatus('⏳ Encrypting and uploading your data...');

      const encryptedData = {
        fullName: encrypt(formData.fullName),
        idNumber: encrypt(formData.idNumber),
      };

      const form = new FormData();
      form.append('data', JSON.stringify(encryptedData));
      form.append('idFile', idFile);
      form.append('selfie', selfie);

      const res = await axios.post(`${API_BASE}/kyc/submit`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setStatus(`✅ ${res.data.message || 'KYC submitted successfully!'}`);
    } catch (err: any) {
      console.error(err);
      setStatus('❌ Upload failed. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-yellow-400 mb-4">
          RustyTraders KYC Verification
        </h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white outline-none"
          required
        />

        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={formData.idNumber}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 text-white outline-none"
          required
        />

        <div>
          <label className="block mb-1 text-gray-300">Upload ID Document</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, 'id')}
            className="w-full text-gray-300"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Upload Selfie</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'selfie')}
            className="w-full text-gray-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition"
        >
          Submit KYC
        </button>

        {status && <p className="text-center mt-3">{status}</p>}
      </form>
    </div>
  );
};

export default KycPage;
