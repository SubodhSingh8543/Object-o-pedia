import { CART_ERROR, CART_LOADING, DELETE_CART_SUCCESS, GET_CART_SUCCESS, UPDATE_CART_SUCCESS } from "./cart.types";

const initState = {
	isLoading: false,
	cart: [],
	isError: false,
	totalCart: 0
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
		case DELETE_CART_SUCCESS:
			return {
				...state, cart: state.cart.filter(ele => {
					return ele.id !== payload.id
				})
			}
		case UPDATE_CART_SUCCESS:
			return {
				...state, cart: payload
			}
		default:
			return state;
	}
}