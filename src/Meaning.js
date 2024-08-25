import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="definitionContainer">
      <h3> {props.meaning.partOfSpeech}</h3>
      <p className="definitionText">{props.meaning.definition}</p>
      <br />
      <strong> example:</strong>
      <em className="example"> {props.meaning.example} </em>
    </div>
  );
}


