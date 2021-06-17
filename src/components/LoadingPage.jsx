import React from 'react';
import image from '../img/undraw_media_player_ylg8.svg';
import { usePromiseTracker } from 'react-promise-tracker';

const LoadingPage = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress ? (
    <div class="fixed top-0 right-0 h-screen w-screen z-50 flex flex-col justify-center items-center">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      <p className="text-black pt-3">Loading...</p>
    </div>
  ) : (
    <div className="col-span-12 flex flex-col items-center transform -translate-y-2/4 absolute top-2/4">
      <img
        className="h-auto w-8/12 sm:h-2/4 sm:w-2/4"
        src={image}
        alt="Search"
      />
      <p className="text-2xl text-black pt-6">
        Start By Searching Something...
      </p>
    </div>
  );
};

export default LoadingPage;
//
