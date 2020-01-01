import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import {
  selectAllSearchResults
  // selectSearchMetadata
} from '../../selectors/twitterSelectors';

import SearchSummary from './SearchSummary';

import styles from '../../css/SearchResults.module.css';

const SearchResults = () => {
  const results = useSelector(selectAllSearchResults);
  // const meta = useSelector(selectSearchMetadata);

  return (
    <Paper className={styles.wrapper}>
      <Typography variant="h5" component="h3" className={styles.title}>
        Search results
      </Typography>
      {results.length > 0 ? (
        <SearchSummary results={results} />
      ) : (
        <div>Nothing found</div>
      )}
    </Paper>
  );
};

export default SearchResults;
