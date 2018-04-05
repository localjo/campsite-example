import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './index.scss';

class Header extends Component {
  render() {
    return (
      <nav className="main fixed" id="nav-header">
        <div className="left">
          <div className="logo">
            <a href="/">
              <div className="logo-placeholder">&nbsp;</div>
            </a>
          </div>
          <div className="collapse">
            <a
              className="btn btn-sm btn-primary btn-inverted list-land-btn"
              href="https://www.hipcamp.com/">
              <Glyphicon glyph="menu-hamburger" />
            </a>
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
    );
  }
}

export default Header;
