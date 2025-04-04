import React, { useEffect, useState } from 'react';
import { apiGet } from '../utils/api';

const Dashboard: React.FC = () => {
  const [activeSubscriptions, setActiveSubscriptions] = useState(0);

  // Fetch active subscriptions count
  useEffect(() => {
    const fetchActiveSubscriptions = async () => {
      try {
        const response = await apiGet('api/subscription/active-subscriptions');
        if (response.success) {
          setActiveSubscriptions(response.subscriptionCount);
        }
      } catch (error) {
        console.error('Error fetching active subscriptions:', error);
      }
    };

    fetchActiveSubscriptions();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Sol Indexer</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Active Subscriptions</h2>
          <div className="text-3xl font-bold text-indigo-600">{activeSubscriptions}</div>
          <p className="text-gray-500 mt-2">Currently running indexers</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Data Points</h2>
          <div className="text-3xl font-bold text-green-600">0</div>
          <p className="text-gray-500 mt-2">Total indexed items</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Database Status</h2>
          <div className="text-sm text-gray-600">
            <p>Configure your database in settings</p>
            <p className="text-yellow-600 font-semibold mt-2">Not Connected</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            Create New Subscription
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            View Analytics
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            Check Database Health
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;