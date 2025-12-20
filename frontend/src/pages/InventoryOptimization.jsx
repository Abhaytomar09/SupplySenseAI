import { useState, useEffect } from 'react';
import api from '../utils/api';

const InventoryOptimization = () => {
    const [optimizationData, setOptimizationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [forecastName, setForecastName] = useState('');

    useEffect(() => {
        fetchOptimizationData();
    }, []);

    const fetchOptimizationData = async () => {
        try {
            const res = await api.get('/inventory/optimization');
            setOptimizationData(res.data.data.optimizationItems);
            setForecastName(res.data.data.forecastName);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch optimization data');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-6">Loading inventory analysis...</div>;
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

    return (
        <div className="fade-in">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Inventory Optimization & Procurement</h3>
                    <p className="text-sm text-slate-500">Analyzing stock against forecast: <span className="font-semibold text-slate-700">{forecastName}</span></p>
                </div>
                <button
                    onClick={fetchOptimizationData}
                    className="bg-slate-100 text-slate-600 px-4 py-2 rounded-md hover:bg-slate-200 text-sm font-medium transition-colors"
                >
                    Refresh Analysis
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Material</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Current Stock</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Forecasted Demand</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Shortage</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {optimizationData.map((item, idx) => (
                                <tr key={idx} className={item.status === 'Shortage' ? 'bg-red-50' : ''}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-slate-900">{item.materialName}</div>
                                        <div className="text-xs text-slate-500">{item.category}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                        {item.currentStock} <span className="text-xs">{item.unit}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                        {item.forecastedDemand} <span className="text-xs">{item.unit}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.status === 'Shortage' ? 'bg-red-100 text-red-800' :
                                                item.status === 'Surplus' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-green-100 text-green-800'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                        {item.shortage > 0 ? (
                                            <span className="font-bold text-red-600">{item.shortage} {item.unit}</span>
                                        ) : '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                        {item.recommendation !== 'None' && (
                                            <button className={`font-medium ${item.status === 'Shortage' ? 'text-teal-600 hover:text-teal-900' : 'text-slate-400 cursor-not-allowed'}`}>
                                                {item.recommendation}
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {optimizationData.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-10 text-center text-slate-500">
                                        No materials found to analyze.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InventoryOptimization;
