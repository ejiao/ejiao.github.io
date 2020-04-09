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
    const backgroundImage = `url({this.props.backgroundImage})`;
    return (
      <div className="card">
        <div
          className="card__description"
        >
          {this.props.description}
        </div>
        <div
          className="card__cover_photo"
          style={{backgroundImage: backgroundImage}}
        >
        </div>
        <div className="card__subtitle">
          {this.props.subtitle}
        </div>
        <div className="card__title">
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Card;
