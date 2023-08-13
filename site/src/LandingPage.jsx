import React, { Component } from 'react';

import './landing_page.css';
import OneCircle from './OneCircle.jsx';

class LandingPage extends Component {

	renderText() {
		return (
			<div className="landing_page__text">
				<div className="landing_page__title">
		        	<p> Hey there, I'm Eddie Jiao. Welcome to my fun slice of the internet. </p>
		        	<p> I live in San Francisco and build software for a living. I do experimental stuff at <a href="https://hu.ma.ne/">Humane</a>, and was previously at <a href="https://slack.com/">Slack</a>, <a href="https://www.donut.com/">Donut</a> and <a href="https://www.brown.edu/">Brown University</a>.</p>
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
