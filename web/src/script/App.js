import React, { Component } from 'react';
import Header from '../components/header.jsx';
let h5Dom = ['section', 'nav'];
for (let i = 0; i < h5Dom.length; i++) {
  document.createElement(h5Dom[i]);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
