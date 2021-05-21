import React, { useState } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import { DeckList, SearchBar, SearchResults } from "./components";

import { fetchCards } from "./api";

import "./index.css";

//this has been updated below
//leaving it in commented out for future reference
//prompt (mistakenly, I think) uses function App = () => etc.
// const App = () => {
//   fetchCards().then(console.log);
//   const [results, setResults] = useState([]);
//         // We will initialize results with an empty array
//         // (nobody has searched at this point). Later, when we hit the card API,
//         //  when the results come back we can call setResults,
//         //  passing in the new array of cards for it.

//   return (
//     <div id="app">
//       <SearchBar setResults={ setResults } />
//       <SearchResults results={ results } />
//       <DeckList />
//     </div>
//   );
// }

// [
//   {
//     id: "card-id",
//     name: "card name",
//     count: 3,
//   },
//   {
//     id: "another-id",
//     name: "some other name",
//     count: 2
//   }
// ]

// Go back to src/index.js and pass addCardToDeck and removeCardToDeck to the DeckList. Once we do that, we can add +/- buttons to the deck list, and have the ability to update from there, too.

const App = () => {
  const [results, setResults] = useState([]);
  const [deck, setDeck] = useState([]);

  const addCardToDeck = ({ id, name }) => {
    const nextDeck = [...deck]; // make a duplicate first
    const index = nextDeck.findIndex((card) => card.id === id);

    // index will be -1 if it is not found
    if (index > -1) {
      nextDeck[index].count += 1;
    } else {
      nextDeck.push({
        id,
        name,
        count: 1,
      });
    }

    setDeck(nextDeck);
  };

  const removeCardFromDeck = ({ id }) => {
    const nextDeck = [...deck];
    const index = nextDeck.findIndex((card) => card.id === id);

    if (index === -1) {
      // don't do anything if we're trying to remove a card not in the deck
      return;
    }

    if (nextDeck[index].count === 1) {
      // remove the card altogether
      nextDeck.splice(index, 1);
    } else {
      // decrement the count
      nextDeck[index].count -= 1;
    }

    setDeck(nextDeck);
  };

  return (
    <div id="app">
      <SearchBar setResults={setResults} />
      <SearchResults
        results={results}
        addCardToDeck={addCardToDeck}
        removeCardFromDeck={removeCardFromDeck}
      />
      <DeckList
        deck={deck}
        addCardToDeck={addCardToDeck}
        removeCardFromDeck={removeCardFromDeck}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
