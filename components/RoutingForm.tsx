'use client';

import { useState } from 'react';

export default function RoutingForm() {
  const [accountName, setAccountName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [vertical, setVertical] = useState('K12');
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setResult(`Assigned Rep: Rep for ZIP ${zipCode} in ${vertical}`);
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">MDR Routing Tool</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Account Name</label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">ZIP Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Vertical</label>
            <select
              value={vertical}
              onChange={(e) => setVertical(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="K12">K12</option>
              <option value="Higher Ed">Higher Ed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Find Rep
          </button>
        </form>

        {result && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <p className="font-medium">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}