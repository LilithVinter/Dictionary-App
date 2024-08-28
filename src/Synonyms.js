import React from "react";

export default function Synonyms(props) {
  if (props.thesaurus.synonyms) {
    return (
      <div className="synonymsBox">
        <ul className="synonyms">
          {props.thesaurus.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
