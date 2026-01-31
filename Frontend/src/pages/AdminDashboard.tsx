import React from 'react';
import Layout from '../components/Layout';
import { BarChart, Users, Coffee, DollarSign } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <Layout title="Admin Dashboard">
      <div className="space-y-6">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-2">Welcome to the Admin Portal</h3>
          <p className="text-green-100">
            Manage your tea shop operations, view analytics, and oversee staff activities.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">$12,456</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Coffee className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Orders Today</p>
                <p className="text-2xl font-bold text-gray-900">248</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Staff</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$8,924</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Functions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Admin Functions</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Manage staff accounts and permissions
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                View detailed sales reports and analytics
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Configure tea shop menu and pricing
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Monitor inventory and stock levels
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Generate financial reports
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">New staff member added</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Daily report generated</span>
                <span className="text-sm text-gray-500">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Menu prices updated</span>
                <span className="text-sm text-gray-500">Yesterday</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Inventory restocked</span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;