import React, {useState} from "react";

export default function Search(){
  let [keyword, setKeyword] = useState("");

  function definition(event){
    event.preventDefault();
    alert(`Searhing for ${keyword}`);

  }

  function keywordChange(event){
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={definition}>
        <input
          type="search"
          value="search for a word"
          className="searchBar"
          onChange={keywordChange}
        />
        <input type="submit" value="⌕" className="searchButton" />
      </form>
    </div>
  );
}