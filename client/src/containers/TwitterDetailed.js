import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import DetailedMain from '../components/twitter/detailed/DetailedMain';

import { selectAllSearchResults } from '../selectors/twitterSelectors';

const TwitterDetailed = ({ id }) => {
  const tweets = useSelector(selectAllSearchResults);
  const details = tweets.filter((tweet) => tweet.id_str === id);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DetailedMain detail={details[0]} />
      </Grid>
    </Grid>
  );
};

export default TwitterDetailed;
