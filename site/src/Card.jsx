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
    const backgroundImage = `url(${this.props.backgroundImage})`;
    return (
      <div className="card">
        <div className="card__top">
          <div className="card__description" >
            <div className="card__description_text" >
              {this.props.description}
            </div>
          </div>
          <div
            className="card__cover_photo"
            style={{backgroundImage: backgroundImage}}
          >
          </div>
        </div>
        <div className="card__bottom">

          <div className="card__subtitle">
            {this.props.subtitle}
          </div>
          <div className="card__title">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
