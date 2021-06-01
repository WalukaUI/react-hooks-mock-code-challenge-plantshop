import React, { useState } from "react";

function Search({plantSearch}) {
  const[pserch,setPsearch]=useState("")
function sercher(e){
  e.preventDefault()
  setPsearch(e.target.value)
  plantSearch(pserch)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => sercher(e)}
      />
    </div>
  );
}

export default Search;
