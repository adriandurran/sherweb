import React from 'react';
import { Chip } from '@material-ui/core';
import { Whatshot } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import { selectAllToxicTweets } from '../../selectors/twitterSelectors';

const ToxicityCount = () => {
  const toxicTweets = useSelector(selectAllToxicTweets);

  console.log(toxicTweets);

  return (
    <Chip
      icon={<Whatshot />}
      label={toxicTweets.length}
      //   onClick={handleClick}
      //   onDelete={handleDelete}
      variant="outlined"
    />
  );
};

export default ToxicityCount;
