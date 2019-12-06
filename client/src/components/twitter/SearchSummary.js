import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';
import { Link } from '@reach/router';

import ToxicityCheck from '../toxicity/ToxicityCheck';

import styles from '../../css/SearchResults.module.css';

const SearchSummary = ({ results }) => {
  const sensitive = results.filter((result) => result.possibly_sensitive);

  return (
    <Grid container spacing={1} className={styles.wrapper}>
      <Grid container spacing={1} item>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Twitter />}
            component={Link}
            to="/results/all"
          >
            View all {results.length} results
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Twitter />}
            disabled={sensitive.length === 0}
            component={Link}
            to="/results/sensitive"
          >
            View {sensitive.length} sensitive tweet(s)
          </Button>
        </Grid>
      </Grid>

      <Grid item>
        <ToxicityCheck full={results} sensitive={sensitive} />
      </Grid>
    </Grid>
  );
};

export default SearchSummary;
