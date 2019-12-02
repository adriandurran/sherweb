import React from 'react';

import { Chip } from '@material-ui/core';
import { Whatshot } from '@material-ui/icons';
import { useSelector } from 'react-redux';

import { selectAllSensitiveTweets } from '../../selectors/twitterSelectors';

const SensitivityCount = () => {
  const sensitive = useSelector(selectAllSensitiveTweets);

  console.log(sensitive);

  return (
    <Chip
      icon={<Whatshot />}
      label={sensitive.length}
      //   onClick={handleClick}
      //   onDelete={handleDelete}
      variant="outlined"
    />
  );
};

export default SensitivityCount;
