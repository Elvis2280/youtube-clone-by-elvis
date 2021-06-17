import React from 'react';
import LoadingPage from './LoadingPage';

const Video = ({ video, searchBoolean, videoLink }) => {
  if (searchBoolean) {
    return (
      <div className="col-span-12 lg:col-span-9 ">
        <div className={`videoWrapper`}>
          <iframe
            title="Video"
            className="video"
            src={videoLink}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="shadow mt-2 p-3 border rounded bg-white">
          <h3 className="text-xl sm:text-2xl font-bold">
            {video[0].snippet.title}
          </h3>
          <p className="overflow-ellipsis pt-2">
            {video[0].snippet.description}
          </p>
        </div>
      </div>
    );
  }
  return <LoadingPage />;
};

export default Video;
