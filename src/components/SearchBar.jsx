import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchWords: '',
  };

  handleInput = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchWords);
  };

  inputWrite = (e) => {
    e.preventDefault();
    this.setState({
      searchWords: e.target.value,
    });
  };

  render() {
    return (
      <header className="border py-4 shadow-sm rounded mb-4 bg-white">
        <div className="flex items-center px-3 pb-3 md:pb-0 ">
          <i
            className={this.props.iconName + ' text-red-600 text-4xl pr-3'}
          ></i>
          <p
            className="font-bold font-dancing text-2xl cursor-pointer"
            onClick={() => this.props.comebackMainPage()}
          >
            {this.props.searchTitle}
          </p>
        </div>
        <form
          onSubmit={this.handleInput}
          className="text-center flex justify-center "
        >
          <div className="relative w-9/12 md:w-5/12 ">
            <input
              className="mr-auto ml-auto border-gray-400 focus:border-gray-500 transition-all border rounded h-10 pl-2 w-full pr-14 outline-none shadow text-lg"
              type="text"
              placeholder="Search..."
              onChange={this.inputWrite}
            />
            <button className="bg-red-600 border-red-600 border w-14 h-10 absolute right-0 rounded  focus:outline-none ">
              <i className={this.props.iconSearch + ' text-white'}></i>
            </button>
          </div>
        </form>
      </header>
    );
  }
}

export default SearchBar;
