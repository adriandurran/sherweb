import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const TwitterDetailed = ({ id }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>Menu</Paper>
      </Grid>
      <Grid item>
        <Paper>Main</Paper>
      </Grid>
    </Grid>
  );
};

export default TwitterDetailed;
