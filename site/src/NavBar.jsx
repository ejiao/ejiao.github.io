import React, { Component } from 'react';

import {
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './nav_bar.css';

class NavBar extends Component {

	render() {
		return(
			<div className="nav">
				<a className="nav_01" href='#'>01.WORK</a>
				<a className="nav_02" href='#'>02.BLOG</a>
				<Link className="nav_03"  to="/about">03.ABOUT</Link>
				<a className="nav_04" href='#'>04.LABYRINTH</a>
			</div>
		);
	}
}

export default NavBar;
