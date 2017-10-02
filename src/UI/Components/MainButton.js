import React from "react";
import PropTypes from "prop-types";

//assets
// import BrowEyesImage from "../../../assets/images/brown-eyes.jpg";

const MainButton = (props) => {
	return (
		<div className="main-button">
			<button>{props.text}</button>
		</div>
	);
};

MainButton.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string
};

export default MainButton;
