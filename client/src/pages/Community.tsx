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
  PlusIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

const Community: React.FC = () => {
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

  const forumTopics = [
    { title: 'Technique Tips: How to improve catch timing', category: 'Technique', replies: 24, lastActivity: '2 hours ago' },
    { title: 'Training Discussion: Base building vs interval focus', category: 'Training', replies: 18, lastActivity: '4 hours ago' },
    { title: 'Equipment Reviews: New Concept2 Model E review', category: 'Equipment', replies: 31, lastActivity: '1 day ago' },
    { title: 'Race Reports: Head of Charles 2025', category: 'Racing', replies: 45, lastActivity: '2 days ago' },
    { title: 'Beginner Questions: First 2K test tips', category: 'Beginner', replies: 12, lastActivity: '3 days ago' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah M', time: '6:58.2', improvement: '+3.1s' },
    { rank: 2, name: 'Mike R', time: '6:59.8', improvement: '+1.8s' },
    { rank: 3, name: 'You', time: '7:22.4', improvement: '+2.3s' },
    { rank: 4, name: 'Anna K', time: '7:28.1', improvement: '+4.2s' },
    { rank: 5, name: 'Tom L', time: '7:31.5', improvement: '+1.5s' },
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
                Rowing Community Hub
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Connect with fellow rowers and share your journey
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <PlusIcon className="w-4 h-4" />
                <span>New Post</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <MagnifyingGlassIcon className="w-4 h-4" />
                <span>Search</span>
              </button>
              <button className="bg-white dark:bg-gray-800 border-2 border-pastel-blue-200 dark:border-gray-700 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <TrophyIcon className="w-4 h-4" />
                <span>Join Challenge</span>
              </button>
            </div>
          </div>

          {/* Featured Challenge */}
          <div className="bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Featured Challenge: August Distance Goal</h3>
                <p className="text-pastel-blue-100 mb-4">150K meters • Your progress: 89.2K (59%)</p>
                <div className="bg-white/20 rounded-full h-3 mb-2">
                  <div className="bg-white h-3 rounded-full" style={{ width: '59%' }}></div>
                </div>
                <p className="text-pastel-blue-100 text-sm">60.8K meters remaining</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">59%</div>
                <div className="text-pastel-blue-100 text-sm">Complete</div>
              </div>
            </div>
          </div>

          {/* Community Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forum Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <ChatBubbleLeftIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                  Recent Forum Activity
                </h3>
                <div className="space-y-4">
                  {forumTopics.map((topic, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{topic.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          topic.category === 'Technique' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                          topic.category === 'Training' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                          topic.category === 'Equipment' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                          topic.category === 'Racing' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                          'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {topic.category}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span>{topic.replies} replies</span>
                        <span>{topic.lastActivity}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-pastel-blue-600 dark:text-pastel-blue-400 hover:text-pastel-blue-700 dark:hover:text-pastel-blue-300 font-medium transition-colors">
                  View All Forum Topics →
                </button>
              </div>
            </div>

            {/* Leaderboards */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <TrophyIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                  Monthly Leaderboard
                </h3>
                <div className="space-y-3">
                  {leaderboard.map((entry, index) => (
                    <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                      entry.name === 'You' ? 'bg-pastel-blue-50 dark:bg-pastel-blue-900/20 border border-pastel-blue-200 dark:border-pastel-blue-700' :
                      index === 0 ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700' :
                      index === 1 ? 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600' :
                      index === 2 ? 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700' :
                      'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? 'bg-yellow-500 text-white' :
                          index === 1 ? 'bg-gray-400 text-white' :
                          index === 2 ? 'bg-orange-500 text-white' :
                          'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                        }`}>
                          {entry.rank}
                        </div>
                        <span className={`font-medium text-sm ${
                          entry.name === 'You' ? 'text-pastel-blue-600 dark:text-pastel-blue-400' :
                          'text-gray-900 dark:text-white'
                        }`}>
                          {entry.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900 dark:text-white text-sm">{entry.time}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">{entry.improvement}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-pastel-blue-600 dark:text-pastel-blue-400 hover:text-pastel-blue-700 dark:hover:text-pastel-blue-300 font-medium transition-colors">
                  View Full Leaderboard →
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 border-l border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="space-y-6">
            {/* Your Rank */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrophyIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Your Rank
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monthly:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">#47 of 1,248</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">All-time:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">#156</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="text-center text-xs text-gray-600 dark:text-gray-400">
                  Top 4% of monthly participants
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Upcoming Events
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Coach Q&A:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Today 3pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Virtual Regatta:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Aug 15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Technique Workshop:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Aug 22</span>
                </div>
              </div>
            </div>

            {/* Your Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <UsersIcon className="w-5 h-5 mr-2 text-pastel-blue-600" />
                Your Activity
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Forum Posts:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Challenges:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">3 active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Connections:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">47</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 hover:from-pastel-blue-600 hover:to-pastel-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Start Discussion
                </button>
                <button className="w-full bg-white dark:bg-gray-700 border-2 border-pastel-blue-200 dark:border-gray-600 text-pastel-blue-600 dark:text-pastel-blue-400 hover:bg-pastel-blue-50 dark:hover:bg-gray-600 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                  Join Challenge
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Community;
