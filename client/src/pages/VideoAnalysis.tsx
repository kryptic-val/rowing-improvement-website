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
  StarIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const VideoAnalysis: React.FC = () => {
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

  const focusAreas = [
    { area: 'Catch timing', status: 'Good', score: 8.5 },
    { area: 'Blade entry', status: 'Good', score: 8.2 },
    { area: 'Finish position', status: 'Needs work', score: 6.8 },
    { area: 'Recovery timing', status: 'Needs work', score: 7.1 },
  ];

  const recommendedDrills = [
    { name: 'Finish drill sequence', difficulty: 'Intermediate', duration: '15 min' },
    { name: 'Pause at finish drill', difficulty: 'Beginner', duration: '10 min' },
    { name: 'Catch timing drill', difficulty: 'Advanced', duration: '20 min' },
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
                Technique Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Upload videos for AI-powered technique feedback
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <CloudArrowUpIcon className="w-4 h-4" />
                <span>Upload Video</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <VideoCameraIcon className="w-4 h-4" />
                <span>Record New</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <EyeIcon className="w-4 h-4" />
                <span>View History</span>
              </button>
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <VideoCameraIcon className="w-6 h-6 mr-3 text-pastel-blue-600" />
              Video Analysis Player
            </h3>
            <div className="h-96 bg-gradient-to-br from-pastel-blue-50 to-pastel-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl border-2 border-dashed border-pastel-blue-300 dark:border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <VideoCameraIcon className="w-20 h-20 text-pastel-blue-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">Video Player with Analysis Overlay</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">Side-by-side comparison view</p>
              </div>
            </div>
          </div>

          {/* AI Feedback */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <StarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
              AI Feedback
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Good catch timing and blade entry.</strong> Focus on maintaining length at the finish. 
                    Overall technique score:
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-pastel-blue-600 dark:text-pastel-blue-400">8.2</span>
                    <span className="text-gray-600 dark:text-gray-400">/10</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Previous Score</div>
                  <div className="text-2xl font-bold text-green-600">7.8</div>
                  <div className="text-sm text-green-600">+0.4 improvement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <CloudArrowUpIcon className="w-5 h-5" />
              <span>Upload New Video</span>
            </button>
            <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <BookOpenIcon className="w-5 h-5" />
              <span>View Drill Library</span>
            </button>
            <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
              <UsersIcon className="w-5 h-5" />
              <span>Book Coach Review</span>
            </button>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 border-l border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="space-y-6">
            {/* Recent Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ChartBarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Recent Analysis
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Latest Score:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">8.2/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Improvement:</span>
                  <span className="font-semibold text-green-600">+0.4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Date:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Today</span>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <EyeIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Focus Areas
              </h4>
              <div className="space-y-3 text-sm">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">• {area.area}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        area.status === 'Good' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                        'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {area.status}
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">{area.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Drills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpenIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Recommended Drills
              </h4>
              <div className="space-y-3">
                {recommendedDrills.map((drill, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">{drill.name}</h5>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span>{drill.difficulty}</span>
                      <span>{drill.duration}</span>
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
                  Upload Video
                </button>
                <button className="w-full bg-white dark:bg-gray-700 border-2 border-pastel-blue-200 dark:border-gray-600 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  View History
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VideoAnalysis;
