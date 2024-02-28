import React from 'react';
import '../css/general.css';

import Landing from './Landing';
import MenuBar from './MenuBar';

function App() {
  return (
    <div className="App">
        <MenuBar/>
        <Landing/>
    </div>
  );
}

export default App;
