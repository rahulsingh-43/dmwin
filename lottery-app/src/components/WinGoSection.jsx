import React from 'react';

const WinGoSection = () => {
  return (
    <div className="px-4 pb-24">
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-6 shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-bold mb-4">Win Go</h2>
          <p className="text-white text-lg mb-1">Guess Number</p>
          <p className="text-white text-lg">Green/Red/Violet to win</p>
        </div>
        
        {/* Decorative lottery balls */}
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            9
          </div>
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            4
          </div>
        </div>
        <div className="absolute bottom-4 right-8 flex gap-2">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            0
          </div>
          <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            5
          </div>
        </div>
      </div>

      {/* Member info card */}
      <div className="mt-4 bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">Member</span>
        </div>
        <div className="text-right">
          <span className="text-gray-500 text-sm">Amount</span>
          <p className="text-lg font-bold text-gray-800">₹196.00</p>
        </div>
      </div>

      {/* Add to Desktop button */}
      <div className="mt-4 flex justify-center">
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition flex items-center gap-2">
          <span className="text-xl">⭐</span>
          Add to Desktop
        </button>
      </div>
    </div>
  );
};

export default WinGoSection;
