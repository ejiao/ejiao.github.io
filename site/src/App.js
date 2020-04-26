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
import NavBar from './NavBar.jsx';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div>
    			<NavBar />
				<Switch>
	          		<Route path="/about">
		            	<CardGrid />
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
