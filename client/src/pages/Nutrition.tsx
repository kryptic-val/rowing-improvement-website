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
  CloudArrowUpIcon,
  BookOpenIcon,
  HeartIcon,
  WifiIcon
} from '@heroicons/react/24/outline';

const Nutrition: React.FC = () => {
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
                Today's Nutrition Plan
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Fuel your performance with optimal nutrition
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <CloudArrowUpIcon className="w-4 h-4" />
                <span>Log Food</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <BookOpenIcon className="w-4 h-4" />
                <span>Meal Planner</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <HeartIcon className="w-4 h-4" />
                <span>Recovery Guide</span>
              </button>
            </div>
          </div>

          {/* Macro Tracking Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <FireIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-red-600 dark:text-red-400">560 remaining</div>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Calories</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2,240 / 2,800</p>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <WifiIcon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-yellow-600 dark:text-yellow-400">65g remaining</div>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Carbs</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">285g / 350g</p>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full" style={{ width: '81%' }}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-blue-600 dark:text-blue-400">35g remaining</div>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Protein</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">145g / 180g</p>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '81%' }}></div>
              </div>
            </div>
          </div>

          {/* Meal Timing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Pre-workout Nutrition
              </h3>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Banana + Coffee</span>
                  <span className="text-green-600 dark:text-green-400 text-sm">✓ Completed</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Consumed 2 hours before training</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <HeartIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Post-workout Recovery
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">Recovery Shake</span>
                  <span className="text-blue-600 dark:text-blue-400 text-sm">Recommended</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Protein + carbs within 30 minutes</p>
              </div>
            </div>
          </div>

          {/* Nutrition Trends Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <ChartBarIcon className="w-6 h-6 mr-3 text-pastel-blue-600" />
              Weekly Nutrition Trends
            </h3>
            <div className="h-64 bg-gradient-to-br from-pastel-blue-50 to-pastel-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border-2 border-dashed border-pastel-blue-300 dark:border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <ChartBarIcon className="w-16 h-16 text-pastel-blue-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">Nutrition Trends Chart</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Calorie balance and macro distribution</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <CloudArrowUpIcon className="w-5 h-5" />
              <span>Log Meal</span>
            </button>
            <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <BookOpenIcon className="w-5 h-5" />
              <span>Meal Suggestions</span>
            </button>
            <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <HeartIcon className="w-5 h-5" />
              <span>Recovery Protocol</span>
            </button>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 border-l border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="space-y-6">
            {/* Today's Status */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Today's Status
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Hydration:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">1.2L / 3.5L</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '34%' }}></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sleep:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">7.2hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Quality:</span>
                  <span className="font-semibold text-green-600">Good</span>
                </div>
              </div>
            </div>

            {/* Recovery Score */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <HeartIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Recovery Score
              </h4>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8.1/10</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Overall Recovery</div>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-2 rounded-lg text-sm font-medium">
                  Ready to train
                </div>
              </div>
            </div>

            {/* Supplements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CogIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Supplements
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Creatine:</span>
                  <span className="font-semibold text-green-600">Taken</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Vitamin D:</span>
                  <span className="font-semibold text-yellow-600">Pending</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Omega-3:</span>
                  <span className="font-semibold text-green-600">Taken</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Protein:</span>
                  <span className="font-semibold text-green-600">Taken</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Log Meal
                </button>
                <button className="w-full bg-white dark:bg-gray-700 border-2 border-pastel-blue-200 dark:border-gray-600 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Track Water
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Nutrition;
