import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import GameGrid from '../components/GameGrid';
import WinGoSection from '../components/WinGoSection';
import BottomNav from '../components/BottomNav';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Scrollable content area */}
      <div className="overflow-y-auto pb-20">
        <Banner />
        
        {/* Alert banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mx-4 mt-4 flex items-center gap-2">
          <span className="text-yellow-600 text-xl">🔊</span>
          <p className="text-sm text-yellow-800">
            If you experience slow performance or login issues, please ensure a stable internet connection, reinstall...
          </p>
          <button className="ml-auto bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-red-600 transition">
            Detail
          </button>
        </div>

        <GameGrid />
        <WinGoSection />
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
