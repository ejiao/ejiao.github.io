import React, { Fragment, Component } from 'react';

import './card.css';



class Card extends Component {

	constructor(props) {
		super(props);

		this.state = { showModal: false };

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState(prevState => ({ showModal: !prevState.showModal }));
	}

	enableScroll() {
		const scrollY = document.body.style.top;
		document.body.style.position = '';
		document.body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1);
	}

	disableScroll() {
		document.body.style.position = 'fixed';
		document.body.style.top = `-${window.scrollY}px`;
	}

	getStyle() {
		return this.state.showModal ? "card__modal_container show" : "card__modal_container";
	}

	render() {
		// this.state.showModal ? this.disableScroll() : this.enableScroll();
		const backgroundImage = `url(${this.props.backgroundImage})`;
		return (
			<Fragment>
				<div className="card" onClick={this.onClick}>
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
				<div className={this.getStyle()} onClick={this.onClick}>
					<div className="card__modal">
						{this.props.modalContent}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Card;
