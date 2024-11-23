import React, { useState } from 'react';
import { FileText, Upload, Download, Plus } from 'lucide-react';

export function TransferPricing() {
  const [activeTab, setActiveTab] = useState('masterFile');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Transfer Pricing Documentation</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={20} />
          New Document
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex space-x-4 border-b border-gray-200 mb-6">
          <button
            className={`pb-4 px-4 ${
              activeTab === 'masterFile'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('masterFile')}
          >
            Master File
          </button>
          <button
            className={`pb-4 px-4 ${
              activeTab === 'localFile'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('localFile')}
          >
            Local File
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-medium">Document {item}</h3>
                    <p className="text-sm text-gray-500">Last modified: Mar 15, 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-secondary flex items-center gap-2 text-sm">
                  <Download size={16} />
                  Download
                </button>
                <button className="btn btn-secondary flex items-center gap-2 text-sm">
                  <Upload size={16} />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            'Master File template updated',
            'New Local File created for Entity A',
            'Benchmark analysis completed',
            'Documentation reviewed by Tax Team',
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <p>{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}