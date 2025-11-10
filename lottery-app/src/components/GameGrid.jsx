import React from 'react';

const GameGrid = () => {
  const games = [
    { id: 1, name: 'Lottery', icon: '🎱', color: 'from-blue-400 to-blue-600' },
    { id: 2, name: 'Mini games', icon: '🎮', color: 'from-purple-400 to-purple-600' },
    { id: 3, name: 'Popular', icon: '🎰', color: 'from-pink-400 to-pink-600' },
    { id: 4, name: 'Slots', icon: '🎪', color: 'from-yellow-400 to-yellow-600' },
    { id: 5, name: 'PVC', icon: '🃏', color: 'from-red-400 to-red-600' },
    { id: 6, name: 'Fishing', icon: '🎣', color: 'from-cyan-400 to-cyan-600' },
    { id: 7, name: 'Casino', icon: '💰', color: 'from-green-400 to-green-600' },
    { id: 8, name: 'Sports', icon: '⚽', color: 'from-indigo-400 to-indigo-600' },
  ];

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex flex-col items-center justify-center cursor-pointer transform transition hover:scale-105"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${game.color} flex items-center justify-center text-3xl shadow-lg mb-2`}>
              {game.icon}
            </div>
            <span className="text-xs text-gray-700 font-medium text-center">
              {game.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
