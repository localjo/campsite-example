import React, { Component } from 'react';
import Feature from './components/Feature';
import { Grid, Row, Col, PageHeader, Panel, Glyphicon } from 'react-bootstrap';
import campsitePhoto from './campsite.jpg';
import './hipcamp.css';
import './App.scss';
import featuresMock from './features';

const mockFeaturesAPICall = ()=>{
  return new Promise((resolve, reject)=>{
    if (featuresMock) {
      resolve(featuresMock);
    } else {
      reject(new Error('No features!'));
    }
  });
};

class App extends Component {
  state = {
    features: [],
  };

  componentDidMount() {
    this._asyncRequest = mockFeaturesAPICall().then(
      response => {
        this._asyncRequest = null;
        this.setState({features: response});
      }
    );
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { features } = this.state;
    return (
      <div className="app">
        <nav className="main fixed" id="nav-header">
          <div className="left">
            <div className="logo">
              <a href="/">
                <div className="logo-placeholder">&nbsp;</div>
              </a>
            </div>
            <div className="collapse">
              <a className="btn btn-sm btn-primary btn-inverted list-land-btn" href="https://www.hipcamp.com/"><Glyphicon glyph="menu-hamburger"/></a>
            </div>
            <ul className="top-nav">
              <li>
                <label>
                  <a href="https://www.hipcamp.com/discover/">Camping</a>
                </label>
              </li>
              <li>
                <label>
                  <a href="https://www.hipcamp.com/host/">Hosting</a>
                </label>
              </li>
              <li>
                <label>
                  <a href="https://www.hipcamp.com/fieldscouts">Scouting</a>
                </label>
              </li>
              <li>
                <label>
                  <a href="https://www.hipcamp.com/about/">About</a>
                </label>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="user-menu" data-logged-out="">
              <a
                className="btn btn-sm btn-primary btn-inverted list-land-btn"
                href="https://www.hipcamp.com/host">
                Start hosting
              </a>
            </div>
          </div>
        </nav>
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>
                Bath Hollow Farm @ CVNP <small>Akron, Ohio</small>
              </PageHeader>
            </Col>
          </Row>
          <Row>
            <Col xs={0} sm={6} md={8}>
              <img style={{ maxWidth: '100%' }} src={campsitePhoto} alt="" />
              <h2>Description</h2>
              <p>{`Pitch your tent at the edge of the woods on our little farm. It's just across the street from the Cuyahoga Valley National Park, and we are so proud to have this awesome resource in our back yard! You'll have easy access to the Ohio & Erie Canal towpath trail and the new Hampton Hills mountain bike trails, plus over 100 miles of hiking trails a short drive away. You could also spend the day close to camp exploring the woods and ravine on our 28 acres and relaxing next to Woodward Creek. We are also just a 5 minute drive from great restaurants, groceries, and even a movie theater - the best of both worlds :-). We love hiking, biking, and trail running in CVNP and we can share lots of suggestions for the best places to see. Depending on the season we might also have some blackberries to pick!`}</p>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title>Campsite Details</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  {(features === null)?<p>Loading...</p>:
                    <ul className="feature-list">
                      {features.map(feature => (
                        <Feature key={feature.title} feature={feature} />
                      ))}
                    </ul>
                  }
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
