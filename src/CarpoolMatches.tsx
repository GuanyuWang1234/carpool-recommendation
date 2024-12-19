import React, { useState } from 'react';
import { Match, matchList } from './sample_carpool_data.ts';

const CarpoolMatches: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentMatch: Match | undefined = matchList[currentIndex];

  if (!currentMatch) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
        <div className="text-xl text-gray-700 font-semibold">
          No more matches available.
        </div>
      </div>
    );
  }

  const {
    firstName,
    lastName,
    employer,
    startLocation,
    endLocation,
    startDistanceDelta,
    endDistanceDelta
  } = currentMatch;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">
          {firstName} {lastName}
        </h2>
        <p className="text-gray-700 font-medium mb-4">{employer}</p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Start Location</h3>
          <p className="text-gray-600">{startLocation}</p>
          <p className="text-sm text-gray-500">
            Distance: {startDistanceDelta} miles from your start
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">End Location</h3>
          <p className="text-gray-600">{endLocation}</p>
          <p className="text-sm text-gray-500">
            Distance: {endDistanceDelta} miles from your end
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleNext}
            className="flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
          >
            <span className="material-icons">thumb_down</span>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-600 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
          >
            <span className="material-icons">thumb_up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarpoolMatches;
