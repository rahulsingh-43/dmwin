import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 mx-4 mt-4 rounded-lg shadow-md relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-orange-600 font-bold text-xl mb-2">
          How to Buy and Sell Using AR Wallet
        </h2>
        <p className="text-gray-700 text-sm mb-3">
          AR Wallet offers fast UPI Buy and Sell, helping you avoid delays and receive your funds faster. Enjoy exclusive rewards and access powerful features to make your transaction easier.
        </p>
        <div className="space-y-1 text-sm">
          <p className="flex items-start gap-2">
            <span className="text-orange-500">💡</span>
            <span className="text-gray-700">Learn how to Buy and Sell ARB Coins step-by-step: https://arwwallet.com/</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-orange-500">💡</span>
            <span className="text-gray-700">Don't miss a 1% bonus on every ARB Coin you sell!</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-orange-500">💡</span>
            <span className="text-gray-700">Don't miss a 2% - 5% bonus on every ARB Coin you buy!</span>
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
        <div className="text-6xl">🎁</div>
      </div>
      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
        Up to 5%
      </div>
    </div>
  );
};

export default Banner;
