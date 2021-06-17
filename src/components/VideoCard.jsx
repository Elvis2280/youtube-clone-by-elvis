import React from 'react';

const VideoCard = ({ videoPic, videoTitle, changeVideo }) => {
  return (
    <div
      className="flex items-center cursor-pointer border shadow-sm"
      onClick={() => changeVideo(videoTitle)}
    >
      <img
        className="w-1/3 md:w-1/5 lg:w-2/4"
        src={videoPic.url}
        alt={videoTitle}
      />
      <p className="flex-1 pl-2 h-full overflow-ellipsis">{videoTitle}</p>
    </div>
  );
};

export default VideoCard;
