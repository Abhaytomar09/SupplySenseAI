import { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="border-b border-slate-200">
          <nav className="flex -mb-px">
            {['Profile', 'Notifications', 'Preferences'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.toLowerCase()
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Aditya Rasal"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="aditya.rasal@powergrid.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                  <input
                    type="text"
                    defaultValue="System Administrator"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    disabled
                  />
                </div>
                <div className="flex gap-4">
                  <button className="bg-slate-200 text-slate-800 py-2 px-4 rounded-md hover:bg-slate-300 font-semibold">
                    Change Password
                  </button>
                  <button className="bg-slate-200 text-slate-800 py-2 px-4 rounded-md hover:bg-slate-300 font-semibold">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {['Email Notifications', 'SMS Alerts', 'Push Notifications', 'Low Stock Warnings'].map((pref) => (
                  <div key={pref} className="flex items-center justify-between">
                    <span className="text-slate-700">{pref}</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-teal-500">
                      <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">System Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <button className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900 font-semibold">
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;

