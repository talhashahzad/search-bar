import React, { useState, useEffect } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("click: ");
  };

  return (
    <div>
      <div className="py-6 flex justify-center">
        <div className="w-64 md:w-96 lg:w-2/4 xl:w-2/4 shadow">
          <div className="inline-flex input-group relative flex flex-nowrap items-stretch w-full">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:shadow-md focus:outline-none"
              placeholder="Search Artist"
              aria-label="Search"
              aria-describedby="button-addon3"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" onClick={handleSubmit}>
              <span
                className="bg-gray-300 input-group-text flex items-center px-3 py-1.5 whitespace-nowrap hover:shadow-md"
                id="basic-addon2"
              >
                <svg
                  className="h-10 w-10 "
                  aria-labelledby="title desc"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.9 19.7"
                >
                  <g
                    className="hover:stroke-purple-900"
                    fill="none"
                    stroke="#848F91"
                  >
                    <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
