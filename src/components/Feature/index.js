import React, { Component } from 'react';
import { Glyphicon, Panel } from 'react-bootstrap';
import './index.scss';

class Feature extends Component {
  render() {
    const { title, presence, subfeatures } = this.props.feature;
    const hasSubfeatures = subfeatures.length > 0;
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
                <span className={`feature-icon cs-awesome-${icon}`} />
              ) : null}
              <b> {title} {hasSubfeatures?<Glyphicon glyph="chevron-down" />:''}</b>
              <span className={`feature-icon presence-icon`}>
                {presence ? 
                  <svg viewBox="-0.086 0.033 21 20.146" width="21" height="20.146" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#40d9ac" d="M 3.325 9.741 L 7.36 14.407 L 19.151 0.409 C 20.033 -0.537 21.42 0.472 20.726 1.544 L 9.125 19.262 C 8.242 20.397 7.044 20.523 6.035 19.388 L 0.172 12.389 C -0.963 10.75 1.937 8.416 3.325 9.741 Z"/>
                  </svg>:
                  <svg viewBox="76.054 80 17.369 20" width="17.369" height="20" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(-0.2, 0, 0, -0.2, 94.738632, 100)">
                      <path fill="#ED6D67" d="M40.051,50.064c-8.938-8.067-16.577-15.589-24.91-22.244c-4.806-3.838-7.746-8.342-6.056-13.845    c1.321-4.302,4.374-9.029,8.053-11.402c4.346-2.804,9.553-0.994,13.374,3.153c6.096,6.618,12.258,13.178,18.49,19.668    c1.467,1.527,3.322,2.681,5.632,4.507c2.269-2.999,4.343-5.287,5.893-7.889c2.534-4.253,4.553-8.813,7.101-13.057    C72.13,1.454,81.325-2.075,87.045,1.261c6.991,4.078,8.608,14.952,2.981,22.814c-2.874,4.016-6.599,7.415-9.819,11.196    c-3.182,3.736-6.212,7.602-9.997,12.257c3.803,4.037,7.047,7.599,10.425,11.03c3.133,3.182,6.86,5.88,9.526,9.397    c5.066,6.683,2.846,16.453-4.296,21.176c-7.907,5.228-15.03,3.41-20.27-5.122c-2.589-4.214-5.163-8.444-7.962-12.518    c-0.682-0.993-2.22-1.398-3.584-2.203c-11.31,8.676-18.356,22.517-31.447,29.594c-4.183,2.262-9.377,0.994-12.074-2.923    c-0.149-0.216-0.294-0.433-0.438-0.651c-5.237-8.012-4.739-10.15,2.321-17.109C21.356,69.38,30.033,60.289,40.051,50.064z"/>
                    </g>
                  </svg>
                }
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
