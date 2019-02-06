import React, { Component } from 'react';
// Components import
import Header from './Components/Header/index';
import TopBar from './Components/Topbar/index';
import AboutMe from './Components/AboutMe/index';
import Footer from './Components/Footer/index';
// Libs import
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faHeart } from '@fortawesome/free-solid-svg-icons';
// Assets import
import './App.css';
import './Assets/fonts/fonts.css';

library.add(fab, faFilePdf, faHeart);

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Header />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default App;
