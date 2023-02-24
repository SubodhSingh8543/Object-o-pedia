import { deleteCartApi, getCartApi, updateCartApi } from "./cart.api"
import * as types from "./cart.types"

const cartLoading = () => {
	return { type: types.CART_LOADING }
}

const cartError = () => {
	return { type: types.CART_ERROR }
}

const getCartSuccess = (payload) => {
	return { type: types.GET_CART_SUCCESS, payload }
}

const getCart = () => async (dispatch) => {
	dispatch(cartLoading())
	try {
		let res = await getCartApi();
		dispatch(getCartSuccess(res))
	} catch (e) {
		dispatch(cartError())
	}
}

const deleteCart = (newCart) => async (dispatch) => {
	dispatch(cartLoading())
	try {
		let res = await deleteCartApi(newCart);
		dispatch(getCartSuccess(res))
	} catch (e) {
		dispatch(cartError())
	}
}

const updateCart = (newCart) => async (dispatch) => {
	dispatch(cartLoading())
	try {
		let res = await updateCartApi(newCart);
		dispatch(getCartSuccess(res))
	} catch (e) {
		dispatch(cartError())
	}
}

export { getCart, deleteCart, updateCart }

