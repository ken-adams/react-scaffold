import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as homepageActions from "../../actions/homepageActions";

import ProfileSection from "../Components/ProfileSection";
import MainButton from "../Components/MainButton";
import SecondaryButton from "../Components/SecondaryButton";

class HomePage extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

    render() {
        return (
            <div className="homepage">
                <h1>Home Page</h1>
                <p>This is homepage</p>
				<br />
                <ProfileSection />
                {/*<SecondaryButton text="Cancel"/>*/}
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
	return {
		homepage: state.homepage
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(homepageActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);