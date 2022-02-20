import React, { useState, useEffect } from "react";
import axios from "axios";

function Artist(props) {
  const baseURL = "https://rest.bandsintown.com/artists/";
  const appID = "abc";

  const [searchQuery, setSearchQuery] = useState("");
  const [searchHeader, setSearchHeader] = useState("");
  const [artistsList, setArtistsList] = useState("");
  const [responseLength, setResponseLength] = useState("");

  useEffect(() => {
    setSearchQuery(props.searchQuery);
    handleSubmit();
  }, []);
  const handleSubmit = async () => {
    if (searchQuery === "") {
      return;
    }
    try {
      console.log("query: " + searchQuery);

      let response = await axios.get(
        `${baseURL}${searchQuery}?app_id=${appID}`
      );
      let data = response.data;
      setResponseLength(response.data.length);
      setArtistsList(data);
      setSearchHeader(searchQuery);
      console.log("response: " + responseLength);
      console.log("response: ", artistsList);
    } catch (error) {
      alert("no response!");
      console.log(error);
    }
  };
  console.log("props: ", props);

  return (
    <div>
      <div>
        <div className="py-4 pl-8 text-base font-bold">
          {responseLength} result(s) for "{searchHeader}"
        </div>
        <br />
        <div className="p-4 flex justify-around">
          <button>
            <div className="inline-flex bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300">
              <div className="p-4">
                <img
                  className="h-20 w-20 rounded-full border-2 border-black"
                  src={artistsList.image_url}
                  alt={artistsList.name}
                />
              </div>
              <div className="pr-4 py-6 text-white text-base flex flex-col grid justify-items-start">
                <div className="text-gray-700 font-bold text-md justify-self-start grid justify-items-start">
                  {artistsList.name}
                </div>
                <div className="text-gray-600 text-md truncate lg:text-clip">
                  {artistsList.facebook_page_url}
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Artist;
