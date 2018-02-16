import React from "react";
import PropTypes from "prop-types";

//assets
// import BrowEyesImage from "../../../assets/images/brown-eyes.jpg";

const SecondaryButton = (props) => {
	return (
		<div className={((!props.className ? "" : props.className) + " secondary-button").trim()}>
			<button onClick={props.onClick}>{props.text}</button>
		</div>
	);
};

SecondaryButton.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	text: PropTypes.string
};

export default SecondaryButton;
