import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import '../../styles/UIElements.css';

class App extends React.Component {

    render() {
        return (

            <div className="container-fluid">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    coursesCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps)(App);