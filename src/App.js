import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader.js';
import AppFooter from './AppFooter/AppFooter.js';
import AppContent from './AppContent/AppContent.js';
import Startowa from './Startowa/Startowa.js';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <AppHeader />
          <AppContent />
        </div>
      </div>
    );
  }
}

export default App;
