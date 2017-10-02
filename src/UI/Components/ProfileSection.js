import React from "react";
import PropTypes from "prop-types";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";

//assets
// import BrowEyesImage from "../../../assets/images/brown-eyes.jpg";

const ProfileSection = (props) => {
	return (
		<div className="columns profile-section">
			<div className="column profile-section-header">
				Profile section
			</div>
			<div className="column profile-section-iamge">
				<img src="http://www.mybligr.com/wp-content/uploads/2017/01/most-beautiful-tiger-animals-pics-images-photos-pictures-6.jpg"/>
			</div>
			<div className="column profile-section-main-title">
				Main Title
			</div>
			<div className="column profile-section-desc">
				Description
			</div>
			<div className="column profile-section-btns">
				<SecondaryButton text="Cancel"/>
				<MainButton text="See details"/>
			</div>
		</div>
	);
};

ProfileSection.propTypes = {

};

export default ProfileSection;