import React from 'react';
import Layout from '../components/Layout';
import { ShoppingCart, Clock, Coffee, CheckCircle } from 'lucide-react';

const StaffDashboard: React.FC = () => {
  return (
    <Layout title="Staff Dashboard">
      <div className="space-y-6">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Welcome to the Staff Portal</h3>
          <p className="text-orange-100">
            Process orders, manage billing, and serve customers efficiently.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Orders Today</p>
                <p className="text-2xl font-bold text-gray-900">42</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">38</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Coffee className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">My Sales</p>
                <p className="text-2xl font-bold text-gray-900">$680</p>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Functions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Actions</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Create and process customer orders
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Generate bills and receipts
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Process payments and transactions
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                View today's menu and prices
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Track personal sales performance
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-700">Order #1024</span>
                  <span className="block text-sm text-gray-500">Green Tea & Snacks</span>
                </div>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Completed</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-700">Order #1025</span>
                  <span className="block text-sm text-gray-500">Black Tea & Cookies</span>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-700">Order #1026</span>
                  <span className="block text-sm text-gray-500">Chai Latte & Pastry</span>
                </div>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-700">Order #1027</span>
                  <span className="block text-sm text-gray-500">Herbal Tea Set</span>
                </div>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StaffDashboard;