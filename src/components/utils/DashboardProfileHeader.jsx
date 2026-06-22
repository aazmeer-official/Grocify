import React from 'react';
import PropTypes from 'prop-types';
import { 
  FiUser, 
  FiShield, 
  FiShoppingCart, 
  FiTrendingUp, 
  FiPackage, 
  FiClock 
} from 'react-icons/fi';

const DashboardProfileHeader = ({ 
  role = "User", 
  name = "Guest", 
  imgSrc, 
  metrics = [] 
}) => {
  const isAdmin = role.toLowerCase() === 'admin';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      {/* Profile Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 shadow-xl p-6 sm:p-10 mb-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-2xl">
        
        {/* Background Decorative Circles */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-xl pointer-events-none" />

        {/* Left Side: Info */}
        <div className="space-y-4 text-center md:text-left z-10">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm ${
            isAdmin ? 'bg-red-500/30 text-red-100 border border-red-400/30' : 'bg-emerald-500/30 text-emerald-100 border border-emerald-400/30'
          }`}>
            {isAdmin ? <FiShield className="w-4 h-4" /> : <FiUser className="w-4 h-4" />}
            {role}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm">
            Welcome back, <span className="text-amber-100">{name}</span>!
          </h1>
          <p className="text-orange-50/80 text-sm sm:text-base max-w-md">
            {isAdmin ? "Here is your store's performance overview for today." : "Track your active orders, grocery lists, and rewards here."}
          </p>
        </div>

        {/* Right Side: Avatar Wrapper */}
        <div className="relative z-10 shrink-0 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-300 to-white opacity-40 rounded-full blur transition-all duration-300 group-hover:scale-105" />
          <div className="relative p-1.5 bg-white/20 backdrop-blur-md rounded-full shadow-inner">
            {imgSrc ? (
              <img 
                src={imgSrc} 
                alt={`${name}'s profile`} 
                className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-white/40 shadow-md transform transition duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 border-4 border-white/40">
                <FiUser className="w-14 h-14" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metrics Grid section */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon || FiPackage;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{metric.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{metric.value}</p>
                  {metric.trend && (
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${
                      metric.trendType === 'up' ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                      <FiTrendingUp className={`w-3.5 h-3.5 ${metric.trendType === 'down' && 'rotate-90'}`} />
                      {metric.trend}
                    </span>
                  )}
                </div>
                <div className={`p-4 rounded-xl ${metric.iconBg || 'bg-orange-50 text-orange-500'}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

DashboardProfileHeader.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.elementType,
      iconBg: PropTypes.string,
      trend: PropTypes.string,
      trendType: PropTypes.oneOf(['up', 'down']),
    })
  ),
};

export default DashboardProfileHeader;
