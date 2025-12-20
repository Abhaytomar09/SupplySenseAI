const Suppliers = () => {
  const suppliers = [
    { name: 'Steel Dynamics Inc.', materials: ['Galvanized Steel Towers', 'Structural Steel'], contact: 'contact@steeldynamics.com', rating: 4.8, status: 'Active' },
    { name: 'Southwire Co.', materials: ['ACSR Conductor Cable', 'Power Cables'], contact: 'info@southwire.com', rating: 4.6, status: 'Active' },
    { name: 'ABB Ltd.', materials: ['Porcelain Insulators', 'Electrical Components'], contact: 'sales@abb.com', rating: 4.9, status: 'Active' },
    { name: 'UltraTech', materials: ['Concrete Mix', 'Cement'], contact: 'orders@ultratech.com', rating: 4.5, status: 'Active' },
    { name: 'Fasteners Inc.', materials: ['Hardware & Fittings', 'Bolts & Nuts'], contact: 'support@fasteners.com', rating: 4.3, status: 'Active' }
  ];

  return (
    <div className="fade-in">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search suppliers by name or material..."
            className="w-full md:w-72 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
          />
          <button className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900 font-semibold">Add Supplier</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map((supplier, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800">{supplier.name}</h4>
                <p className="text-sm text-slate-500 mt-1">{supplier.contact}</p>
              </div>
              <span className="status-badge status-completed">{supplier.status}</span>
            </div>
            <div className="mb-4">
              <p className="text-sm text-slate-500 mb-2">Materials Supplied:</p>
              <div className="flex flex-wrap gap-2">
                {supplier.materials.map((material, mIdx) => (
                  <span key={mIdx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    {material}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-slate-500 mr-2">Rating:</span>
                <span className="font-semibold text-slate-800">{supplier.rating}</span>
                <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;

