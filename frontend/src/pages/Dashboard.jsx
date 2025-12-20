import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Materials', value: '5', subtext: 'Active inventory items' },
    { label: 'Low Stock Items', value: '1', subtext: 'Requires attention', highlight: 'text-amber-600' },
    { label: 'Recent Reports', value: '5', subtext: 'Generated this month' },
    { label: 'System Status', value: 'Online', subtext: 'All systems operational', highlight: 'text-teal-500' }
  ];

  const materials = [
    { name: 'Galvanized Steel Towers', category: 'Tower Components', quantity: '245 Units', status: 'in-stock' },
    { name: 'ACSR Conductor Cable', category: 'Transmission Line', quantity: '12.5 km', status: 'low-stock' },
    { name: 'Porcelain Insulators', category: 'Sub-station Fittings', quantity: '1250 Units', status: 'in-stock' },
    { name: 'Concrete Mix', category: 'Foundation Materials', quantity: '0 m³', status: 'out-of-stock' }
  ];

  const reports = [
    { name: 'Q4 2024 Forecast', type: 'Forecast', date: '2024-01-15', status: 'completed' },
    { name: 'Inventory Status', type: 'Inventory', date: '2024-01-16', status: 'completed' },
    { name: 'Material Usage', type: 'Usage', date: '2024-01-14', status: 'in-progress' },
    { name: 'Supplier Review', type: 'Review', date: '2024-01-11', status: 'failed' }
  ];

  return (
    <div className="fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-sm font-medium text-slate-500">{stat.label}</h3>
            <p className={`text-3xl font-bold text-slate-800 mt-1 ${stat.highlight || ''}`}>{stat.value}</p>
            <p className={`text-xs ${stat.highlight || 'text-slate-500'} mt-1`}>{stat.subtext}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Material Inventory Status */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Material Inventory Status</h3>
            <button onClick={() => navigate('/app/materials')} className="text-sm font-medium text-teal-500 hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {materials.map((material, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
                <div>
                  <p className="font-medium text-slate-700">{material.name}</p>
                  <p className="text-sm text-slate-500">{material.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-700">{material.quantity}</p>
                  <span className={`status-badge status-${material.status}`}>
                    {material.status === 'in-stock' ? 'In Stock' : material.status === 'low-stock' ? 'Low Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Recent Reports & Analytics</h3>
            <button onClick={() => navigate('/app/reports')} className="text-sm font-medium text-teal-500 hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {reports.map((report, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50">
                <div>
                  <p className="font-medium text-slate-700">{report.name}</p>
                  <p className="text-sm text-slate-500">{report.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">{report.date}</p>
                  <span className={`status-badge status-${report.status}`}>
                    {report.status === 'completed' ? 'Completed' : report.status === 'in-progress' ? 'In Progress' : 'Failed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={() => navigate('/app/forecasting')} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-teal-50 text-slate-600 hover:text-teal-600 transition-colors duration-200">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-medium">Generate Forecast</span>
          </button>
          <button onClick={() => navigate('/app/materials')} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-teal-50 text-slate-600 hover:text-teal-600 transition-colors duration-200">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium">Add Material</span>
          </button>
          <button onClick={() => navigate('/app/reports')} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-teal-50 text-slate-600 hover:text-teal-600 transition-colors duration-200">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-medium">Create Report</span>
          </button>
          <button onClick={() => navigate('/app/settings')} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-teal-50 text-slate-600 hover:text-teal-600 transition-colors duration-200">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium">System Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

