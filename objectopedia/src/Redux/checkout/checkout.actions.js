import { addAddressApi, getAddressApi, updateAddressApi } from "./checkout.api";
import * as types from "./checkout.types";

const addressLoading = () => {
	return {
		type: types.CHECKOUT_LOADING
	}
}

const addressError = () => {
	return {
		type: types.CHECKOUT_ERROR
	}
}

const getAddressSuccess = (payload) => {
	return {
		type: types.GET_CHECKOUT_SUCCESS, payload
	}
}

const addAddressSuccess = (payload) => {
	return {
		type: types.ADD_CHECKOUT_SUCCESS, payload
	}
}

const updateAddressSuccess = (payload) => {
	return {
		type: types.UPDATE_CHECKOUT_SUCCESS, payload
	}
}

export const getAddress = (id) => async (dispatch) => {
	dispatch(addressLoading)
	try {
		let res = await getAddressApi(id);
		dispatch(getAddressSuccess(res))
	} catch (e) {
		dispatch(addressError)
	}
}

export const addAddress = (newAddress, id) => async (dispatch) => {
	dispatch(addressLoading)
	try {
		let res = await addAddressApi(newAddress, id);
		dispatch(addAddressSuccess(res))
	} catch (e) {
		dispatch(addressError)
	}
}

export const updateAddress = (newAddress, id) => async (dispatch) => {
	dispatch(addressLoading)
	try {
		let res = await updateAddressApi(newAddress, id);
		dispatch(updateAddressSuccess(res))
	} catch (e) {
		dispatch(addressError)
	}
}

