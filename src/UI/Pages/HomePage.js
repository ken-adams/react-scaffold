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
                <label htmlFor="text">Plese enter text</label>
                <input type="text" name="text" onChange={(e) => this.props.actions.homepageActions.setText(e.target.value)}/>
                <button onClick={() => this.props.actions.homepageActions.postText(this.props.homepage.text)}>Post</button>
                <button onClick={this.props.actions.homepageActions.get}>Get</button>
				<br />
                <div>{this.props.homepage.response["value"]}</div>
                <div>
                    <label htmlFor="selectTest">Label</label>
                    <select name="selectTest" onChange={(e) => {
                        console.log("value", e.target.value)
                    }}>
                        <option value={0}>Please choose</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                    </div>
                <ProfileSection dummyFun={(valueFromChild) => {console.log("Value from child is: ", valueFromChild);}}/>
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
		actions: {
            homepageActions: bindActionCreators(homepageActions, dispatch)
        }
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);