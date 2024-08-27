import React from "react";

export default function Antonyms(props) {
  if (props.thesaurus.antonyms) {
    return (
      <ul className="antonyms">
        {props.thesaurus.antonyms.map(function (antonym, index) {
          return <li key={index}>{antonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
