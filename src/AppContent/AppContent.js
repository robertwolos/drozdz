import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import './AppContent.css';
import Glowna from './Glowna/Glowna.js';
import Kontakt from './Kontakt/Kontakt.js';
import Galeria from './Galeria/Galeria.js';


class AppContent extends Component {
  render() {
    return (
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={Glowna}/>
          <div className="main-paper">
            <Route path="/contact" component={Kontakt}/>
            <Route path="/galery" component={Galeria}/>
          </div>
        </Switch>
      </main>
    );
  }
}

AppContent.propTypes = {

};

export default AppContent;