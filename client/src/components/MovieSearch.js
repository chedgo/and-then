import React, { useState, useRef } from "react";
import SearchResults from "./SearchResults";
import fetcher from "../utils/fetcher";

export default function MovieSearch() {
  const [searchResults, setSearchResults] = useState([]);
  const searchTermRef = useRef();
  const [resultsAreDisplayed, setIfResultsAreDisplayed] = useState(false);

  function handleSearch() {
    const searchTerm = searchTermRef.current.value;
    const url = new URL("http://localhost:5000/showsearch");
    url.search = new URLSearchParams({
      keyword: searchTerm,
    });
  fetcher(url)
      .then((res) => res.json())
      .then((res) => setSearchResults(res.data.results))
      .then(setIfResultsAreDisplayed(true))
      .catch((error) => alert(error));
  }

  return (
    <div>
      <input ref={searchTermRef} type="text" />
      <button onClick={handleSearch}>Search</button>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}
