import React from 'react';
import { Box, Badge, withStyles, IconButton } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';

// import styles from '../../css/SearchResults.module.css';

const StyledBadge1 = withStyles((theme) => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

const SearchSummary = ({ results }) => {
  return (
    <Box m={1}>
      <IconButton aria-label="cart">
        <StyledBadge1 badgeContent={results.length} color="secondary">
          <Twitter />
        </StyledBadge1>
      </IconButton>
    </Box>
  );
};

export default SearchSummary;
