import React, { Component } from 'react';
import Header from './Components/Header/index';
import TopBar from './Components/Topbar/index';
// Libs import
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faFilePdf);

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Header />
      </div>
    );
  }
}

export default App;
