import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

import styles from './styles.module.css';

const App = () => {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/user-profile" element={<></>} />
          <Route path="/user-profile/:albumname" element={<></>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
