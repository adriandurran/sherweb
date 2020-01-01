import React, { useState } from 'react';

import {
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { Whatshot } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { runToxicityCheck } from '../../actions/twitter';

import ToxicityCount from './ToxicityCount';
// import Spinner from '../shared/Spinner';

const ToxicityCheck = ({ full, sensitive }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('full');
  const [runCheck, setRunCheck] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toxicChoice = async () => {
    setRunCheck(true);
    // let tweetArr = [];
    if (value === 'full') {
      await dispatch(runToxicityCheck(full, value));
    } else {
      await dispatch(runToxicityCheck(sensitive, value));
    }
    setRunCheck(false);
  };

  // need to add a spinner or some such sort to show toxic check in progress

  return (
    <>
      <Typography variant="h5" component="h4">
        Toxicity check
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose result set</FormLabel>
        <RadioGroup
          aria-label="toxic check"
          name="toxiccheck"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="full"
            control={<Radio />}
            label="Full results"
          />
          <FormControlLabel
            value="sensitive"
            control={<Radio />}
            label="Sensitive results"
            disabled={sensitive.length === 0}
          />
        </RadioGroup>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Whatshot />}
          onClick={toxicChoice}
          disabled={runCheck}
        >
          Check toxicity
        </Button>
      </FormControl>
      {runCheck && <ToxicityCount />}
    </>
  );
};

export default ToxicityCheck;
