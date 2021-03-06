import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';
import { Link } from 'react-router-dom';

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <nav className="main-nav">
          <div className="main-nav-left">
            <ul>
              <li><Link to="/"><span>Główna</span></Link></li>
              <li><Link to="/galery"><span>Galeria</span></Link></li>
              <li><Link to="/contact"><span>Kontakt</span></Link></li>
            </ul>
          </div>
          <div className="main-nav-right">
            <ul>
              <li style={{ float: "right" }} ><a href="#0"><span>Zarejestruj</span></a></li>
              <li style={{ float: "right" }} ><a href="#0"><span>Zaloguj</span></a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

AppHeader.propTypes = {

};

export default AppHeader;