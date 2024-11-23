import React from 'react';
import { Calendar, Users, FileCheck, AlertCircle } from 'lucide-react';
const stats = [
    {
        icon: Calendar,
        label: 'Upcoming Deadlines',
        value: '5',
        color: 'bg-blue-500',
    },
    {
        icon: Users,
        label: 'Active Clients',
        value: '24',
        color: 'bg-green-500',
    },
    {
        icon: FileCheck,
        label: 'Documents Pending',
        value: '12',
        color: 'bg-yellow-500',
    },
    {
        icon: AlertCircle,
        label: 'Compliance Alerts',
        value: '3',
        color: 'bg-red-500',
    },
];
export function Dashboard() {
    return (<div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, John</h2>
        <p className="text-gray-600">Here's what's happening with your clients today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white"/>
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
            'Local File updated for Client A',
            'New benchmark analysis completed',
            'Transfer pricing documentation reviewed',
            'Compliance check completed for Client B',
        ].map((activity, index) => (<div key={index} className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p>{activity}</p>
              </div>))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
          <div className="space-y-4">
            {[
            'Master File submission - March 31',
            'Local File preparation - April 15',
            'Quarterly compliance review - April 30',
            'Annual tax filing - May 15',
        ].map((deadline, index) => (<div key={index} className="flex items-center gap-3 text-gray-600">
                <Calendar className="h-4 w-4 text-red-500"/>
                <p>{deadline}</p>
              </div>))}
          </div>
        </div>
      </div>
    </div>);
}
