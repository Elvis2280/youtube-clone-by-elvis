import React from 'react';
import Video from './Video';
import SimilarVideo from './SimilarVideo';

const VideoBox = (props) => {
  const searchBoolean = props.searchBoolean;

  return (
    <div className="grid grid-cols-12 gap-x-4 flex-1 relative justify-items-center">
      {searchBoolean ? (
        <>
          <Video
            video={props.videoList}
            searchBoolean={searchBoolean}
            videoLink={props.selectVideo}
          />
          <SimilarVideo
            videoList={props.videoList}
            changeVideo={props.changeVideo}
          />
        </>
      ) : (
        <Video searchBoolean={searchBoolean} />
      )}
    </div>
  );
};

export default VideoBox;
