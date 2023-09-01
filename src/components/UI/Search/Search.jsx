import React from "react";
import { SearchContext } from "../../../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <input
      className="search"
      value={searchValue}
      onChange={(evt) => setSearchValue(evt.target.value)}
      type="text"
      placeholder="Название пиццы..."
    />
  );
};

export default Search;
