import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { TransferPricing } from './components/TransferPricing';
import { GlobalReporting } from './components/GlobalReporting';
import { ComplianceTracker } from './components/ComplianceTracker';
import { Calendar } from './components/Calendar';
import { AIAssistant } from './components/AIAssistant';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transfer-pricing" element={<TransferPricing />} />
          <Route path="/global-reporting" element={<GlobalReporting />} />
          <Route path="/compliance" element={<ComplianceTracker />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;