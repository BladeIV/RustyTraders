import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

interface KycRecord {
  id: number;
  fullName: string;
  idNumber: string;
  status: string;
  createdAt: string;
}

const KycReviewPage: React.FC = () => {
  const [records, setRecords] = useState<KycRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';
  const AES_SECRET = process.env.NEXT_PUBLIC_AES_SECRET || 'default_rusty_key_2025';

  const decrypt = (encrypted: string) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, AES_SECRET);
      return bytes.toString(CryptoJS.enc.Utf8) || '[Decryption Error]';
    } catch (e) {
      return '[Invalid Data]';
    }
  };

  const fetchKycRecords = async () => {
    try {
      const res = await axios.get(`${API_BASE}/kyc/status/all`);
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      setFeedback('Failed to fetch KYC records.');
    } finally {
      setLoading(false);
    }
  };

  const handleReview = async (id: number, action: 'approve' | 'reject') => {
    try {
      await axios.patch(`${API_BASE}/kyc/review/${id}`, { action });
      setFeedback(`KYC #${id} ${action}ed successfully.`);
      fetchKycRecords();
    } catch (err) {
      console.error(err);
      setFeedback('Action failed.');
    }
  };

  useEffect(() => {
    fetchKycRecords();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-yellow-400 text-xl">
        Loading KYC submissions...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
        RustyTraders — KYC Review Dashboard
      </h1>

      {feedback && (
        <div className="text-center mb-4 text-sm text-yellow-400">
          {feedback}
        </div>
      )}

      {records.length === 0 ? (
        <p className="text-center text-gray-400">No KYC submissions yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-yellow-400">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Full Name</th>
                <th className="p-3 text-left">ID Number</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Submitted</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="p-3">{r.id}</td>
                  <td className="p-3">{decrypt(r.fullName)}</td>
                  <td className="p-3">{decrypt(r.idNumber)}</td>
                  <td className="p-3 text-yellow-400">{r.status}</td>
                  <td className="p-3 text-sm text-gray-400">
                    {new Date(r.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleReview(r.id, 'approve')}
                      className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-black font-semibold"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReview(r.id, 'reject')}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-black font-semibold"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default KycReviewPage;
