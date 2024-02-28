import React, {useEffect} from 'react';
import '../css/general.css';
import Helmet from 'react-helmet';

import MenuBar from './MenuBar';
import Landing from './Landing';
import Experience from './Experience';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        {/* Metadata */}
        <Helmet>
            <title></title>
        </Helmet>
        {/* Content */}
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
