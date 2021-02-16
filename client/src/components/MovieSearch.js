import React, { useState, useRef } from "react";
import SearchResults from "./SearchResults";
import fetcher from "../utils/fetcher";

export default function MovieSearch({userShows,
  refetchUserShows}) {
  const [searchResults, setSearchResults] = useState([]);
  const searchTermRef = useRef();

  function handleSearch() {
    const searchTerm = searchTermRef.current.value;
    const url = new URL("http://localhost:5000/showsearch");
    url.search = new URLSearchParams({
      keyword: searchTerm,
    });
    fetcher(url)
      .then((res) => res.json())
      .then((res) => setSearchResults(res.data.results))
      .catch((error) => alert(error));
  }
  function handleOnKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  return (
    <div>
      <input ref={searchTermRef} type="text" onKeyPress={handleOnKeyPress} />
      <button onClick={handleSearch}>Search</button>
      <SearchResults userShows={userShows} refetchUserShows={refetchUserShows} searchResults={searchResults} />
    </div>
  );
}
