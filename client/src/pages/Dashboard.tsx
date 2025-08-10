import React from 'react';
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
  FireIcon
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { isDark } = useTheme();

  const handleLogout = () => {
    logout();
  };

  const sidebarItems = [
    { name: 'Dashboard', icon: ChartBarIcon, active: true },
    { name: 'Training Plans', icon: CalendarIcon, active: false },
    { name: 'Workouts', icon: FireIcon, active: false },
    { name: 'Progress', icon: ChartBarIcon, active: false },
    { name: 'Video Analysis', icon: VideoCameraIcon, active: false },
    { name: 'Community', icon: UsersIcon, active: false },
    { name: 'Nutrition', icon: CogIcon, active: false },
    { name: 'Calendar', icon: CalendarIcon, active: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue-50 via-white to-pastel-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-700 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg min-h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.name}>
                  <button
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      item.active
                        ? 'bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-pastel-blue-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Content Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Today's Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Wednesday, August 6, 2025
              </p>
            </div>
          </div>

          {/* Featured Workout */}
          <div className="bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-8 mb-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-pastel-blue-100 uppercase tracking-wide mb-2">
                  Today's Featured Workout
                </h3>
                <h4 className="text-2xl font-bold mb-4">
                  5x1000m Intervals @ 2K+8 split
                </h4>
                <div className="flex space-x-8 text-pastel-blue-100">
                  <div>
                    <span className="font-semibold">Target:</span> 1:58.0 split
                  </div>
                  <div>
                    <span className="font-semibold">Rest:</span> 90 seconds
                  </div>
                  <div>
                    <span className="font-semibold">Equipment:</span> Concept2 Erg
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
                  <PlayIcon className="w-5 h-5" />
                  <span>Start Workout</span>
                </button>
                <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-pastel-blue-100 dark:bg-pastel-blue-900/30 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-pastel-blue-600 dark:text-pastel-blue-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">4/5</span>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Weekly Sessions</h3>
              <div className="mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <TrophyIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">7:22.4</span>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Recent 2K PR</h3>
              <div className="mt-2 text-green-600 dark:text-green-400 text-sm font-medium">
                ↗ +2.3s improvement
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Days to Next Race</h3>
              <div className="mt-2 text-red-600 dark:text-red-400 text-sm font-medium">
                Head of the Charles
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <button className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Today's Workout
            </button>
            <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Training Calendar
            </button>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 border-l border-gray-200 dark:border-gray-700">
          <div className="space-y-6">
            {/* Weekly Performance */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Weekly Performance
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Distance:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">42.5km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Avg Split:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">2:08.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sessions:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Consistency:</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>
              </div>
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Upcoming Schedule
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Tomorrow:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Rest Day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Friday:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">8x500m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Saturday:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">60min Steady</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Sunday:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Technique Focus</span>
                </div>
              </div>
            </div>

            {/* Community Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <UsersIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Community Activity
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monthly Challenge</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current Rank:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">#47 of 1,248</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                  65% to monthly goal
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Log Quick Workout
                </button>
                <button className="w-full bg-white dark:bg-gray-700 border-2 border-pastel-blue-200 dark:border-gray-600 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Upload Video
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
