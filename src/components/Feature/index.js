import React, { Component } from 'react';
import { Glyphicon, Panel } from 'react-bootstrap';
import './index.scss';

class Feature extends Component {
  render() {
    const { title, presence, subfeatures } = this.props.feature;
    const hasSubfeatures = subfeatures.length > 0;
    const presenceIcon = presence ? 'check' : 'times';
    const icon = {
      toilet: 'toilet',
      'pets allowed': 'pets',
      shower: 'shower',
      trash: 'trash'
    }[title.toLowerCase()];
    return (
      <li className="feature">
        <Panel bsStyle="default">
          <Panel.Heading>
            <Panel.Title toggle={hasSubfeatures}>
              {icon ? (
                <span className={`feature-icon hc-awesome-${icon}`} />
              ) : null}
              <b> {title} {hasSubfeatures?<Glyphicon glyph="chevron-down" />:''}</b>
              <span className={`feature-icon hc-awesome-${presenceIcon}
                presence-icon${presence ? ' hasFeature' : ''}`}>
                &nbsp;{presence ? 'Yes' : 'No'}
              </span>
            </Panel.Title>
          </Panel.Heading>
          {hasSubfeatures ? (
            <Panel.Collapse>
              <Panel.Body>
                <ul className="feature-list">
                  {subfeatures.map(feature => (
                    <Feature key={feature.title} feature={feature} />
                  ))}
                </ul>
              </Panel.Body>
            </Panel.Collapse>
          ) : null}
        </Panel>
      </li>
    );
  }
}

export default Feature;
