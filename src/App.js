import React from 'react';
import logo from './logo.svg';
import './App.css';

import Page from './Page'

const pageOne = [
  { name: 'Sunday', like: 199, createdAt: +new Date()},
  { name: 'Monday', like: 911, createdAt: +new Date()},
  { name: 'Tuesday', like: 666, createdAt: +new Date()},
]

const pageTwo = [
  { name: 'Wednesday', like: 123, createdAt: +new Date()},
  { name: 'Thursday', like: 456, createdAt: +new Date()},
  { name: 'Friday', like: 987, createdAt: +new Date()},
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Page {...{items:pageOne, reload: () => pageOne, getNextPage: () => pageTwo}} />
    </div>
  );
}

export default App;
