import React from 'react';
import './App.css';

import PageContainer from './PageContainer'

function App() {
  return (
    <div className="App">
      <PageContainer
        domain='http://localhost:4000'
        title="Page-based"
      />
      <PageContainer
        domain='http://localhost:4001'
        title="Token-based"
      />
    </div>
  );
}

export default App;
