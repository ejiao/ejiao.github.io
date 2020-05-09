import React, { Component } from 'react';

import './about.css';

class About extends Component {

  render() {
    return (
		<div className="about_page">
			<div className="about_page__content">
				<div className="about_title">About Me</div>
	      		<div className="about_photo"></div>
	      		<div className="about_text">I grew up in New York and </div>
			</div>
		</div>
    );
  }
}

export default About;
