import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import SearchResultDetail from './SearchResultDetail';

import { selectAllSensitiveTweets } from '../../selectors/twitterSelectors';

const SearchResultsSensitive = () => {
  const sensitiveResults = useSelector(selectAllSensitiveTweets);
  return (
    <Grid container spacing={1}>
      {sensitiveResults.map((result) => (
        <SearchResultDetail detail={result} />
      ))}
    </Grid>
  );
};

export default SearchResultsSensitive;
