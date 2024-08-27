import React from "react";

export default function Synonyms(props) {
  if (props.thesaurus.synonyms) {
    return (
      <ul className="synonyms">
     {props.thesaurus.synonyms.map(function(synonym, index) {
        return(
          <li key={index}>
            {synonym}
          </li>
         )
      })}
      </ul>
    );
  } else {
    return (null);
  }
}