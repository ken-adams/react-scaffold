import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homepageReducer(state = initialState.homepage, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case types.DUMMY_ACTION :
            newState.dummyValue = action.value;
            return newState;
        case types.SET_TEXT :
            newState.text = action.value;
            return newState;
        case types.SAVE_RESPONSE :
            newState.response = Object.assign({}, action.value);
            return newState;
        default :
            return newState;
    }
}