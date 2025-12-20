import { useState, useEffect, useCallback } from 'react';
import api from '../utils/api';

const Materials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('All Status');
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Tower Components',
    currentStock: 0,
    unit: 'Units',
    reorderLevel: 0,
    unitCost: 0,
    description: ''
  });

  const fetchMaterials = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/materials');
      // Transform data to match UI requirements
      const formattedMaterials = response.data.data.map(m => ({
        id: m._id,
        name: m.name,
        category: m.category,
        stock: `${m.currentStock} ${m.unit}`,
        reorder: `${m.reorderLevel} ${m.unit}`,
        cost: `₹${m.unitCost}`,
        supplier: m.supplier?.name || 'Unknown Supplier', // Assuming populated or handled
        status: m.status,
        date: new Date(m.updatedAt).toISOString().split('T')[0]
      }));
      setMaterials(formattedMaterials);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching materials:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMaterials();
  }, [fetchMaterials]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/materials', formData);
      setShowModal(false);
      setFormData({
        name: '',
        category: 'Tower Components',
        currentStock: 0,
        unit: 'Units',
        reorderLevel: 0,
        unitCost: 0,
        description: ''
      });
      fetchMaterials(); // Refresh list
    } catch (error) {
      console.error('Error creating material:', error);
      alert('Failed to create material');
    }
  };

  const filteredMaterials = materials.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All Categories' || m.category === category;
    const matchesStatus = status === 'All Status' || m.status === status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="fade-in">
      {loading && materials.length === 0 ? (
        <div className="text-center py-10">Loading materials...</div>
      ) : (
        <>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search materials by name..."
                  className="w-full md:w-72 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
                />
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                >
                  <option>All Categories</option>
                  <option>Tower Components</option>
                  <option>Transmission Line</option>
                  <option>Sub-station Fittings</option>
                  <option>Foundation Materials</option>
                </select>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                >
                  <option>All Status</option>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-900 font-semibold"
                >
                  Add Material
                </button>
              </div>
            </div>
          </div>

          {filteredMaterials.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300 text-slate-500">
              <p className="text-lg">No materials found.</p>
              <p className="text-sm">Click "Add Material" to create a new entry.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">{material.name}</h4>
                      <p className="text-sm text-slate-500">{material.category}</p>
                    </div>
                    <span className={`status-badge status-${material.status.toLowerCase().replace(' ', '-')}`}>
                      {material.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm my-4 flex-grow">
                    <div><p className="text-slate-500">Current Stock:</p><p className="font-medium text-slate-700">{material.stock}</p></div>
                    <div><p className="text-slate-500">Reorder Level:</p><p className="font-medium text-slate-700">{material.reorder}</p></div>
                    <div><p className="text-slate-500">Unit Cost:</p><p className="font-medium text-slate-700">{material.cost}</p></div>
                    <div><p className="text-slate-500">Supplier:</p><p className="font-medium text-slate-700">{material.supplier}</p></div>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">Last Updated: {material.date}</div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-slate-200 text-slate-800 py-2 px-4 rounded-md hover:bg-slate-300 font-semibold text-sm">Edit</button>
                    <button className="flex-1 bg-teal-100 text-teal-800 py-2 px-4 rounded-md hover:bg-teal-200 font-semibold text-sm">Reorder</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Material Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                  <h3 className="text-lg font-semibold text-slate-800">Add New Material</h3>
                  <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Material Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                      <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500">
                        <option>Tower Components</option>
                        <option>Transmission Line</option>
                        <option>Sub-station Fittings</option>
                        <option>Foundation Materials</option>
                        <option>Accessories</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Unit</label>
                      <select name="unit" value={formData.unit} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500">
                        <option>Units</option>
                        <option>Kilometers</option>
                        <option>Metric Tons</option>
                        <option>Cubic Meters</option>
                        <option>kg</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Current Stock</label>
                      <input type="number" name="currentStock" required min="0" value={formData.currentStock} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Reorder Level</label>
                      <input type="number" name="reorderLevel" required min="0" value={formData.reorderLevel} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Unit Cost (₹)</label>
                    <input type="number" name="unitCost" required min="0" step="0.01" value={formData.unitCost} onChange={handleInputChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Description (Optional)</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-teal-500 focus:border-teal-500"></textarea>
                  </div>

                  <div className="pt-4 flex justify-end gap-3">
                    <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md font-medium">Cancel</button>
                    <button type="submit" className="px-4 py-2 text-white bg-teal-600 hover:bg-teal-700 rounded-md font-medium">Create Material</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Materials;
