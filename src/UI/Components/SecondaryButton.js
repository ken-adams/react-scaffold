import React from "react";
import PropTypes from "prop-types";

//assets
// import BrowEyesImage from "../../../assets/images/brown-eyes.jpg";

const SecondaryButton = (props) => {
	return (
		<div className={((!props.className ? "" : props.className) + " secondary-button").trim()}>
			<button>{props.text}</button>
		</div>
	);
};

SecondaryButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
};

export default SecondaryButton;
