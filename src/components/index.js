// We will use the index.js as a way to export all the other components
// for easy consumption (we can use import { ComponentName } from './components'
// rather than import ComponentName from './components/ComponentName').

//uncomment these import/exports
export { default as SearchBar } from "./SearchBar";
export { default as SearchResults } from "./SearchResults";
export { default as DeckList } from "./DeckList";

// Each one of these export statements will import the default export,
// and re-export it from index.js by the name given with the as clause.
// The goal here is to transform our current src/index.js to use those
// three new components to clean up our main application insertion point:
