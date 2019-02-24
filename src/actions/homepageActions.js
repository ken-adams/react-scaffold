import * as types from "./actionTypes";

const responseAppeared = value => ({ type: types.HOMEPAGE_RESPONSE_APPEARED, value });
const requestLoading = { type: types.HOMEPAGE_REQUEST_LOADING };

export const textChanged = e => ({ type: types.HOMEPAGE_TEXT_CHANGED, value: e.target.value });

export const postText = () => (dispatch, getState) => {
  let { homepage } = getState();
  dispatch(requestLoading);
  return fetch("https://httpbin.org/post", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: homepage.text })
  })
    .then(response => response.json())
    .then(json => dispatch(responseAppeared(json.json)))
    .catch(err => console.error("Error while doing post", err, err.stack));
};
