import * as types from "./actionTypes";

export function dummyAction(value) {
    return {type: types.DUMMY_ACTION, value};
}

export function setText(value) {
    return {type: types.SET_TEXT, value};
}

export function saveResponse(value) {
    return {type: types.SAVE_RESPONSE, value};
}

export function postText(value) {
    return dispatch => {
        const data = {value};
        // console.log("payload:", data);
        return fetch("https://httpbin.org/post", 
            {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            }).then(response => {
                return response.json();
            }).then(json => {
                dispatch(saveResponse(JSON.parse(json.data)));
            }).catch(err => console.error("Error while doing post", err, err.stack));
    };
}