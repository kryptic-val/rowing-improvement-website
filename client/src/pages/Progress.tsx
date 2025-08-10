import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/UI/ThemeToggle';
import { 
  ChartBarIcon, 
  CalendarIcon, 
  VideoCameraIcon, 
  UsersIcon, 
  CogIcon, 
  ArrowRightOnRectangleIcon,
  PlayIcon,
  ClockIcon,
  TrophyIcon,
  FireIcon,
  ShareIcon,
  PrinterIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

const Progress: React.FC = () => {
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  const sidebarItems = [
    { name: 'Dashboard', icon: ChartBarIcon, path: '/dashboard', active: location.pathname === '/dashboard' },
    { name: 'Training Plans', icon: CalendarIcon, path: '/training-plans', active: location.pathname === '/training-plans' },
    { name: 'Workouts', icon: FireIcon, path: '/workouts', active: location.pathname === '/workouts' },
    { name: 'Progress', icon: ChartBarIcon, path: '/progress', active: location.pathname === '/progress' },
    { name: 'Video Analysis', icon: VideoCameraIcon, path: '/video-analysis', active: location.pathname === '/video-analysis' },
    { name: 'Community', icon: UsersIcon, path: '/community', active: location.pathname === '/community' },
    { name: 'Nutrition', icon: CogIcon, path: '/nutrition', active: location.pathname === '/nutrition' },
    { name: 'Calendar', icon: CalendarIcon, path: '/calendar', active: location.pathname === '/calendar' },
  ];

  const personalRecords = [
    { distance: '2K', time: '7:22.4', date: '2025-01-15', improvement: '+2.3s' },
    { distance: '5K', time: '19:15.8', date: '2025-01-10', improvement: '+5.1s' },
    { distance: '10K', time: '39:45.2', date: '2025-01-05', improvement: '+8.7s' },
    { distance: '30min', time: '7,245m', date: '2025-01-12', improvement: '+45m' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue-50 via-white to-pastel-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-700 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-pastel-blue-600 text-lg">🚣</span>
              </div>
              <h1 className="text-xl font-bold">RowPro Training Platform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Welcome, {user?.name || 'User'}</span>
              <ThemeToggle />
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-colors"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg min-h-screen flex-shrink-0">
          <nav className="p-6">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      item.active
                        ? 'bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-pastel-blue-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 min-w-0">
          {/* Content Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Performance Dashboard
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Track your progress and analyze performance trends
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <ShareIcon className="w-4 h-4" />
                <span>Export Data</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <PrinterIcon className="w-4 h-4" />
                <span>Print Charts</span>
              </button>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <ChartBarIcon className="w-6 h-6 mr-3 text-pastel-blue-600" />
              Split Time Progression - Last 6 Months
            </h3>
            <div className="h-80 bg-gradient-to-br from-pastel-blue-50 to-pastel-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border-2 border-dashed border-pastel-blue-300 dark:border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <ChartBarIcon className="w-16 h-16 text-pastel-blue-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">Performance Chart</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Split time progression over time</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <TrophyIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center justify-end">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    +2.3s
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">2K PR</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">7:22.4</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <TrophyIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center justify-end">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    +5.1s
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">5K PR</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">19:15.8</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <FireIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center justify-end">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    +15W
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Avg Power</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">285W</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-green-600 dark:text-green-400 flex items-center justify-end">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    +2km
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Weekly Vol</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">42km</p>
            </div>
          </div>

          {/* Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrophyIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Personal Records
              </h3>
              <div className="space-y-3">
                {personalRecords.map((record, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{record.distance}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{record.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white">{record.time}</div>
                      <div className="text-sm text-green-600 dark:text-green-400">{record.improvement}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-pastel-blue-600 dark:text-pastel-blue-400 hover:text-pastel-blue-700 dark:hover:text-pastel-blue-300 font-medium transition-colors">
                View All PRs and Benchmarks →
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Performance Predictions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-pastel-blue-50 to-pastel-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Estimated 2K</span>
                    <span className="text-2xl font-bold text-pastel-blue-600 dark:text-pastel-blue-400">7:18.2</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Based on current training data</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">5K Prediction</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">19:08.5</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projected improvement</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 border-l border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="space-y-6">
            {/* Rankings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrophyIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Rankings
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Age Group:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Top 15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Club:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">3rd of 24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">National:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Top 25%</span>
                </div>
              </div>
            </div>

            {/* Trends */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Trends
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Improving:</span>
                  <span className="font-semibold text-green-600 flex items-center">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    +2.3s/month
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Consistency:</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Volume:</span>
                  <span className="font-semibold text-blue-600 flex items-center">
                    <ArrowUpIcon className="w-3 h-3 mr-1" />
                    +5km/week
                  </span>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrophyIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Goals
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Target 2K:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">7:15.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Days remaining:</span>
                  <span className="font-semibold text-red-600">85</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="text-center text-xs text-gray-600 dark:text-gray-400">
                  65% to goal
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Set New Goal
                </button>
                <button className="w-full bg-white dark:bg-gray-700 border-2 border-pastel-blue-200 dark:border-gray-600 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Share Progress
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Progress;
