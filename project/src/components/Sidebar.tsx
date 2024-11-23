import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BarChart3,
  FileText,
  Globe2,
  Calendar,
  Bell,
  Settings,
  Bot,
  Target,
  FileSpreadsheet,
  ClipboardCheck,
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const menuItems = [
  { icon: BarChart3, label: 'Dashboard', path: '/' },
  { icon: FileText, label: 'Transfer Pricing', path: '/transfer-pricing' },
  { icon: Globe2, label: 'Global Reporting', path: '/global-reporting' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: Target, label: 'Compliance', path: '/compliance' },
  { icon: Bot, label: 'AI Assistant', path: '/ai-assistant' },
];

export function Sidebar({ onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose?.();
  };

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Globe2 className="h-8 w-8 text-blue-400" />
        <h1 className="text-xl font-bold">TaxPro AI</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <button className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 w-full p-3 rounded-lg transition-colors">
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </button>
        <button className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 w-full p-3 rounded-lg transition-colors">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}