import React from "react";
import PropTypes from "prop-types";

//assets
// import BrowEyesImage from "../../../assets/images/brown-eyes.jpg";

const MainButton = (props) => {
	return (
		<div className={((!props.className ? "" : props.className) + " main-button").trim()}>
			<button>{props.text}</button>
		</div>
	);
};

MainButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
};

export default MainButton;
