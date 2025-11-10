import React, { useState } from 'react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'activity', label: 'Activity', icon: '📋' },
    { id: 'promotion', label: 'Promotion', icon: '🎁' },
    { id: 'wallet', label: 'Wallet', icon: '💳' },
    { id: 'account', label: 'Account', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeTab === item.id ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            {item.id === 'promotion' ? (
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white">
                    {item.icon}
                  </div>
                </div>
                <div className="h-6"></div>
              </div>
            ) : (
              <span className="text-2xl mb-1">{item.icon}</span>
            )}
            <span className={`text-xs font-medium ${item.id === 'promotion' ? 'mt-2' : ''}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
