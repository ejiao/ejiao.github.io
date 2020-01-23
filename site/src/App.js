import React, { Component } from 'react';
import './App.css';

import LandingPage from'./LandingPage.jsx'
import CardGrid from'./CardGrid.jsx'

class App extends Component {
  render() {
    return (
    	<div>
		    <LandingPage />
		    <CardGrid />
		</div>
    );
  }
}

export default App;
