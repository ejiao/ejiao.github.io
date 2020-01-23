import React, { Component } from 'react';

import './card.css';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <div
          className="card__cover_photo"
          style={{backgroundImage: 'url("img/mountain.png")'}}
        >
        </div>
        <div className="card__subtitle">
          Fall 2018
        </div>
        <div className="card__title">
          Digital Arboretum
        </div>
      </div>
    );
  }
}

export default Card;
