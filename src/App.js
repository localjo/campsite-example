import React, { Component } from 'react';
import './App.css';
import features from './features';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hipcamp Sample</h1>
        </header>
        <div className="App-intro">
          <pre>{JSON.stringify(features)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
