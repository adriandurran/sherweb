import React from 'react';

import { Button } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import { selectAllSensitiveTweets } from '../../selectors/twitterSelectors';

const SensitivityCount = () => {
  const sensitive = useSelector(selectAllSensitiveTweets);

  console.log(sensitive);

  return (
    <Button variant="contained" color="secondary" startIcon={<Twitter />}>
      View {sensitive.length} sensitive tweets
    </Button>
  );
};

export default SensitivityCount;
