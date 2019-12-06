import React from 'react';
import { Button } from '@material-ui/core';
import { Whatshot } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';

import { selectAllToxicTweets } from '../../selectors/twitterSelectors';

const ToxicityCount = () => {
  const toxicTweets = useSelector(selectAllToxicTweets);

  console.log(toxicTweets);

  return (
    <>
      {toxicTweets.length > 0 && (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Whatshot />}
          disabled={toxicTweets.length === 0}
          component={Link}
          to="/results/toxic"
        >
          View {toxicTweets.length} toxic tweet(s)
        </Button>
      )}
    </>
  );
};

export default ToxicityCount;
