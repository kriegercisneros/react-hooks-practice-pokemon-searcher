import React, { useState } from "react";

function Search({onSearch}) {
  const [search, setSearch]= useState("")
  // console.log(search)
  function handleSearch(e){
    setSearch(e.target.value)
    onSearch(search)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={search} 
          onChange={handleSearch}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
