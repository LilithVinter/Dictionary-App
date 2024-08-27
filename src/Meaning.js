import React from "react";

export default function Meaning(props) {
  if (props.meaning.example) {
    return(
      <div className="definitionContainer">
        <h3> {props.meaning.partOfSpeech}</h3>
        <p className="definitionText">{props.meaning.definition}</p>
        <strong> Example:</strong>
        <em className="example"> {props.meaning.example} </em>
      </div>
    );
  }else{
    return(
      <div className="definitionContainer">
        <h3> {props.meaning.partOfSpeech}</h3>
        <p className="definitionText">{props.meaning.definition}</p>
      </div>
    );
  }
}
