import React, { Suspense, lazy } from 'react';
import { Container } from '@material-ui/core';
import { Router } from '@reach/router';

import Header from '../navigation/Header';
import Spinner from '../components/shared/Spinner';
import SearchMain from '../components/twitter/SearchMain';

import styles from '../css/Layout.module.css';

const SearchResultsAll = lazy(() =>
  import('../components/twitter/SearchResultsAll')
);
const SearchResultsSensitive = lazy(() =>
  import('../components/twitter/SearchResultsSensitive')
);

const MainRouter = () => {
  return (
    <Router>
      <SearchResultsAll path="/results/all" />
      <SearchResultsSensitive path="/results/sensitive" />
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
