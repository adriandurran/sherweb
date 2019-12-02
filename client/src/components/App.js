import React from 'react';
import Container from '@material-ui/core/Container';
import styles from '../css/App.module.css';
import { Router } from '@reach/router';

import Header from './Header';
import SearchMain from './twitter/SearchMain';
import SearchResultDetails from './twitter/SearchResultDetails';

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
      </div>
      <Container className={styles.wrapper}>
        <Router>
          <SearchMain path="/" />
          <SearchResultDetails path="results" />
        </Router>
      </Container>
    </>
  );
}

export default App;
