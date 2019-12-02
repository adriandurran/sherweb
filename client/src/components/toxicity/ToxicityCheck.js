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

const ToxicityCheck = ({ full, sensitive }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('full');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toxicChoice = () => {
    if (value === 'full') {
      dispatch(runToxicityCheck(full, value));
    } else {
      dispatch(runToxicityCheck(sensitive, value));
    }
  };

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
        >
          Check toxicity
        </Button>
      </FormControl>{' '}
    </>
  );
};

export default ToxicityCheck;
