import React from 'react';
import { Container } from '@material-ui/core';

import SearchMain from '../components/twitter/SearchMain';

import styles from '../css/Layout.module.css';

const TwitterSearch = ({ children }) => {
  return (
    <>
      <Container className={styles.searchwrapper}>
        <SearchMain />
      </Container>
      <Container className={styles.mainwrapper}>{children}</Container>
    </>
  );
};

export default TwitterSearch;
