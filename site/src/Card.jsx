import React, { Component } from 'react';

import './card.css';

class Card extends Component {

  constructor(props) {
    super(props);

    this.onHover = this.onHover.bind(this);
  }

  onHover() {

  }

  render() {
    return (
      <div className="card">
        <div
          className="card__description"
        >
          A program that generates realistic 3D trees from fractals
        </div>
        <div
          className="card__cover_photo"
          style={{backgroundImage: 'url("img/mountain.png")'}}
        >
        </div>
        <div className="card__subtitle">
          Fall 2018
        </div>
        <div className="card__title">
          3D Trees
        </div>
      </div>
    );
  }
}

export default Card;
