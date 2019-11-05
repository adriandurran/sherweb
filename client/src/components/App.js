import React from 'react';
import Container from '@material-ui/core/Container';
import styles from '../css/App.module.css';

import Header from './Header';
import SearchMain from './twitter/SearchMain';

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
      </div>
      <Container className={styles.wrapper}>
        <SearchMain />
      </Container>
    </>
  );
}

export default App;
