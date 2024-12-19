import React, { useState } from 'react';
import { Match, matchList } from './sample_carpool_data.ts';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const CarpoolMatches: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentMatch: Match | undefined = matchList[currentIndex];

  if (!currentMatch) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#c8102f] p-4">
        <div className="bg-white border border-[#c8102f] rounded-lg p-6 max-w-md w-full">
          <div className="text-xl text-black font-semibold">
            No more matches available.
          </div>
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
    <div className="flex items-center justify-center h-screen bg-[#c8102f] p-4">
      <div className="bg-white border border-[#c8102f] rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-black">
          {firstName} {lastName}
        </h2>
        <p className="text-black mb-4">{employer}</p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1 text-black">Start Location</h3>
          <p className="text-black">{startLocation}</p>
          <p className="text-black text-sm">
            Distance: {startDistanceDelta} miles from your start
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1 text-black">End Location</h3>
          <p className="text-black">{endLocation}</p>
          <p className="text-black text-sm">
            Distance: {endDistanceDelta} miles from your end
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleNext}
            className="flex items-center justify-center border border-[#c8102f] text-black font-bold py-2 px-4 rounded-full"
          >
            <FaThumbsUp className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center border border-[#c8102f] text-black font-bold py-2 px-4 rounded-full"
          >
            <FaThumbsDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarpoolMatches;
