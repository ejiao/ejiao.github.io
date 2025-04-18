import React, { Component } from 'react';

import './landing_page.css';
import OneCircle from './OneCircle.jsx';

class LandingPage extends Component {

	renderText() {
		return (
			<div className="landing_page__text">
				<div className="landing_page__title">
		        	<p> Hey there, I'm Eddie Jiao. Welcome to my fun slice of the internet. </p>
		        	<p> I live in San Francisco and founded <a href="https://commonknowled.ge/">Common Knowledge</a>, where we make experimental interfaces for the next generation of documents and computers. </p>
		        </div>
				<div className="landing_page__subtitle">
					<p>Previously at <a href="https://hu.ma.ne/">Humane</a>, <a href="https://slack.com/">Slack</a>, <a href="https://www.donut.com/">Donut</a> and <a href="https://www.brown.edu/">Brown University</a>.</p>
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
