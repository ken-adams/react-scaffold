import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homepageReducer(state = initialState.homepage, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case types.HOMEPAGE_TEXT_CHANGED:
      newState.text = action.value;
      return newState;
    case types.HOMEPAGE_RESPONSE_APPEARED:
      newState.response = Object.assign({}, action.value);
      newState.loading = "";
      return newState;
    case types.HOMEPAGE_REQUEST_LOADING:
      newState.loading = "Response is loading...";
      return newState;
    default:
      return newState;
  }
}
