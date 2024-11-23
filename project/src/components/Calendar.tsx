import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';

export function Calendar() {
  const today = new Date();
  const upcomingEvents = [
    {
      title: 'Transfer Pricing Documentation Due',
      date: '2024-03-31',
      type: 'deadline',
      client: 'Global Corp Ltd',
    },
    {
      title: 'Quarterly Tax Review',
      date: '2024-04-15',
      type: 'meeting',
      client: 'Tech Solutions Inc',
    },
    {
      title: 'Annual Compliance Check',
      date: '2024-04-30',
      type: 'task',
      client: 'Innovation Labs',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <CalendarIcon size={20} />
          Add Event
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="bg-blue-100 rounded-lg p-3">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={16} />
                      <span>{event.client}</span>
                    </div>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
          <div className="text-center py-8">
            <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No events scheduled for today</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800">
              Schedule a meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}