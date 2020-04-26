import React, { Component } from 'react';

import './landing_page.css';
import OneCircle from './OneCircle.jsx';

class LandingPage extends Component {

	renderText() {
		return (
			<div className="landing_page__text">
				<div className="landing_page__title">
		        	<p> Hello, I'm Eddie Jiao. Welcome to my fun slice of the internet. </p>
		        	<p> I live in San Francisco and build software for a living. I’m currently working at Slack. Previously, I've been at Donut and Brown University.</p>
		        </div>
			</div>
		);
	}

  render() {
    return (
      	<div className="landing_page">
	      	<div className="landing_page__content">
	      		<OneCircle />
	        	{this.renderText()}
	      	</div>
		</div>
    );
  }
}

export default LandingPage;
