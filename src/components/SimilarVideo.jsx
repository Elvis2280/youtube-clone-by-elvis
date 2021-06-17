import React from 'react';
import VideoCard from './VideoCard';

const SimilarVideo = ({ videoList, changeVideo }) => {
  const similarVideos = videoList.map(({ snippet, id }, i) => {
    if (i !== 0) {
      return (
        <VideoCard
          key={id.videoId}
          videoPic={snippet.thumbnails.medium}
          videoTitle={snippet.title}
          changeVideo={changeVideo}
          videoId={id.videoId}
        />
      );
    }
  });
  return (
    <div className="border col-span-12 lg:col-span-3 mt-4 sm:mt-0 shadow p-2 grid gap-y-2 auto-rows-auto bg-white">
      {similarVideos}
    </div>
  );
};

export default SimilarVideo;
