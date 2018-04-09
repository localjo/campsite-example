import React, { Component } from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import {
  Grid,
  Row,
  Col,
  Button,
  PageHeader,
  Panel,
  Glyphicon
} from 'react-bootstrap';
import './hipcamp.css';
import './App.scss';
import getCampsiteInfoFromAPI from './mocks/api';

class App extends Component {
  state = {
    details: {
      features: [],
      image: '',
      title: '',
      description: '',
      id: '0'
    }
  };

  componentDidMount() {
    this._asyncRequest = getCampsiteInfoFromAPI('1').then(res => {
      this._asyncRequest = null;
      this.setState({ details: res });
    });
  }

  getNextCampsite() {
    const nextId = this.state.details.id === '1' ? '2' : '1';
    this._asyncRequest = getCampsiteInfoFromAPI(nextId).then(res => {
      this._asyncRequest = null;
      this.setState({ details: res });
    });
  }

  render() {
    const {
      features,
      image,
      title,
      description,
      location
    } = this.state.details;
    return (
      <div className="app">
        <Header />
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>
                {title} <small>{location}</small>
              </PageHeader>
            </Col>
          </Row>
          <Row>
            <Col xs={0} sm={6} md={8}>
              <img style={{ maxWidth: '100%' }} src={image} alt="" />
              <h2>Description</h2>
              <p>{description}</p>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title>Campsite Details</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  {features === null ? (
                    <p>Loading...</p>
                  ) : (
                    <ul className="feature-list">
                      {features.map(feature => {
                        if (!feature) return false;
                        return (<Feature key={feature.title} feature={feature} />)
                      })}
                    </ul>
                  )}
                </Panel.Body>
              </Panel>
              <Button className="next-button"
                onClick={() => {
                  this.getNextCampsite();
                }}>
                Next Campsite <Glyphicon glyph="circle-arrow-right" />
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
