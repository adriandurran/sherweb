import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { selectAllSearchResults } from '../../selectors/twitterSelectors';

import SearchSummary from './SearchSummary';
import SearchResultDetail from './SearchResultDetail';

import styles from '../../css/SearchResults.module.css';

const SearchResults = () => {
  const results = useSelector(selectAllSearchResults);

  return (
    <Paper className={styles.wrapper}>
      <Typography variant="h5" component="h3" className={styles.title}>
        Search results
      </Typography>
      {results.length > 0 && <SearchSummary results={results} />}
      <Grid container spacing={4}>
        {results.map((detail) => {
          return <SearchResultDetail detail={detail} key={detail.id} />;
        })}
      </Grid>
    </Paper>
  );
};

export default SearchResults;
