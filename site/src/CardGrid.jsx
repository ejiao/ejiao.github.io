import React, { Component } from 'react';
import Card from'./Card.jsx'

import './card_grid.css';

class CardGrid extends Component {

  render() {
    return (
    	<div className="card_grid_wrapper">
	      <div className="card_grid">
	     		<Card
	      		title="STEAM zine"
	      		subtitle="Winter 2019"
	      		description="A publication about STEM & the arts at Brown"
	      	/>
	      	<Card
	      		title="Hack@Brown: Recess"
	      		subtitle="Winter 2019"
	      		description="An inclusive space where students and mentors can learn and build together."
	      	/>
	      	<Card
	      		title="3D Trees"
	      		subtitle="Winter 2019"
	      		description="A program that generates realistic 3D trees from fractals."
	      	/>
	      	<Card
	      		title="Missing Cat"
	      		subtitle="Fall 2017"
	      		description="A short 3D animated film about a girl who misses her cat."
	      	/>
	      	<Card
	      		title="AFrame experiments"
	      		subtitle="Fall 2017"
	      		description="Quick VR experiments written in javascript and run in a browser."
	      	/>
				</div>
			</div>
    );
  }
}

export default CardGrid;
