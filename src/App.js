import React, { Component } from 'react';
import Header from './Components/Header/index';
import Test from './Components/Text/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Test 
          phrase="J'ai envie de manger un macdo sur la plage
                  Demain matin, je passerai l'aspirateur puis j'aroserai mes plantes.
                  Ensuite, je préparerai mes affaires pour aller chez Maëlle"
        />
      </div>
    );
  }
}

export default App;
