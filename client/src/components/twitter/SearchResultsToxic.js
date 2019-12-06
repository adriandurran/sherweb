import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import SearchResultDetail from './SearchResultDetail';

import { selectAllToxicTweets } from '../../selectors/twitterSelectors';

const SearchResultsSensitive = () => {
  const toxicResults = useSelector(selectAllToxicTweets);
  return (
    <Grid container spacing={1}>
      {toxicResults.map((result) => (
        <SearchResultDetail detail={result} key={result.id} />
      ))}
    </Grid>
  );
};

export default SearchResultsSensitive;
