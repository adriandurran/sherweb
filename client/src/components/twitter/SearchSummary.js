import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Twitter, Whatshot } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { runToxicityCheck } from '../../actions/twitter';
import ToxicityCount from '../toxicity/ToxicityCount';

import styles from '../../css/SearchResults.module.css';

const SearchSummary = ({ results }) => {
  const dispatch = useDispatch();

  return (
    <Grid container spacing={4} className={styles.wrapper}>
      <Grid item>
        <Button variant="contained" color="secondary" startIcon={<Twitter />}>
          View {results.length} results
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Whatshot />}
          onClick={() => dispatch(runToxicityCheck(results))}
        >
          Check toxicity
        </Button>
        <ToxicityCount />
      </Grid>
    </Grid>
  );
};

export default SearchSummary;
