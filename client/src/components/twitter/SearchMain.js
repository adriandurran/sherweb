import React from 'react';

import SearchForm from './SearchForm';

import styles from '../../css/SearchMain.module.css';

const SearchMain = () => {
  return (
    <div className={styles.mainSearch}>
      <SearchForm />
    </div>
  );
};

export default SearchMain;
