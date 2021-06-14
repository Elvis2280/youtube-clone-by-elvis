import React from 'react';

const SearchBar = (props) => {
  return (
    <header className="border py-4 shadow-sm rounded">
      <div className="flex items-center px-3">
        <i className={props.iconName + ' text-red-600 text-4xl pr-3'}></i>
        <p className="font-bold font-dancing text-2xl">{props.searchTitle}</p>
      </div>
      <form className="text-center">
        <input
          className="mr-auto ml-auto border-gray-400 focus:border-gray-500 transition-all border rounded w-5/12 h-8 pl-2 pr-14 outline-none"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-gray-500 border-gray-500 border w-12 h-8 rounded transform -translate-x-12 focus:outline-none">
          <i className={props.iconSearch + ' text-white'}></i>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
