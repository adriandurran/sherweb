import React from "react";
import { useSelector } from "react-redux";

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

import { selectAllSearchResults } from "../../selectors/twitterSelectors";
import styles from "../../css/SearchMain.module.css";

const SearchMain = () => {
  const results = useSelector(selectAllSearchResults);
  return (
    <div className={styles.mainSearch}>
      <SearchForm />
      {results.length > 0 && <SearchResults />}
    </div>
  );
};

export default SearchMain;
