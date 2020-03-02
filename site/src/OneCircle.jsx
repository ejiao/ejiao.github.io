import React, { Component } from 'react';

import './one_circle.css';

class OneCircle extends Component {

	constructor(props) {
		super(props);
		this.state = {x: 300, y: 300, palette: 0};
		this._onMouseMove = this._onMouseMove.bind(this);
		this._onClick = this._onClick.bind(this);
	}

	componentDidMount() {
		window.addEventListener("mousemove", this._onMouseMove);
	}

	componentWillUnmount() {
		window.removeEventListener("mousemove", this._onMouseMove);
	}

	_onMouseMove(e) {
    	this.setState({ x: e.screenX, y: e.screenY });
	}

	_onClick(e) {
		this.setState({palette: this.state.palette + 1})
	}

	getColor1(x, y) {
		const r = 50 + x/10;
		const g = 50 + y/10;
		const b = 50 + (x + y)/10;
		return `rgba(${r},${g},${b}, 1)`;
	}

	getColor2(x, y) {
		const r = 100 + x/5;
		const g = 50 + y/5;
		const b = 25 + ((x/10) + y)/10;
		return `rgba(${r},${g},${b}, 1)`;
	}

	getColor(x, y, palette) {
		const which_palette = palette % 2;
		switch (which_palette) {
			case 0:
				return this.getColor1(x,y);
				break;
			case 1:
				return this.getColor2(x,y);
				break;
			default:
				return this.getColor1(x,y);
		}
	}

  	render() {
  		const { x, y, palette } = this.state;

    	return (
   			<div class="one_circle" onClick={this._onClick} style={{ backgroundColor: this.getColor(x,y,palette)}} />
		);
  	}
}

export default OneCircle;
