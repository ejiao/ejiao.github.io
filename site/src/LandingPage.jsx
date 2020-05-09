import React, { Component } from 'react';

import './landing_page.css';
import OneCircle from './OneCircle.jsx';

class LandingPage extends Component {

	renderText() {
		return (
			<div className="landing_page__text">
				<div className="landing_page__title">
		        	<p> Hey there, I'm Eddie Jiao. Welcome to my fun slice of the internet. </p>
		        	<p> I live in San Francisco and build software for a living. I’m currently working on Slack, and was previously at Donut and Brown University.</p>
		        	<p> Engineering + Design + 3D Graphics </p>
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
