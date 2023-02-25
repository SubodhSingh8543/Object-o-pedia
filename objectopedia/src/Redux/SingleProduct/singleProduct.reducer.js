import * as types from "./singleProduct.actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    singleProductData: []
}

const reducer = (state=initialState, action) => {
    const {type,payload} = action;

    switch(type) {
        case types.SINGLE_PRODUCT_REQUEST : {
            return {...state , isLoading: true };
        }
        case types.SINGLE_PRODUCT_SUCCESS : {
            return {...state, isLoading: false ,singleProductData:payload};
        }
        case types.SINGLE_PRODUCT_ERROR : {
            return {...state, isLoading: false, isError: true };
        }
        case types.ADD_TO_CART_ITEMS_SUCCESS : {
            return {...state, isLoading: false,  }
        }
        default : {
            return state;
        }
    }
}

export {reducer};