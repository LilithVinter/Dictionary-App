import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  let [photos, setPhotos]= useState(null);

  function definition(response) {
    setResults(response.data);
  }

  function images(response){
    setPhotos(response.data.photos);
  }

  function searching(event) {
    event.preventDefault();

    let apiKey = "67160eaaec4o69a29b0ff296te075931";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(definition);

    
    let imagesApiKey = "67160eaaec4o69a29b0ff296te075931";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;

    axios.get(imagesApiUrl).then(images);
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
      <Images photos={photos}/>
    </div>
  );
}
