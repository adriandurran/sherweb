import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import SearchResultDetail from './SearchResultDetail';

import { selectAllSearchResults } from '../../selectors/twitterSelectors';

const SearchResultMain = () => {
  const allResults = useSelector(selectAllSearchResults);

  return (
    <Grid container spacing={1}>
      {allResults.map((result) => (
        <SearchResultDetail detail={result} key={result.id} />
      ))}
    </Grid>
  );
};

export default SearchResultMain;
