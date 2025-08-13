import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/UI/ThemeToggle';
import { 
  ChartBarIcon, 
  VideoCameraIcon, 
  UserGroupIcon, 
  HeartIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: ChartBarIcon,
      title: 'Track Progress',
      description: 'Monitor your workouts, track performance metrics, and visualize your improvement over time with detailed analytics.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: VideoCameraIcon,
      title: 'Analyze Technique',
      description: 'Upload video recordings and get detailed analysis of your rowing technique and form with AI-powered insights.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Join Community',
      description: 'Connect with fellow rowers, share experiences, and get advice from experienced coaches and athletes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: HeartIcon,
      title: 'Health & Recovery',
      description: 'Monitor your health metrics, track recovery patterns, and optimize your training for peak performance.',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue-50 via-white to-pastel-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🚣</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-800 bg-clip-text text-transparent dark:from-pastel-blue-400 dark:to-pastel-blue-300">
                RowingPro
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                to="/login"
                className="btn-outline text-sm px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn-primary text-sm px-4 py-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-blue-200 dark:bg-pastel-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-pastel-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Master Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Rowing Technique
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
              Track your progress, analyze your technique, and connect with the rowing community. 
              Take your rowing performance to the next level with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/register"
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
              >
                <span>Start Your Journey</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-outline text-lg px-8 py-4 flex items-center space-x-2 group">
                <PlayIcon className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-800 bg-clip-text text-transparent dark:from-pastel-blue-400 dark:to-pastel-blue-300">
                {' '}Excel
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools and features designed specifically for rowers at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{ background: `linear-gradient(to right, ${feature.color})` }}></div>
                <div className="relative card p-8 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Rowing?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Join thousands of rowers who have already improved their technique and performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="btn-primary text-lg px-8 py-4"
            >
              Start Free Trial
            </Link>
            <Link
              to="/login"
              className="btn-outline text-lg px-8 py-4"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-pastel-blue-500 to-pastel-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🚣</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pastel-blue-600 to-pastel-blue-800 bg-clip-text text-transparent dark:from-pastel-blue-400 dark:to-pastel-blue-300">
                RowingPro
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              <div className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 RowingPro. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
