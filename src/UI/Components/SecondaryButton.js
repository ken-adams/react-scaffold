import React from "react";
import PropTypes from "prop-types";

//assets
// import BrowEyesImage from "../../../assets/images/brown-eyes.jpg";

const SecondaryButton = (props) => {
	return (
		<div className="secondary-button">
			<button>{props.text}</button>
		</div>
	);
};

SecondaryButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
};

export default SecondaryButton;
