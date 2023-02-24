import * as types from "./checkout.types";

const initStat = {
    isLoading: false,
    isError: false,
    address: ""
}

export const checkoutReducer = (state = initStat, { type, payload }) => {
    switch (type) {
        case types.CHECKOUT_LOADING:
        return {

        }

        default:
            return state;
    }
}

