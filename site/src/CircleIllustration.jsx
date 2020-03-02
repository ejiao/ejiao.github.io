import React, { Fragment, Component } from 'react';

import './circle_illustration.css';

class CircleIllustration extends Component {

	renderCircleRow() {
		return (
			<Fragment>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
				<span class="dot"></span>
			</Fragment>
		);
	}

  	render() {
    	return (
   			<div class="circle_illustration">
   				<div class="circle_row circle_row_1"> {this.renderCircleRow()} </div>
   				<div class="circle_row circle_row_2"> {this.renderCircleRow()} </div>
   				<div class="circle_row circle_row_3"> {this.renderCircleRow()} </div>
   				<div class="circle_row circle_row_4"> {this.renderCircleRow()} </div>
   				<div class="circle_row circle_row_5"> {this.renderCircleRow()} </div>
   			</div>
		);
  	}
}

export default CircleIllustration;
