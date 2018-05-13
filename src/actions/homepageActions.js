import * as types from "./actionTypes";

export function dummyAction(value) {
  return { type: types.DUMMY_ACTION, value };
}

export function setText(value) {
  return { type: types.SET_TEXT, value };
}

export function saveResponse(value) {
  return { type: types.SAVE_RESPONSE, value };
}

export function postText(value) {
  return dispatch => {
    const data = { value };
    return fetch("https://httpbin.org/post", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(saveResponse(JSON.parse(json.data)));
      })
      .catch(err => console.error("Error while doing post", err, err.stack));
  };
}

export function get() {
  return dispatch => {
    return fetchData()
      .then(response => {
        console.log("URL from Response:", response.url);
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  };
}

async function fetchData() {
  const data = await fetch("https://httpbin.org/get", {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await data.json();
  return json;
}
