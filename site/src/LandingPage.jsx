import React, { Component } from 'react';

import './landing_page.css';

class LandingPage extends Component {

	renderText() {
		return (
			<div className="landing_page__text">
        <div className="landing_page__title">
        	This is Eddie Jiao’s personal website.
        </div>
        <div className="landing_page__subtitle">
        	<p>
        		Eddie Jiao is a developer/designer. Eddie graduated from Brown in 2019 and is currently at Slack in San Francisco.
        	</p>
				</div>
			</div>
		);
	}

	renderNav() {
		return(
			<div className="nav">
				<a href='#'>WORK</a>
				<a href='#'>BLOG</a>
				<a href='#'>ABOUT</a>
			</div>
		);
	}

  render() {
    return (
      <div className="landing_page">
      	{this.renderNav()}
      	{this.renderText()}
			</div>
    );
  }
}

export default LandingPage;
