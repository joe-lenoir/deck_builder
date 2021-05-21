import React from "react";

import Card from "./Card";

import "./SearchResults.css";

//this has been updated below
//leaving it in commented out for future reference
//old, updated below
// const SearchResults = ({ results }) => {
//   return (
//     <div id="results">
//       <h3>
//         Here's what we found ({ results.length } results):
//       </h3>
//       <div className="CardList">
//         {
//           results.map(result => (
//             <Card key={ result.id } {...result} />
//           ))
//         }
//       </div>
//     </div>
//   );
// }

//UPDATED
const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
  return (
    <div id="results">
      <h3>Here's what we found ({results.length} results):</h3>
      <div className="CardList">
        {results.map((result) => (
          <Card
            key={result.id}
            addCardToDeck={addCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
            {...result}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
