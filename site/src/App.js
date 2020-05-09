import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import LandingPage from './LandingPage.jsx';
import CardGrid from './CardGrid.jsx';
import About from './About.jsx';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div>
				<Switch>
	          		<Route path="/about">
		            	<About />
		          	</Route>
		          	<Route path="/">
					    <LandingPage />
					    <CardGrid />
		          	</Route>
		        </Switch>
	        </div>
		</Router>
    );
  }
}

export default App;
