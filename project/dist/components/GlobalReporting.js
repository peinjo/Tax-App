import React from 'react';
import { Globe2, Download, Upload, FileSpreadsheet } from 'lucide-react';
export function GlobalReporting() {
    const countries = [
        { name: 'United States', code: 'US', deadline: 'April 15, 2024' },
        { name: 'United Kingdom', code: 'UK', deadline: 'March 31, 2024' },
        { name: 'Germany', code: 'DE', deadline: 'May 31, 2024' },
        { name: 'France', code: 'FR', deadline: 'April 30, 2024' },
        { name: 'Japan', code: 'JP', deadline: 'March 15, 2024' },
    ];
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Global Statutory Reporting</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <Upload size={20}/>
          Upload Report
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {countries.map((country) => (<div key={country.code} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-blue-500"/>
                  <div>
                    <p className="font-medium">{country.name}</p>
                    <p className="text-sm text-gray-500">Due: {country.deadline}</p>
                  </div>
                </div>
                <button className="btn btn-secondary text-sm">
                  Start Report
                </button>
              </div>))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {[
            { name: 'Q4 2023 Financial Statement', date: 'March 1, 2024' },
            { name: 'Annual Tax Return 2023', date: 'February 28, 2024' },
            { name: 'Transfer Pricing Documentation', date: 'February 15, 2024' },
            { name: 'VAT Return Q4', date: 'January 31, 2024' },
        ].map((report, index) => (<div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="h-5 w-5 text-green-500"/>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-gray-500">Submitted: {report.date}</p>
                  </div>
                </div>
                <button className="btn btn-secondary text-sm flex items-center gap-2">
                  <Download size={16}/>
                  Download
                </button>
              </div>))}
          </div>
        </div>
      </div>
    </div>);
}
