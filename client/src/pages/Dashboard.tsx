import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ChartBarIcon, 
  VideoCameraIcon, 
  UserGroupIcon, 
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { isDark } = useTheme();

  const quickActions = [
    {
      icon: ChartBarIcon,
      title: 'Track Workout',
      description: 'Log your latest rowing session',
      color: 'from-blue-500 to-cyan-500',
      href: '/workouts'
    },
    {
      icon: VideoCameraIcon,
      title: 'Analyze Video',
      description: 'Upload and analyze your technique',
      color: 'from-purple-500 to-pink-500',
      href: '/analysis'
    },
    {
      icon: UserGroupIcon,
      title: 'Join Community',
      description: 'Connect with fellow rowers',
      color: 'from-green-500 to-emerald-500',
      href: '/community'
    },
    {
      icon: HeartIcon,
      title: 'Health Check',
      description: 'Monitor your recovery and health',
      color: 'from-red-500 to-orange-500',
      href: '/profile'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue-50 via-white to-pastel-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ready to improve your rowing technique today?
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right, ${action.color})` }}></div>
              <div className="relative card p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {action.description}
                </p>
                <div className="flex items-center text-pastel-blue-600 dark:text-pastel-blue-400 group-hover:text-pastel-blue-700 dark:group-hover:text-pastel-blue-300 transition-colors">
                  <span className="text-sm font-medium">Get Started</span>
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              No recent activity yet. Start by logging your first workout!
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button
            onClick={logout}
            className="btn-outline text-sm px-6 py-2"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
