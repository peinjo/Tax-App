import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, X, Bell } from 'lucide-react';
export function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (<div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="lg:hidden bg-gray-900 text-white p-4 flex items-center justify-between">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg">
          {isSidebarOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
        <h1 className="text-xl font-bold">TaxPro AI</h1>
        <button className="p-2 hover:bg-gray-800 rounded-lg">
          <Bell size={24}/>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out fixed top-0 left-0 z-30 lg:z-0`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)}/>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (<div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setIsSidebarOpen(false)}/>)}

      {/* Main content */}
      <main className="lg:ml-64 pt-0 lg:pt-0">
        <div className="p-4 md:p-6 lg:p-8">{children}</div>
      </main>
    </div>);
}
