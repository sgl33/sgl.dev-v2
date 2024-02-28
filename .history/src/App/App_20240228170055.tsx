import React from 'react';
import '../css/general.css';


import MenuBar from './MenuBar';
import Landing from './Landing';
import Experience from './Experience';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <title>Seung-Gu Lee</title>
        <MenuBar/>
        <Landing/>
        <Experience/>
        <Projects/>
        <AboutMe/>
        <Footer/>
    </div>
  );
}

export default App;
