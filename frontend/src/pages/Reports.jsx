const Reports = () => {
  const reports = [
    { name: 'Q4 2024 Forecast', type: 'Forecast', status: 'Completed', date: '2024-01-15', size: '2.4 MB' },
    { name: 'Inventory Status Report', type: 'Inventory', status: 'Completed', date: '2024-01-16', size: '1.8 MB' },
    { name: 'Material Usage Analysis', type: 'Usage', status: 'In Progress', date: '2024-01-14', size: '3.2 MB' },
    { name: 'Supplier Performance Review', type: 'Review', status: 'Failed', date: '2024-01-11', size: 'N/A' },
    { name: 'Annual Procurement Summary', type: 'Summary', status: 'Completed', date: '2024-01-10', size: '5.1 MB' }
  ];

  return (
    <div className="fade-in">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search reports by name..."
            className="w-full md:w-72 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
          />
          <div className="flex items-center gap-4">
            <select className="rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm">
              <option>All Types</option>
              <option>Forecast</option>
              <option>Inventory</option>
              <option>Usage</option>
            </select>
            <select className="rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm">
              <option>All Status</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Failed</option>
            </select>
            <button className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900 font-semibold">Generate Report</button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reports.map((report, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-slate-800">{report.name}</h4>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`status-badge status-${report.status.toLowerCase().replace(' ', '-')}`}>
                    {report.type}
                  </span>
                  <span className={`status-badge status-${report.status.toLowerCase().replace(' ', '-')}`}>
                    {report.status}
                  </span>
                  <span className="text-sm text-slate-500">Size: {report.size}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500">{report.date}</span>
                <button className="text-teal-600 hover:text-teal-700 font-medium">Download</button>
                <button className="text-slate-600 hover:text-slate-700 font-medium">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;

