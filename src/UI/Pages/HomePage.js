import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as homepageActions from "../../actions/homepageActions";

const HomePage = props => {
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <label htmlFor="text">Enter text:</label>
      <input type="text" name="text" onChange={e => props.textChanged(e.target.value)} />
      <button onClick={props.postText}>Post request</button>
      <br />
      <div>{props.loading || props.response["data"]}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(homepageActions, dispatch);

export default connect(({ homepage }) => homepage, mapDispatchToProps)(HomePage);
