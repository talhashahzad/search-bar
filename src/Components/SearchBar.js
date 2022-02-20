import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const baseURL = "https://rest.bandsintown.com/artists/";
  const appID = "abc";

  const [searchQuery, setSearchQuery] = useState("");
  const [searchHeader, setSearchHeader] = useState("");
  const [queryString, setQueryString] = useState("");
  const [searchHover, setSearchHover] = useState(false);
  const [artistsList, setArtistsList] = useState("");
  const [responseLength, setResponseLength] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [emptyQueryResult, setEmptyQueryResult] = useState(false);

  const searchIconHover = () => {
    setSearchHover(!searchHover);
  };

  const handleChange = (e) => {
    setQueryString(e.target.value);
    const normalisedString = queryString.replace(
      /[!&\/\\#,+()$~%.'":*?<>{}]/g,
      ""
    );
    setSearchQuery(normalisedString);
  };

  const handleClearSearch = () => {
    setQueryString("");
    setSearchQuery("");
  };

  const handleSubmit = async () => {
    setShowResult(false);

    if (queryString === "") {
      setEmptyQueryResult(true);
      return;
    }
    try {
      setEmptyQueryResult(false);

      let response = await axios.get(
        `${baseURL}${searchQuery}?app_id=${appID}`
      );
      let data = response.data;
      setResponseLength(response.data.length);
      setArtistsList(data);
      setSearchHeader(queryString);
      setShowResult(true);
      console.log("response: " + responseLength);
      console.log("response: ", data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <br />
      <div className="py-6 flex justify-center">
        <div className="w-64 md:w-96 lg:w-2/4 xl:w-2/4 shadow">
          <div className="inline-flex input-group relative flex flex-nowrap items-stretch w-full">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:shadow-md focus:outline-none"
              placeholder="Search Artist"
              aria-label="Search"
              aria-describedby="button-addon3"
              onInput={handleClearSearch}
              onChange={(e) => handleChange(e)}
            />
            <button
              onMouseOver={searchIconHover}
              onMouseOut={searchIconHover}
              type="submit"
              onClick={handleSubmit}
            >
              <span
                className={`bg-gray-300 input-group-text flex items-center px-3 py-1.5 whitespace-nowrap hover:shadow-md`}
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
                    className=""
                    fill="none"
                    stroke={`${searchHover ? "#581C87" : "#848F91"}`}
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
      <br />
      {showResult && (
        <div>
          <div className="py-4 pl-8 text-base font-bold">
            {responseLength} result(s) for "{searchHeader}"
          </div>
          <br />
          <div className="py-4 "></div>
        </div>
      )}
      {emptyQueryResult && (
        <div className="flex justify-center text-black text-lg">
          Type something to search
        </div>
      )}
    </div>
  );
}
export default SearchBar;
