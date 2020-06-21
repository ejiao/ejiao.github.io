import React, { Component } from 'react';
import Card from'./Card'

import STEAMModal from './modals/STEAMModal';
import HackAtBrownModal from './modals/HackAtBrownModal';
import ThreeDTreesModal from './modals/ThreeDTreesModal';
import MissingCatModal from './modals/MissingCatModal';
import SainteChapelleModal from './modals/SainteChapelleModal';

import './card_grid.css';

class CardGrid extends Component {

  	render() {
	    return (
	    	<div className="card_grid_wrapper">
	    		<div className="card_grid__title">
	    			Some Stuff I've Worked On:
	    		</div>
			    <div className="card_grid">
		     		<Card
			      		title="STEAM Catalogue"
			      		subtitle="Winter 2019"
			      		description="A publication about STEM & the arts at Brown"
			      		backgroundImage="steam_zine.png"
			      		modalContent={<STEAMModal />}
			      	/>
			      	<Card
			      		title="Hack@Brown: Recess"
			      		subtitle="Winter 2019"
			      		description="An inclusive space where 500 students and mentors can learn and build together."
			      		backgroundImage="hackatbrown.gif"
			      		modalContent={<HackAtBrownModal />}
			      	/>
			      	<Card
			      		title="3D Trees"
			      		subtitle="Fall 2018"
			      		description="A C++/openGL program that generates realistic 3D trees from fractals."
			      		backgroundImage="trees.gif"
			      		modalContent={<ThreeDTreesModal />}
			      	/>
			      	<Card
			      		title="Sainte Chapelle"
			      		subtitle="Fall 2018"
			      		description="A 3D modeled reconstruction of the Sainte Chapelle Cathedral in Paris."
			      		backgroundImage="sainte-chapelle.gif"
			      		modalContent={<SainteChapelleModal />}
			      	/>
			      	<Card
			      		title="Missing Cat"
			      		subtitle="Fall 2017"
			      		description="A short 3D animated film about a girl who misses her cat."
			      		backgroundImage="missing_cat.gif"
			      		modalContent={<MissingCatModal />}
			      	/>
			      	<Card
			      		title="AFrame experiments"
			      		subtitle="Fall 2017"
			      		description="Quick VR experiments written in javascript and run in a browser."
			      		backgroundImage="aframe.gif"
			      	/>
			      	<Card
			      		title="Lantern Village"
			      		subtitle="Spring 2017"
			      		description="Interactive art installation with lights and sound."
			      		backgroundImage="lantern_village.gif"
			      	/>
			      	<Card
			      		title="Eddie's Sketch Blog"
			      		subtitle="2016"
			      		description="A blog of my sketches through the years."
			      		backgroundImage="sketchbook.jpg"
			      	/>
				</div>
			</div>
    	);
  	}
}

export default CardGrid;
