import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader.js';
import AppFooter from './AppFooter/AppFooter.js';
import AppContent from './AppContent/AppContent.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default App;
