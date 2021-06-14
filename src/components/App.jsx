import React from 'react';
import SearchBar from './SearchBar';
import VideoBox from './VideoBox';

class App extends React.Component {
  state = {
    searchText: '',
  };
  render() {
    return (
      <div className="max-w-screen-xl min-h-screen ml-auto mr-auto py-3">
        <SearchBar
          iconName="fab fa-youtube"
          searchTitle="Youtube Clone By Elvis M"
          iconSearch="fas fa-search"
        />
        <VideoBox />
      </div>
    );
  }
}

export default App;
