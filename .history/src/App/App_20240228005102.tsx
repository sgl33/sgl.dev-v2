import React from 'react';
import '../css/general.css';


import MenuBar from './MenuBar';
import Landing from './Landing';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
        <MenuBar/>
        <Landing/>
        <Experience/>
        <Projects/>
    </div>
  );
}

export default App;
