import React, { Fragment, Component } from 'react';
import ReactModal from 'react-modal';

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

	getStyle() {
		return this.state.showModal ? "card__modal_container show" : "card__modal_container";
	}
	// <div className={this.getStyle()} onClick={this.onClick}>
				// 	<div className="card__modal">
				// 		{this.props.modalContent}
				// 	</div>
				// </div>

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
				<ReactModal
					isOpen={this.state.showModal}
					className={"card__modal"}
					style={{
						overlay: {
							zIndex: 100,
							backgroundColor: `rgba(0,0,0, 0.5)`,
						},
					}}
					shouldCloseOnOverlayClick={true}
					onRequestClose={this.onClick}
				>
					{this.props.modalContent}
				</ReactModal>
			</Fragment>
		);
	}
}

export default Card;
