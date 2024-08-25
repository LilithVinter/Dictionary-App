import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div>
        <div className="definitionHeader">
          <h2> {props.results.word} </h2>
          <p className="phonetics"> {props.results.phonetic} </p>
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
        <h2> Search for a word and discover the defintion </h2>
      </div>
    );
  }
}
