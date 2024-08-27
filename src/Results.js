import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Result(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div>
        <div className="definitionHeader">
          <h2> {props.results.word} </h2>
          <p className="phonetics"> {props.results.phonetic} </p>
        </div>

        <div className="synonymsContainer">
          <h3 className="synonymsHeader"> Synonyms </h3>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Synonyms thesaurus={meaning} />
              </div>
            );
          })}
        </div>

        <div className="antonymsContainer">
          <h3 className="antonymsHeader"> Antonyms </h3>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Antonyms thesaurus={meaning} />
              </div>
            );
          })}
        </div>
        <div className="definitionResults">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="dictionaryContainer">
        <h2 className="dictionaryStart">
          {" "}
          Search for a word and discover the defintion{" "}
        </h2>
      </div>
    );
  }
}
