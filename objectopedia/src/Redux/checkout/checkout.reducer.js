import * as types from "./checkout.types";

const initStat = {
	isLoading: false,
	isError: false,
	address: {}
}

export const checkoutReducer = (state = initStat, { type, payload }) => {
	switch (type) {
		case types.CHECKOUT_LOADING:
			return {
				...state, isLoading: true
			}
		case types.GET_CHECKOUT_SUCCESS:
			return {
				...state, isLoading: false, address: payload
			}
		case types.CHECKOUT_ERROR:
			return {
				...state, isLoading: false, isError: true
			}
		case types.UPDATE_CHECKOUT_SUCCESS:
			return {
				...state, address: payload
			}
		case types.ADD_CHECKOUT_SUCCESS:
			return {
				...state, address: payload
			}
		default:
			return state;
	}
}

