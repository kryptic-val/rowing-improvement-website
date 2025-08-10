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
  ChevronRightIcon,
  DocumentTextIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const TrainingPlans: React.FC = () => {
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

  const weeklySchedule = [
    { day: 'Mon', workout: 'Rest', type: 'rest' },
    { day: 'Tue', workout: '8x500m', type: 'interval' },
    { day: 'Wed', workout: 'Steady 60min', type: 'steady' },
    { day: 'Thu', workout: 'Strength', type: 'strength' },
    { day: 'Fri', workout: '8x500m', type: 'interval' },
    { day: 'Sat', workout: '60min Steady', type: 'steady' },
    { day: 'Sun', workout: 'Technique Focus', type: 'technique' },
  ];

  const availablePlans = [
    { name: '2K Speed Program', duration: '8 weeks', focus: 'Race preparation' },
    { name: 'Marathon Prep', duration: '12 weeks', focus: 'Endurance building' },
    { name: 'Beginner Foundation', duration: '6 weeks', focus: 'Basic technique' },
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
                12-Week Base Building Program
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Week 3 of 12 - Base Building Phase
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <Cog6ToothIcon className="w-4 h-4" />
                <span>Switch Plan</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <DocumentTextIcon className="w-4 h-4" />
                <span>Customize</span>
              </button>
            </div>
          </div>

          {/* Current Week Info */}
          <div className="bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Week 3 of 12 - Base Building Phase</h3>
                <p className="text-pastel-blue-100">Target: Aerobic Development</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">25%</div>
                <div className="text-pastel-blue-100 text-sm">Complete</div>
              </div>
            </div>
          </div>

          {/* Training Calendar */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <CalendarIcon className="w-6 h-6 mr-3 text-pastel-blue-600" />
              Training Calendar - Monthly View
            </h3>
            <div className="h-64 bg-gradient-to-br from-pastel-blue-50 to-pastel-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border-2 border-dashed border-pastel-blue-300 dark:border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <CalendarIcon className="w-12 h-12 text-pastel-blue-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Training Calendar View</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Monthly view with workout types</p>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Grid */}
          <div className="grid grid-cols-7 gap-4 mb-8">
            {weeklySchedule.map((day, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{day.day}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    day.type === 'rest' ? 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' :
                    day.type === 'interval' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                    day.type === 'steady' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                    day.type === 'strength' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                    'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  }`}>
                    {day.workout}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <DocumentTextIcon className="w-5 h-5" />
              <span>View Week Details</span>
            </button>
            <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <Cog6ToothIcon className="w-5 h-5" />
              <span>Adjust Intensity</span>
            </button>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 border-l border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="space-y-6">
            {/* Plan Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Plan Progress
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Completion:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">On Track:</span>
                  <span className="font-semibold text-green-600">Yes</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>
            </div>

            {/* Phase Goals */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrophyIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Phase Goals
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Build aerobic base</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Increase weekly volume</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Improve technique</span>
                </div>
              </div>
            </div>

            {/* Available Plans */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <DocumentTextIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Available Plans
              </h4>
              <div className="space-y-4">
                {availablePlans.map((plan, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">{plan.name}</h5>
                      <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <div>{plan.duration} • {plan.focus}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Create Custom Plan
                </button>
                <button className="w-full bg-white dark:bg-gray-700 border-2 border-pastel-blue-200 dark:border-gray-600 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Export Plan
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TrainingPlans;
