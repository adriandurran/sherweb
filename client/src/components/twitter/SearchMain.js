import React from 'react';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import styles from '../../css/SearchMain.module.css';

const SearchMain = () => {
  return (
    <div className={styles.mainSearch}>
      <SearchForm />
      <SearchResults />
    </div>
  );
};

export default SearchMain;
