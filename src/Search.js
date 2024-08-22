import React, {useState} from "react";
import axios from "axios";

export default function Search(){
  let [keyword, setKeyword] = useState("");

  function definition(response){
    console.log(response);
  }

  function searching(event){
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(definition);
  }

  function keywordChange(event){
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={searching}>
        <input
          type="search"
          className="searchBar"
          onChange={keywordChange}
        />
        <input type="submit" value="⌕" className="searchButton" />
      </form>
    </div>
  );
}