import React, { Component } from 'react';
import Card from'./Card.jsx'

import './card_grid.css';

class CardGrid extends Component {

  render() {
    return (
    	<div className="card_grid_wrapper">
	      <div className="card_grid">
	      	<Card />
	      	<Card />
	      	<Card />
	      	<Card />
				</div>
			</div>
    );
  }
}

export default CardGrid;
