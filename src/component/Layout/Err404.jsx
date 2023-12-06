import React from 'react';
import { Link } from 'react-router-dom';

const Err404 = () => {
  const backgroundImageUrl = 'https://i.ibb.co/VxTywHD/6325254.jpg';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(50%)',
        }}
      />

      <div className="z-10  text-center text-white">
        <h1 className="text-4xl my-4 font-bold">404 Not Found</h1>
        <Link
          to="/"
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Err404;
