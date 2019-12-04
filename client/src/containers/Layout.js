import React, { Suspense, lazy } from 'react';
import { Container } from '@material-ui/core';
import { Router } from '@reach/router';

import Header from '../navigation/Header';
import Spinner from '../components/shared/Spinner';
import SearchMain from '../components/twitter/SearchMain';

import styles from '../css/Layout.module.css';

const SearchResultDetails = lazy(() =>
  import('../components/twitter/SearchResultDetails')
);

const MainRouter = () => {
  return (
    <Router>
      <SearchResultDetails path="/results/all" />
    </Router>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <Container className={styles.searchwrapper}>
        <SearchMain />
      </Container>
      <Container className={styles.mainwrapper}>
        <Suspense fallback={<Spinner />}>
          <MainRouter />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
