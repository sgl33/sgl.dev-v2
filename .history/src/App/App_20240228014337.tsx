import React from 'react';
import '../css/general.css';


import MenuBar from './MenuBar';
import Landing from './Landing';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <MenuBar/>
        <Landing/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
