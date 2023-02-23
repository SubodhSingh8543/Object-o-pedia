import { CART_ERROR, CART_LOADING, GET_CART_SUCCESS } from "./cart.types";

const initState = {
	isLoading: false,
	cart: [],
	isError: false
}

export const cartReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case CART_LOADING:
			return {
				...state, isLoading: true
			};
		case GET_CART_SUCCESS:
			return {
				...state, isLoading: false, cart: payload
			}
		case CART_ERROR:
			return {
				...state, isError: true, isLoading: false
			}
		default:
			return state;
	}
}