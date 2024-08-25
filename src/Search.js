import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function definition(response) {
    setResults(response.data);
  }

  function searching(event) {
    event.preventDefault();

    let apiKey = "67160eaaec4o69a29b0ff296te075931";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(definition);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="searchEngine">
        <form onSubmit={searching}>
          <input
            type="search"
            className="searchBar"
            onChange={keywordChange}
            placeholder="Search for a word"
          />
          <input type="submit" value="⌕" className="searchButton" />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
