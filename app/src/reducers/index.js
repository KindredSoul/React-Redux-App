import {
	DATA_LOADING,
	FETCH_CATEGORY_SUCCESS,
	FETCH_JOKE_SUCCESS,
	FETCH_FAIL,
} from "../actions";

export const initialState = {
	categories: [],
	joke:
		"When Chuck Norris was young, his friends played dodge ball. Chuck always enjoyed a good game of dodge crowbars",
	isLoading: false,
	error: "Error loading",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DATA_LOADING:
			return {
				...state,
				isLoading: true,
				error: "",
			};
		case FETCH_CATEGORY_SUCCESS:
			return {
				...state,
				categories: action.payload,
				isLoading: false,
				error: "",
			};
		case FETCH_JOKE_SUCCESS:
			return {
				...state,
				joke: action.payload,
				isLoading: false,
				error: "",
			};
		case FETCH_FAIL:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
