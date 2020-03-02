import React, { Component } from 'react';

import './landing_page.css';
import OneCircle from './OneCircle.jsx';

class LandingPage extends Component {

	renderText() {
		return (
			<div className="landing_page__text">
        <div className="landing_page__title">
        	<p> Welcome to Eddie’s funky&nbsp;internet&nbsp;site. </p>
        	<p> Eddie Jiao is a product&#8209;focused engineer.
He graduated from <a href="https://www.brown.edu/">Brown</a> and is currently at <a href="https://slack.com/">Slack</a> in San&nbsp;Francisco, California.  </p>
        </div>
			</div>
		);
	}

	renderNav() {
		return(
			<div className="nav">
				<a href='#'>01.WORK</a>
				<a href='#'>02.BLOG</a>
				<a href='#'>03.ABOUT</a>
				<a href='#'>04.LABYRINTH</a>
			</div>
		);
	}

  render() {
    return (
      <div className="landing_page">
      	<div className="landing_page__content">
      		{this.renderNav()}
      		<OneCircle />
        	{this.renderText()}
      	</div>
			</div>
    );
  }
}

export default LandingPage;
