import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Twitter, Whatshot } from '@material-ui/icons';

import { runToxicityCheck } from '../../utils/toxicChecker';

import styles from '../../css/SearchResults.module.css';

const SearchSummary = ({ results }) => {
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
          onClick={() => runToxicityCheck(results)}
        >
          Check toxicity
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchSummary;
