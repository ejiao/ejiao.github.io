import React, { Component } from 'react';

import './landing_page.css';
import OneCircle from './OneCircle.jsx';

class LandingPage extends Component {

	renderText() {
		return (
			<div className="landing_page__text">
        <div className="landing_page__title">
        	<p> I’m Eddie Jiao and welcome to my fun slice of the internet. </p>
        	<p> I live in San Francisco and build software for a living. I’m currently working at Slack. </p>
        </div>
			</div>
		);
	}

	renderNav() {
		return(
			<div className="nav">
				<a className="nav_01" href='#'>01.WORK</a>
				<a className="nav_02" href='#'>02.BLOG</a>
				<a className="nav_03" href='#'>03.ABOUT</a>
				<a className="nav_04" href='#'>04.LABYRINTH</a>
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
