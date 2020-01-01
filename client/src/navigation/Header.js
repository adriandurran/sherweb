import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router';

import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <AppBar position="static" className={styles.appbar}>
      <Toolbar className={styles.appheader}>
        <IconButton
          edge="start"
          className={styles.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={styles.title}>
          Twitter Search
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
