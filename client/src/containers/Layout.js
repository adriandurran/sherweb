import React, { Suspense, lazy } from 'react';
import { Container } from '@material-ui/core';
import { Router } from '@reach/router';

import Header from '../navigation/Header';
import Spinner from '../components/shared/Spinner';

import styles from '../css/Layout.module.css';

const TwitterSearch = lazy(() => import('./TwitterSearch'));

const SearchResultsAll = lazy(() =>
  import('../components/twitter/SearchResultsAll')
);
const SearchResultsSensitive = lazy(() =>
  import('../components/twitter/SearchResultsSensitive')
);

const SearchResultsToxic = lazy(() =>
  import('../components/twitter/SearchResultsToxic')
);

const TwitterDetailed = lazy(() => import('./TwitterDetailed'));

const MainRouter = () => {
  return (
    <Router>
      <TwitterSearch path="/">
        <SearchResultsAll path="/results/all" />
        <SearchResultsSensitive path="/results/sensitive" />
        <SearchResultsToxic path="/results/toxic" />
      </TwitterSearch>
      <TwitterDetailed path="/detailed/:id" />
    </Router>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <Container className={styles.mainwrapper}>
        <Suspense fallback={<Spinner />}>
          <MainRouter />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
