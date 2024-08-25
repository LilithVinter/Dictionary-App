import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="defintionContainer">
      <h3> {props.meaning.partOfSpeech}</h3>
      <p className="definitionText">{props.meaning.definition}</p>
      <br />
      <em className="example"> {props.meaning.example} </em>
    </div>
  );
}


