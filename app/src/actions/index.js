import axios from "axios";

// export const FETCH_ITEMS = "FETCH_ITEMS";
export const DATA_LOADING = "DATA_LOADING";
export const FETCH_CATEGORY_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
// action creator that is going to do some async stuff
export const fetchCategory = () => (dispatch) => {
	dispatch({ type: DATA_LOADING });
	axios
		.get("https://api.chucknorris.io/jokes/categories")
		.then((res) => {
			console.log(res.data);
			dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: res.data });
		})
		.catch((err) => dispatch({ type: FETCH_FAIL, payload: err }));
};

export const fetchJoke = (category) => (dispatch) => {
	dispatch({ type: DATA_LOADING });
	axios
		.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
		.then((res) => {
			console.log(res.data.value);
			dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data.value });
		})
		.catch((err) => dispatch({ type: FETCH_FAIL, payload: err }));
};
