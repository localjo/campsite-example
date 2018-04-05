import React, { Component } from 'react';
import './App.scss';
import features from './features';

class App extends Component {
  render() {
    const Feature = props => {
      const { title, presence, subfeatures } = props.feature;
      return (
        <li>
          <b>{title}</b>: {presence ? 'Yes' : 'No'}
          {subfeatures ? (
            <ul>
              {subfeatures.map(feature => (
                <Feature key={feature.title} feature={feature} />
              ))}
            </ul>
          ) : null}
        </li>
      );
    };
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hipcamp Sample</h1>
        </header>
        <ul>
          {features.map(feature => (
            <Feature key={feature.title} feature={feature} />
          ))}
        </ul>
        <div className="App-intro">
          <pre>{JSON.stringify(features)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
