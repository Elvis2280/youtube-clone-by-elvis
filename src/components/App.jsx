import React from 'react';
import youtubeAPI from '../API/youtubeAPI';
import { trackPromise } from 'react-promise-tracker';
import SearchBar from './SearchBar';
import VideoBox from './VideoBox';
import BublePic from './BublePic';

class App extends React.Component {
  state = {
    videoList: [],
    searchBoolean: false,
    selectVideo: '',
  };

  comebackMainPage = () => {
    this.setState({
      videoList: [],
      searchBoolean: false,
      selectVideo: '',
    });
  };

  changeVideo = (videoId) => {
    const link = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    this.setState({
      selectVideo: link,
    });
  };

  handleSearchBar = async (part) => {
    const data = await trackPromise(
      youtubeAPI.get('/search', {
        params: {
          q: part,
        },
      }),
    );
    //'AIzaSyCj5U5lvTwB6k9wqJ7ypZvk7mKWouzFmZ4'
    this.changeVideo(data.data.items[0].id.videoId);

    this.setState({
      videoList: data.data.items,
      searchBoolean: true,
    });
  };
  render() {
    return (
      <div>
        <div className="max-w-screen-xl min-h-screen ml-auto mr-auto py-3 px-3 relative flex flex-col">
          <SearchBar
            iconName="fab fa-youtube"
            searchTitle="Youtube Clone By Elvis M"
            iconSearch="fas fa-search"
            handleSearch={this.handleSearchBar}
            comebackMainPage={this.comebackMainPage}
          />
          <VideoBox
            videoList={this.state.videoList}
            searchBoolean={this.state.searchBoolean}
            selectVideo={this.state.selectVideo}
            changeVideo={this.handleSearchBar}
          />
        </div>
        <BublePic />
      </div>
    );
  }
}

export default App;
